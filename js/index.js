var windowsize = $(window).width();


// the windowsize judge
function CheckSize(windowsize) {
	if (windowsize < 768) {
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

	if (windowsize < 820) {
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

	if (windowsize < 486) {
		$('.row p').addClass("displayNone");
	} else {
		$('.row p').removeClass('displayNone');
	}
}

CheckSize(windowsize);

$(window).resize(function () {
	var windowsize = $(window).width();
	CheckSize(windowsize);
});

// the facebook and CTF
$(document).ready(function() {
	$('button').click(function() {
		var href;
		if($(this).val() == "Facebook") {
			href = "https://www.facebook.com/NPC.OwO/";
		} else {
			href = "https://www.ntut.club/challenges"
		}
		window.open(href);
		return false;
	})
})


//the slid click
// $('.contact').click(function () {
// 	$(document).bind('mousewheel', function() { return false; });
// 	$('html,body').animate({ scrollTop: $('#contact').offset().top }, 600);	
	
// 	function scroll(judge) {
// 		$(window).scroll(function() {
// 			var scroll = $(this).scrollTop();
// 			var contantH = $("html").height()
// 			var viewscroll = $(this).height();
// 			if (judge < scroll) {
// 				$(document).unbind('mousewheel');
// 			}
// 			console.log(judge + "mmm");
// 			console.log(scroll + "ddd");
// 			console.log(contantH);
			
// 		})
// 	}

// 	var judge = $("#contact").offset().top;
// 	scroll(judge);
	
// });
