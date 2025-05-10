import React from 'react'
import { ipcRendererEmitter } from '../../ipc'
import { Color } from '../../../types/index'
import log from 'electron-log'

export const ToggleColor = () => {
	const [color, setColor] = React.useState<Color>('white')

	return (
		<button
			style={{
				backgroundColor: 'darkblue',
				color: 'white',
				border: 'none',
				padding: '0.5rem 1rem',
				borderRadius: '4px',
				cursor: 'pointer',
			}}
			onClick={() => {
				log.info({ color })
				const nextColor: Color = color === 'black' ? 'white' : 'black'
				setColor(nextColor)
				ipcRendererEmitter.send('changeColor', nextColor)
			}}
		>
			Toggle BLACK/WHITE
		</button>
	)
}
