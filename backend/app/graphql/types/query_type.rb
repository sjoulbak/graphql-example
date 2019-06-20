module Types
  class QueryType < Types::BaseObject
    field :user_result, UserType, null: false do
      argument :id, ID, required: true
    end
    def user_result(id:)
      User.find(id)
    end
  end
end
