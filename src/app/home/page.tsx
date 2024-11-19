"use client"

import { useState, useEffect } from "react";

export default function RegisterOrders() {
  const [sector, setSector] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setCurrentTime(date.toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = () => {
    alert(`Setor: ${sector} | Horário: ${currentTime}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Cadastro de Pedidos</h1>
        
        <div className="mb-4">
          <label htmlFor="sector" className="block text-sm font-medium text-gray-700">Setor</label>
          <select
            id="sector"
            value={sector}
            onChange={(e) => setSector(e.target.value)}
            className="mt-2 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Selecione o setor</option>
            <option value="ETS">ETS</option>
            <option value="ICO">ICO</option>
            <option value="SAP">SAP</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="currentTime" className="block text-sm font-medium text-gray-700">Horário Atual</label>
          <input
            id="currentTime"
            value={currentTime}
            readOnly
            className="mt-2 p-2 w-full border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
          />
        </div>

        <div className="text-center">
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  );
}
