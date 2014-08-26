(function () {
  'use strict';
  
  angular
    .module('ngMoment/Service', [])
    
    .factory('$moment', ['$q', '$window', function ($q, $window) {
      return function () {
        return $q.when($window.moment);
      };
    }]);
})();
