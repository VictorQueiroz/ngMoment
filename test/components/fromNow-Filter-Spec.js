(function () {
	'use strict';

	var MODULE_NAME = 'ngMoment/Filter/fromNow',
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

			describe('momentFromNow', function () {
				var momentFromNowFilter;

				beforeEach(function() {
					momentFromNowFilter = $filter('momentFromNow');
				});

				it('should show the date', function () {
					var date = momentFromNowFilter(new Date);

					expect(date).toBe('a few seconds ago');
				});

				it('should deal well with $moment instances', function () {
					var date = momentFromNowFilter($moment().add(10, 'months'));

					expect(date).toBe('in 10 months');
				});

				it('should deal well with no-$moment instances', function () {
					var date = momentFromNowFilter(new Date);

					expect(date).toBe('a few seconds ago');
				});
			});
		});
	});
})();