import { Color } from '../../types/ipc.ts'

// Main process ipc events
export type IpcEvents = {
	changeColor: (color: Color) => void // listener event map
	helloFromIPC: () => void
}

//Renderer ipc events
export type IpcRendererEvent = {
	onColorChanged: [Color]
	sendAlert: []
}
