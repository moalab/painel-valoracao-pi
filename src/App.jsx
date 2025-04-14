import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function App() {
  const [valor, setValor] = useState("");

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Painel de Valoração</h1>
      <input
        placeholder="Insira um valor"
        className="border rounded p-2"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      <p className="mt-2 text-green-700">Valor: {valor}</p>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={[{ name: 'PI', value: parseFloat(valor) || 0 }]}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
