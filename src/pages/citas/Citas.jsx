import TablaCitas from "../../components/Table/TablaCitas";

const Citas = () => {
  const { isAuthenticated } = useAuth0();

  return (
   
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Citas</h1>
        <TablaCitas />
      </div>
  );
};

export default Citas;
