import Swal from "sweetalert2";
import Navbar from "../../components/Navbar/Navbar";

const AddBook = () => {


    const handleAddNewBook = (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const image = form.get('image');
        const bName = form.get('bName'); //book name
        const quantity = form.get('quantity');
        const aName = form.get('aName'); //author name
        const category = form.get('category');
        const description = form.get('description');
        const rating = form.get('rating');


        const newBook = {image, bName, quantity, aName, category, description, rating}
        // console.log(newBook)

        fetch('http://localhost:5000/api/v1/addBook', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newBook)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Your new book added successfully',
                    icon: 'success',
                    confirmButtonText: 'Done'
                  })
                  
            }
            
        })
        


    }

  return (
    <>
    <Navbar></Navbar>
    <div className="max-w-7xl mx-auto my-10 bg-gradient-to-r from-slate-300 to-slate-400 p-5 rounded-md">
      <div className="text-center text-4xl font-bold pb-10">
        <h2>Add New Book</h2>
      </div>

      <div>
        <form onSubmit={handleAddNewBook}>
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
                  required
                  placeholder="https://"
                  className="input input-bordered input-info w-full "
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-10">
              <label className="label">
                <span className="label-text">Book Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="bName"
                  required
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
                <span className="label-text">Quantity</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="quantity"
                  required
                  placeholder="0000"
                  className="input input-bordered input-info w-full "
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-10">
              <label className="label">
                <span className="label-text">Author Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="aName"
                  required
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
                <span className="label-text">Book Category</span>
              </label>
              <label className="input-group">
                <select className="select select-bordered w-full" name="category">
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
            <div className="form-control md:w-1/2 ml-10">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="description"
                  required
                  placeholder="description.."
                  className="input input-bordered input-info w-full "
                />
              </label>
            </div>
          </div>

          {/* 4rd row */}
          <div className="md:flex mb-5">
          <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="rating"
                  required
                  placeholder="rating"
                  className="input input-bordered input-info w-full "
                />
              </label>
            </div>
          </div>

          {/* 5th row */}
          <div>
            <input
              type="submit"
              value="Add Book"
              className="btn btn-outline w-full"
            />
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default AddBook;
