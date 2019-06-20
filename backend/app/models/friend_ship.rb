class FriendShip < ApplicationRecord
  after_create :create_inverse_friend_ship
  after_destroy :destroy_inverse_friend_ship

  belongs_to :user
  belongs_to :friend, class_name: 'User'

  private

  def create_inverse_friend_ship
    friend.friends << user
  end

  def destroy_inverse_friend_ship
    friend.friends.delete(user)
  end
end
