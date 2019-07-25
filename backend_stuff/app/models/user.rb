class User < ApplicationRecord
    has_many :orders 
    has_secure_password 
    validates :username, presence: true, uniqueness: true 
    validates :password, length: { in: 6..20 }
end
