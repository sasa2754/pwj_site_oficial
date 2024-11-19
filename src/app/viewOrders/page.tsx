"use client";

import { useState, useEffect } from "react";

export default function ViewOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/view"); // Substitua pelo seu endpoint real
        if (!response.ok) {
          throw new Error("Erro ao buscar os pedidos.");
        }

        const data = await response.json();
        setOrders(data);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleDelete = async (orderId: number) => {
    if (window.confirm("Tem certeza que deseja apagar este pedido?")) {
      try {
        const response = await fetch(`http://localhost:5000/api/delete/${orderId}`, {
          method: "DELETE",
        });

        const result = await response.json();

        if (response.ok) {
          alert(result.message);
          setOrders((prevOrders) => prevOrders.filter((order) => order.id !== orderId));
        } else {
          alert(result.message);
        }
      } catch (error) {
        alert("Erro ao deletar o pedido.");
      }
    }
  };

  if (loading) {
    return <p>Carregando pedidos...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-center mb-6">Pedidos Cadastrados</h1>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Setor</th>
              <th className="border border-gray-300 px-4 py-2">Data Inicial</th>
              <th className="border border-gray-300 px-4 py-2">Data Final</th>
              <th className="border border-gray-300 px-4 py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order: any, index: number) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {order.id}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {order.sector}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {order.dateInit && !isNaN(new Date(order.dateInit).getTime())
                    ? new Date(order.dateInit).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })
                    : "Erro"}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {order.dateEnd && !isNaN(new Date(order.dateEnd).getTime())
                    ? new Date(order.dateEnd).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })
                    : "Em andamento"}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button
                    onClick={() => handleDelete(order.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none"
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
