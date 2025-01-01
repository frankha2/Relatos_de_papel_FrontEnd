import { useContext, useState } from "react"
import { ContextBook } from "./ContextBook";
import '../styles/item-cart.css';
import { Button } from "primereact/button";

export const ItemCart = ({item}) => {
    
  const { globalList, updateList } = useContext(ContextBook);
  const { id } = item;

  const handleAdd = (id: number) => {
    
    updateList((prevBook) => {
      
      const findBook = globalList.find(b => b.id === id);
      
      if (findBook) {
        return prevBook.map(b => 
            b.id === id ? {...b, cant: b.cant! + 1 } : b
        );
      } 

    });

  }

  const handleRemove = (id: number) => {

    updateList((prevBook) => {
      const findBook = globalList.find(b => b.id === id);

      if (findBook) {
        return prevBook.map(b =>
          b.id === id ? {...b, cant: b.cant - 1} : b
        );
      }
    });
  }

    return (
      item.cant === 0 ? null : (

      <div className="cartItem">
        
        <img src={item.img} alt={item.name} />
        <div className="dataContainer">
          <div className="left">
            <p>{item.title}</p>
            <div className="buttons">
              <Button  onClick={() => handleAdd(item.id)}>
                AGREGAR
              </Button>
              <Button onClick={() => handleRemove(item.id)}>
                SACAR
              </Button>
            </div>
          </div>
          <div className="right">
            <div>{item.cant}</div>
            <p>Total: ${item.cant * item.price}</p>
          </div>
        </div>
      </div>
      )
      
    )
}