class AuctionSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :reserve_price, :created_at, :updated_at, :end_date

  has_many :bids
  belongs_to :user
end
