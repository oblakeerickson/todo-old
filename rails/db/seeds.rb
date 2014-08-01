# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
bugs = User.create(name: 'Bugs Bunny')
wile = User.create(name: 'Wile E. Coyote')
sam = User.create(name: 'Yosemite Same')

bugs.todos.create(title: "What's up with Docs?")
bugs.todos.create(title: "Of course, you know, this means war.")

wile.todos.create(title: "Getting the most from the Acme categlog.")

sam.todos.create(title: "Shaaaad up!")
sam.todos.create(title: "Ah hates rabbits.")
sam.todos.create(title: "The Great horni-todes")
