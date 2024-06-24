import { Route, Routes } from "react-router-dom";
import Citas from "./pages/citas/Citas";
import Clients from "./pages/clients/Clients";
import NavBar from "./components/NavBar/NavBar";
import CitasAtendidas from "./pages/citas/CitasAtendidas";
import ClientsCitas from "./pages/clients/ClientsCitas";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/citas" element={<Citas />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/clients/:clientId" element={<ClientsCitas />} />
        <Route path="/citasAtendidas" element={<CitasAtendidas />} />
      </Routes>
    </>
  );
}

export default App;
