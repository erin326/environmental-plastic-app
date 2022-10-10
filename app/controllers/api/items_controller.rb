class Api::ItemsController < ApplicationController


    def index
        items = Item.all 
        render json: items

    end

    def create 
        user = User.find_by(id: session[:user_id])
        item = Item.create(item_params)
        user.items << item
        render json: item
    end

    private

    def item_params
        params.permit(:name, :item_type, :insructions, :number)
    end
end
