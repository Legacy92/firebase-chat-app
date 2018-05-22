import firebase from 'firebase/app';
import 'firebase/database';
import config from '../config';


const app = firebase.initializeApp(config.firbase);

export default firebase.database();