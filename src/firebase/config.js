import {getFirestore} from 'firebase/firestore'
import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyBQfridiG_1FO7cnkMKHGs0gf-cjZoAnyc",
    authDomain: "need-it-got-it-989df.firebaseapp.com",
    projectId: "need-it-got-it-989df",
    storageBucket: "need-it-got-it-989df.appspot.com",
    messagingSenderId: "581572068178",
    appId: "1:581572068178:web:30d66fb31a1599ec7ab08b"
};

initializeApp(firebaseConfig)

const db = getFirestore()
const auth = getAuth()

export {db, auth}

