// src/components/NavBar/NavBar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import ModalNuevoCliente from "../Modal/ModalClient";
import ModalNuevaCita from "../Modal/ModalNuevaCita";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalClienteOpen, setIsModalClienteOpen] = useState(false);
  const [isModalCitaOpen, setIsModalCitaOpen] = useState(false);

  const { logout } = useAuth0();

  const handleModalClienteOpen = () => {
    setIsModalClienteOpen(true);
  };

  const handleModalClienteClose = () => {
    setIsModalClienteOpen(false);
  };

  const handleModalCitaOpen = () => {
    setIsModalCitaOpen(true);
  };

  const handleModalCitaClose = () => {
    setIsModalCitaOpen(false);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">
              Peluqueria Anita
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/citas" className="text-gray-800 hover:text-gray-600">
              Citas
            </Link>
            <Link to="/clients" className="text-gray-800 hover:text-gray-600">
              Clients
            </Link>
            <Link
              to="/citasAtendidas"
              className="text-gray-800 hover:text-gray-600"
            >
              Citas Atendidas
            </Link>
            <button
              onClick={handleModalClienteOpen}
              className="text-gray-800 hover:text-gray-600"
            >
              Nuevo Cliente
            </button>
            <button
              onClick={handleModalCitaOpen}
              className="text-gray-800 hover:text-gray-600"
            >
              Nueva Cita
            </button>
            <div>
              <Link onClick={() => logout()} to={"/"}>
                <p>logout</p>
              </Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link
            to="/citas"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Citas
          </Link>
          <Link
            to="/clients"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Clients
          </Link>
          <Link
            to="/citasAtendidas"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Citas Atendidas
          </Link>
          <button
            onClick={handleModalClienteOpen}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Nuevo Cliente
          </button>
          <button
            onClick={handleModalCitaOpen}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Nueva Cita
          </button>
        </div>
      )}
      <ModalNuevoCliente
        isOpen={isModalClienteOpen}
        onClose={handleModalClienteClose}
      />
      <ModalNuevaCita isOpen={isModalCitaOpen} onClose={handleModalCitaClose} />
    </nav>
  );
};

export default NavBar;
