var windowsize = $(window).width();

function CheckSize(windowsize) {
	if (windowsize < 768) {
		$('#navbarItem ul').removeClass('LineBorder');
	} else {
		$('#navbarItem ul').addClass('LineBorder');
	}
}

CheckSize(windowsize);

$(window).resize(function() {
	var windowsize = $(window).width();
	CheckSize(windowsize);
});



