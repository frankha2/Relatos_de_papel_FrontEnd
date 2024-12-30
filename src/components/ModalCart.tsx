import { useContext, useEffect } from 'react';
import '../styles/modal-cart.css';
import { ContextBook } from './ContextBook';

interface Car {
    openModal?: boolean;
    closeModal?: () => void;
    // remove: (id: number) => void;
    bookDetails?: Book[];
}

interface Book {
    id: number;
    title: string;
    genre: string;
    author: string;
    cantidad?: number;
}

export const ModalCart: React.FC<Car> = ({openModal, closeModal}) => {
    if (!openModal) return null;
    const { globalList } = useContext(ContextBook);
    // const { totalBooks, addBook, cart, removeBook } = useCart();

    useEffect(() => {

        
        console.log(globalList)
    }), [globalList];


    // const total = bookDetails.reduce((count, libro) => count + libro.cant * libro.price!, 0);

    return (
        <div className="fixed flex align-items-center justify-center left-50 w-max h-30rem bg-black bg-opacity-50 border-round">
            <div className="bg-white p-4 rounded-lg">
                <div className="flex flex-row align-items-center justify-content-between column-gap-3">
                    <h1 className="text-2xl text-black-alpha-90">Carrito de compras</h1>
                    <button onClick={closeModal}>X</button>
                </div>
                <ul>
                    {globalList!.map(book => (
                        <li key={book.id} className="flex justify-between items-center text-100">
                            <p>{book.title}</p>
                            <p>{book.cant}</p>
                            <p>${book.price}</p>
                            {/* <button onClick={() => remove(book.id)}>X</button> */}
                        </li>
                    ))}
                </ul>
                {/* <p>Total: ${total}</p> */}
            </div>
        </div>
    )
}