import { Card } from "primereact/card"
import '../styles/books.css'
import { Link } from "react-router-dom";
import { Button } from "primereact/button";

interface Book {
    id: number;
    title: string;
    genre: string;
    author: string;
    cant?: number;
}

export const Books: React.FC<Book> = ({id, title, genre, author}) => {
    
    const book = {id, title, genre, author};

    return (
        <Card>

            <h3>Libro: {title}</h3>
            <p>Autor: {author}</p>
            <Link to={`/book/${id}`}>
                <Button label='Detalles'/>
            </Link>
        </Card>
    )
}
