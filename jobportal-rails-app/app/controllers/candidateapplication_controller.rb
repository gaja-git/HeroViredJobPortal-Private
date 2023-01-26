class CandidateapplicationController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        current_user = Useracc.find_by_id(session[:current_user_id])
        if(current_user.nil?)
            render json: "Not valid user"
        else
            render json: Candidateapplication.all
        end
        #render json: Candidateapplication.all
    end

    def create
        current_user = Useraccount.find_by_id(session[:current_user_id])
        if(current_user.nil?)
            render json: "Not valid user"
        else
             
            v = !params[:jobid].nil? and !params[:userid].nil?  and !params[:applieddate].nil?
            if(v)
                   
                p = Candidateapplication.create('jobid': params[:jobid], 'userid': params[:userid], 'jobcode': params[:jobcode],
                    'applieddate': params[:applieddate], 'candidateapplicationstatus': params[:candidateapplicationstatus], 
                    'location': params[:location], 'posteddate': params[:posteddate])
                puts p
                render json: "Candidateapplication Added"
            else
                render json: "Candidateapplication not added" 
            end   
        end 
    end
   
end
