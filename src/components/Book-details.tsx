import { useContext, useEffect, useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import '../styles/book-details.css';
import { ContextBook } from "./ContextBook";
import { Link, useNavigate, useParams } from "react-router-dom";
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

export const BookDetails = () => {

    const { id }  = useParams();
    const navigate = useNavigate();
    const { bookById, findById } = useCart();
    const [ inactive, setInactive ] = useState(false);
    const { globalList, updateList } = useContext(ContextBook);
    const idBook: number = Number(id);
    let isButtonShow: boolean = false;

    const header = (
        <div className="btn">
            <Link to="/home">
                <Button >Regresar</Button>
            </Link>
        </div>
    );

    const findBook = (id: number) => {
        findById(id);
        
    }

    const handleAdd = (book: Book) => {
        

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

    const handleRemove = (id: number) => {

        updateList((prevBook: any) => {
            const findBook = globalList?.find((b: Book) => b?.id === id);
            
            if (findBook) {

              return prevBook?.map((b: Book) =>
                b?.id === id && b?.cant > 0 ? {...b, cant: b?.cant - 1} : b
              );
            }
        });

    }

    useEffect(() => {
        findBook(idBook);
    }, [id]);

    useEffect(() => {

        const a = globalList.find((b: Book) => b.id === idBook);  
        
        if (a) {
            isButtonShow = a?.cant === 0 ? false : true;
        }

        const timer = setTimeout(() => {
            setInactive(true); 
        }, 10000); 

        return () => clearTimeout(timer);

    }, [globalList]);

    useEffect(() => {
        
        if (inactive === true) {
            navigate('/home');
        }

    }, [inactive]);

    return (
        !bookById ? null : (
            <Card className="h-screen items-container" header={ header }>
                <h3>Detalles del libro</h3>
                <img src={ bookById?.img } alt={ bookById?.title }/>
                <h3>Libro: { bookById?.title }</h3>
                <p>Autor: { bookById?.author }</p>
                <p>Genero: { bookById?.genre }</p>
                
                <div className="buttons">
                    <Button onClick={() => handleAdd(bookById)}>
                        AGREGAR
                    </Button>

                    <Button disabled={isButtonShow} onClick={() => handleRemove(bookById?.id)}>
                        SACAR
                    </Button>
                </div>
            </Card>
        ) 
    )
}