// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAZhBzbnpvmMM-IHnT7LC5fhFJdzPwBKic",
  authDomain: "local-sprite-323206.firebaseapp.com",
  projectId: "local-sprite-323206",
  storageBucket: "local-sprite-323206.appspot.com",
  messagingSenderId: "102985065768",
  appId: "1:102985065768:web:de78886acd9362857c1c1d",
};

firebase.initializeApp(FIREBASE_CONFIG);

// Retrieve firebase messaging
if (firebase.messaging.isSupported()) {
  const messaging = firebase.messaging();

  messaging.onBackgroundMessage(function (payload) {
    console.log("onBackgroundMessage");
    console.log(payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
    };

    console.log(self.registration);

    return self.registration.showNotification(
      notificationTitle,
      notificationOptions
    );
  });
}
