class CreateMarkets < ActiveRecord::Migration
  def change
    create_table :markets do |t|
      t.string :title
      t.integer :city_id

      t.timestamps null: false
    end
  end
end
