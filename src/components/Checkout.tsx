import { Card } from "primereact/card";
import '../styles/checkout.css';
import { Button } from "primereact/button";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ContextBook } from "./ContextBook";
import { ModalCart } from "./ModalCart";
import { ItemCart } from "./ItemCart";

interface Data {
    cart: Book[];
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

const Checkout = () => {

    const { globalList } = useContext(ContextBook);
    const navigate = useNavigate();
 
    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Compra realizada con éxito');
        window.location.href = '/home';
    };

    useEffect(() => {
        
        console.log(globalList)
    },  []);

    useEffect(() => {
        
        const timer = setTimeout(() => {
          navigate('/home'); 
        }, 10000); 
    
        return () => clearTimeout(timer);
    }, [navigate]);

    const total = globalList?.reduce((previous, current) => {
        return previous + current?.price * current?.cant;
    }, 0 );

    return (
         <Card className="items-checkout">
            <div className="btn">
                <Link to="/home">
                    <Button >Regresar</Button>
                </Link>
            </div>
            <h2>Formulario de Pago</h2>
            <div className="flex flex-row justify-content-between w-screen p-4">
                
                <div className="content-summary w-6">

                    {globalList.map((item, i) => (

                    <div className="cartCheckout">
                            
                        <img src={item.img} alt={item.name} />
                        <div className="dataCheckout">
                        <div className="left">
                            <p>{item.title}</p>
                            
                        </div>
                            <div className="right">
                                <div>{item.cant}</div>
                                <p>Total: ${item.cant * item.price}</p>
                            </div>
                        </div>
                    </div>

                    ))}
                </div>
                
                <div className="w-6">
                    
                    <form className="flex flex-column align-items-center justify-content-center gap-4 mt-8" onSubmit={handleSubmit}>
                        <div>
                        <label className="pr-4">Nombre:</label>
                        <input
                            type="text"
                            name="name"
                            // value={formData.name}
                            // onChange={handleChange}
                            required
                        />
                        </div>
                        <div>
                        <label className="pr-3">Dirección:</label>
                        <input
                            type="text"
                            name="address"
                            // value={formData.address}
                            // onChange={handleChange}
                            required
                        />
                        </div>
                        <div>
                        <label className="pr-2">Método de pago:</label>
                        <select
                            name="paymentMethod"
                            // value={formData.paymentMethod}
                            // onChange={handleChange}
                            required
                        >
                            <option value="creditCard">Tarjeta de crédito</option>
                            <option value="paypal">PayPal</option>
                        </select>
                        </div>
                        <div>
                        <h3>Total: ${total}</h3>
                        </div>
                        <div className="buttons">
                            <Button type="submit">Pagar</Button>
                        </div>
                    </form>
                </div>
                
            </div>
        </Card>
    )
}

export default Checkout