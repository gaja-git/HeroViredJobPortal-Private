class EligiblejobsController < ApplicationController

    skip_before_action :verify_authenticity_token
    def index
        current_user = Useraccount.find_by_id(session[:current_user_id])
        if(current_user.nil?)
            render json: "Not valid user"
        else
            
            puts "current_user_email#{current_user.email}"
            cur_user = Profile.find_by('email': current_user.email)
            puts "profile_user#{cur_user}"
            puts "skills#{cur_user.skills}"
          
             sk = cur_user.skills
            puts "sk #{sk}"
            sk_str = sk.split(",")
            puts "sk_str#{sk_str}"
            
            eljobs = Jobdetails.where('skillsrequired ~* ?', sk_str.join('|'))
            
            puts "eljobs#{eljobs}"
            puts "eljobs.count#{eljobs.count}"
            
            render json: eljobs.all
            
        end
        #render json: Jobdetails.all
    end

    # def create
    #     current_user = Useraccount.find_by_id(session[:current_user_id])
    #     if(current_user.nil?)
    #         render json: "Not valid user"
    #     else
    #         v = !params[:jobtitle].nil? and !params[:jobcode].nil?  and !params[:jobdescription].nil?
    #         if(v)
    #             p = Jobdetails.create('jobtitle': params[:jobtitle], 'jobdescription': params[:jobdescription], 'companyname': params[:companyname],
    #                 'location': params[:location], 'jobtype': params[:jobtype], 'salary': params[:salary],
    #                 'posteddate': params[:posteddate], 'domain': params[:domain], 'jobcode': params[:jobcode],
    #                 'skillsrequired': params[:skillsrequired], 'applicationstatus': params[:applicationstatus])
    #             puts p
    #             render json: "Job Added"
    #         else
    #             render json: "Job not added" 
    #         end   
    #     end 
    # end
end

