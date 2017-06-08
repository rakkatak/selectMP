'use strict';

/* App Module */

var findMPApp = angular.module('findMPApp', [
  'ngRoute',
  'findMPControllers',
  'mpFilters'
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
