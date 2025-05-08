import React from 'react'
import { ToggleColor } from './components/ToggleColor'
import { ColorChangeListener } from './components/ColorChangeListener'
import { ipcRendererHandler } from '../ipc'

function App(): React.JSX.Element {
	React.useEffect(() => {
		// Listener for Alert
		const cleanupAlertListener = ipcRendererHandler.on('sendAlert', () => {
			alert('Alert from main process')
		})

		// Cleanup listeners on component unmount
		return () => {
			cleanupAlertListener()
		}
	}, [])

	return (
		<div
			style={{
				paddingTop: '5px',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<h1>Electron Typed IPC - Proof of Concept</h1>
			<ToggleColor />
			<ColorChangeListener />
		</div>
	)
}

export default App
