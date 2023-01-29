class MyapplicationsController < ApplicationController

    def index
        current_user = Useraccount.find_by_id(session[:current_user_id])
        if(current_user.nil?)
            render json: "Not valid user"
        else
            puts "current_user#{current_user}"
            myapplication = Jobdetails.joins(" INNER JOIN CandidateApplications ON Candidateapplications.jobcode = Jobdetails.jobcode WHERE Candidateapplications.userid = #{current_user.id}").select("Jobdetails.jobcode,Jobdetails.jobtitle,Jobdetails.location,Jobdetails.posteddate, CandidateApplications.candidateapplicationstatus,CandidateApplications.applieddate")
        
            puts "myapplication#{myapplication}"
            render json: myapplication.all
            
        end
        #render json: Jobdetails.all
    end
end
