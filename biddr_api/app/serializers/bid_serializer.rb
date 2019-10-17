class BidSerializer < ActiveModel::Serializer
  attributes :id, :amount, :created_at

  belongs_to :user
end
