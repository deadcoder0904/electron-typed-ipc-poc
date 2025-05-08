import { Color } from '../../types/ipc.ts'

// Main process ipc events
export type IpcEvents = {
	changeColor: [Color] // listener event map
}

//Renderer ipc events
export type IpcRendererEvent = {
	onColorChanged: [Color]
	sendAlert: []
}
