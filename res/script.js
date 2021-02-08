
window.onload = function() {
	var navbar_logo = document.getElementById("navbar-logo");
	var navbar = document.getElementById("navbar");

	window.onscroll = function() {
		console.log(document.body.scrollTop);
		if(scrollPos()) {
			navbar.classList.add("nav-scroll");
			navbar_logo.style.height = "48px";
		}
		else {
			navbar.classList.remove("nav-scroll");
			navbar_logo.style.height = "58px";
		}
	};
}

function scrollPos() {
	return typeof window.pageYOffset != 'undefined' ? window.pageYOffset: document.documentElement.scrollTop? document.documentElement.scrollTop: document.body.scrollTop? document.body.scrollTop:0;
}