import { IpcEmitter, IpcListener } from '@electron-toolkit/typed-ipc/renderer'
import type { IpcEvents, IpcRendererEvent } from '../types/ipc'

export const ipcRendererHandler = new IpcListener<IpcRendererEvent>()

export const ipcRendererEmitter = new IpcEmitter<IpcEvents>()
