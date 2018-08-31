var windowsize = $(window).width();

// the windowsize judge
function CheckSize(windowsize) {
	if (windowsize < 768) {
		$('#navbarItem ul').removeClass('LineBorder');
	} else {
		$('#navbarItem ul').addClass('LineBorder');
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

$(window).resize(function() {
	var windowsize = $(window).width();
	CheckSize(windowsize);
});

//the slid click
 $('.contant').click(function(){
        $('html,body').animate({scrollTop:$('#contant').offset().top}, 1200);
    });


