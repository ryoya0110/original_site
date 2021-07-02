$(function () {
	$("#header_hide_open").click(function () {
		$(".header_all").hide();
		$(".header_hide").slideDown();
		$("#background").css('opacity', '.6');
		$("main").css('pointer-events', 'none');
		$("footer").css('pointer-events', 'none');
	});
	$("#header_hide_close").click(function () {
		$(".header_hide").slideUp();
		$("main").css('pointer-events', 'auto');
		$("footer").css('pointer-events', 'auto');
		$("#background").css('opacity', '0');
		$(".header_all").show();
	});
});


$('.slick').slick({
	autoplaySpeed: 5000,
	speed: 1500,
	autoplay: true,
	infinite: true,
	slideToShow: 1,
	slideToScroll: 1,
	arrows: false,
	dots: false,
	fade: true,
	pauseOnFocus: false,
	pauseOnHover: false,
	pauseOnDotsHover: false
});