$(document).ready(function () {
    
    AOS.init();
    
    $('#slide-toggle').click(function(){
        $('.overlay').fadeToggle(50);
        
        $('#menu-slider').toggleClass('hide');
        $('#main-warapper').toggleClass('left');
        
        $('body').toggleClass('no-scroll');
    });  
    
    $('.overlay').click(function () {
        $(this).fadeToggle(50);
    
        $('#menu-slider').toggleClass('hide');
        $('#main-warapper').toggleClass('left');
        
        $('body').toggleClass('no-scroll');
    });
});

// CHARGEMENT
setTimeout(() => {
	const preloader = document.querySelector(".preloader");
	preloader.classList.add('fondu-out');
setTimeout(() => {
	preloader.style.display = "none";
}, 500);
}, 2070);

// TRANSITION
window.addEventListener("load", function() {
	document.body.classList.add("active");
});

document.addEventListener("DOMContentLoaded", function() {
var links = document.querySelectorAll("a");

for (var i = 0; i < links.length; i++) {
	var link = links[i];
	var target = link.getAttribute("target");

if (target !== "_blank") {
	link.addEventListener("click", function(event) {
		event.preventDefault();
            var href = this.getAttribute("href");
            document.body.classList.remove("active");
            setTimeout(function() {
            	window.location.href = href;
            }, 500);
        });
}
}
});
