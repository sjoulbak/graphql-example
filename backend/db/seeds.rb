user1 = User.create(email: "a@a.a")
user2 = User.create(email: "b@b.b")

user1.friends << user2
