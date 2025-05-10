import { ipcMainEmitter } from './ipc'
import { app, globalShortcut } from 'electron'
import { win } from './win'
import log from 'electron-log'

class ShortcutsHelper {
	public registerGlobalShortcuts(): void {
		globalShortcut.register('CommandOrControl+,', () => {
			log.info('Command/Ctrl + , pressed. Send alert.')
			const mainWin = win.getMainWindow()
			if (mainWin) {
				ipcMainEmitter.send(mainWin?.webContents, 'sendAlert')
			}
		})
		globalShortcut.register('CommandOrControl+G', () => {
			log.info('Command/Ctrl + G pressed.')
			log.info('##### Hello from IPC #####') // invoke ipc function `helloFromIPC()` from here
		})
		app.on('will-quit', () => {
			globalShortcut.unregisterAll()
		})
	}
}

export const shortcutsHelper = new ShortcutsHelper()
