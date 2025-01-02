import { Card } from "primereact/card"

import '../styles/book-list.css'
import { Button } from "primereact/button";
import { useContext, useEffect } from "react";
import { ContextBook } from "./ContextBook";
import { Books } from "./Books";
import useCart from "../hooks/useCart";

interface Book {
    id: number;
    title: string;
    genre: string;
    author: string;
    price: number;
    cant: number;
    img: string;
}

const BookList = ()=> {

    const { books, addBooks } = useCart();
    const { updateList } = useContext(ContextBook);

    const handleSelection = (book: Book) => {

        updateList((prevBook: any) => {
            const findBook = prevBook.find((b: Book) => b.id === book.id);

            if (findBook) {
                return prevBook.map((b: Book) => 
                    b.id === book.id ? {...b, cant: b.cant! + 1 } : b
                );

            } else {

                return [...prevBook, { ...book, cant: 1}];
            }

        });
    }

    useEffect(() => {
        addBooks();
        
    },  []);

    return  (
       
        books?.length === 0 ? <h1>No hay libros disponibles</h1> :  (

            <Card className="items-list">  

                { books?.map((book: Book) => (
                    <div className="item">

                        <Books 
                            book={book}
                        />

                        <Button label='Agregar al carrito' onClick={() => handleSelection(book)}/>
                    </div>
                    
                ))}

            </Card>
        )
    
    )

}

export default BookList;