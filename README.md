ngMoment
========

A module to help you to integrate Moment.js and AngularJS

### Usage
```
bower install ng-moment --save
```
```
angular
  .module('app', ['ngMoment'])
  
  .controller('MainCtrl', ['$moment', function ($moment) {
    $scope.someDate = moment().format();
  }]);
```
