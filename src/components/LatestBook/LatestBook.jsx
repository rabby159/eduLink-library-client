const LatestBook = () => {
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="grid md:grid-cols-3 gap-5">
        <div className="md:col-span-2">
          <figure>
            <img
              className=""
              src={`https://i.ibb.co/GFB9ZDJ/c627a1bba322232d2dbd3497757bff91.jpg`}
              alt="Album"
            />
          </figure>
        </div>
        <div className="md:col-span-1 flex items-center m-1">
          <div>
            <h2 className="text-4xl font-semibold mb-7">Latest <span className="text-orange-400">release</span> of <span className="text-gray-700">Shakhawat Hossain!</span></h2>
            <p className="text-xl text-justify italic">
              Speaking English, it is important to pronounce words clearly and
              enunciate. Avoid mumbling or speaking too fast, which can make it
              difficult for others to understand you. Practice good
              articulation. While you do not need an extensive vocabulary for
              everyday conversation, it is helpful to have a good grasp of
              common words and phrases. Expanding your vocabulary can make your
              spoken English more expressive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBook;
