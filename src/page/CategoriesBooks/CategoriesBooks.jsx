import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import CategoriesBook from "./CategoriesBook";

const CategoriesBooks = () => {
  const books = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
        {
            books?.map((book) => <CategoriesBook key={book._id} book={book}></CategoriesBook>)
        }
      </div>
    </div>
  );
};

export default CategoriesBooks;
