import { useDealContext } from '../context/DealContext';
import { PIPELINE_STAGES } from '../assets/MockData';

const KanbanView = () => {
  const { deals, draggedDeal, setDraggedDeal, updateDeal } = useDealContext();

  // Start of a dragging action
  const handleDragStart = (e, deal) => {
    setDraggedDeal(deal);
    e.dataTransfer.setData('text/plain', ''); 
  };

  // Allow dragging over a stage
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Handle dropping a deal into a stage
  const handleDrop = (e, targetStage) => {
    e.preventDefault();
    if (draggedDeal) {
      updateDeal(draggedDeal.id, { stage: targetStage });
      setDraggedDeal(null);
    }
  };

  return (
    <div className="flex gap-4 overflow-x-auto p-4">
      {PIPELINE_STAGES.map((stage) => (
        <div
          key={stage}
          className="min-w-[300px] bg-gray-100 p-4 rounded"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, stage)}
        >
          <h3 className="font-bold mb-4">{stage}</h3>
          <div className="space-y-2">
            {deals
              .filter(deal => deal.stage === stage)
              .map((deal) => (
                <div
                  key={deal.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, deal)}
                  className="bg-white p-4 rounded shadow cursor-move hover:shadow-lg"
                >
                  <p className="font-bold">{deal.clientName}</p>
                  <p className="text-sm text-gray-600">{deal.productName}</p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default KanbanView;