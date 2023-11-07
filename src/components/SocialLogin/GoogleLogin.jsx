import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const GoogleLogin = () => {

    const {signInGoogle} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();


    const handleGoogleConnect = (media) =>{
        media()
        .then(res=> {
            Swal.fire("Welcome!", "Login Successful", "success");
            navigate(location?.state ? location.state : '/' );
          })
        .catch(err => {
            Swal.fire("Invalid!", "Provide right email/password", "error");
          })
    }


    return (
        <div>
        <div className="divider">
            <h2 className="font-medium">Connect with</h2>
        </div>
        <div className="flex justify-center">
            <button onClick={() => {handleGoogleConnect(signInGoogle)}} className="btn btn-outline btn-sm">Google</button>
        </div>
    </div>
    );
};

export default GoogleLogin;