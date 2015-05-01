# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
saus = City.create(name: 'Sausalito');
mv = City.create(name: 'Mill Valley');
larks = City.create(name: 'Larkspur');

saus.markets.create(title: "saus 1");
saus.markets.create(title: "saus 2");
mv.markets.create(title: "mv 1");
larks.markets.create(title: "larks 1");
larks.markets.create(title: "larks 2");