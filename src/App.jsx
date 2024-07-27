import { useContext, useRef } from 'react'
import Display from './components/Display'
import Player from './components/Player'
import Sidebar from './components/Sidebar'
import { PlayerContext } from './context/PlayerContext'

function App() {
	const { audioRef, track } = useContext(PlayerContext);


	return (
		<div className='h-screen bg-black'>
			<div className='h-[90%] flex '>
				<Sidebar />
				<Display />
			</div>
			<div>
				<Player />
				<audio ref={audioRef} src={track.file} preload='auto'></audio>
			</div>
		</div>
	)
}

export default App
