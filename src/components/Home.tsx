import { useLocation, useParams } from "react-router-dom";
import BookList from "./Book-list";
import Footer from "./Footer";
import Topbar from "./Topbar";
import { BookDetails } from "./Book-details";
import { useContext, useEffect, useState } from "react";
import { ContextBook } from "./ContextBook";
import useCart from "../hooks/useCart";
import Checkout from "./Checkout";
interface Book {
    id: number;
    title: string;
    genre: string;
    author: string;
    price: number;
    cant: number;
    img: string;
}

function HomePage() {

    const { pathname } = useLocation();
    
    const { globalList } = useContext(ContextBook);
    const [ bookFound, setBookFound ] = useState<Book>();
    const { books, addBooks } = useCart(); 
    
    const {id}  = useParams();
    let book = bookFound || null;

    const setList = () => {
        setBookFound(() => {

            const findBook = books?.find((b: Book) => b.id === Number(id));
           
            if (findBook) {
                return book = findBook;
            }
        });
    }

    useEffect(() => {
        addBooks();

       
        setList();
    },[id]);

    return (
        <>
            <div className='bg-white'>
                <Topbar />

                {pathname === '/home' ? (

                    <BookList booksData={books}/>
                ) : (
                    <BookDetails book={bookFound}/>
                )}

                <Footer />
            </div>
        </>
    )
}

export default HomePage;