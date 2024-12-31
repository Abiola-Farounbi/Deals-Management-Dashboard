import { useState } from "react";
import Navbar from "./Navbar";
import TableView from "./TableView";
import KanbanView from "./KanbanView";
import CreateModal from "./CreateModal";
import { useDealContext } from "../context/DealContext";
import { Plus } from 'lucide-react';

const Dashboard = () => {
  const { view, setView, createDeal, updateDeal, editingDeal, setEditingDeal } =
    useDealContext();
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Creating a new deal
  const handleCreateDeal = (dealData) => {
    createDeal(dealData);
    setShowCreateModal(false);
  };

  // Updating an existing deal
  const handleUpdateDeal = (dealData) => {
    updateDeal(editingDeal.id, dealData);
    setEditingDeal(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6 flex justify-between items-center">
          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex items-center"
          >
            <span className="mr-2">Create Deal</span> <Plus />
          </button>
          <select
            value={view}
            onChange={(e) => setView(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="tabular">Table View</option>
            <option value="kanban">Kanban View</option>
          </select>
        </div>

        {/* Render the appropriate view based on the selected option */}
        {view === "tabular" ? <TableView /> : <KanbanView />}

        {showCreateModal && (
          <CreateModal
            onSubmit={handleCreateDeal}
            onClose={() => setShowCreateModal(false)}
          />
        )}

        {editingDeal && (
          <CreateModal
            deal={editingDeal}
            onSubmit={handleUpdateDeal}
            onClose={() => setEditingDeal(null)}
          />
        )}
      </main>
    </div>
  );
};

export default Dashboard;