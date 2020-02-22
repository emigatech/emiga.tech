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
messaging.setBackgroundMessageHandler(function (payload) {
  console.log('Handling background message ', payload);

  return self.registration.showNotification(payload.data.title, {
    body: payload.data.body,
    icon: payload.data.icon,
    tag: payload.data.tag,
    data: payload.data.link
  });
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(self.clients.openWindow(event.notification.data));
});