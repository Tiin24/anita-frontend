import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const navigate = useNavigate();
  
    const handleLogin = () => {
      loginWithRedirect();
    };
  
    if (isAuthenticated) {
      navigate("/citas");
    }
  
    return (
    <div>
        <h1>Peluqueria Anita</h1>
        <button onClick={handleLogin}>
        <p>Get Started </p>
      </button>
    </div>
  )
}
