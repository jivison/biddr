class AuctionsController < ApplicationController

    before_action :find_auction, only: [:show, :update, :destroy]
    before_action :authenticate!, only: [:create, :update, :destroy]

    def create
        auction = Auction.new auction_params
        auction.user = current_user
        if auction.save
            render json: {
                auction: auction,
                status: 201
            }, status: 201
        else
            render json: {
                errors: auction.errors.full_messages,
                status: 422
            }, status: 422
        end
    end

    def show
        render json: {
            auction: @auction,
            status: 200
        }, status: 200
    end

    def update
        if @auction.update auction_params
            render json: {
                auction: @auction,
                status: 200
            }, status: 200
        else
            render json: {
                errors: @auction.errors.full_messages,
                status: 422
            }, status: 422
        end
    end

    def destroy
        @auction.destroy
        render json: {
            status: 200
        }, status: 200
    end

    private
    def auction_params
        params.permit(:title, :description, :end_date, :reserve_price)
    end

    def find_auction
        @auction = Auction.find(params[:id])
    end

end
