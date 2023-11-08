import Swal from "sweetalert2";
import Navbar from "../../components/Navbar/Navbar";
import { useLoaderData } from "react-router-dom";

const UpdateBook = () => {

    const books = useLoaderData();
    // console.log(books)

    const {_id, image, bName, aName, category, rating} = books;

    const handleUpdate = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const image = form.get('image')
        const bName = form.get('bName')
        const aName = form.get('aName')
        const category = form.get('category')
        const rating = form.get('rating')

        const updateBook = {image, bName, aName, category, rating};


        fetch(`http://localhost:5000/api/v1/update/${_id}`, {
            method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updateBook)
        })
        .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Your update product successfully',
                    icon: 'success',
                    confirmButtonText: 'Done'
                  })
            }
          });

    }


  return (
    <>
    <Navbar></Navbar>
      <div className="max-w-7xl mx-auto my-10 bg-gradient-to-r from-slate-300 to-slate-400 p-5 rounded-md">
        <div className="text-center text-4xl font-bold pb-10">
          <h2>Update Book</h2>
        </div>

        <div>
          <form onSubmit={handleUpdate}>
            {/* 1st row */}
            <div className="md:flex mb-5">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="image"
                    defaultValue={image}
                    placeholder="https://"
                    className="input input-bordered input-info w-full "
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 md:ml-10">
                <label className="label">
                  <span className="label-text">Book Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="bName"
                    defaultValue={ bName}
                    placeholder="Type here"
                    className="input input-bordered input-info w-full "
                  />
                </label>
              </div>
            </div>

            {/* 2st row */}
            <div className="md:flex mb-5">
            <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Book Category</span>
                </label>
                <label className="input-group">
                  <select
                    className="select select-bordered w-full"
                    name="category"
                    defaultValue={category}
                  >
                    <option disabled selected>
                      Category
                    </option>
                    <option>Mystery & Thriller</option>
                    <option>Science Fiction & Fantasy</option>
                    <option>Non-Fiction</option>
                    <option>Historical Fiction</option>
                  </select>
                </label>
              </div>
              <div className="form-control md:w-1/2 md:ml-10">
                <label className="label">
                  <span className="label-text">Author Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="aName"
                    defaultValue={aName}
                    placeholder="Type here"
                    className="input input-bordered input-info w-full "
                  />
                </label>
              </div>
            </div>

            {/* 3rd row */}
            <div className="md:flex mb-5">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="rating"
                    defaultValue={rating}
                    placeholder="rating"
                    className="input input-bordered input-info w-full "
                  />
                </label>
              </div>
            </div>

            {/* 4th row */}
            <div>
              <input
                type="submit"
                value="Submit"
                className="btn btn-outline w-full"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateBook;
