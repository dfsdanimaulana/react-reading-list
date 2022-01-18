// import { useState } from 'react'
// import { db } from '../firebase/config'
// import { collection, getDocs } from 'firebase/firestore'
import { useCollection } from '../hooks/useCollection'
import { useAuthContext } from '../hooks/useAuthContext'

// components
import BookList from '../components/BookList'
import BookForm from '../components/BookForm'

export default function Home() {
  // const [books, setBooks] = useState(null)
  const { user } = useAuthContext()
  
 const { documents: books } = useCollection(
    'books',
    ['uid', '==', user.uid]
   )
/**
  useEffect(()=>{
    const ref = collection(db, 'books')
    
    getDocs(ref)
      .then((snapshot)=>{
        let results = []
        snapshot.docs.forEach((doc)=>{
          results.push({ id: doc.id, ...doc.data()})
        })
        setBooks(results)
      })
  },[])
**/

// real-time database

  return (
    <div>
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  )
}
