# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
calif = State.create(name: 'California');

saus = City.create(name: 'Sausalito');
mv = City.create(name: 'Mill Valley');
larks = City.create(name: 'Larkspur');

Market.create(title: "saus UNO" dayweek: "thursday");
Market.create(title: "saus 2", dayweek: "thursday");
Market.create(title: "mv 1", dayweek: "thursday");
Market.create(title: "larks 1", dayweek: "thursday");
Market.create(title: "larks 2", dayweek: "thursday");