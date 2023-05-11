const { app, BrowserWindow } = require("electron");

const url = 'https://www.photopea.com/'

const createWindow = () => {
  const win = new BrowserWindow({
    minWidth: 1366,
    minHeight: 768,
    width: 1366,
    height: 768,
    autoHideMenuBar: true,
    icon: __dirname + '/icon.png',
  });
  win.loadURL(url);
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })
