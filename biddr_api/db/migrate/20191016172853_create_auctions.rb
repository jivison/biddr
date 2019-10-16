class CreateAuctions < ActiveRecord::Migration[6.0]
  def change
    create_table :auctions do |t|
      t.string :title
      t.text :description
      t.datetime :end_date
      t.integer :reserve_price

      t.timestamps
    end
  end
end
