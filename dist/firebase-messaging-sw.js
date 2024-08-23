importScripts('https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyAgkl94QmYAAfz4xGRdyQNCWMOBU5ZYhQk",
  authDomain: "appsuperbet-33e39.firebaseapp.com",
  projectId: "appsuperbet-33e39",
  storageBucket: "appsuperbet-33e39.appspot.com",
  messagingSenderId: "313043480351",
  appId: "1:313043480351:web:79f63add28ae0ccc984a2a",
  measurementId: "G-JZKH24GDLT"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/favicon.ico'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
