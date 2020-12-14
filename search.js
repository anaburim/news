$(document).ready(function(){

	function searchButton()
	{  
		$('.search').css('display', 'block');
		$('.search-btn').css('opacity', '0');

	}

	$('.search-btn').click(searchButton);

	if ($(window).width() <= 768) {
		$(document).mouseup(function (e){ 
			var div = $(".search"); 
			if (!div.is(e.target) 
				&& div.has(e.target).length === 0) { 
				console.log('asd');
			$('.search').css('display', 'none');
			$('.search-btn').css('opacity', '1');

		} 
		

	});

	}

	$(window).resize(function() {
		if ($(window).width() >= 1440) {
			$('.search').css('display', 'block');
			$('.search-btn').css('opacity', '0');

		} else {
			$('.search').css('display', 'none');
			$('.search-btn').css('opacity', '1');

		}
		

	});

	$(window).resize(function() {

		if ($(window).width() >= 768) {

			$('.search').css('display', 'block');

			$('.search-btn').css('opacity', '0');


		} else {

			$('.search').css('display', 'none');

			$('.search-btn').css('opacity', '1');

		}

	});
	
});


