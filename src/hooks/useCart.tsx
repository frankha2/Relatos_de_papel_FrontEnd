import { useContext, useEffect, useState } from "react";
import { ContextBook } from "../components/ContextBook";

interface Book {
    id: number;
    title: string;
    genre: string;
    author: string;
    cant?: number;
}

export const useCart = (book: Book ) => {

  const [bookSelected, setBookSelected] = useContext(ContextBook);

  const handleSelection = (book: Book) => {

    setBookSelected((prevBook) => {
      const findBook = prevBook.find(b => b.id === book.id);

      if (findBook) {
          return prevBook.map(b => 
              b.id === book.id ? {...b, cant: b.cant! + 1 } : b
          );
      } else {

      return [...prevBook, { ...book, cant: 1}];
    }

  });

  console.log(bookSelected)

  useEffect(() => {
    handleSelection(book);
  }), [book];

}
//   return {
//     cart,
//     addToCart,
//     removeFromCart,
//     getTotalBooks,
//   };
}