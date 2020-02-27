document.addEventListener("DOMContentLoaded", function() {

	//Wheel
	const pointer = document.querySelector('.center_point');

	(function wheel (){
		let wheel_animation = anime({
			targets: '.divisions',
			duration: 2000,
			rotate: '2990deg',
			direction: 'normal',
			easing: 'easeInOutQuad',
			autoplay: false,
			complete: function(){
				let targets_image = [
					'.watch_image',
					'.card_image',
					'.headphones_image',
					'.smartphone_image',
					'.repeat_image_1',
					'.no_image'
				]
				anime({
					targets: targets_image,
					opacity: 0.3,
					duration: 100,
					easing: 'easeInOutExpo',

				})
			}
		})

	pointer.addEventListener('click',wheel_animation.restart);
	







	})();
	
	//Appendix
	(function Appendix () {
		
		const a1 = document.querySelector("#a1"),
		      p1 = document.querySelector("#p1"),
		      a2 = document.querySelector("#a2"),
		      p2 = document.querySelector("#p2"),
		      a3 = document.querySelector("#a3"),
		      p3 = document.querySelector("#p3"),
		      a4 = document.querySelector("#a4"),
		      p4 = document.querySelector("#p4"),
		      a5 = document.querySelector("#a5"),
		      p5 = document.querySelector("#p5");

		const num_1 = document.querySelector("#num_1"),
		      num_2 = document.querySelector("#num_2"),
		      num_3 = document.querySelector("#num_3"),
		      num_4 = document.querySelector("#num_4"),
		      num_5 = document.querySelector("#num_5");

		const content_1a = function (a){
			a1.append(a);
		},
		      content_1p = function (a){
			p1.append(a);
		},
		      content_2a = function (a){
			a2.append(a);
		},
		      content_2p = function (a){
			p2.append(a);
		},
		      content_3a = function (a){
			a3.append(a);
		},
		      content_3p = function (a){
			p3.append(a);
		},
		      content_4a = function (a){
			a4.append(a);
		},
		      content_4p = function (a){
			p4.append(a);
		};

		const Number_1 = function (a){
			num_1.append(a);
		},
		      Number_2 = function (a){
			num_2.append(a);
		},
		      Number_3 = function (a){
			num_3.append(a);
		},
		      Number_4 = function (a){
			num_4.append(a);
		};   

		//First block 
		content_1a("Victoria Johnson");  // name
		content_1p("I had never won anything, but today I was lucky! Thank you!"); //text
		Number_1("3"); //Minutes

		//Second block
		content_2a("Phil Graham");
		content_2p("Yeap, i'm vinner. Timer it's my. Women, come to my car.");
		Number_2("13");

		//Three block
		content_3a("Mike Hines");
		content_3p("At first I thought this was just a joke, but the gift card arrived by the mail this morning! ");
		Number_3("90");

		//Four block
		content_4a("Sandra Moore");
		content_4p("Sweeeet! I've won an iPhone!! My gosh!");
		Number_4("5");

		})();

});

