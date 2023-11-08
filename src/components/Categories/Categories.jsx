import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    fetch(`https://edu-link-library-server.vercel.app/api/v1/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-center mt-10 font-bold text-4xl">
        Top Books Categories
      </h2>

      <div className="my-10">
        {categories?.map((category) => (
          <CategoryCard key={category._id} category={category}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Categories;
