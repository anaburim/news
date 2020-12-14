$(document).ready(function(){

	function openMenu()	

	{
		$('.menu-container').addClass('is-visible');	
		

	} 


	function hideMenu()
	{  
		$('.menu-container').removeClass('is-visible');

	}



	$('.header_burger').click(openMenu);

	$('.header_close').click(hideMenu);

	

});	

