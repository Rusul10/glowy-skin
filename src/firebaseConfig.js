import { initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig ={
    apiKey: "AIzaSyDP8tLB9aaLQVjDSWRIIfzyfkw194dabSQ",
    authDomain: "glowy-skin-ad2ad.firebaseapp.com",
    projectId: "glowy-skin-ad2ad",
    storageBucket: "glowy-skin-ad2ad.appspot.com",
    messagingSenderId: "48324461208",
    appId: "1:48324461208:web:6a6119a189f9fa40fd06ed"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)