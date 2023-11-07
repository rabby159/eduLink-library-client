import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Rating from "react-rating";
import { AiFillRightCircle, AiFillTags, AiOutlineUsergroupAdd } from "react-icons/ai";

const BookDetails = () => {
  const details = useLoaderData();

  const { _id, image, bName, quantity, aName, category, rating } =
    details;

  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <div className="card card-side bg-base-100 shadow-xl my-10 ">
        <figure>
          <img className="h-[500px]"  src={image} alt="book" />
        </figure>
        <div className=" p-10 space-y-3">
          <h2 className="text-5xl font-bold">{bName}</h2>
          <p className="text-xl font-medium">by {aName}</p>
          <p className="text-xl font-medium ">Category: <span className="bg-orange-500 px-2 py-1 text-lg rounded-full text-white">{category}</span></p>
          <Rating initialRating={rating} readonly />
          <div className="flex items-center gap-2">
            <p className="text-orange-400"><AiOutlineUsergroupAdd></AiOutlineUsergroupAdd></p>
            <p>267 user want this</p>
          </div>
          <div className="flex items-center gap-2">
          <p className="text-green-500"><AiFillRightCircle></AiFillRightCircle></p>
          <p>In Stock: {quantity} copies available </p>
          </div>
          <div className="flex items-center gap-2 text-pink-600">
            <p><AiFillTags></AiFillTags></p>
            <p>Member ship fee: 100TK for lifetime</p>
          </div>
          <div className="flex gap-5 pt-10">
            <Link to={`/borrow/${_id}`}><button className="btn btn-outline">Borrow</button></Link>
            <Link to={`/read/${_id}`}><button className="btn btn-outline">Read</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
