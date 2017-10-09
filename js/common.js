$(function() {

	function reloadF6EQ4u0hw(){ var sc = document.getElementById('scF6EQ4u0hw');if (sc) sc.parentNode.removeChild(sc);sc = document.createElement('script');sc.type = 'text/javascript';sc.charset = 'UTF-8';sc.async = true;sc.id='scF6EQ4u0hw';sc.src = 'https://freecurrencyrates.com/ru/widget-vertical?iso=USDEURUAHRUB&df=2&p=F6EQ4u0hw&v=fits&source=fcr&width=300&width_title=0&firstrowvalue=1&thm=dddddd,eeeeee,E78F08,F6A828,FFFFFF,cccccc,ffffff,1C94C4,000000&title=%D0%9A%D0%BE%D0%BD%D0%B2%D0%B5%D1%80%D1%82%D0%B5%D1%80%20%D0%B2%D0%B0%D0%BB%D1%8E%D1%82&tzo=-180';var div = document.getElementById('gcw_mainF6EQ4u0hw');div.parentNode.insertBefore(sc, div);} reloadF6EQ4u0hw();


	


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});



$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
$(window).load(function(){
	$(".recommended_pt li").animated("fadeInRight", "fadeOutRight");
	$(".about_post li").animated("fadeInRight", "fadeOutRight");
	$(".answer li").animated("fadeInRight", "fadeOutRight");
	$(".weight_content li").animated("fadeInRight", "fadeOutRight");
	$(".weight_content img").animated("fadeInRight", "fadeOutRight");
	$(".post_check img").animated("fadeInRight", "fadeOutRight");
	$(".post_check li").animated("fadeInRight", "fadeOutRight");
	$(".bottom_p").animated("fadeInRight", "fadeOutRight");

	

});