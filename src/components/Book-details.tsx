import { useContext, useEffect, useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import '../styles/book-details.css';
import { ContextBook } from "./ContextBook";
import { Link, useNavigate } from "react-router-dom";
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

export const BookDetails: React.FC<Data> = (book) => {
    const navigate = useNavigate();
    const [details, setDetails] = useState<Book>();
    const { globalList, updateList } = useContext(ContextBook);

    const header = (
        <div className="btn">
            <Link to="/home">
                <Button >Regresar</Button>
            </Link>
        </div>
    );

    const handleAdd = (book: Book) => {

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

    const handleRemove = (id: number) => {

        updateList((prevBook) => {
            const findBook = globalList?.find(b => b?.id === id);
            console.log(findBook, prevBook);
            if (findBook) {

              return prevBook?.map(b =>
                b?.id === id && b?.cant > 0 ? {...b, cant: b?.cant - 1} : b
              );
            }
        });

    }

    useEffect(() => {
        setDetails(book.book);
    }, [book]);

    useEffect(() => {
        
        const timer = setTimeout(() => {
          navigate('/home'); 
        }, 10000); 
    
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        // <h2>Hola</h2>
        // book ? null : (
            <Card className="h-screen items-container" header={header}>
                <h3>Detalles del libro</h3>
                <img src={book?.book?.img} alt={book?.book?.title}/>
                <h3>Libro: {book?.book?.title}</h3>
                <p>Autor: {book?.book?.author}</p>
                <p>Genero: {book?.book?.genre}</p>
                
                <div className="buttons">
                    <Button onClick={() => handleAdd(book?.book)}>
                        AGREGAR
                    </Button>

                    <Button disabled={globalList.length === 0} onClick={() => handleRemove(book?.book?.id)}>
                        SACAR
                    </Button>
                </div>
            </Card>
        // ) 
       
    )
}