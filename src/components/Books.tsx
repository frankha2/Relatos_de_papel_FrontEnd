import '../styles/books.css'
import { useNavigate } from "react-router-dom";
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

    const navigate = useNavigate();
    
    return (

        <div className="productsContainer">
          
            <div className="product">
                    <img src={book?.img} alt={book?.title}/>
                <div>
                <p>
                    {book?.title} - ${book?.price}
                </p>
                </div>
               
                <Button label='Detalles' onClick={() => { navigate(`/book/${book?.id}` ) }}/>
            
            </div>
        </div>
    )
}
