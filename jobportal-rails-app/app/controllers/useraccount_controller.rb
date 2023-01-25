require 'bcrypt'
class UseraccountController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index 
        current_user = Useraccount.find_by_id(session[:current_user_id])
        render json: current_user
    end 
    def create
        v = !params[:email].empty? and !params[:password].empty?

        if (v)
          p=Useraccount.create(
            'email': params[:email],
            'password': params[:password],
            'usertype': params[:usertype]
            )
          puts p
          render json: "Data Added"
        else
        render json: "Data not added"
        end
    end
    def show 
        v = Useraccount.find(params[:id])
        render json: v
    end
end
