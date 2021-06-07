const metrika = () => {

	window.addEventListener('scroll', userEventsInit);
	window.addEventListener('mousemove', userEventsInit);

	function userEventsInit() {
		window.removeEventListener('scroll', userEventsInit);
		window.removeEventListener('mousemove', userEventsInit);

		/* Google Tag Manager */
		let metrika = document.createElement("script");
		metrika.innerHTML = `
		(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
			new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
			j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
			'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
			})(window,document,'script','dataLayer','GTM-256886685');
		`;
		document.head.appendChild(metrika);

		//let metrika = document.createElement("script");
		//metrika.src = "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js";
		//metrika.setAttribute("async", "false");
		//document.body.appendChild(metrika);

		//let metrika = document.createElement("link");
		//metrika.rel = "stylesheet";
		//metrika.href = "assets/css/main.css";
		//document.body.appendChild(metrika);

		//let html = '<link rel="stylesheet" type="text/css" \ href="assets/css/main.css" />';
		//document.head.innerHTML += html;
	}
}


export default metrika;