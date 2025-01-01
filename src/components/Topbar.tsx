import '../styles/topbar.css';
import { ModalCart } from "./ModalCart";

function Topbar() {

    return (
        <>
            <div className="grid header-style">
                <div className="col-fixed" >
                    <h2>Relatos de papel</h2>
                </div>

                <div className="col flex flex-row align-items-center justify-content-end">
                    
                    <ModalCart />
                </div>

            </div>
        </>
    )
    
}

export default Topbar