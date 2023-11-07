import Rating from "react-rating";
import PropTypes from "prop-types";

const Books = ({ books }) => {
  const { image, bName, aName, category, rating } = books;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl h-[500px]">
        <figure>
          <img className="h-[300px]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{bName}</h2>
          <p>Author: {aName}</p>
          <p>Category: {category}</p>
          <Rating initialRating={rating} readonly />
          <div className="card-actions justify-end">
            <button className="btn btn-outline">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Books.propTypes = {
    books: PropTypes.node
}

export default Books;
