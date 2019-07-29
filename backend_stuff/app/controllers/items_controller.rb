class ItemsController < ApplicationController
    

    def show
        item = Item.find(params[:id])
        render json: item
    end

    def create
        item = Item.create(item_params)
        render json: order
    end


    def index
        items = Item.all
        render json: items
    end

    def update
        # Locates current item
        # Save params in the database -> Update the User info
        item = Item.find(params[:id])
        item.update(item_params)
    end

    def item_params
        params.permit(
            :name,
            :price,
            :description,
            :image_url,
            :item_id
            )
    end
end
