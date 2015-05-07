class RemoveStateFromCities < ActiveRecord::Migration
  def change
    remove_column :cities, :state_id, :integer
  end
end
