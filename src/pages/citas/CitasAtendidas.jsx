import { useAuth0 } from '@auth0/auth0-react';
import TablaCitasAtendidas from '../../components/Table/TablaCitasAtendidas';

const CitasAtendidas = () => {
 
  return (
    
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Citas</h1>
      <TablaCitasAtendidas />
    </div>
);
};

export default CitasAtendidas;
