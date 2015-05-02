class AddFieldsToMarkets < ActiveRecord::Migration
  def change
    add_column :markets, :street_address, :string
    add_column :markets, :dayweek, :string
    add_column :markets, :time_opens, :time
    add_column :markets, :time_closes, :time
    add_column :markets, :date_opens, :date
    add_column :markets, :date_closes, :date
    add_column :markets, :foodstamps, :string
    add_column :markets, :governing_body, :string
    add_column :markets, :vendor_qty, :integer
    add_column :markets, :rating, :integer
  end
end

