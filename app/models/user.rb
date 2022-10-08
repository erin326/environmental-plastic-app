class User < ApplicationRecord

    validates :username, presence: true, uniqueness: true
    has_secure_password
    validates :password, length: {minimum: 6},   if: :password 
    has_many :items

end
