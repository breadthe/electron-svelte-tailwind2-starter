const { globalShortcut } = require('electron');

function register(mainWindow) {
    // Handle ESC
    globalShortcut.register('Esc', () => {
        // TODO this overwrites the dialog Esc behavior; is there a better way to register Esc while preserving the native behavior of the dialog?
        // TODO might be able to register this with in App.svelte and use ipcRenderer.send('escape') instead; @see 1st answer here: https://stackoverflow.com/questions/37967513/exit-full-screen-when-esc-is-pressed-using-javascript-with-electron
        mainWindow.webContents.send('escape');
    });
}

function unregisterAll() {
    globalShortcut.unregisterAll();
}

module.exports = {
    globalShortcuts: {
        register,
        unregisterAll,
    }
};
