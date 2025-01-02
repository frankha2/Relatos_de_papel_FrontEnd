import '../styles/books.css'
import { Link } from "react-router-dom";
import { Button } from "primereact/button";
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

export const Books: React.FC<Data> = (bookData) => {

    const { book } = bookData; 
    
    return (

        <div className="productsContainer">
          
            <div className="product">
                    <img src={book?.img} alt={book?.title}/>
                <div>
                <p>
                    {book?.title} - ${book?.price}
                </p>
                </div>
                <Link to={`/book/${book?.id}`}>
                    <Button label='Detalles'/>
                </Link>
            </div>
        </div>
    )
}
