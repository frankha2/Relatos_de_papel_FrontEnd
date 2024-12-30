import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./login";
import HomePage from "./home";
import { BookDetails } from "./book-details";


export const StoreRouter = () => {
    

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />}/>
                    <Route path='/home' element={<HomePage />}/>
                    <Route path='/book/:id' element={<BookDetails />}/> 
                    <Route path='*' element={<HomePage />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}