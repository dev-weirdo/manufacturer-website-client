import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBdPGg0TrASnApVLEYmiuSC13Vcgiv1TkY",
    authDomain: "electools-45162.firebaseapp.com",
    projectId: "electools-45162",
    storageBucket: "electools-45162.appspot.com",
    messagingSenderId: "814515274383",
    appId: "1:814515274383:web:9b0fb61cb923fea69326fa"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;