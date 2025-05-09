import React from 'react'
import { ipcRendererEmitter } from '../../ipc'
import { Color } from '../../../types'
import logger from 'electron-timber'

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
				logger.log({ color })
				const nextColor = color === 'black' ? 'white' : 'black'
				setColor(nextColor)
				ipcRendererEmitter.send('changeColor', nextColor)
			}}
		>
			Toggle BLACK/WHITE
		</button>
	)
}
