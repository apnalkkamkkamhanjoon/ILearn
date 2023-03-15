# Electron + React 시작하기
### Electron 설치
```bash
npm install --save-dev electron electron-builder concurrently wait-on cross-env
```
React Hot-Reloading
```bash
npm install --save electron-is-dev
```

### 일렉트론 렌더러

-> main.js 생성
```js
const { app, BrowserWindow } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      devTools: isDev,
    },
  });

  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  if (isDev) {
    mainWindow.webContents.openDevTools({ mode: "detach" });
  }

  mainWindow.setResizable(true);
  mainWindow.on("closed", () => (mainWindow = null));
  mainWindow.focus();
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
```

### package.json 수정
```json
"main": "./public/main.js",

"homepage": "./",

  "build": {

    "productName": "react-electron",

    "asar": true,

    "appId": "org.sss.electron-react"

  },



... 
  "scripts": {

    "react-start": "react-scripts start",

    "react-build": "react-scripts build",

    "test": "react-scripts test",

    "eject": "react-scripts eject",

    "start": "concurrently \"cross-env NODE_ENV=development BROWSER=none npm run react-start\" \"wait-on http://localhost:3000 && electron .\"",

    "build": "npm run react-build && electron-builder",

    "release": "npm run react-build && electron-builder --publish=always"

  },
```