(function () {
	'use strict';

	var MODULE_NAME = 'ngMoment/Filter/add',
	MODULE_DEPENDENCIES = [
		'ngMoment/Service'
	],
	MODULE_CONTROLLERS = [],
	MODULE_DIRECTIVES = [];

	describe(MODULE_NAME + ' module', function () {
		beforeEach(module(MODULE_NAME));

		beforeEach(function () {
			MODULE_DEPENDENCIES.forEach(function (dependency) {
				module(dependency);
			});
		});

		describe('filters', function () {
			var $filter, $moment;

			beforeEach(inject(function ($injector) {
				$filter = $injector.get('$filter');
				$moment = $injector.get('$moment');

				$moment.locale('en-us');
			}));

			describe('add', function () {
				var addFilter;

				beforeEach(function() {
					addFilter = $filter('momentAdd');
				});

				it('should add months', function () {
					var date = new Date;

					date = addFilter(date, 'months').fromNow();

					expect(date).toBe(true);
				});
			});
		});
	});
})();