import { useState } from 'react';
import { MOCK_CLIENTS, MOCK_PRODUCTS } from '../assets/MockData';

const CreateModal = ({ deal, onSubmit, onClose }) => {
  // Initialize form data state
  const [formData, setFormData] = useState(deal || {
    clientName: '',
    productName: '',
    stage: 'Lead Generated'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">{deal ? 'Edit Deal' : 'Create Deal'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Client:</label>
            <select
              value={formData.clientName}
              onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select client</option>
              {MOCK_CLIENTS.map(client => (
                <option key={client.id} value={client.name}>
                  {client.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-1">Product:</label>
            <select
              value={formData.productName}
              onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select product</option>
              {MOCK_PRODUCTS.map(product => (
                <option key={product.id} value={product.name}>
                  {product.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              {deal ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateModal;