import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <>
        <div className=" flex justify-center">
            <img className="max-h-[90vh]" src={`https://i.ibb.co/XVgSY0D/20824299-6373669.jpg`} alt="" />
        </div>
        <div className=" flex justify-center">
        <Link to='/'><button className="btn btn-info mb-10">Go Home</button></Link>
        </div>
        </>
    );
};

export default ErrorPage;