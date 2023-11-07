import Rating from "react-rating";

const CategoriesBook = ({ book }) => {
  const { image, bName, aName, category, rating } = book;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl h-[440px]">
        <figure>
          <img
          className="h-[300px]"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {bName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>Author: {aName}</p>
          <p>Category: {category}</p>
          <Rating initialRating={rating} readonly />
          <div className="card-actions justify-end">
            <button className="badge badge-outline">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesBook;
