(function () {
	'use strict';

	var MODULE_NAME = 'ngMoment/Filter/moment',
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
				var momentFilter;

				beforeEach(function() {
					momentFilter = $filter('moment');
				});

				it('should show a moment instance', function () {
					var date = new Date;

					date = momentFilter(date);

					expect($moment.isMoment(date)).toBe(true);
				});

				it('should be a real moment class', function () {
					var date = new Date;

					date = momentFilter(date);

					expect($moment.isMoment(date)).toBe(true);

					date.add(10, 'months');

					expect(date.fromNow()).toBe('in 10 months');
				});

				it('should detect if it is not a valid date', function () {
					var date = 'this is not a valid date';

					date = momentFilter(date);

					expect(date).toBe('this is not a valid date');
				});
			});
		});
	});
})();