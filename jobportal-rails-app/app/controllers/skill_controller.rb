class SkillController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        current_user = Useraccount.find_by_id(session[:current_user_id])
        if(current_user.nil?)
            render json: "Not valid user"
        else
            render json: Skill.all
        end
        #render json: Jobdetails.all
    end
    def create
        v = !params[:skillName].nil?

        if (v)
          p=Skill.create('skillName': params[:skillName] )
        #   puts "resultcreateacc=#{p}"
          render json: "Skill Added"
        else
        render json: "skill not added"
        end
    end
    def show 
        v = Skill.find(params[:id])
        render json: v
    end
end
