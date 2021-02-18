const { ipcMain } = require('electron')

const isMac = process.platform === 'darwin'

module.exports = {
    menuTemplate: [
        { role: 'appMenu' },
        /* ...(isMac ? [{
          label: app.name,
          submenu: [
            { role: 'about' },
            // { type: 'separator' },
            // { role: 'services' },
            // { type: 'separator' },
            // { role: 'hide' },
            // { role: 'hideothers' },
            // { role: 'unhide' },
            { type: 'separator' },
            { role: 'quit' }
          ]
        }] : []), */
        // { role: 'fileMenu' },
        {
            role: 'fileMenu',
            label: "File",
            submenu: [
                {
                    label: "Open",
                    click: openFile,
                    accelerator: "CommandOrControl+O"
                },
                {
                    label: "Save",
                    click: saveFile,
                    accelerator: "CommandOrControl+S"
                },
                { type: 'separator' },
                { role: isMac ? 'close' : 'quit' }
            ]
        },
        /*{
          label: 'File',
          submenu: [
            isMac ? { role: 'close' } : { role: 'quit' }
          ]
        },*/
        // { role: 'editMenu' },
        {
            label: 'Edit',
            submenu: [
                { role: 'undo' },
                { role: 'redo' },
                { type: 'separator' },
                {
                    id: 'revert-changes',
                    label: "Revert Changes",
                    click: revertChanges,
                    enabled: false
                },
                { type: 'separator' },
                { role: 'cut' },
                { role: 'copy' },
                { role: 'paste' },
                ...(isMac ? [
                    { role: 'pasteAndMatchStyle' },
                    { role: 'delete' },
                    { role: 'selectAll' },
                    { type: 'separator' },
                    {
                        label: 'Speech',
                        submenu: [
                            { role: 'startspeaking' },
                            { role: 'stopspeaking' }
                        ]
                    }
                ] : [
                        { role: 'delete' },
                        { type: 'separator' },
                        { role: 'selectAll' }
                    ])
            ]
        },
        // { role: 'viewMenu' },
        {
            label: 'View',
            submenu: [
                { role: 'reload' },
                { role: 'forcereload' },
                { role: 'toggledevtools' },
                { type: 'separator' },
                { role: 'resetzoom' },
                { role: 'zoomin' },
                { role: 'zoomout' },
                { type: 'separator' },
                { role: 'togglefullscreen' }
            ]
        },
        // { role: 'windowMenu' }
        /*{
          label: 'Window',
          submenu: [
            { role: 'minimize' },
            { role: 'zoom' },
            ...(isMac ? [
              { type: 'separator' },
              { role: 'front' },
              { type: 'separator' },
              { role: 'window' }
            ] : [
                { role: 'close' }
              ])
          ]
        },*/
        /*{
          role: 'help',
          submenu: [
            {
              label: 'Learn More',
              click: async () => {
                const { shell } = require('electron')
                await shell.openExternal('https://electronjs.org')
              }
            }
          ]
        }*/
    ]
}

// Emitting to index.js
function openFile() {
    ipcMain.emit('openFile');
}

function saveFile() {
    ipcMain.emit('saveFile');
}

function revertChanges() {
    ipcMain.emit('revertChanges');
}
