import { useLoaderData } from "react-router-dom";
import jsPDF from "jspdf";
import Navbar from "../../components/Navbar/Navbar";

const Read = () => {
  const pdfReads = useLoaderData();

  const { description, bName, image } = pdfReads;
  // console.log(description)

  const string = JSON.stringify(description);
  console.log(string);

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text(string, 10, 10);
    doc.save("react_pdf_example.pdf");
  };

  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <p className="text-lg font-medium text-red-500 text-center mt-10">
        Reading...
      </p>
      <h1 className="text-center text-4xl font-semibold">{bName}</h1>

      <div className="card mt-10">
        <figure>
          <img
          className="h-[500px]"
            src={image}
            alt="car!"
          />
        </figure>
        <div className="card-body text-center">
          
          <p className="text-blue-500">If you want to read please download pdf</p>
          <div className="card-actions justify-center">
          <button className="btn btn-error" onClick={generatePDF}>
        Download PDF
      </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Read;
