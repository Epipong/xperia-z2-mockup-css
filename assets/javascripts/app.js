(function(){
	var app = angular.module('smartphone', ['panel', 'review', 'time']);

	app.controller('smartphoneController', function(){
		this.mockups = gems;

		this.range = function(num){
			return new Array(num);
		}
	});

	app.filter('range', function(){
		return function(val, range){
			range = parseInt(range);
			for (var i = 0; i < range; ++i)
				val.push(i);
			return val;
		};
	});

	var gems = [
		{
			title: '',
			wallpaper: 'http://i-cdn.phonearena.com/images/articles/113657-image/Xperia-Z2-lockscreen.jpg',
			description: 'Inscrivez-vous simplement',
			reviews: []
		},
		{
			title: 'Flappy Bird',
			wallpaper: 'https://comm663.files.wordpress.com/2014/02/screenshot_2014-02-02-12-59-041.png',
			description: 'Flappy Bird est un jeu d\'obstacles développé au Viêt Nam à Hanoï par Nguyễn Hà Đông, développeur de jeu indépendant et publié par .GEARS Studios. Il est sorti en mai 2013 pour iPhone sur iOS 6, et mis à jour pour iOS 7 en septembre 2013.',
			reviews: [
				{
					stars: 3,
					title: 'Mitigé : un jeu doit être fini',
					body: 'Le concept reprend mighty quest for epic loot en plus simple et sur portable. Gameplay vif, un die and retry qui plaira aux plus persévérant, le jeu permettant de magnifiques parcours qui se joues au pixel ou au dixième de seconde près. Vite restreint par le faible nombre de piège, les joueurs sont plus inventifs. Cependant, le jeu est, pour moi, encore en alpha : des crash récurent, des déconections qui font perdre plusieurs dizaines de clés par jours, même en wifi, Un concept sympa mais encore en alpha',
					authorName: 'Dorian Turba'
				}
			]
		},
		{
			title: '',
			wallpaper: 'http://everythingidevice.com/wp-content/uploads/2014/10/Best-iPhone-6-and-iPhone-6-plus-wallpapers-hd-full-resolution-66.jpg',
			description: 'Partagez vos résultats',
			reviews: []
		},
		{
			title: '',
			wallpaper: 'http://www.hdgalaxys5wallpaper.com/wp-content/uploads/Dreamy/Dreamy%20landscape%20Galaxy%20S5%20Wallpaper.jpg',
			description: 'Comparez les allergènes de votre réseau à vous',
			reviews: []
		},
		{
			title: '',
			wallpaper: 'http://www.nexus5wallpapers.com/wp-content/uploads/Abstract/Abstract%20Nexus%205%20Wallpapers%20HD%2092.jpg',
			description: 'Mettez plus de transparence à ceux que vous consommez',
			reviews: []
		}
	];
})();
