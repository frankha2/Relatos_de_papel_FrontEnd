import { useState } from "react";
interface Book {
  id: number;
  title: string;
  genre: string;
  author: string;
  price: number;
  cant: number;
  img: string;
}

const useCart = () => {
  
  const [books, setBooks] = useState<Book[]>();
  const [bookById, setBookById] = useState<Book>();

  const listBooks: Book[] = [
    { id: 1, title: 'Memorias de una geisha', genre: 'Novela', author: 'Arthur Golden', price: 20, cant: 0, img: '../../public/img/memoria_de_una_geisah.jpeg' },
    { id: 2, title: 'El viejo y el mar', genre: 'Novela', author: 'Ernest Hemingway', price: 50, cant: 0, img: '../../public/img/el_viejo_y_el_mar.jpg' },
    { id: 3, title: 'Cien años de soledad', genre: 'Fantasia', author: 'Gabriel García Márquez', price: 10, cant: 0, img: '../../public/img/cien_a_de_soledad.jpeg' },
    { id: 4, title: 'El señor de los anillos', genre: 'Fantasia', author: 'J. R. R. Tolkien', price: 23, cant: 0, img: '../../public/img/el_s_de_los.jpeg' },
    { id: 5, title: 'Orgullo y prejuicio', genre: 'Novela', author: 'Jane Austen', price: 22, cant: 0, img: '../../public/img/orgullo_y_prejuicio.gif' },
    { id: 6, title: 'Madame Bovary', genre: 'Novela', author: 'Gustave Flaubert', price: 15, cant: 0, img: '../../public/img/Madame_Bovary.jpeg' },
    { id: 7, title: 'Hamlet', genre: 'Drama', author: 'William Shakespeare', price: 18, cant: 0, img: '../../public/img/Hamlet.jpeg' },
    { id: 8, title: 'Lo que el viento se llevó', genre: 'Fección historica', author: 'Margaret Mitchel', price: 10, cant: 0, img: '.../../public/img/Lo_que_el_viento_se _llevo.jpg' },
    { id: 9, title: 'La Odisea', genre: 'Historica', author: 'Homero', price: 25, cant: 0, img: '../../public/img/La_Odisea.jpeg' },
    { id: 10, title: 'El gran Gatsby', genre: 'Novela', author: 'F. Scott Fitzgerald', price: 30, cant: 0, img: '.../../public/img/El_gran_Gatsby.jpeg' },
  ];

  const addBooks = () => {
    setBooks(listBooks);
   
  }

  const findById = (id: number) => {
    const bookDetailFound = listBooks?.find((book: Book) => book?.id === id);

    if (bookDetailFound) {
      setBookById(bookDetailFound);
    }

  }

  return {
    addBooks,
    findById,
    bookById,
    books
  };
}

export default useCart;