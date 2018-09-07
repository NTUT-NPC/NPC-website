var w = $(window).width();

CheckSize(w);

$(window).resize(function() {
    var w = $(window).width();
    CheckSize(w);
});

function CheckSize(w) {
    if (w > 800) {
        $(".img").css({
        	"width": "130px",
        	"margin": "0 30px",
        	"display": "inlin"
        });
    } else if (w <= 800 && w > 400) {
    	$(".img").css({
        	"width": "150px",
        	"margin": "0 20px"
        });
    } else {
    	$(".img").css({
        	"width": "150px",
        	"margin": "0 10px"
        });
    }

    if (w < 500) {
    	$(".AboutContent").removeClass("pl-5");
    	$(".AboutContent").removeClass("pr-5");
    	$(".AboutContent").addClass("pl-3");
    	$(".AboutContent").addClass("pr-3");
    } else {
    	$(".AboutContent").addClass("pl-5");
    	$(".AboutContent").addClass("pr-5");
    	$(".AboutContent").removeClass("pl-3");
    	$(".AboutContent").removeClass("pr-3");
    }
}