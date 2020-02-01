const {
  app,
  BrowserWindow,
  Menu,
  protocol,
  ipcMain,
  dialog
} = require("electron");
const log = require("electron-log");
const latestUpdate = require("update-electron-app");
const { autoUpdater } = require("electron-updater");

process.env.GH_TOKEN = process.env.GH_TOKEN
  ? process.env.GH_TOKEN
  : "210538d21c0163f91b"+"8eddddbd006e6c987182c5";


//-------------------------------------------------------------------
// Logging
//
// THIS SECTION IS NOT REQUIRED
//
// This logging setup is not required for auto-updates to work,
// but it sure makes debugging easier :)
//-------------------------------------------------------------------
autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = "info";
log.info("App starting...");
console.log(process.env.NODE_ENV);
//-------------------------------------------------------------------
// Define the menu
//
// THIS SECTION IS NOT REQUIRED
//-------------------------------------------------------------------
let template = [];
if (process.platform === "darwin") {
  // OS X
  const name = app.getName();
  template.unshift({
    label: name,
    submenu: [
      {
        label: "About " + name,
        role: "about"
      },
      {
        label: "Quit",
        accelerator: "Command+Q",
        click() {
          app.quit();
        }
      }
    ]
  });
}

//-------------------------------------------------------------------
// Open a window that displays the version
//
// THIS SECTION IS NOT REQUIRED
//
// This isn't required for auto-updates to work, but it's easier
// for the app to show a window than to have to click "About" to see
// that updates are working.
//-------------------------------------------------------------------
let win;

function sendStatusToWindow(text) {
  log.info(text);
  win.webContents.send("message", text);
}
function createDefaultWindow() {
  win = new BrowserWindow({
    webPreferences: {
      webSecurity: true,
      nodeIntegration: true
    },
    width: 1024,
    height: 768,
    resizable: true
  });
  win.maximize();
  win.webContents.openDevTools();
  win.on("closed", () => {
    win = null;
  });
  // win.loadURL('file://' + __dirname + '/version.html');
  // win.loadURL(`file://${__dirname}/version.html#v${app.getVersion()}`);
  win.loadURL(`file://${__dirname}/src/index.html`);
  return win;
}

autoUpdater.setFeedURL({
  provider: "github",
  owner: "schintakindi",
  repo: "electron-rightinvoices",
  // token: process.env('GH_TOKEN')
  token: process.env.GH_TOKEN,
  private: false
});

console.log(process.env.NODE_ENV);

var downloadInprogress = false;

autoUpdater.on("checking-for-update", () => {
  sendStatusToWindow("Checking for update...");
});
autoUpdater.on("update-available", info => {
  // dialog.showMessageBox({
  //   message: 'Update Available !!'
  // });
  sendStatusToWindow("Update available.");
  downloadInprogress = true;
});
autoUpdater.on("update-not-available", info => {
  // sendStatusToWindow('Update not available.');
});
autoUpdater.on("error", err => {
  sendStatusToWindow("Error in auto-updater. " + err);
});

autoUpdater.on("download-progress", progressObj => {
  sendStatusToWindow(
    "Downloaded " +
      (Math.round(progressObj.percent * 100) / 100).toFixed(2) +
      "%"
  );
  let log_message = "Download speed: " + progressObj.bytesPerSecond;
  log_message = log_message + " - Downloaded " + progressObj.percent + "%";
  log_message =
    log_message +
    " (" +
    progressObj.transferred +
    "/" +
    progressObj.total +
    ")";
});

autoUpdater.on("update-downloaded", (ev, info) => {
  // Wait 5 seconds, then quit and install
  // In your application, you don't need to wait 5 seconds.
  // You could call autoUpdater.quitAndInstall(); immediately
  sendStatusToWindow("Update downloaded & App will restart automatically");

  setTimeout(function() {
    autoUpdater.quitAndInstall();
  }, 1000);
});
app.on("ready", function() {
  // Create the Menu
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  createDefaultWindow();
});
app.disableHardwareAcceleration();
app.on("window-all-closed", () => {
  app.quit();
});

app.on("ready", function() {
  autoUpdater.checkForUpdatesAndNotify();
});

setInterval(() => {
  console.log("true or false", downloadInprogress);
  if (downloadInprogress == false) {
    autoUpdater.checkForUpdates();
  }
}, 20000);
