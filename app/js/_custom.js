document.addEventListener("DOMContentLoaded", function() {

	'use strict';

	//Wheel
	const start = document.querySelector('#button_one');
	const nextStep = document.querySelector('#button_two');
	const modal_2 =	document.querySelector('#modal_2');
	const modal_3 = document.querySelector('#modal_3'); 
	
	(function wheel (){

		
		let targets_image = [
			'.watch_image',
			'.card_image',
			'.headphones_image',
			'.smartphone_image',
			'.repeat_image_1',
			'.no_image'
		]

		let overlay = anime({
			targets:'.overlay',
			duration: 150,
			delay: 50,
			opacity: 0,
			direction: 'normal',
			easing: 'easeInOutQuad',
			autoplay: false,
			complete: function(){
				anime({
					targets: '.overlay',
					delay: 2300,
					opacity: 1,
					duration: 150,
					easing: 'easeInOutExpo',
					complete: function(){
						anime({
							targets: targets_image,
							opacity: 1,
							duration: 100,
							easing: 'easeInOutExpo'
						})
					}
					
				})
			}
		})
		let wheel_animation_1 = anime({
			targets: '#modal_1',
			duration: 150,
			autoplay: false,
			direction: 'normal',
			easing: 'easeInOutQuad',
			translateY: 64,
			opacity: 0,
			complete: function(){
				anime({
					targets: '.divisions',
					duration: 2000,
					rotate: '2990deg',
					direction: 'normal',
					easing: 'easeInOutQuad',
					complete: function(){
						anime({
							targets: targets_image,
							opacity: 0.3,
							duration: 100,
							direction: 'normal',
							easing: 'easeOutExpo',
							complete: function(){
								anime({
									targets: '#modal_2',
									delay: 250,
									opacity: 1,
									duration: 150,
									direction: 'normal',
									easing: 'easeInOutExpo',
									keyframes:[
										{translateY: -324},
										{translateY: 0},
									],
									begin: function(){
										modal_2.style.display = 'flex';
									},
								})
							}
							
						})
					}
				})
			}

		})

		start.addEventListener('click',wheel_animation_1.restart);
		start.addEventListener('click',overlay.restart);
	
		(function StepTwo(){

			let overlay_2 = anime({
				targets:'.overlay',
				delay: 50,
				duration: 150,
				opacity: 0,
				direction: 'normal',
				autoplay: false,
				easing: 'easeInQuad',
				complete: function(){
					anime({
						targets: '.overlay',
						delay: 2300,
						opacity: 1,
						duration: 150,
						easing: 'easeInOutExpo',
						complete: function(){
							anime({
								targets: '.jump_card',
								duration: 150,
								delay: 50,
								translateY: -50,
								easing: 'easeInOutElastic'	
							})
						}
					})
				}
			});

			let wheel_animation_2 = anime({
				targets: '#modal_2',
				duration: 150,
				translateY: 64,
				opacity: 0,
				direction: 'normal',
				easing: 'easeInQuad',
				autoplay: false,
				begin: function(){
					modal_2.style.display = 'none';
				},
				complete: function(){
					anime({
						targets: '.divisions',
						duration: 2000,
						rotate: '6009deg',
						easing: 'easeInOutExpo',
						complete: function(){
							let targets_image = [
											'.watch_image',
											'.headphones_image',
											'.smartphone_image',
											'.repeat_image',
											'.no_image'
										]
							anime({
								targets: targets_image,
									duration: 150,
									opacity: 0.3,
									easing: 'easeOutExpo',
									complete: function(){
										anime({
											targets: '#modal_3',
											delay: 250,
											opacity: 1,
											duration: 150,
											direction: 'normal',
											easing: 'easeInOutExpo',
											keyframes:[
													{translateY: -324},
													{translateY: 50},
												],
												begin: function(){
													modal_3.style.display = 'flex';
												},

												
											complete: function(){
												anime({
													targets:'.expire',
													easing: 'lenear',
													duration: 10000,
													begin: function startExpire(){//Expire		
														let countdown = new Date();
														let responseTime = new Date(Date.now() + (1000*10)); 

														(function startTime() {
															let expire = document.querySelector('.expire');	
															countdown.setTime(responseTime - Date.now());
															expire.innerHTML = countdown.getSeconds() + ':' + countdown.getMilliseconds();
														if(countdown.getMilliseconds() > 0 || countdown.getSeconds() > 0)
															requestAnimationFrame(startTime);
														})();
														},
													complete: function(){
														
															modal_3.style.display = 'none';
															
														anime({
															targets:'.overlay',
															opacity: 0,
															duration: 100,
															delay: 500,
															begin: function(){
																alert('Переход по ссылке!');
															}
														})	
													}
												})
											}		
										})
									}
							})		
						}
					})
				}
			
			
			})

			nextStep.addEventListener('click',overlay_2.restart);
			nextStep.addEventListener('click',wheel_animation_2.restart);

		})();

	})();
	
	
	//Appendix
	(function Appendix () {
		

		const appendix = document.querySelector('#appendix'),
			  logo = document.querySelector('#logo');

		const likeCount = document.querySelector('#like_counter'),
			  commentsCount = document.querySelector('#comments_counter');

		const like_1 = document.querySelector('.like_image_1'),
					like_2 = document.querySelector('.like_image_2'),
					like_3 = document.querySelector('.like_image_3'),
					like_4 = document.querySelector('.like_image_4');
		

		const a1 = document.querySelector("#a1"),
		      p1 = document.querySelector("#p1"),
		      a2 = document.querySelector("#a2"),
		      p2 = document.querySelector("#p2"),
		      a3 = document.querySelector("#a3"),
		      p3 = document.querySelector("#p3"),
		      a4 = document.querySelector("#a4"),
		      p4 = document.querySelector("#p4");

		const num_1 = document.querySelector("#num_1"),
		      num_2 = document.querySelector("#num_2"),
		      num_3 = document.querySelector("#num_3"),
		      num_4 = document.querySelector("#num_4");

		//Visible 
		function off (a){
			a.style.display = 'none';
		}

		//Like&love
		// (function random_like (){
		// 	let likeLoveImages = [
		// 		'../img/_src/Love.png',
		// 		'../img/_src/Like.png'
		// 	]
		// 	like_1.src = likeLoveImages[Math.floor(Math.random()*likeLoveImages.length)];
		// 	like_2.src = likeLoveImages[Math.floor(Math.random()*likeLoveImages.length)];
		// 	like_3.src = likeLoveImages[Math.floor(Math.random()*likeLoveImages.length)];
		// 	like_4.src = likeLoveImages[Math.floor(Math.random()*likeLoveImages.length)];
			
		// })();
		

		//Like&Comments_counter
		function like_counter (min, max){
			let random = min + Math.random() * (max - min);
			return Math.floor(random);
		}
		likeCount.innerHTML = like_counter(10345,18068);
		let comments_counter = Number(likeCount.textContent);
		commentsCount.innerHTML = comments_counter*5;
		

		//Comments			
		const content_1a = function (a){
			a1.innerHTML = a;
		},
		      content_1p = function (a){
			p1.innerHTML = a;
		},
		      content_2a = function (a){
			a2.innerHTML = a;
		},
		      content_2p = function (a){
			p2.innerHTML = a;
		},
		      content_3a = function (a){
			a3.innerHTML = a;
		},
		      content_3p = function (a){
			p3.innerHTML = a;
		},
		      content_4a = function (a){
			a4.innerHTML = a;
		},
		      content_4p = function (a){
			p4.innerHTML = a;
		};

		const Time_1 = function (a){
			num_1.append(a);
		},
		      Time_2 = function (a){
			num_2.append(a);
		},
		      Time_3 = function (a){
			num_3.append(a);
		},
		      Time_4 = function (a){
			num_4.append(a);
		};   


		//....\/....Uncomment for off element
		//off(appendix);
		//off(logo);

		
		
		
		//First block 
		content_1a("Victoria Johnson");  // name
		content_1p("I had never won anything, but today I was lucky! Thank you!"); //text
		Time_1("just now"); //Comment_time

		//Second block
		content_2a("Phil Graham");
		content_2p("At first I thought this was just a joke, but the gift card arrived by the mail this morning");
		
		Time_2("4m");

		//Three block
		content_3a("Mike Hines");
		content_3p("Sweeeet! I've won an iPhone!! My gosh!");
		Time_3("10m");

		//Four block
		content_4a("Sandra Moore");
		content_4p("Initially I was not sure if this is real or not, but I have received my gift card today, thank you!!");
		Time_4("1d");

		})();
		
});

