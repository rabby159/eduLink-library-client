import { AiFillStar} from "react-icons/ai";

const TopWriter = () => {
  return (
    <div className="bg-slate-300 p-5 my-10">
        <div className="grid md:grid-cols-3 gap-4 max-w-7xl mx-auto">
      <div className="md:col-span-1">
        <div
          className="hero h-[500px]"
          style={{
            backgroundImage: "url(https://i.ibb.co/dcznWYp/unnamed.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-10"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="mt-72">
              <h1 className="mb-2 text-4xl font-bold text-gray-50">
                Jhankar Mahbub
              </h1>
              <p className="mb-5 text-white">
                Author(4x Bestselling in Bangladesh)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:col-span-2 p-10">
        <h2 className="text-4xl font-semibold">Popular Author Books</h2>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
              className="h-[250px]"
                src={`https://i.ibb.co/LxhxV5R/41if-Bt-Ao-Oc-L.jpg`}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="font-bold text-xl">প্রোগ্রামিংয়ের চৌদ্দগোষ্ঠী </h2>
              <div className="flex text-orange-300 gap-1">
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
              className="h-[250px]"
                src={`https://i.ibb.co/VBHHfh6/95512cdf1cf4-128993.jpg`}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="font-bold text-xl">প্রোগ্রামিংয়ের বলদ টু বস </h2>
              <div className="flex text-orange-300 gap-1">
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
              className="h-[250px]"
                src={`https://i.ibb.co/gFNvx5x/31-fjw-O3-TJL.jpg`}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">প্যারাময় লাইফের প্যারাসিটামল </h2>
              <div className="flex text-orange-300 gap-1">
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TopWriter;
