class User < ApplicationRecord
  has_many :friend_ships, class_name: 'FriendShip'
  has_many :friends, through: :friend_ships
end
