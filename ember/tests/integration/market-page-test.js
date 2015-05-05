import Ember from 'ember';
import {module, test } from 'qunit';
import startApp from '../helpers/start-app';
import Pretender from 'pretender';

var App, server;

module('Integration - Market Page', {
  beforeEach: function() {
    App = startApp();

    var markets = [
      {id: 1, title: "saus uno", dayweek: 'thursday', city_id: 1 },
      {id: 2, title: "saus dos", dayweek: 'thursday', city_id: 1 },
      {id: 3, title: "mv Oy", dayweek: 'thursday', city_id: 2 },
      {id: 4, title: "larks 1", dayweek: 'thursday', city_id: 3 },
      {id: 5, title: "larks 2", dayweek: 'thursday', city_id: 3 },
      {id: 6, title: "larks 3", dayweek: 'thursday', city_id: 3 }
    ];
    
    server = new Pretender(function() {
      this.get('/api/markets', function(request) {
        return [200, {"Content-Type": "application/json"}, JSON.stringify({markets: markets})];
      });

      this.get('/api/markets/:id', function(request) {
        var market = markets.find(function(market) {
          if (market.id === parseInt(request.params.id, 10)) {
            return market;
          }
        });

        return [200, {"Content-Type": "application/json"}, JSON.stringify({market: market})];
      });
    });
  },
  afterEach: function() {
    Ember.run(App, 'destroy');
    server.shutdown();
  }
});

/*test('Should be able to navigate to a market page', function(assert) {
  visit('/cities').then(function() {
    click('a:contains("Sausalito (2)")').then(function() {
      assert.equal(find('h4').text(), 'Sausalito');
    });
  });
});*/

test('Should be able to visit a market page', function(assert) {
  visit('/markets/1').then(function() {
      assert.equal(find('p').text(), 'hola');
  });
});
