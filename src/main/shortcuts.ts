import { ipcMainEmitter, ipcMainHandler } from './ipc'
import { app, globalShortcut } from 'electron'
import { win } from './win'

class ShortcutsHelper {
	public registerGlobalShortcuts(): void {
		globalShortcut.register('CommandOrControl+,', () => {
			console.log('Command/Ctrl + , pressed. Send alert.')
			const mainWin = win.getMainWindow()
			if (mainWin) {
				ipcMainEmitter.send(mainWin?.webContents, 'sendAlert')
			}
		})
		globalShortcut.register('CommandOrControl+G', () => {
			console.log('Command/Ctrl + G pressed.')
			console.log('##### Hello from IPC #####') // invoke ipc function `helloFromIPC()` from here
		})
		app.on('will-quit', () => {
			globalShortcut.unregisterAll()
		})
	}
}

export const shortcutsHelper = new ShortcutsHelper()
