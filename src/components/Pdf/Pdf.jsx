

const Pdf = () => {
    
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text({description}, 10, 10);
    doc.save('react_pdf_example.pdf');
  };

  return (
    <div>
      
      
    </div>
  );
};

export default Pdf;

