class OrdersController < ApplicationController
    # skip_before_action :define_current_user, only: [:index, :show]

    def show
        order = Order.find(params[:id])
        render json: order
    end

    def create
        order = Order.create(order_params)
        render json: order
    end

    def index
        orders = Order.all
        render json: orders
    end

    def update
        # Locates current order
        # Save params in the database -> Update the User info
        order = Order.find(params[:id])
        order.update(order_params)
    end

    def order_params
        params.permit(
        :user_id
        )
    end


end
