import { IpcEmitter, IpcListener } from '@electron-toolkit/typed-ipc/main'
import type { IpcEvents, IpcRendererEvent } from '../types/ipc'
import { Color } from '../types'
import log from 'electron-log'

export const ipcMainHandler = new IpcListener<IpcEvents>()

export const ipcMainEmitter = new IpcEmitter<IpcRendererEvent>()

export function initIpc() {
	ipcMainHandler.on('changeColor', (event, color: Color) => {
		log.info('changeColor listener in main:', color)
		// Broadcast the color change to all renderers
		ipcMainEmitter.send(
			event.sender,
			'onColorChanged',
			color === 'black' ? 'white' : 'black',
		)
	})

	ipcMainHandler.on('helloFromIPC', () => {
		log.info('##### Hello from IPC #####')
	})
}
