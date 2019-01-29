const { app, BrowserWindow, Menu, dialog } = require('electron')
const url = require('url')
const path = require('path')

let window

const createWindow = () => {

  if (process.env.NODE_ENV === 'DEV') {
    process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = '1'
    window = new BrowserWindow({
      width: 800, height: 600, webPreferences: {
        nodeIntegration: true,
        webSecurity: false,
      }
    })
    window.loadURL('http://localhost:3000/')
    // Install React Dev Tools
    const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer')
    installExtension(REACT_DEVELOPER_TOOLS).catch(console.log)
    window.webContents.openDevTools()
  } else {
    window = new BrowserWindow({
      width: 800, height: 600, webPreferences: {
        nodeIntegration: false,
      }
    })
    window.loadURL(url.format({
      pathname: path.join(__dirname, 'build', 'index.html'),
      protocol: 'file',
      slashes: true
    }))
  }
  window.on('closed', () => {
    window = null
  })
  // Build menu from tamplate
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate)
  // Insert menu
  Menu.setApplicationMenu(mainMenu)
}

const openFiles = () => {
  dialog.showOpenDialog({ properties: ['openFile', 'openDirectory', 'multiSelections'] }, ({filepaths, bookmarks}) =>
    window.webContents.send('openFiles', {filepaths, bookmarks})
  )
}

app.on('ready', () => createWindow())

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (window === null) {
    createWindow()
  }
})


// Create menu template
const mainMenuTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Select files',
        click() {
          openFiles()
        }
      },
      {
        label: 'Quit',
        accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
        click() {
          app.quit()
        }
      }
    ]
  }
]

// On Mac Menu, add emtpy object
if (process.platform == 'darwin') {
  mainMenuTemplate.unshift({ label: '' })
}

//Add dev toolls if not in prod
// if (process.env.NODE_ENV === 'DEV') {
mainMenuTemplate.push({
  label: 'Developer Tools',
  submenu: [
    {
      label: 'Toggle Dev tools',
      accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
      click(item, focusedWindow) {
        focusedWindow.toggleDevTools()
      }
    },
    {
      role: 'reload'
    }
  ]
})
// }