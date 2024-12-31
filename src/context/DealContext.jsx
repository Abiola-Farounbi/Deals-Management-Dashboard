import { createContext, useContext, useState } from 'react';
import { INITIAL_DEALS } from '../assets/MockData';

const DealContext = createContext();

export const DealProvider = ({ children }) => {
  const [deals, setDeals] = useState(INITIAL_DEALS);
  const [view, setView] = useState('tabular');
  const [draggedDeal, setDraggedDeal] = useState(null);
  const [editingDeal, setEditingDeal] = useState(null);

  const createDeal = (newDeal) => {
    const deal = {
      id: deals.length + 1,
      ...newDeal,
      createdDate: new Date().toISOString().split('T')[0]
    };
    setDeals([...deals, deal]);
    return deal;
  };

  const updateDeal = (dealId, updatedData) => {
    setDeals(deals.map(deal =>
      deal.id === dealId
        ? { ...deal, ...updatedData }
        : deal
    ));
  };

  const deleteDeal = (dealId) => {
    setDeals(deals.filter(deal => deal.id !== dealId));
  };

  return (
    <DealContext.Provider value={{
      deals,
      view,
      setView,
      createDeal,
      updateDeal,
      deleteDeal,
      draggedDeal,
      setDraggedDeal,
      editingDeal,
      setEditingDeal
    }}>
      {children}
    </DealContext.Provider>
  );
};

export const useDealContext = () => {
  const context = useContext(DealContext);
  if (!context) {
    throw new Error('useDealContext must be used within a DealProvider');
  }
  return context;
};