import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState("debtpulse");

  const [clients, setClients] = useState([
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@email.com",
      phone: "(555) 123-4567",
      debt: 5420.5,
      risk: "High Risk",
      status: "Overdue",
      lastContact: "2024-01-15",
      nextAction: "Call required",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      phone: "(555) 234-5678",
      debt: 2150,
      risk: "Medium Risk",
      status: "Contacted",
      lastContact: "2024-01-25",
      nextAction: "Follow up email",
    },
    {
      id: 3,
      name: "Mike Davis",
      email: "mike.davis@email.com",
      phone: "(555) 345-6789",
      debt: 850.75,
      risk: "Low Risk",
      status: "Paying",
      lastContact: "2024-01-28",
      nextAction: "Monitor payments",
    },
    {
      id: 4,
      name: "Lisa Chen",
      email: "lisa.chen@email.com",
      phone: "(555) 456-7890",
      debt: 7200,
      risk: "High Risk",
      status: "Unreachable",
      lastContact: "2024-01-10",
      nextAction: "Legal notice",
    },
    {
      id: 5,
      name: "Robert Wilson",
      email: "r.wilson@email.com",
      phone: "(555) 567-8901",
      debt: 1500.25,
      risk: "Medium Risk",
      status: "Negotiating",
      lastContact: "2024-01-29",
      nextAction: "Review proposal",
    },
  ]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleAddClient = () => {
    const newClient = {
      id: clients.length + 1,
      name: "New Client",
      email: "new.client@email.com",
      phone: "(555) 000-0000",
      debt: 1000,
      risk: "Medium Risk",
      status: "New",
      lastContact: "2025-07-30",
      nextAction: "Initial Contact",
    };
    setClients([...clients, newClient]);
  };

  const renderClientTable = (actionType) => (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Client Overview</h2>
      <div className="flex justify-between mb-4">
        <button
          onClick={handleAddClient}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Add Client
        </button>
        <input
          type="text"
          placeholder="Filter clients..."
          className="border px-3 py-2 rounded"
        />
      </div>
      <div className="overflow-auto">
        <table className="min-w-full table-auto bg-white rounded shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Client</th>
              <th className="px-4 py-2 text-left">Contact</th>
              <th className="px-4 py-2 text-left">Debt Amount</th>
              <th className="px-4 py-2 text-left">Risk Level</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Last Contact</th>
              <th className="px-4 py-2 text-left">Next Action</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{client.name}</td>
                <td className="px-4 py-2">
                  <div>{client.email}</div>
                  <div>{client.phone}</div>
                </td>
                <td className="px-4 py-2">${client.debt.toLocaleString()}</td>
                <td className="px-4 py-2">{client.risk}</td>
                <td className="px-4 py-2">{client.status}</td>
                <td className="px-4 py-2">{client.lastContact}</td>
                <td className="px-4 py-2">{client.nextAction}</td>
                <td className="px-4 py-2 space-x-2">
                  {actionType === "followup" ? (
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-sm">
                      Follow Up
                    </button>
                  ) : (
                    <>
                      <a
                        href={`tel:${client.phone}`}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm"
                      >
                        Call
                      </a>
                      <a
                        href={`mailto:${client.email}`}
                        className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm"
                      >
                        Email
                      </a>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1588776814546-ec6f89c2c1b4?auto=format&fit=crop&w=1350&q=80")' }}>
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-60 bg-gray-900 text-white flex flex-col shadow-lg">
        <div
          className="p-5 font-bold text-xl text-center cursor-pointer hover:text-blue-400"
          onClick={() => handleTabChange("debtpulse")}
        >
          DebtPulse
        </div>
        <nav>
          <ul className="space-y-1 mt-4">
            <li
              className={`py-3 px-6 cursor-pointer hover:bg-gray-700 ${
                activeTab === "dashboard" ? "bg-blue-700" : ""
              }`}
              onClick={() => handleTabChange("dashboard")}
            >
              Dashboard
            </li>
            <li
              className={`py-3 px-6 cursor-pointer hover:bg-gray-700 ${
                activeTab === "clients" ? "bg-blue-700" : ""
              }`}
              onClick={() => handleTabChange("clients")}
            >
              Clients
            </li>
            <li
              className={`py-3 px-6 cursor-pointer hover:bg-gray-700 ${
                activeTab === "messages" ? "bg-blue-700" : ""
              }`}
              onClick={() => handleTabChange("messages")}
            >
              Messages
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-60 p-6 bg-white bg-opacity-90 min-h-screen">
        {activeTab === "dashboard" && (
          <>
            <h1 className="text-4xl font-extrabold text-blue-800">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              <div className="bg-white p-6 rounded shadow border-l-4 border-blue-500">
                <h3 className="text-sm font-medium text-gray-500">Total Clients</h3>
                <p className="text-2xl font-bold text-blue-800">1,234</p>
                <p className="text-green-600 text-sm">+12% from last month</p>
              </div>
              <div className="bg-white p-6 rounded shadow border-l-4 border-green-500">
                <h3 className="text-sm font-medium text-gray-500">Outstanding Debt</h3>
                <p className="text-2xl font-bold text-green-800">$2.4M</p>
                <p className="text-red-600 text-sm">-3% from last month</p>
              </div>
              <div className="bg-white p-6 rounded shadow border-l-4 border-red-500">
                <h3 className="text-sm font-medium text-gray-500">High Risk Clients</h3>
                <p className="text-2xl font-bold text-red-800">89</p>
                <p className="text-red-600 text-sm">+5% from last month</p>
              </div>
              <div className="bg-white p-6 rounded shadow border-l-4 border-yellow-500">
                <h3 className="text-sm font-medium text-gray-500">Pending Messages</h3>
                <p className="text-2xl font-bold text-yellow-800">156</p>
                <p className="text-green-600 text-sm">+23% from last month</p>
              </div>
            </div>
          </>
        )}

        {activeTab === "clients" && renderClientTable("call")}

        {activeTab === "debtpulse" && renderClientTable("followup")}

        {activeTab === "messages" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Messages</h2>
            <p className="text-gray-600">Messaging interface coming soon...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
