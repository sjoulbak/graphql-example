module Types
  class UserType < BaseObject
    field :email, String, null: true
    field :friends, [UserType], null: false
  end
end
