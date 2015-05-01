import Ember from 'ember';
import {module, test } from 'qunit';
import startApp from '../helpers/start-app';
import Pretender from 'pretender';

var App, server;

module('Integration - Cities Page', {
  beforeEach: function() {
    App = startApp();
    var cities = [
      { id: 1, name: 'Sausalito', market_ids: [1,2] },
      {id: 2, name: 'Mill Valley', market_ids: [3] },
      {id: 3, name: 'Larkspur', market_ids: [4,5,6] }
    ];

    var markets = [
      {id: 1, title: "saus uno", city_id: 1 },
      {id: 2, title: "saus dos", city_id: 1 },
      {id: 3, title: "mv 1", city_id: 2 },
      {id: 4, title: "larks 1", city_id: 3 },
      {id: 5, title: "larks 2", city_id: 3 },
      {id: 6, title: "larks 3", city_id: 3 }
    ];
    

    server = new Pretender(function() {
      this.get('/api/cities', function(request) {
        return [200, {"Content-Type": "application/json"}, JSON.stringify({cities: cities, markets: markets})];
      });

      this.get('/api/cities/:id', function(request) {
        var city = cities.find(function(city) {
          if (city.id === parseInt(request.params.id, 10)) {
            return city;
          }
        });

        var cityMarkets = markets.filter(function(market){
          if (market.city_id === city.id) {
            return true;
          }
        });
        return [200, {"Content-Type": "application/json"}, JSON.stringify({city: city, markets: cityMarkets})];
      });
    });
  },
  afterEach: function() {
    Ember.run(App, 'destroy');
    server.shutdown();
  }
});
test('Should allow navigation to the cities page from the landing page', function(assert) {
  visit('/').then(function() {
    click('a:contains("Cities")').then(function() {
      assert.equal(find('h3').text(), 'Cities');
    });
  });
});


test('Should list all cities and number of markets', function(assert) {
  visit('/cities').then(function() {
    assert.equal(find('a:contains("Sausalito (2)")').length, 1);
    assert.equal(find('a:contains("Mill Valley (1)")').length, 1);
    assert.equal(find('a:contains("Larkspur (3)")').length, 1);
  });
});
test('Should be able to navigate to a city page', function(assert) {
  visit('/cities').then(function() {
    click('a:contains("Sausalito (2)")').then(function() {
      assert.equal(find('h4').text(), 'Sausalito');
    });
  });
});

test('Should be able to visit a city page', function(assert) {
  visit('/cities/1').then(function() {
    assert.equal(find('h4').text(), 'Sausalito');
  });
});
