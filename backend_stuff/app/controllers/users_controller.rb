class UsersController < ApplicationController

    def index
        users = User.all
        render json: users
    end

    def create
        
        user = User.create(user_params)
        # byebug
        render json: user

    end

    def show
        user = User.find(params[:id])
        render json: user
    end

    def update
        # Find the user
        # Save params in the database -> Update the user we find
        user = User.find(params[:id])
        user.update(user_params)
    end

    def new
    end

    def authenticate
        user = user.find_by(username: params[:username])
        if user != nil && user.authenticate(params[:password])
            render json: user, method: [ :auth_token ]
        else
            render json: { error: true, message: 'Login failed' }
        end 
    end

   
    private def user_params
        params.permit(:username, :password)
    end 

end