import { useContext } from "react"
import { ContextBook } from "./ContextBook";
import '../styles/item-cart.css';
import { Button } from "primereact/button";

interface Book {
  id: number;
  title: string;
  genre: string;
  author: string;
  price: number;
  cant: number;
  img: string;
}

export const ItemCart = ({item}: { item: Book }) => {
    
  const { globalList, updateList } = useContext(ContextBook);

  const handleAdd = (id: number) => {
    
    updateList((prevBook: any) => {
      
      const findBook = globalList.find((b: Book) => b.id === id);
      
      if (findBook) {
        return prevBook.map((b: Book) => 
            b.id === id ? {...b, cant: b.cant! + 1 } : b
        );
      } 

    });

  }

  const handleRemove = (id: number) => {

    updateList((prevBook: any) => {
      const findBook = globalList.find((b: Book) => b.id === id);

      if (findBook) {
        return prevBook.map((b: Book) =>
          b.id === id ? {...b, cant: b.cant - 1} : b
        );
      }
    });
  }

    return (
      item.cant === 0 ? null : (

      <div className="cartItem">
        
        <img src={item?.img} alt={item?.title} />
        <div className="dataContainer">
          <div className="left">
            <p>{item?.title}</p>
            <div className="buttons">
              <Button  onClick={() => handleAdd(item?.id)}>
                AGREGAR
              </Button>
              <Button onClick={() => handleRemove(item?.id)}>
                SACAR
              </Button>
            </div>
          </div>
          <div className="right">
            <div>{item?.cant}</div>
            <p>Total: ${item?.cant * item?.price}</p>
          </div>
        </div>
      </div>
      )
      
    )
}