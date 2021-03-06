class OrderItemsController < ApplicationController

    def show
        order = Order.find(params[:id])
        render json: order
    end

    def create
        order_item = Order_item.new(order_item_params)
        order_item.order = self.id
        order_item.item = self.id
        order_item.save
        render json: order
    end


    def index
        order_items = Order_item.all
        render json: order_items
    end

    def update
        # Locates current order_item
        # Save params in the database -> Update the User info
        order_item = Order_item.find(params[:id])
        order_item.update(order_item_params)
    end

    def order_item_params
        params.permit(
        :order_id,
        :item_id
        )
    end
end
