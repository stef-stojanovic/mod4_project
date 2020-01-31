class WelcomeController < ApplicationController
    skip_before_action :define_current_user, only: [:index]
    def index
        render json: {hello: "Hello World!"}
    end
end
