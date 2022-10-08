class Api::ItemsController < ApplicationController


    def index
        items = Item.all 
        render json: items

    end

    def create 
        item = Item.create(item_params)
        render json: item
    end

    private

    def item_params
        params.permit(:name, :type, :insructions, :number)
    end
end
