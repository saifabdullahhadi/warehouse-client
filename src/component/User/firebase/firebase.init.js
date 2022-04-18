import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const InitializeAuthentication = () => {
    // Firebase initilizing
    initializeApp(firebaseConfig);
}

export default InitializeAuthentication;