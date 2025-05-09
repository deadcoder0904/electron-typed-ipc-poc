import { Color } from './index.ts'

// Main process ipc events
export type IpcEvents = {
	changeColor: [Color] // listener event map
	helloFromIPC: []
}

//Renderer ipc events
export type IpcRendererEvent = {
	onColorChanged: [Color]
	sendAlert: []
}
