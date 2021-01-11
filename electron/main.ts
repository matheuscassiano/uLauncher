import { app, BrowserWindow, dialog, globalShortcut, remote } from 'electron'
import * as path from 'path'
import * as url from 'url'
import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer'

let mainWindow: Electron.BrowserWindow | null

// function runCommand(erro, data, getter) {
  // data = data.split()
  // data.forEach((item, index) => {
  //   data[index] = '789'
  // })
  // if (error) {
  //   console.log("error", error.message)
  //   return
  // }
  // if (getter) {
  //   global.programms = data
  //   console.log(remote.getGlobal('programms'))
  //   return
  // }
  // global.programms = data
  // console.log(remote.getGlobal('programms'))
//   return data
// }

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 500,
    height: 500,
    frame: false,
    transparent: true,
    backgroundColor: '#282a36',
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.setAlwaysOnTop(true, 'screen')

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:4000')
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, 'renderer/index.html'),
        protocol: 'file:',
        slashes: true
      })
    )
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)
  .whenReady()
  .then(() => {
    if (process.env.NODE_ENV === 'development') {
      installExtension(REACT_DEVELOPER_TOOLS)
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log('An error occurred: ', err))
      installExtension(REDUX_DEVTOOLS)
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log('An error occurred: ', err))
    }
    globalShortcut.register('CommandOrControl+W', () => {
      console.log('close')
      mainWindow.setOpacity(0)
    })

    globalShortcut.register('CommandOrControl+O', () => {
      console.log('open')
      mainWindow.setOpacity(1)
    })
  })
app.allowRendererProcessReuse = true
