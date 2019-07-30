class Order < ApplicationRecord
    belongs_to :user
    has_many :items, through: :order_items
    validates :order_total, presence: true 
end
