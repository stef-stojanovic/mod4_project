class OrdersController < ApplicationController
    # skip_before_action :define_current_user, only: [:index, :show]

    def show
        order = Order.find(params[:id])
        ordered_items = order.items
        render json: { order: order, ordered_items: ordered_items }
    end

    def create
        order = Order.new(order_params)
        order.user = self.current_user 
        order.save
        params[:ordered_items].each do | item |
            OrderItem.create(item_id: item[:id], order_id: order.id)
        end
        
        render json: order
    end

    def index
        orders = self.current_user.orders
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
        :user_id,
        :order_total,
        )
    end


end
