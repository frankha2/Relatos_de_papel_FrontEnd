import { useLocation, useParams } from "react-router-dom";

export const BookDetails = () => {
    const location = useLocation();
    const {id}  = useParams();

    const query = new URLSearchParams(location.search);
    
    console.log(id);

    return (
        <div>
            
        </div>
    )
}