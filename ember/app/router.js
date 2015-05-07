import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('about');
  //this.route('cities');
  this.resource('cities', function() {
    this.route('show', { path: ':city_id' }, function(){
      this.resource('markets', function(){ 
        this.route('show', { path: ':market_id' });
      });
    });
  });
  this.resource('markets', function(){ 
        this.route('show', { path: ':market_id' });
      });
/*  this.resource('cities', function() {
-    this.route('show', {path: '/:city_id'});
   });*/
  //this.route('markets');
  /*this.resource('cities', function() {
    this.route('show', {path: '/:city_id'}, function(){
      this.resource('markets', function(){});
    });
  });*/
 /* this.resource('markets', function() {
    this.route('show', {path: '/:market_id'});
  });*/
});

//export default Router.map(function() {});
