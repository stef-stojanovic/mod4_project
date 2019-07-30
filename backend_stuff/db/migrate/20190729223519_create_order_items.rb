class CreateOrderItems < ActiveRecord::Migration[5.2]
  def change
    create_table :order_items do |t|
      t.integer :order_id
      t.integer :item_id
<<<<<<< HEAD:backend_stuff/db/migrate/20190725152809_create_order_items.rb
=======
      
>>>>>>> ff5287fe3ef37735113074df1623b8d91fefab87:backend_stuff/db/migrate/20190729223519_create_order_items.rb
      t.timestamps
    end
  end
end
