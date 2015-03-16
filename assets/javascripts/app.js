(function(){
	var app = angular.module('smartphone', []);

	app.controller('smartphoneController', function(){
		this.mockups = gems;
	});

	var gems = [
		{
			name: 'Xperia Z2',
			url: 'xperia-z2.html'
		},
		{
			name: 'Xperia Z1',
			url: 'xperia-z1.html'
		}
	];
})();
