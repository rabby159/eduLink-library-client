import Rating from "react-rating";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CategoriesBook = ({ book }) => {
  const { _id, image, bName, aName, category, rating } = book;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl h-[500px]">
        <figure>
          <img
          className="h-[300px]"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-xl font-semibold">
            {bName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>Author: {aName}</p>
          <p>Category: {category}</p>
          <Rating initialRating={rating} readonly />
          <div className="card-actions justify-end">
            <Link to={`/details/${_id}`}>
                <button className="badge badge-outline">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

CategoriesBook.propTypes ={
    book: PropTypes.node
}

export default CategoriesBook;
