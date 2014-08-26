ngMoment
========

A module to help you to integrate Moment.js and AngularJS

### Usage
```
bower install ng-moment
```
```
angular
  .module('app', ['ngMoment'])
  
  .controller('MainCtrl', function ($moment) {
    $moment().then(function (moment) {
      $scope.someDate = moment().format();
    });
  });
```
