import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import PlayerContextProvider from './context/PlayerContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<PlayerContextProvider>
				<App />
			</PlayerContextProvider>
		</BrowserRouter>
	</React.StrictMode>
)
