import Dashboard from './components/Dashboard';
import {DealProvider} from './context/DealContext';

const App = () => {
	return (
	  <DealProvider>
		<Dashboard />
	  </DealProvider>
	);
  };
  
export default App;
