/**
	Firebase
*/
var firebaseConfig = {
	apiKey: "AIzaSyBJgSkE-MEvoYobuDV5KTHVLSvTmOjoV10",
	authDomain: "emiga-tech.firebaseapp.com",
	databaseURL: "https://emiga-tech.firebaseio.com",
	projectId: "emiga-tech",
	storageBucket: "emiga-tech.appspot.com",
	messagingSenderId: "690759506484",
	appId: "1:690759506484:web:5870b0c9535291aabe8861",
	measurementId: "G-7CFKSN3R8W"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

(function(sa,fbc){function load(f,c){var a=document.createElement('script');
	a.async=1;a.src=f;var s=document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(a,s);}load(sa);
	window.addEventListener('load',function(){firebase.initializeApp(fbc).performance()});
})('https://www.gstatic.com/firebasejs/7.8.2/firebase-performance-standalone.js', firebaseConfig);