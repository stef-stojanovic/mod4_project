class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|

      t.string :brand
      t.string :detail
      t.integer :price 
      t.integer :size 
      t.string :image1
      t.string :image2
      t.string :image3
      t.string :image4
      
      t.timestamps
    end
  end
end
