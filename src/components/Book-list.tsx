import { Card } from "primereact/card"

import '../styles/book-list.css'
import { Button } from "primereact/button";
import { useContext, useEffect, useState } from "react";
import { ContextBook } from "./ContextBook";
import { Books } from "./Books";
import useCart from "../hooks/useCart";

interface Data {
    booksData: Book[];
}
interface Book {
    id: number;
    title: string;
    genre: string;
    author: string;
    price: number;
    cant: number;
    img: string;
}

const BookList: React.FC<Data> = (booksData)=> {

    const listBooks: Book[] = booksData.booksData;
    const { updateList } = useContext(ContextBook);
    const [books, setBooks] = useState<Book[]>();

    const handleSelection = (book: Book) => {

        updateList((prevBook) => {
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
        
        setBooks(booksData.booksData);
      
    },  [booksData]);

    return  (

        <Card className="items-list">  

            { booksData?.booksData?.map((book: Book) => (
                <div className="item">

                    <Books 
                        book={book}
                    />

                    <Button label='Agregar al carrito' onClick={() => handleSelection(book)}/>
                </div>
                
            ))}

        </Card>
       
        
    )

}

export default BookList