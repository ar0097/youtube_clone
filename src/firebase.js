import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_UZxdwJa93ExEJQO4XD36jW4_GKbcboQ",
  authDomain: "clone-1a13a.firebaseapp.com",
  projectId: "clone-1a13a",
  storageBucket: "clone-1a13a.appspot.com",
  messagingSenderId: "295443323722",
  appId: "1:295443323722:web:2010bd6040f581d3bb3fb3",
  measurementId: "G-59Q8BL9HGQ"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { auth };
