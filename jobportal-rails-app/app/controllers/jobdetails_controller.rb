class JobdetailsController < ApplicationController

    skip_before_action :verify_authenticity_token
    def index
        # current_user = Useracc.find_by_id(session[:current_user_id])
        # if(current_user.nil?)
        #     render json: "Not valid user"
        # else
        #     render json: Jobdetails.all
        # end
        render json: Jobdetails.all
    end

    def create
        current_user = Useraccount.find_by_id(session[:current_user_id])
        if(current_user.nil?)
            render json: "Not valid user"
        else
            v = !params[:bookname].nil? and !params[:bookauthor].nil?  and !params[:bookquantity].nil?
            if(v)
                p = Jobdetails.create()
                puts p
                render json: "Book Added"
            else
                render json: "Book not added" 
            end   
        end 
    end
end
