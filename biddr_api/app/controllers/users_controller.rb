class UsersController < ApplicationController
     
    def create
        user = User.new params.permit(:first_name, :last_name, :email, :password, :password_confirmation)
        if user.save
            session[:user_id] = user.id
            render json: {
                user: user,
                status: 200
            }, status: 200
        else
            render json: {
                errors: user.errors.full_messages,
                status: 422
            }, status: 422
        end
    end

    def current
        render json: {
            user: User.find_by(id: session[:user_id])
        }, status: 200
    end
end
