// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const FIREBASE_CONFIG = {
  apiKey: "xxx",
  authDomain: "xxx",
  projectId: "xxx",
  storageBucket: "xxx",
  messagingSenderId: "xxxx",
  appId: "xxxx",
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
