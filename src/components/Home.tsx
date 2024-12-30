import BookList from "./Book-list";
import Footer from "./footer";
import Topbar from "./topbar";

function HomePage() {


    return (
        <>
            <div className='bg-white'>
                <Topbar />
                
                <BookList />

                <Footer />
            </div>
        </>
    )
}

export default HomePage;