import { useAuth0 } from "@auth0/auth0-react";
import TablaCitas from "../../components/Table/TablaCitas";

const Citas = () => {
  const { isAuthenticated } = useAuth0();

  return (
    (isAuthenticated && (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Citas</h1>
        <TablaCitas />
      </div>
    )) || (
      <div className="flex justify-center items-center ">
        <h2>Error: Debes logiarte para ingresar a este sitio</h2>
      </div>
    )
  );
};

export default Citas;
