class LogoutController < ApplicationController
    session.delete(:current_user_id)
        render json: "Candidate Logged Out Successfully!! Bye!"
end
