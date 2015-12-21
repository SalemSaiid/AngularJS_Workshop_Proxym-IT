$(document).ready(function(){
	$(".elem").on("click" , function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
		}else{
			$(".elem").removeClass("active");
			$(this).toggleClass("active");
		}
	});

	$(".inner-montant").on("click" , function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
		}else{
			$(".inner-montant").removeClass("active");
			$(this).toggleClass("active");
		}
	});



	function drawSwiper(min , max , interval){
		var swiperCont = $(".swiper-container");

		for(i = min ; i <= max ; i += interval){
			var elem = '<div class="swiper-wrapper">'+
							'<div class="swiper-slide">'+
								   '<span class="price">'+
										'<span class="ammount">'+i+'&euro;</span>'+
									'</span>'+
							'</div>'+
						'</div>';
			swiperCont.append(elem);
		}


	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: '.swiper-pagination',
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		direction : 'vertical',
		spaceBetween: 30,
		onSlideChangeStart:
			function(swiper){
			//Handle on change swiper event
		}
	});

	}

	drawSwiper(50 , 500 , 10);

	if($("#map-canvas")){

		function setCenter(lat , lng , map){
			map.setCenter(new google.maps.LatLng(lat,lng));
		}

		function drawMarker(map  , lat , lng , id , markers){
			var iconBase = '../assets/images/icons/';


				iconType = "pin_blue.png";



			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(lat, lng),
				icon: iconBase + iconType
			});

			markers[id] = marker;

			marker.setMap(map);
		}

		 map = "";
		 markers = [];
		var enseignes = [
			{
				lat : 48.8740822,
				lng : 2.2916813,
				id : 1
			},
			{
				lat : 48.8737646,
				lng : 2.2911127,
				id : 2
			},
			{
				lat : 48.8729373,
				lng : 2.289498,
				id : 3
			},
			{
				lat : 48.8720209,
				lng : 2.2902377,
				id : 4
			}
		]
		function initialize() {
		  var mapOptions = {
			zoom: 16,
			center: new google.maps.LatLng(-34.397, 150.644)
		  };
		  map = new google.maps.Map(document.getElementById('map-canvas'),
			  mapOptions);

		  setCenter(48.8733617 , 2.2922225 , map);


		  $.each(enseignes , function(i , j){
				drawMarker(map , j.lat , j.lng , j.id , markers);
		  });

		}

		google.maps.event.addDomListener(window, 'load', initialize);



	}

	$(".magazin").on("click" , function(e){

		$(".magazin").removeClass("active");

		$(e.currentTarget).addClass("active");

	var id= e.currentTarget.id;

	$.each(markers , function(i , j){
		if(typeof(j) != 'undefined')
		j.set("icon" , "../assets/images/icons/pin_blue.png");
	});

	markers[id].set("icon" , "../assets/images/icons/pin_green.png");

	map.setCenter(new google.maps.LatLng(markers[id].position.A, markers[id].position.F));

	});


})



