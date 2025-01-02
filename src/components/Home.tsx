import { useLocation } from "react-router-dom";
import BookList from "./Book-list";
import Footer from "./Footer";
import Topbar from "./Topbar";
import { BookDetails } from "./Book-details";

function HomePage() {

    const { pathname } = useLocation();

    return (
        <>
            <div className='bg-white'>
                <Topbar />

                {pathname === '/home' ? (

                    <BookList />

                ) : (
                    <BookDetails />
                )}

                <Footer />
            </div>
        </>
    )
}

export default HomePage;