class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
<<<<<<< HEAD:backend_stuff/db/migrate/20190725152754_create_orders.rb
      
      t.integer :user_id
      t.integer :order_item_id
=======
      t.integer :user_id
      t.integer :order_total

>>>>>>> ff5287fe3ef37735113074df1623b8d91fefab87:backend_stuff/db/migrate/20190729223418_create_orders.rb
      t.timestamps
    end
  end
end
