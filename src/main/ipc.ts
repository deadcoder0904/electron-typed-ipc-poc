import { IpcEmitter, IpcListener } from '@electron-toolkit/typed-ipc/main'
import type { IpcEvents, IpcRendererEvent } from '../types/ipc'
import { Color } from '../types'

export const ipcMainHandler = new IpcListener<IpcEvents>()

export const ipcMainEmitter = new IpcEmitter<IpcRendererEvent>()

export function initIpc() {
	ipcMainHandler.on('changeColor', (event, color: Color) => {
		console.log('change-color listener in main:', color)
		// Broadcast the color change to all renderers
		ipcMainEmitter.send(
			event.sender,
			'onColorChanged',
			color === 'black' ? 'white' : 'black',
		)
	})

	// ipcMainEmitter.send(e.sender, "onColorChange")
	// ipcMainHandler.handle('on', () => {
	// 	return 'hello'
	// })
}
