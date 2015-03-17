(function(){
	var app = angular.module('review', []);

	app.controller('ReviewController', function(){
		this.review = {};

		this.addReview = function(mockup){
			mockup.reviews.push(this.review);
			this.review = {};
		};
	});
})();
