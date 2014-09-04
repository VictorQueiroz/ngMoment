ngMoment
========

A module to help you to integrate Moment.js and AngularJS

## Installation
```
bower install ng-moment --save
```

## Usage
```
angular
  .module('app', ['ngMoment'])
  
  .controller('MainCtrl', ['$moment', function ($moment) {
    $scope.someDate = moment().format();
  }]);
```

## Filters
```
<tr ng-repeat="user in users">
	<td ng-bind="user._id"></td>
	<td ng-bind="user.name"></td>
	<td>{{ user.created_at | moment | momentFromNow }}</td>
	<td>{{ user.created_at | moment | momentAdd:'months':3 | momentFromNow }}</td>
	<td>{{ user.created_at | moment | momentFormat }}</td>
	<td>{{ user.created_at | momentFromNow }}</td> <!-- Less watchers, better for performance. -->
</tr>
```