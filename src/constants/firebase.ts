import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// export const firebaseConfig = {
//   apiKey: 'AIzaSyA6qfhNOg54A8Evfe0G2PeRS2h4f81Pt3k',
//   authDomain: 'oppa-coding-challenge.firebaseapp.com',
//   databaseURL: 'https://oppa-coding-challenge.firebaseio.com',
//   projectId: 'oppa-coding-challenge',
//   storageBucket: 'oppa-coding-challenge.appspot.com',
//   messagingSenderId: '246738910516',
//   appId: '1:246738910516:web:155d7bef48ef1f1132f961',
// };

export const firebaseConfig = {
  apiKey: 'AIzaSyAfFSgGeLV1ykylGjrmMJEZHvUhF_ou8vk',
  authDomain: 'basic-netflix-2e13d.firebaseapp.com',
  projectId: 'basic-netflix-2e13d',
  storageBucket: 'basic-netflix-2e13d.appspot.com',
  messagingSenderId: '944683655157',
  appId: '1:944683655157:web:a9c6280e8c7833b4f10abc',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
