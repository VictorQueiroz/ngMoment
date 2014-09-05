(function () {
	'use strict';

	var MODULE_NAME = 'ngMoment/Filter/format',
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

			describe('momentFormat', function () {
				var momentFormatFilter;

				beforeEach(function() {
					momentFormatFilter = $filter('momentFormat');
				});

				it('should format the date', function () {
					var date = new Date,
					format = 'DD [de] MMMM [de] YYYY',
					newDate;

					newDate = momentFormatFilter(date, format)

					expect(newDate).toBe($moment(date).format(format));
				});
			});
		});
	});
})();