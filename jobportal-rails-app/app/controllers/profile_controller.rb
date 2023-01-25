require 'bcrypt'
class ProfileController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index 
        reg_user = Useraccount.find_by_id(session[:current_user_id])
        if !reg_user.nil? 
            render json: Useraccount.all 
        else
           render json: "Not authorised to view all Profiles!" 
        end
    end
    def show 
        reg_user = Useraccount.find_by_id(session[:current_user_id])
        if !reg_user.nil? 
            v = Useraccount.find(params[:id]) 
            render json: v
        else
            render json: "Not authorised to see candidates info!" 
        end
    end 
    def create 
        reg_user = Useraccount.find_by_id(session[:current_user_id])
        if !reg_user.nil? 

            v = !params[:firstname].empty? and !params[:email].empty? and !params[:contact].nil? and !params[:address].nil? and 
            !params[:profilepic].nil? and !params[:skills].nil? and !params[:resumelink].nil? and !params[:preferredlocation].nil?

            if (v)
            p=Useraccount.create(
                'firstname': params[:firstname],
                'lastname': params[:lastname],
                'email': params[:email],
                'contact': params[:contact],
                'address': params[:address],
                'about': params[:about],
                'profilepic': params[:profilepic],
                'currentcompany': params[:currentcompany],
                'ctc': params[:ctc],
                'experience': params[:experience],
                'currentrole': params[:currentrole],
                'skills': params[:skills],
                'resumelink': params[:resumelink],
                'expectedsalary': params[:expectedsalary],
                'preferredlocation': params[:preferredlocation]

            )
            puts p
            render json: "Candidate Profile created!" 
            end
        else
            render json: "Not authorised to create new profile!" 
        end
    end
    def update 
        reg_user = Useraccount.find_by_id(session[:current_user_id])
        if !reg_user.nil? 
            p = Useraccount.find(
                'firstname': params[:firstname],
                'lastname': params[:lastname],
                'email': params[:email],
                'contact': params[:contact],
                'address': params[:address],
                'about': params[:about],
                'profilepic': params[:profilepic],
                'currentcompany': params[:currentcompany],
                'ctc': params[:ctc],
                'experience': params[:experience],
                'currentrole': params[:currentrole],
                'skills': params[:skills],
                'resumelink': params[:resumelink],
                'expectedsalary': params[:expectedsalary],
                'preferredlocation': params[:preferredlocation]

            )
            render json: "Profile info Updated" 
        else 
            render json: "Not authorised to update the profile info!"
        end
    end
    def destroy 
        reg_user = Useraccount.find_by_id(session[:current_user_id])
        if !reg_user.nil? 
            p = Useraccount.find(params[:id])
            p.destroy
            render json: "Profile info Deleted" 
        else 
            render json: "Not authorised to delete the profiles!"
        end
    end
end
