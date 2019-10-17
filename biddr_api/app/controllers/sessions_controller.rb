class SessionsController < ApplicationController

    def create
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: 200
        else
            render json: {
                status: 401
            }, status: 401
        end
    end

    def destroy
        session[:user_id] = nil
        render json: {
            status: 200            
        }, status: 200
    end

end
