class SkillsrepoController < ApplicationController

    skip_before_action :verify_authenticity_token
    def index
        current_user = Useraccount.find_by_id(session[:current_user_id])
        if(current_user.nil?)
            render json: "Not valid user"
        else
            render json: Skillsrepo.all
        end
        #render json: Jobdetails.all
    end
    def create
        v = !params[:skillName].nil?

        if (v)
          p=Skillsrepo.create('skillName': params[:skillName] )
        #   puts "resultcreateacc=#{p}"
          render json: "Skill Added"
        else
        render json: "skill not added"
        end
    end
    def show 
        v = Skillsrepo.find(params[:id])
        render json: v
    end
end
