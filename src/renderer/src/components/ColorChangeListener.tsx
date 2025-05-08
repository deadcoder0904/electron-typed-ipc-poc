import React from 'react'
import { ipcRendererHandler } from '../../ipc'

import { Color } from '../../../types/index'

export const ColorChangeListener = () => {
	const [color, toggleColor] = React.useState<Color>('black')

	React.useEffect(() => {
		const unsub = ipcRendererHandler.on(
			'onColorChanged',
			(_event, color: Color) => {
				toggleColor(color)
			},
		)
		return () => {
			unsub()
		}
	}, [])

	return (
		<div
			style={{
				marginTop: '20px',
				backgroundColor: color,
				color: color === 'black' ? 'white' : 'black',
				border: '4px solid black',
				width: '400px',
				height: '400px',
			}}
		>
			Background Color is {color}...
		</div>
	)
}
