import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { doc, onSnapshot } from "firebase/firestore";
import { collection, addDoc,getDocs,where, setDoc, getFirestore, query } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBO01z3zlMca3HyeZrIe1tptgE_0oGtUNg",
  authDomain: "laboratory-f957c.firebaseapp.com",
  projectId: "laboratory-f957c",
  storageBucket: "laboratory-f957c.appspot.com",
  messagingSenderId: "907713604903",
  appId: "1:907713604903:web:be743a40a517ee15ed4d02",
  measurementId: "G-TPDFE8B59V"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export const addText = async (messageds:any) => {
  try {
    const messagedData = collection (db, "messages");
    await addDoc(messagedData,messageds);
    console.log("Se añadio un comentario")
  } catch (error) {
    console.error(error);
  }
}
export const getText = async () => {

    const querySnapshot =  await getDocs (collection(db, "messages"));
    const messaged :any  = [];

    querySnapshot.forEach((doc:any) => {
      const messages = doc.data();
      messaged.push({
        id:doc.id,
        ...messages
      });
    })
    return messaged
}

export const escuchar = (fn:any) => {
        const q = query(collection(db, "messages"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const message:any = [];
      querySnapshot.forEach((doc) => {
          message.push(doc.data().text);
          console.log(doc.data());
      });
      console.log( message.join(", "));
      fn(message)
    });
}


export default {
  getText,
  addText,
  escuchar
}
