// Importamos las funciones necesarias del SDK de Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configuración de tu app de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDs57NayStjURaW7BCKfNRuVLVdCPnW_Zg",
  authDomain: "dashboard-app-sas.firebaseapp.com",
  projectId: "dashboard-app-sas",
  storageBucket: "dashboard-app-sas.firebasestorage.app",
  messagingSenderId: "137398423477",
  appId: "1:137398423477:web:e7b967700d427189b493fc",
  measurementId: "G-VPG09WE163"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exportamos auth y db para poder usarlos en el resto de la app
export const auth = getAuth(app);
export const db = getFirestore(app);