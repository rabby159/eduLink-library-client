import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { image, category_name } = category;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl mb-5">
        <figure>
          <img
          className="w-[200px] h-[200px]"
            src={image}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{category_name}</h2>
          <p>If you feel you want to read {category_name} types categories books then order your books.</p>
          <div className="card-actions justify-end">
            <Link to={`/relevantBooks/${category_name}`}>
                <button className="btn btn-outline">Show relevant books</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.array,
};

export default CategoryCard;
