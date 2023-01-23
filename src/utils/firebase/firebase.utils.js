import { initializeApp } from 'firebase/app';
import {
  getAuth, 
  signInWithRedirect, 
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB4d4lOtj98z7-mbiZESdIKeUrTBfZyqRE",
  authDomain: "awesome-rugs-db.firebaseapp.com",
  projectId: "awesome-rugs-db",
  storageBucket: "awesome-rugs-db.appspot.com",
  messagingSenderId: "175294790302",
  appId: "1:175294790302:web:e23f3ac21d184b6304998f"
};


const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);