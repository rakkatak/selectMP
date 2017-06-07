'use strict';

/* App Module */

var findMPApp = angular.module('findMPApp', [
  'ngRoute',
  'findMPControllers',
  'mpFilters',
  'angular-mandrill'
]);

findMPApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/findMP', {
        templateUrl: 'partials/selectMpForm.html',
        controller: 'findMPCtrl'
      }).
      otherwise({
        redirectTo: '/findMP'
      });
  }]);

findMPApp.config(function(MandrillProvider) {
  MandrillProvider.setApiKey('-VDS6QsLxHBa18rXW8VHIg');
});
