(function () {
	'use strict';

	var MODULE_NAME = 'ngMoment/Filter/subtract',
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

				$moment.locale('pt-br');
			}));

			describe('momentSubtract', function () {
				var momentSubtractFilter;

				beforeEach(function() {
					momentSubtractFilter = $filter('momentSubtract');
				});

				it('should subtract 3 days', function () {
					var date = new Date(),
					format = 'DD [de] MMMM [de] YYYY',
					date = $moment(date);

					date = momentSubtractFilter(date, 'days', 3);

					expect(date.fromNow()).toBe('3 dias atrás');
				});
			});
		});
	});
})();