
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDPVpGJkffdo_XtehG4k0xsvLzdDzGT5J8",
  authDomain: "sempro-c6c13.firebaseapp.com",
  projectId: "sempro-c6c13",
  storageBucket: "sempro-c6c13.appspot.com",
  messagingSenderId: "794684506321",
  appId: "1:794684506321:web:0a8a91e03237740a7f85f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;