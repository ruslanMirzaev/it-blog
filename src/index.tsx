import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAo4yznXh-UCYsfIxTdf3IMUKaRMlsthII",
    authDomain: "blog-ff790.firebaseapp.com",
    projectId: "blog-ff790",
    storageBucket: "blog-ff790.appspot.com",
    messagingSenderId: "791523754489",
    appId: "1:791523754489:web:7dfa3916526d12b4b2fd28",
    measurementId: "G-KPEVMK1FCJ"
};


initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
