import { app, BrowserWindow, ipcMain, ipcRenderer, Tray } from 'electron';
import funcs from './objects/funcs.object';
import path from 'path';
import positioner from 'electron-traywindow-positioner';
declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

let mainWindow: BrowserWindow | null = null;
let tray: Tray | null = null
let position: { x: number, y: number } | null = null

const icon = path.join(
  app.getAppPath(),
  "src",
  "assets",
  "dark-icon.png"
);

const sendData = () => {
  for (const [key, value] of Object.entries(funcs)) {
    mainWindow.webContents.send(key, value());
  }
}

const createWindow = (): void => {
  mainWindow = new BrowserWindow({
    height: 200,
    width: 400,
    frame: false,
    transparent: true,
    show: false,
    resizable: false,
    alwaysOnTop: true,
    skipTaskbar: true,
    roundedCorners: true,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  mainWindow.on('blur', () => {
    mainWindow?.hide();
  });

  mainWindow.webContents.on('before-input-event', (event, input) => {
    if (input.key === 'Escape') {
      mainWindow?.hide();
      event.preventDefault();
    }
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  setInterval(sendData, 1000)

};

app.whenReady().then(() => {
  tray = new Tray(icon)

  tray.on("click", () => {
    if (!mainWindow) {
      createWindow();
    }

    if (!position) {
      const { x, y } = positioner.calculate(mainWindow.getBounds(), tray.getBounds())
      position = { x, y }
    }

    if (mainWindow?.isVisible()) {
      mainWindow.hide();

    } else {
      mainWindow.setAlwaysOnTop(true, "pop-up-menu");
      mainWindow.setPosition(position.x, position.y + 5);
      mainWindow.show();
      mainWindow.focus();
      mainWindow.webContents.send('start-animation');
    }
  });
})

