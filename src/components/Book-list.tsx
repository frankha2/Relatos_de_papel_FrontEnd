import { Card } from "primereact/card"

import '../styles/book-list.css'
import { Button } from "primereact/button";
import { useContext, useState } from "react";
import { useCart } from "../hooks/useCart";
import { Books } from "./books";
import { ContextBook } from "./ContextBook";

interface Book {
    id: number;
    title: string;
    genre: string;
    author: string;
    cant?: number;
}

const BookList = () => {

    // const [bookSelected, setBookSelected] = useState<Book[]>([]);

    const { globalList, updateList } = useContext(ContextBook);

    const listBooks = [
        { id: 1, title: 'Memorias de una geisha', genre: '', author: 'Arthur Golden' },
        { id: 2, title: 'El viejo y el mar', genre: 'Sequi', author: 'Ernest Hemi' },
        { id: 3, title: 'Cien años de soledad,', genre: '', author: 'Gabriel García Márquez' },
        { id: 4, title: 'El señor de los anillos', genre: '', author: 'J. R. R. Tolkien' },
        { id: 5, title: 'Orgullo y prejuicio', genre: '', author: 'Jane Austen' },
        { id: 6, title: 'Madame Bovary', genre: '', author: 'Gustave Flaubert' },
        { id: 7, title: 'Hamlet', genre: '', author: 'William Shakespeare' },
        { id: 8, title: 'Lo que el viento se llevó', genre: '', author: 'Margaret Mitchel' },
        { id: 9, title: 'La Odisea', genre: '', author: 'Homero' },
        { id: 10, title: 'El gran Gatsby', genre: '', author: 'F. Scott Fitzgerald' },
    ]; 

    const handleSelection = (book: Book) => {

        updateList((prevBook) => {
            const findBook = prevBook.find(b => b.id === book.id);

            if (findBook) {
                return prevBook.map(b => 
                    b.id === book.id ? {...b, cant: b.cant! + 1 } : b
                );
            } else {

                return [...prevBook, { ...book, cant: 1}];
            }

        });
    }

    console.log(globalList)

    return  (
        <>

            <Card className="items-list">  
                

                { listBooks.map((book) => (
                    <div className="item">

                        <Books 
                            key={book.id}
                            id={book.id}
                            title={book.title}
                            genre={book.genre}
                            author={book.author}
                           
                        />

                        <Button label='Agregar al carrito' onClick={() => handleSelection(book)}/>
                    </div>
                    
                ))}


            </Card>
        </>
        
    )

}

export default BookList