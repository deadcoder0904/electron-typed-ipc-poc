import { BrowserWindow } from 'electron'

import { join } from 'node:path'
import icon from '../../resources/icon.png?asset'

class WindowManager {
	private mainWindow: BrowserWindow | null = null

	public getMainWindow(): BrowserWindow | null {
		return this.mainWindow
	}

	public async createMainWindow(): Promise<BrowserWindow | null> {
		if (!this.mainWindow) {
			this.mainWindow = new BrowserWindow({
				width: 900,
				height: 670,
				show: false,
				autoHideMenuBar: true,
				...(process.platform === 'linux' ? { icon } : {}),
				webPreferences: {
					preload: join(__dirname, '../preload/index.mjs'),
					sandbox: false,
				},
			})
		}

		return this.mainWindow
	}
}

export const win = new WindowManager()
