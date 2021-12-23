import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxdkSCiVt9JtD0txIDF8UwmoZzZha_4dg",
  authDomain: "movie-app-1-d4666.firebaseapp.com",
  projectId: "movie-app-1-d4666",
  storageBucket: "movie-app-1-d4666.appspot.com",
  messagingSenderId: "23007723138",
  appId: "1:23007723138:web:94ee6b7b3cd4ebc34bfe9b",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
