import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import HomePage from "./Home";
import { BookDetails } from "./Book-details";
import { useState } from 'react'
import { ContextBook } from "./ContextBook";
import Checkout from "./Checkout";

interface Book {
    id: number;
    title: string;
    genre: string;
    author: string;
    cantidad?: number;
}

export const StoreRouter = () => {
    const [globalList, setGlobalList] = useState<Book[]>([]);

    let updateList = (book: Book[]) => {
      setGlobalList(book);
    }

    return (
        <>
            <BrowserRouter>
                    <ContextBook.Provider value={{globalList, updateList}}>
                        <Routes>
                            <Route path="/" element={<Login />}/>
                            <Route path='/home' element={<HomePage />}/>
                            <Route path='/check' element={<Checkout />}/>
                            <Route path='/book/:id' element={<HomePage />}/> 
                            <Route path='*' element={<HomePage />}/>
                        </Routes>
                    </ContextBook.Provider>
            </BrowserRouter>
        </>
    )
}