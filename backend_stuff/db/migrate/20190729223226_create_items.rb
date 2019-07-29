class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.text :info
      t.boolean :inCart
      t.integer :count
      t.integer :total
      t.string :company
      t.text :title
      t.integer :price
      t.integer :size
      t.string :img
      t.string :image2
      t.string :image3
      t.string :image4

      t.timestamps
    end
  end
end
