const ViewModal = ({ deal, onClose }) => {
  if (!deal) return null;

  return (
    // Modal overlay
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-lg p-6 max-w-md w-full" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Deal Details</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        
        <div className="space-y-3">
          <div>
            <label className="font-semibold block">Client:</label>
            <span className="text-gray-700">{deal.clientName}</span>
          </div>
          
          <div>
            <label className="font-semibold block">Product:</label>
            <span className="text-gray-700">{deal.productName}</span>
          </div>
          
          <div>
            <label className="font-semibold block">Stage:</label>
            <span className="text-gray-700">{deal.stage}</span>
          </div>
          
          <div>
            <label className="font-semibold block">Created Date:</label>
            <span className="text-gray-700">{deal.createdDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewModal;