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

const loadAnime = $('#load_animation');
$(window).on('load', function () {
	loadAnime.delay(2000).fadeOut(1000);
});
function stopload() {
	loadAnime.delay(1000).fadeOut(700);
}
setTimeout('stopload()', 10000);

function fadeIn(){
	$('.fadeUpTrigger').each(function(){
	let scroll = $(window).scrollTop();
	let triTop = $(this).offset().top + 100;
	let winHeight = $(window).height();
	if (scroll >= triTop - winHeight){
		$(this).addClass('fadeUp');
	}else{
		$(this).removeClass('fadeUp');
	}
	});

	$('.fadeLeftTrigger').each(function(){
	let scroll = $(window).scrollTop();
	let triTop = $(this).offset().top + 100;
	let winHeight = $(window).height();
	if (scroll >= triTop - winHeight){
		$(this).addClass('fadeLeft');
	}else{
		$(this).removeClass('fadeLeft');
	}
	});

	$('.fadeRightTrigger').each(function(){
	let scroll = $(window).scrollTop();
	let triTop = $(this).offset().top + 100;
	let winHeight = $(window).height();
	if (scroll >= triTop - winHeight){
		$(this).addClass('fadeRight');
	}else{
		$(this).removeClass('fadeRight');
	}
	});
}

$(window).scroll(function () {
	fadeIn();
});