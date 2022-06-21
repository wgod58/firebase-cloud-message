import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase/compat/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAZhBzbnpvmMM-IHnT7LC5fhFJdzPwBKic",
  authDomain: "local-sprite-323206.firebaseapp.com",
  projectId: "local-sprite-323206",
  storageBucket: "local-sprite-323206.appspot.com",
  messagingSenderId: "102985065768",
  appId: "1:102985065768:web:de78886acd9362857c1c1d",
};
const app = firebase.initializeApp(firebaseConfig);

const messaging = getMessaging(app);

getToken(messaging, {
  vapidKey:
    "BDNiocAHZTO7KGBWpUr57fJ-6PbNr_LhxM0gJpCwjyaXi6m2xuy7FkBRMy_uddQPvq8X_M2mI2kS3F7A6aBHSZA",
})
  .then((currentToken) => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      // ...
      console.log(currentToken);
    } else {
      // Show permission request UI
      console.log(
        "No registration token available. Request permission to generate one."
      );
      // ...
    }
  })
  .catch((err) => {
    console.log("An error occurred while retrieving token. ", err);
    // ...
  });

onMessage(messaging, (payload) => {
  console.log("Message received. ", payload);
  // ...
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
