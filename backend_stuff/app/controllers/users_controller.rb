class UserController < ApplicationController

    def index
        users = User.all
        render json: users
    end

    def create
        
        user = User.create(user_params)
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

   
    private def user_params
        params.require(:user).permit(:username, :password, :password_confirmation)
    end 

end
