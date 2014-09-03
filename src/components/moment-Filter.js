(function () {
	'use strict';

	angular
		.module('ngMoment/Filter/moment', [])

		.filter('moment', ['$moment', function ($moment) {
			var isMoment = $moment.isMoment;

			return function (input) {
				/**
				 * If the actual 'input' it isn't an
				 * instance of Moment:
				 */
				if(!isMoment(input)) {
					/**
					 * If it was a Moment instance,
					 * it will be valid?
					 */
					if(!$moment(input).isValid()) {
						return input; // If not, return the input.
					} else {
						/**
						 * If it was, return the input
						 * instanciated with Moment constructor
						 */
						return $moment(input);
					}

				/**
				 * If it's already is an instance of Moment
				 */					
				} else {
					return input; // Returns it
				};
			};
		}]);
})();