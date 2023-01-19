
$(document).ready(function() {
	//make sure the page is ready befor running the scripts
	// This is the hamburger menu
	$(".hamburger-button").click(function(){

	  $(this).toggleClass('active');
	  $(".mobile-menu").slideToggle();

	});

	// end hamburger menu


    //  gallery // 

lightGallery(document.getElementById('lightgallery'), {
    speed: 500,
    download: false
});

});
