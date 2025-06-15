import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAsGlKCNXzGL-bE2n95GlWameSfjgSI24",
  authDomain: "makondo-steel-limited.firebaseapp.com",
  projectId: "makondo-steel-limited",
  storageBucket: "makondo-steel-limited.firebasestorage.app",
  messagingSenderId: "811432586001",
  appId: "1:811432586001:web:3b9e84175534f0a76b7ab0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Collection name for quote requests
const COLLECTION_NAME = "quote-requests";

/**
 * Submit a new quote request to Firestore
 * @param {Object} quoteData - The quote request data
 * @returns {Promise<string>} - The document ID of the created request
 */
export const submitQuoteRequest = async (quoteData) => {
  try {
    // Add timestamp and initial status
    const dataToSubmit = {
      ...quoteData,
      timestamp: serverTimestamp(),
      status: "pending",
      createdAt: new Date().toISOString(),
      submissionDate: new Date().toLocaleDateString(),
      submissionTime: new Date().toLocaleTimeString(),
    };

    const docRef = await addDoc(collection(db, COLLECTION_NAME), dataToSubmit);
    console.log("Quote request submitted with ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error submitting quote request:", error);
    throw error;
  }
};

export default app;
