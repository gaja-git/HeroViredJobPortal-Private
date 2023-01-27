class AppliedjobsController < ApplicationController

    skip_before_action :verify_authenticity_token
    def index
        current_user = Useraccount.find_by_id(session[:current_user_id])
        if(current_user.nil?)
            render json: "Not valid user"
        else
            puts "current_user#{current_user}"
            appliedjobs = Jobdetails.joins("INNER JOIN Candidateapplications ON Candidateapplications.jobcode = Jobdetails.jobcode WHERE Candidateapplications.userid = #{current_user.id}")
            puts "appliedjobs#{appliedjobs}"
            render json: appliedjobs.all
            
        end
        #render json: Jobdetails.all
    end
end
