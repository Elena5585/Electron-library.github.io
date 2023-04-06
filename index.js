const {app, BrowserWindow} = require('electron');

app.on('ready', () => {
      const my_window = new BrowserWindow({
            width: 1000,
            height: 700,
            webPreferences: {
                  nodeIntegration: true,
            },
      });

      my_window.loadFile("index.html");
      // my_window.loadURL("https://yandex.ru/video/preview/12617871383886731970");
})

