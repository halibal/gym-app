import React from 'react';
import CustomRoutes from './routes/custom-routes';
import './App.css';
import { StoreProvider } from './context/store-context';

function App() {
	return (
		<StoreProvider>
			<div className='App'>
				<CustomRoutes />
			</div>
		</StoreProvider>
	);
}

export default App;
