(function () {
	'use strict';

	var MODULE_NAME = 'ngMoment/Service',
	MODULE_DEPENDENCIES = [],
	MODULE_CONTROLLERS = [],
	MODULE_DIRECTIVES = [];

	describe(MODULE_NAME + ' module', function () {
		var $moment;

		beforeEach(module(MODULE_NAME));

		beforeEach(inject(function ($injector) {
			$moment = $injector.get('$moment');
		}));

		it('should return moment', function () {
			expect($moment instanceof Function).toBe(true);
		});

		it('should play with dates', function () {
			var date = $moment().format();

			expect(typeof date).toBe('string');
			expect($moment(date).subtract(1, 'year').fromNow()).toBe('a year ago');
			expect($moment(date).subtract(1, 'day').fromNow()).toBe('a day ago');
		});
	});
})();