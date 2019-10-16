class ApplicationController < ActionController::API

    def current_user
        User.find_by id: session[:user_id]
    end

    def authenticate!
        render json: {
            status: 403,
            message: "Please sign in"
        }, status: 403 unless current_user
    end

end
