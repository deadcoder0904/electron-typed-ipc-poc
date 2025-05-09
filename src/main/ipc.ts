import { IpcEmitter, IpcListener } from '@electron-toolkit/typed-ipc/main'
import type { IpcEvents, IpcRendererEvent } from '../types/ipc'
import { Color } from '../types'
import logger from 'electron-timber'

export const ipcMainHandler = new IpcListener<IpcEvents>()

export const ipcMainEmitter = new IpcEmitter<IpcRendererEvent>()

export function initIpc() {
	ipcMainHandler.on('changeColor', (event, color: Color) => {
		logger.log('changeColor listener in main:', color)
		// Broadcast the color change to all renderers
		ipcMainEmitter.send(
			event.sender,
			'onColorChanged',
			color === 'black' ? 'white' : 'black',
		)
	})

	ipcMainHandler.handle('helloFromIPC', () => {
		logger.log('##### Hello from IPC #####')
	})
}
