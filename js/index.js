var w = $(window).width();




// the w judge
function CheckSize(w) {
	if (w < 486) {
		$('.row p').addClass("displayNone");
	} else {
		$('.row p').removeClass('displayNone');
	}

	if (w < 758) {
		$('#navbarItem ul').removeClass('LineBorder');
		$('.nav-link').addClass('hamburger');
		$(".RWDTitle").removeClass("displayNone");
		$(".parallax-window-50vh div").addClass('displayNone');
		
	} else {
		$('#navbarItem ul').addClass('LineBorder');
		$('.nav-link').removeClass('hamburger');
		$(".RWDTitle").addClass("displayNone");
		$(".parallax-window-50vh div").removeClass("displayNone");
	}

	if (w < 820) {
		$('.displayText').addClass("displayNone");
		$('#MainText').removeClass('w-50 mx-auto').addClass('w-100 text-center');
		$('.content2').removeClass("displayNone");
		$('.content1').addClass("displayNone");
		
	} else {
		$('.displayText').removeClass("displayNone");
		$('#MainText').removeClass('w-100 text-center').addClass('w-50 mx-auto');
		$('.content2').addClass("displayNone");
		$(".content1").removeClass("displayNone");
	}

	if (w > 700 && w < 900) {
		$(".parallax-window").css("min-height", "600px");
	} else if (w > 550 && w <= 700) {
		$(".parallax-window").css("min-height", "475px");
	} else if (w <= 550) {
		$(".parallax-window").attr("data-image-src", "./img/logo.png");
	} else {
		$(".parallax-window").css("min-height", "100vh");
		$(".parallax-window").attr("data-image-src", "./img/Attach_RWD.jpg");
	}

	if (w < 1070 && w > 540) {
		$(".card").css("width", "300px");
		$("#information").addClass("p-5");
		$("#information").removeClass("p-0");
		$("#information .card").addClass("ml-5");
	} else if (w <= 540 && w > 400 ) {
		$(".card").css("width", "250px");
		$("#information").removeClass("p-5");
		$("#information").removeClass("p-0");
		$("#information").addClass("pl-4");
		$("#iformation").addClass("pt-5");
		$("#information").addClass("pb-5");
		$("#information .card").removeClass("ml-5");
		$("#information .card").removeClass("mx-1");
	} else if(w <= 400) {
		$(".card").css("width", "220px");
		$("#information").removeClass("p-5");
		$("#information").addClass("pl-4");
		$("#information").addClass("pt-5");
		$("#information").addClass("pb-5");
		$("#information .card").removeClass("ml-5");
		$("#information .card").removeClass("m-5");
	}
	if (w > 1440) {
		$(".card-img-top").attr("height", "250");
	} else if (w <= 1440 && w > 600) {
		$(".card-img-top").attr("height", "200");
	} else if (w <= 600) {
		$(".card-img-top").attr("height", "140");
	}
}

	
CheckSize(w);

$(window).resize(function () {
	var w = $(window).width();
	CheckSize(w);
});

// the facebook and CTF
$(document).ready(function() {
	$('.mybtn').click(function() {
		var href;
		if($(this).val() == "Facebook") {
			href = "https://www.facebook.com/NPC.OwO/";
		} else if($(this).val() == "CTF") {
			href = "https://www.ntut.club/challenges"
		}
		window.open(href);
		return false;
	})
})

//the img hover
$(".About").hover(
   	function() {
		$(".About").css({
			"opacity": "0.2",
			"transition": ".5s"
		});
}, 	function() {
		$(".About").css({
			"opacity": "1.0",
			"transition": ".3s"
		});
})

$(".Project").hover(
   	function() {
		$(".Project").css({
			"opacity": "0.2",
			"transition": ".5s"
		});
}, 	function() {
		$(".Project").css({
			"opacity": "1.0",
			"transition": ".3s"
		});
})

$(".Course").hover(
   	function() {
		$(".Course").css({
			"opacity": "0.2",
			"transition": ".5s"
		});
}, 	function() {
		$(".Course").css({
			"opacity": "1.0",
			"transition": ".3s"
		});
})
