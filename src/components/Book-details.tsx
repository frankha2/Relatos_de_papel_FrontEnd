import { useContext, useEffect, useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import '../styles/book-details.css';
import { ContextBook } from "./ContextBook";
import { Link } from "react-router-dom";
interface Data {
    book: Book;
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

interface Car {
    remove: (id: number) => void;
}

export const BookDetails: React.FC<Data> = (book) => {
    
    const [details, setDetails] = useState<Book>();
    const { globalList, updateList } = useContext(ContextBook);

    const header = (
        <div className="btn">
            <Link to="/home">
                <Button >Regresar</Button>
            </Link>
        </div>
    );

    const handleAdd = (id: number) => {
    
        updateList((prevBook) => {
            
            const findBook = globalList?.find(b => b.id === id);
            
            if (findBook) {
            return prevBook.map(b => 
                b.id === id ? {...b, cant: b.cant! + 1 } : b
            );
            } 

        });

    }

    const handleRemove = (id: number) => {

        updateList((prevBook) => {
          const findBook = globalList?.find(b => b.id === id);
    
          if (findBook) {
            return prevBook.map(b =>
              b.id === id ? {...b, cant: b.cant - 1} : b
            );
          }
        });
      }

    useEffect(() => {
        setDetails(book.book);

    }, [book]);
    
    return (
        // <h2>Hola</h2>
        // book ? null : (
            <Card className="h-screen items-container" header={header}>
                <h3>Detalles del libro</h3>
                <img src={book?.book?.img} alt={details?.title}/>
                <h3>Libro: {book?.book?.title}</h3>
                <p>Autor: {book?.book?.author}</p>
                <p>Genero: {book?.book?.genre}</p>
                
                <div className="buttons">
                    <Button onClick={() => handleAdd(book?.book?.id)}>
                        AGREGAR
                    </Button>
                    <Button onClick={() => handleRemove(book?.book?.id)}>
                        SACAR
                    </Button>
                </div>
            </Card>
        // ) 
       
    )
}