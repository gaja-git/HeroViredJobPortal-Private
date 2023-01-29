require 'bcrypt'
class UseraccountController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index 
        current_user = Useraccount.find_by_id(session[:current_user_id])
        render json: current_user
    end 

    def create
        v = !params[:email].nil? and !params[:password].nil?

        if (v)
            chkemail=Useraccount.find_by('email':params[:email])
            puts chkemail
            if(chkemail.nil?)
                p=Useraccount.create('email': params[:email], 'password': params[:password], 'usertype': params[:usertype] )
                  puts "resultcreateacc=#{p}"
                render json: "User Added"
            else
                render json: "User email already exit"
            end
        else
        render json: "User not added"
        end
    end
    def show 
        v = Useraccount.find(params[:id])
        render json: v
    end

    def destroy
        p = Useraccount.find(params[:id])
        p.destroy
        render json: "User deleted"
    end
end
