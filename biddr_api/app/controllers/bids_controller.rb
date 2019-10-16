class BidsController < ApplicationController

    before_action :find_bid, only: [:show, :update, :destroy]
    before_action :authenticate!, only: [:create, :update, :destroy]

    def create
        bid = Bid.new bid_params.merge({
            auction: Auction.find(params[:auction_id]),
            user: current_user
        })
        if bid.save
            render json: {
                bid: bid,
                status: 201
            }, status: 201
        else
            render json: {
                errors: bid.errors.full_messages,
                status: 422
            }, status: 422
        end
    end

    def show
        render json: {
            bid: @bid,
            status: 200
        }, status: 200
    end
    
    def update
        if @bid.update bid_params
            render json: {
                bid: @bid,
                status: 200
            }, status: 200
        else
            render json: {
                errors: @bid.errors.full_messages,
                status: 422
            }, status: 422
        end
    end

    def destroy
        @bid.destroy
        render json: {
            status: 200
        }, status: 200
    end

    private
    def bid_params
        params.permit(:amount)
    end

    def find_bid
        @bid = Bid.find(params[:id])
    end

end
