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
   
/**
   	Init Firebase Notification
*/
const messaging = firebase.messaging();

// init
messaging
    .requestPermission()
    .then(function () {
    
       	messaging.getToken().then((currentToken) => {
  			console.log('[EmiGa Notifications - Success] =>', currentToken);
        })
        .catch((err) => {
  			console.log('An error occurred while retrieving token. ', err);
		});
    })
       
.catch(function (err) {
    console.log("Unable to get permission to notify.", err);
});

// on message    
messaging.onMessage(function(payload) {
    console.log("Message received. ", payload);
});

// on token refresh
messaging.onTokenRefresh(() => {
  	messaging.getToken().then((refreshedToken) => {
    	console.log('Token refreshed. '+refreshedToken);
  	})
  	.catch((err) => {
    	console.log('Unable to retrieve refreshed token ', err);
 	});
});