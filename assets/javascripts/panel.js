(function(){
	var app = angular.module('panel', []);

	app.controller('PanelController', function(){
		this.tab = 1;

		this.setTab = function(tab) {
			this.tab = tab;
		}
		this.isSet = function(tab) {
			return this.tab === tab;
		}
	});
})();