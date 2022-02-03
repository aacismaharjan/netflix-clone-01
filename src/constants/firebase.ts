import firebase from 'firebase/app';
import 'firebase/auth';

export const firebaseConfig = {
  apiKey: 'AIzaSyA6qfhNOg54A8Evfe0G2PeRS2h4f81Pt3k',
  authDomain: 'oppa-coding-challenge.firebaseapp.com',
  databaseURL: 'https://oppa-coding-challenge.firebaseio.com',
  projectId: 'oppa-coding-challenge',
  storageBucket: 'oppa-coding-challenge.appspot.com',
  messagingSenderId: '246738910516',
  appId: '1:246738910516:web:155d7bef48ef1f1132f961',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
