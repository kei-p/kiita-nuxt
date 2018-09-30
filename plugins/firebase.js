import firebase from 'firebase';
import config from '~/secrets/firebase';

firebase.initializeApp(config);

export default firebase;
