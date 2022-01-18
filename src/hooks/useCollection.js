import { useState, useEffect, useRef } from 'react'
import { db } from '../firebase/config'

import { collection, onSnapshot, query, where } from 'firebase/firestore'

export const useCollection = (_collection, _query) => {
  const [documents, setDocuments]= useState(null)
  
  // set up query
  const q = useRef(_query).current

  useEffect(()=>{
    
    let ref = collection(db, _collection)
    
    if(q) {
      ref = query(ref, where(...q))
    }
    
    const unsub = onSnapshot(ref, (snapshot)=>{
    
        let results = []
        
        snapshot.docs.forEach((doc)=>{
          results.push({ id: doc.id, ...doc.data()})
        })
        setDocuments(results)
        
      })
      
      return () => unsub()
  },[_collection, q])
  
  return { documents }
}