import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBllphXnX_P6qwCz8UDma8ObhKWR1WFjSA',
  authDomain: 'authapp-cf239.firebaseapp.com',
  projectId: 'authapp-cf239',
  storageBucket: 'authapp-cf239.appspot.com',
  messagingSenderId: '657920867755',
  appId: '1:657920867755:web:bdcbed9480bcacbf96e6ee',
};

firebase.initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');
