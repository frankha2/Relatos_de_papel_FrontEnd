import './App.css'
import { ContextBook } from './components/ContextBook'
import { useState } from 'react'
import { StoreRouter } from './components/StoreRouter'

interface Book {
  id: number;
  title: string;
  genre: string;
  author: string;
  cantidad?: number;
}

function App() {
  const [globalList, setGlobalList] = useState<Book[]>([]);

  let updateList = (book: Book[]) => {
    setGlobalList(book);
  }

  return (
    <>
      <div>
        <ContextBook.Provider value={{globalList, updateList}}>
          <StoreRouter />
        </ContextBook.Provider>
      </div>
    </>
  )
}

export default App
