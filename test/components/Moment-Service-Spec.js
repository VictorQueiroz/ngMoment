(function () {
	'use strict';

	var MODULE_NAME = 'ngMoment/Service',
	MODULE_DEPENDENCIES = [],
	MODULE_CONTROLLERS = [],
	MODULE_DIRECTIVES = [];

	describe(MODULE_NAME + ' module', function () {
		var $moment, $window;

		beforeEach(module(MODULE_NAME));

		beforeEach(inject(function ($injector) {
			$moment = $injector.get('$moment');
			$window = $injector.get('$window');
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

		it('should not be available on $window', function () {
			expect($window.moment).toBe(undefined);
		});

		it('should change the locale', function () {
			var date = new Date('Wed Sep 03 2014 00:00:00 GMT-0300 (BRT)');

			$moment.locale('en');

			expect($moment(date).format('DD MMM YY')).toBe('03 Sep 14');

			$moment.locale('pt-br');

			expect($moment(date).format('DD MMM YY')).toBe('03 set 14');
		});

		it('should keep the changed locale', function () {
			var date = new Date('Wed Sep 03 2014 00:00:00 GMT-0300 (BRT)');

			expect($moment(date)
				.add(500, 'months')
				.format('DD MMM YY')).toBe('03 mai 56');
		});
	});
})();