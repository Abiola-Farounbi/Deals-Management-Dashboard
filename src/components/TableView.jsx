import { useDealContext } from '../context/DealContext';
import ViewModal from './ViewModal';
import { useState } from 'react';
import { Eye, Edit2, Trash2 } from 'lucide-react';

const TableView = () => {
  const { deals, deleteDeal, setEditingDeal } = useDealContext();
  const [viewingDeal, setViewingDeal] = useState(null);

  // Sets viewing deal state to the selected deal
  const handleView = (deal) => {
    setViewingDeal(deal);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left p-3 border-b">Client Name</th>
            <th className="text-left p-3 border-b">Product Name</th>
            <th className="text-left p-3 border-b"> Deal Stage</th>
            <th className="text-left p-3 border-b">Created Date</th>
            <th className="text-left p-3 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {deals.map((deal) => (
            <tr key={deal.id} className="border-b hover:bg-gray-50">
              <td className="p-3">{deal.clientName}</td>
              <td className="p-3">{deal.productName}</td>
              <td className="p-3">{deal.stage}</td>
              <td className="p-3">{deal.createdDate}</td>
              <td className="p-3">
                <button 
                  onClick={() => handleView(deal)}
                  className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600"
                  title="View deal details"
                >
                  <Eye size={20}/>  
                </button>
                <button 
                  onClick={() => setEditingDeal(deal)}
                  className="bg-green-500 text-white px-3 py-1 rounded mr-2 hover:bg-green-600"
                  title="Edit deal information"
                >
                  <Edit2 size={20}/>
                </button>
                <button 
                  onClick={() => {
                    if (window.confirm('Are you sure you want to delete this deal?')) {
                      deleteDeal(deal.id);
                    }
                  }}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  title="Delete deal"
                >
                  <Trash2 size={20}/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {viewingDeal && (
        <ViewModal 
          deal={viewingDeal} 
          onClose={() => setViewingDeal(null)} 
        />
      )}
    </div>
  );
};

export default TableView;