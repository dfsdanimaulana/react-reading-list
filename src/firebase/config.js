// firebase 9
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCdgwYUvwL-E7FYJGHInCb_HTlZT_8N8Hs",
  authDomain: "reading-list-d043c.firebaseapp.com",
  projectId: "reading-list-d043c",
  storageBucket: "reading-list-d043c.appspot.com",
  messagingSenderId: "429467246541",
  appId: "1:429467246541:web:a89b38bc40af3cc29b6e84"
}

// init firebase
initializeApp(firebaseConfig)

// init firestore database
const db = getFirestore()

// inith firebase authentication
const auth = getAuth()

export { db, auth }