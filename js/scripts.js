$(document).ready(function(){


$(function() {
	$(".nav_item").on("click", function(e){
		$(".dropdown").hide();
		$(this).find('.dropdown').show();
		e.stopPropagation()
	});

    $(document).on("click", function(e) {
        var $target = e.target;
	    console.log($target)
	    if ($(e.target).is(".dropdown") === false) {
	        $(".dropdown").hide();
	    }
    });
});


$(function() {
	$(".side_nav_item").on("click", function(e){
		$(this).find('.side_dropdown').slideToggle();
		$(this).find('.side_dropdown_nav').toggleClass("side_dropdown_nav_active");
		e.stopPropagation()
	});
});



$(".dropdown_btn").click(function(){
	$(".side_nav").toggleClass("side_nav_collaps");
	$(".content_section").toggleClass("side_nav_collaps_content");
	$(this).toggleClass("dropdown_btn_active");
});

$(".profileImg").click(function(){
	$(".profileDesc").toggleClass("profileDescActive");
});

$(".test_alert").click(function(){
	$("#flash_messsage").show();
	setTimeout(function() {
		$('#flash_messsage').fadeOut('fast');
	}, 3000);
});




});