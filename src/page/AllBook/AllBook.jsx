import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Books from "./Books";


const AllBook = () => {

    const allBooks = useLoaderData();
    console.log(allBooks)

    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <h2 className="text-4xl font-semibold mb-7 my-10">All Books are Here!</h2>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
            {
                allBooks.map((books) => (<Books key={books._id} books={books}></Books>))
            }
           </div>
        </div>
    );
};

export default AllBook;