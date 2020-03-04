document.addEventListener("DOMContentLoaded", function() {

	'use strict';

	const appendix = document.querySelector('#appendix'),
		  logo = document.querySelector('#logo');

	const card_img = document.querySelector('.jump_card'),
		  modal_3_icon = document.querySelector('.modal_3_icon'),
		  modal_2_icon = document.querySelector('.modal_2_icon'),
		  sub_modal = document.querySelector('.back_modal_3'),
		  title = document.querySelector('.title'),
		  modal_1_text = document.querySelector('.modal_1_text'),
		  modal_2_text = document.querySelector('.modal_2_text'),
		  modal_3_text = document.querySelector('.modal_3_text'),
		  modal_1_title = document.querySelector('.modal_1_title'),
		  modal_2_title = document.querySelector('.modal_2_title'),
		  modal_3_title = document.querySelector('.modal_3_title'),
		  modal_3_lead = document.querySelector('.modal_3_lead'),
		  modal_1_lead = document.querySelector('.modal_1_lead'),  
		  modal_expire = document.querySelector('.modal_expire');

	//Config
	const CONFIG = {
		lead_text: "Every Tuesday we select 7 lucky people to receive a $1,000 Bank of America Gift Card. Spin the wheel to claim your special prize.",
			//Modal
				//Title
		head_title: "Congratulations!",
		title_modal_1: "Congratulations!",
		title_modal_2: "Try again!",
		title_modal_3: "Congratulations!",
				//Text	Modal 1														 \/-No delete        \/-No delete
		text_modal_1: "YOU have been a selected by Bank of America for a shot at "+"<b>$1,000 Gift Card</b>"+" Simply spin the wheel to see if you're  today's winner!",
		down_text_modal_1: 'Click "ok" to claim your special prize',
		down_text_2_modal_1: "Good Luck!",
		button_text_1: 'OK',
				//Text	Modal 2
		text_modal_2: "You have ONE extra spin!",
		button_text_2: 'OK',
				//Text	Modal 3
		lead_text_1: "$1000 Bank of America Gift Card",
		lead_text_2: "is reserved for you!",
		text_modal_3: "To claim your prize, click the button bellow and verify your information on the next page.",
		text_expire: 'Your prize will expire in',
		button_text_3: 'Claim Your Prize',
	}
	let off = (a) => {
		a.style.display = 'none';
	}

	//Visible 
	//....\/....Uncomment for off element
	//off(appendix);
	//off(logo);
	//off(title);
					//Modal				
	// off(modal_2_icon);
	// off(modal_3_icon);
	// off(sub_modal);
	// off(modal_2_text);
	// off(modal_1_title);
	// off(modal_3_title);
	// off(modal_1_lead);
	// off(modal_3_lead);
	// off(modal_expire);
	// off(card_img);

			
	
	(function wheel (){
		
		const API = {
			//*
			appears_easing:	'easeInSine',	
			disappears_easing: 'easeOutSine',	
			//Modal
			modal_appears_duration: 100,
			modal_disappears_duration: 150,
			modal_in_delay: 1000,
			//Setting timer duration && timer seconds for change timer
			timerSeconds: 10,
			timerDuration: 10000,
			//Wheel Animation
			wheel_1_duration: 2000,
			wheel_2_duration: 2000,
			wheel_1_rotate: '2990deg',
			wheel_2_rotate: '6009deg',
			wheel_1_easing: 'easeInOutQuad',
			wheel_2_easing: 'easeInOutQuad',
		};
		
		const start = document.querySelector('#button_one');
		const nextStep = document.querySelector('#button_two');
		const modal_2 =	document.querySelector('#modal_2');
		const modal_3 = document.querySelector('#modal_3'); 
			
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
			duration: API.modal_disappears_duration,
			delay: 50,
			opacity: 0,
			direction: 'normal',
			easing: API.disappears_easing,
			autoplay: false,
			complete:() => {
				anime({
					targets: '.overlay',
					delay: API.wheel_1_duration+API.modal_in_delay,
					opacity: 1,
					duration: API.modal_appears_duration,
					easing: API.appears_easing,
									
				})
			}
		})
		let wheel_animation_1 = anime({
			targets: '#modal_1',
			duration: API.modal_disappears_duration,
			autoplay: false,
			direction: 'normal',
			easing: API.disappears_easing,
			translateY: 64,
			opacity: 0,
			complete: () => {
				anime({
					targets: '.divisions',
					duration: API.wheel_1_duration,
					rotate: API.wheel_1_rotate,
					direction: 'normal',
					easing: API.wheel_1_easing,
					complete: () => {
						anime({
							targets: targets_image,
							opacity: 0.3,
							duration: 100,
							direction: 'normal',
							easing: API.disappears_easing,
							complete: () => {
								anime({
									targets: '#modal_2',
									duration: 0,
									translateY: -324,
									complete: () => {
										anime({
											targets: '#modal_2',
											delay: API.modal_in_delay,
											opacity: 1,
											duration: API.modal_appears_duration,
											direction: 'normal',
											easing: API.appears_easing,
											translateY: 0,
											begin: () => {
												modal_2.style.display = 'flex';
											},
										})
									}
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
				duration: API.modal_disappears_duration,
				opacity: 0,
				direction: 'normal',
				autoplay: false,
				easing: API.disappears_easing,
				begin: () => {
					anime({
						targets: targets_image,
						opacity: 1,
						duration: 100,
						easing: API.appears_easing
					})
				},
				complete: () => {
					anime({
						targets: '.overlay',
						delay:API.modal_in_delay+API.wheel_2_duration,
						opacity: 1,
						duration: API.modal_appears_duration,
						easing: API.appears_easing,
						complete: () => {
							anime({
								targets: '.jump_card',
								duration: 100,
								delay: 100,
								translateY: -50,
								easing: 'spring(1, 80, 10, 10)'
							})
						}
					})
				}
			});

			let wheel_animation_2 = anime({
				targets: '#modal_2',
				duration: API.modal_disappears_duration,
				autoplay: false,
				direction: 'normal',
				easing: API.disappears_easing,
				translateY: 64,
				opacity: 0,
				begin: () => {
					modal_2.style.display = 'none';				
				},
				complete: () => {
					anime({
						targets: '.divisions',
						duration: API.wheel_2_duration,
						rotate: API.wheel_2_rotate,
						easing: API.wheel_2_easing,
						complete: () => {
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
									easing: API.disappears_easing,
									complete: () => {
										anime({
											targets: '#modal_3',
											duration: 0,
											translateY: -324,
											complete: () => {
												anime({
													targets: '#modal_3',
													delay: API.modal_in_delay,
													opacity: 1,
													duration: API.modal_appears_duration,
													direction: 'normal',
													easing: API.disappears_easing,
													translateY: 0,
														begin: () => {
															modal_3.style.display = 'flex';
														},																
													complete: () => {
														anime({
															targets:'.expire',
															easing: 'lenear',
															duration: API.timerDuration,
															begin: () => {//Expire		
																let countdown = new Date();
																let responseTime = new Date(Date.now() + (1000*API.timerSeconds)); 
		
																(function startTime() {
																	let expire = document.querySelector('.expire');	
																	countdown.setTime(responseTime - Date.now());
																	expire.innerHTML = countdown.getSeconds() + ':' + countdown.getMilliseconds();
																if(countdown.getMilliseconds() > 0 || countdown.getSeconds() > 0)
																	requestAnimationFrame(startTime);
																})();
																},
															complete: () => {																
																	modal_3.style.display = 'none';																
																anime({
																	targets:'.overlay',
																	opacity: 0,
																	duration: 100,
																	delay: 500,
																	begin:() => {
																		// document.body.style.overflowY = 'scroll';
																		// alert('Переход по ссылке!');
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
				}
			
			
			})

			nextStep.addEventListener('click',overlay_2.restart);
			nextStep.addEventListener('click',wheel_animation_2.restart);

		})();

	})();
	
	//Head & modal config
	(function(){
		let lead = document.querySelector('.lead'),
			modal_1_text_2 = document.querySelector('.modal_1_text_2'),
			modal_1_text_2_down = document.querySelector('.modal_1_text_2_down'),
			btnOneText = document.querySelector('.btn_span_modal_1'),
			btnTwoText = document.querySelector('.btn_span_modal_2'),
			btnThreeText = document.querySelector('.btn_span_modal_3'),
			lead_text_1 = document.querySelector('.modal_span_1'),
			lead_text_2 = document.querySelector('.modal_span_2'),
			spanExpire = document.querySelector('.expire_span');

		let content = (a,b) => {
			a.innerHTML = b;
		}
		content(lead,CONFIG.lead_text);
		content(title,CONFIG.head_title);
		content(modal_1_title,CONFIG.title_modal_1);
		content(modal_2_title,CONFIG.title_modal_2);
		content(modal_3_title,CONFIG.title_modal_3);
		content(modal_1_text,CONFIG.text_modal_1);
		content(modal_1_text_2,CONFIG.down_text_modal_1);
		content(modal_1_text_2_down,CONFIG.down_text_2_modal_1);
		content(btnOneText,CONFIG.button_text_1);
		content(modal_2_text,CONFIG.text_modal_2);
		content(btnTwoText,CONFIG.button_text_2);
		content(lead_text_1,CONFIG.lead_text_1);
		content(lead_text_2,CONFIG.lead_text_2);
		content(modal_3_text,CONFIG.text_modal_3);
		content(btnThreeText,CONFIG.button_text_3);
		content(spanExpire,CONFIG.text_expire);
	})();
	
	//Appendix
	(function Appendix () {
		

		const likeCount = document.querySelector('#like_counter'),
			  commentsCount = document.querySelector('#comments_counter');

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
			
		//Like&love
		(() => {
			let like = document.querySelectorAll('.like');
			let like_2 = document.querySelectorAll('.like_2');
			let likeFoo = () => {
				like.forEach((i) => {
					i.innerHTML = 'Like';
				});
			};
			let loveFoo = () => {
				like_2.forEach((i) => {
					i.innerHTML = 'Love';
				});
			};
			loveFoo();
			likeFoo();
		})();
		
		//Gender
		(function gender (){
		
			const female_1 = document.querySelector('.female_1'),
				  female_2 = document.querySelector('.female_2'),
				  male_1 = document.querySelector('.male_1'),
				  male_2 = document.querySelector('.male_2');

			let bg_x = [
				'bg_x_0',
				'bg_x_40',
				'bg_x_80',
				];
			let bg_x_2 = [
				'bg_x_120',
				'bg_x_160',
				'bg_x_200',
				];	
			let shuffle = (a,b) => {
				a.classList.add(bg_x[Math.floor(Math.random()*bg_x.length)]);
				b.classList.add(bg_x_2[Math.floor(Math.random()*bg_x.length)]);
			};
			shuffle(female_1,female_2);
			shuffle(male_1,male_2);
			(function(){
				female_1.style.backgroundPositionY = 'bottom';
				female_2.style.backgroundPositionY = 'bottom';
				male_1.style.backgroundPositionY = 'top';
				male_2.style.backgroundPositionY = 'top';
			})()
		})();

		//Like&Comments_counter
		let like_counter = (min, max) => {
			let random = min + Math.random() * (max - min);
			return Math.floor(random);
		}
		likeCount.innerHTML = like_counter(10345,18068);
		let comments_counter = Number(likeCount.textContent);
		commentsCount.innerHTML = comments_counter*5;
		
		//Comments			
		let text = (a,b) => {
			a.innerHTML = b;
		};
		let time = (a,b) => {
			a.append(b);
		};
		let time_variant_1 = [
			'just now',
			'10s',
			'20s',
			'25s',
			'30s',
		]
		let time_variant_2 = [
			'3m',
			'4m',
			'5m',
			'6m',
			'7m',
		]
		let time_variant_3 = [
			'10m',
			'11m',
			'12m',
			'13m',
			'14m',
		]
		let male_name_1 = [
			"Phil Graham",
		]
		let male_name_2 = [
			"Mike Hines",
		]
		let female_name_1 = [
			"Victoria Johnson",
		]
		let female_name_2 = [
			"Sandra Moore",
		]
		let male_comments_1 = [
			"I had never won anything, but today I was lucky! Thank you!",
		]
		let male_comments_2 = [
			"Sweeeet! I've won an iPhone!! My gosh!",
		]
		let female_comments_1 = [
			"Initially I was not sure if this is real or not, but I have received my gift card today, thank you!!",
		]
		let female_comments_2 = [
			"At first I thought this was just a joke, but the gift card arrived by the mail this morning",
		]
		text(a1,(female_name_1[Math.floor(Math.random()*female_name_1.length)]));
		text(p1,(female_comments_1[Math.floor(Math.random()*female_comments_1.length)]));
		text(a2,(male_name_1[Math.floor(Math.random()*male_name_1.length)]));
		text(p2,(male_comments_1[Math.floor(Math.random()*male_comments_1.length)]));
		text(a3,(male_name_2[Math.floor(Math.random()*male_name_2.length)]));
		text(p3,(male_comments_2[Math.floor(Math.random()*male_comments_2.length)]));
		text(a4,(female_name_2[Math.floor(Math.random()*female_name_2.length)]));
		text(p4,(female_comments_2[Math.floor(Math.random()*female_comments_2.length)]));
		
		time(num_1,(time_variant_1[Math.floor(Math.random()*time_variant_1.length)]));
		time(num_2,(time_variant_2[Math.floor(Math.random()*time_variant_2.length)]));
		time(num_3,(time_variant_3[Math.floor(Math.random()*time_variant_3.length)]));
		time(num_4,"1d");

		})();
		
});

