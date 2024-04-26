import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBh5CzwsUrleeTAFjS6INydtEfVov1Hq5A",
  authDomain: "netflix-gpt0424.firebaseapp.com",
  projectId: "netflix-gpt0424",
  storageBucket: "netflix-gpt0424.appspot.com",
  messagingSenderId: "716365759235",
  appId: "1:716365759235:web:64cb05fcb763df18cc9f36",
  measurementId: "G-GFRBW22VN4",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
