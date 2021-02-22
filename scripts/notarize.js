require('dotenv').config();
const { notarize } = require('electron-notarize');

exports.default = async function notarizing(context) {
    const { electronPlatformName, appOutDir } = context;
    if (electronPlatformName !== 'darwin') {
        return;
    }

    console.log("Waiting for MacOS build notarization...");

    function requireENV(key) {

        if (!process.env[key]) {
            throw new Error("No env " + key);
        }

    }

    requireENV('APPLEID');
    requireENV('APPLEIDPASS');

    const appName = context.packager.appInfo.productFilename;

    // ElectronSvelteApp
    return await notarize({
        appBundleId: 'com.example.app',
        appPath: `${appOutDir}/${appName}.app`,
        appleId: process.env.APPLEID,
        appleIdPassword: process.env.APPLEIDPASS,
    });
};
