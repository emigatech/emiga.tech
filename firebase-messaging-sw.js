importScripts('https://www.gstatic.com/firebasejs/7.8.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.8.2/firebase-messaging.js');

firebase.initializeApp({
	apiKey: "AIzaSyBJgSkE-MEvoYobuDV5KTHVLSvTmOjoV10",
	authDomain: "emiga-tech.firebaseapp.com",
	databaseURL: "https://emiga-tech.firebaseio.com",
	projectId: "emiga-tech",
	storageBucket: "emiga-tech.appspot.com",
	messagingSenderId: "690759506484",
	appId: "1:690759506484:web:5870b0c9535291aabe8861",
	measurementId: "G-7CFKSN3R8W"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: 'https://emiga.tech/emiga-logo.png'
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});