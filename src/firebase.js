import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCkzW0N3WheBf_zbN29Yu6pWTzJx3ZQvnw",
  authDomain: "engate-e45b9.firebaseapp.com",
  databaseURL: "https://engate-e45b9.firebaseio.com",
  projectId: "engate-e45b9",
  storageBucket: "",
  messagingSenderId: "25927699579"
};

export const firebaseApp = firebase.initializeApp(config);
