import Rating from "react-rating";

const Books = ({ books }) => {
  const { image, bName, aName, category, rating } = books;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-[300px]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{bName}</h2>
          <p>Author: {aName}</p>
          <p>Category: {category}</p>
          <Rating initialRating={rating} readonly />
          <div className="card-actions justify-end">
            <button className="btn btn-outline">Borrow Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
