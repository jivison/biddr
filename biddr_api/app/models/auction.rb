class Auction < ApplicationRecord

    has_many :bids, dependent: :destroy
    belongs_to :user

    # def serialized
    #     AuctionSerializer.new(self).serialized_json
    # end

end
