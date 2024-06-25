import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import Peluqueria from "../../assets/Peluqueria.jpg"

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
    <div className="h-screen w-screen flex">
      <div className="w-1/2 h-full bg-cover " style={{backgroundImage: `url(${Peluqueria})` }}>
        
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center gap-24">
        <h1 className="font-poppins text-black text-3xl">Dashboard Peluqueria Anita</h1>
        <button type="button" onClick={handleLogin} className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          <p className="font-poppins text-black">Get Started </p>
        </button>
      </div>
    </div>
  );
}
