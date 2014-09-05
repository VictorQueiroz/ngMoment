(function () {
	'use strict';

	angular
		.module('ngMoment/Filters', [
			'ngMoment/Filter/fromNow',
			'ngMoment/Filter/calendar',
			'ngMoment/Filter/add',
			'ngMoment/Filter/format'
		]);
})();
