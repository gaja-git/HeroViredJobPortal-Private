require 'bcrypt'
class LoginController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index 
        current_user = Useraccount.find_by_id(session[:current_user_id])
        render json: current_user
    end
    def create 
        uval = Useraccount.find_by('email': params[:email])
        if uval.nil? 
            render json: "User account does not exit"
        else 
            if (uval.authenticate(params[:password]))
                session[:current_user_id] = uval.id

                render json: "Login successfull!!"
            else
                render json: "Wrong password!"
            end

        end

    end
    def destroy 
        session.delete(:current_user_id)
        render json: "Logged out successfully! Bye!"
    end
end
