(function () {
  'use strict';
  
  angular
    .module('ngMoment/Service', [])
    
    .factory('$moment', ['$window', function ($window) {
      return $window.moment;
    }]);
})();
