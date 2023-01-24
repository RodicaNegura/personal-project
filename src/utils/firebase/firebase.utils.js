import { initializeApp } from 'firebase/app';
import {
  getAuth, 
  signInWithRedirect, 
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB4d4lOtj98z7-mbiZESdIKeUrTBfZyqRE",
  authDomain: "awesome-rugs-db.firebaseapp.com",
  projectId: "awesome-rugs-db",
  storageBucket: "awesome-rugs-db.appspot.com",
  messagingSenderId: "175294790302",
  appId: "1:175294790302:web:e23f3ac21d184b6304998f",
};


const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  if(!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);


  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user, error.message');
    }
  }
  return userDocRef;
};

export const createAuthWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
  
  return await createUserWithEmailAndPassword(auth, email, password);
};
