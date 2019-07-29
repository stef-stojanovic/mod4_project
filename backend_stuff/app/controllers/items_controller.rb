class ItemsController < ApplicationController
   skip_before_action :define_current_user, only: [:index, :show]

    
    def create
        item = Item.create(item_params)
        render json: order
    end
    
    def index
        items = Item.all
        render json: items
    end

    def show
        item = Item.find(params[:id])
        render json: item
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
        :image_url
        )
    end
 
end
