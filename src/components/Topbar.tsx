import { useContext, useEffect, useState } from "react";
import { Button } from "primereact/button";

import { useCart } from "../hooks/useCart";
import { ContextBook } from "./ContextBook";
import { ModalCart } from "./ModalCart";

interface Book {
    id: number;
    title: string;
    genre: string;
    author: string;
    cant?: number;
}

function Topbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    let arrayBooks: Book[] = [];

    const handleMenu = () => {
        setIsMenuOpen(true);
    }
    const handleClose = () => {
        setIsMenuOpen(false);
    }

    return (
        <>
            <div className="grid bg-primary">
                <div className="col-fixed" >
                    <h2>Relatos de papel</h2>
                </div>

                <div className="col flex flex-row align-items-center justify-content-center column-gap-4">
                    <h2>algo</h2>
                    <Button label={`Carrito ${'as'}`} onClick={handleMenu} />
                </div>


                <ModalCart openModal={isMenuOpen} closeModal={handleClose}/>
            </div>
        </>
    )
    
}

export default Topbar