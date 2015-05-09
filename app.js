var Fs = require('fire-fs');
var Path = require('fire-path');

// exports
global.__app = {
    path: __dirname,

    initCommander: function ( commander ) {
        // TODO:
    },

    init: function ( options ) {
        // initialize ./editor-framework-app/.settings
        var settingsPath = Path.join(Editor.cwd, '.settings');
        if ( !Fs.existsSync(settingsPath) ) {
            Fs.makeTreeSync(settingsPath);
        }
        Editor.registerProfilePath( 'local', settingsPath );

        // TODO: load your profile, and disable packages here

        Editor.registerPackagePath( Editor.url('app://packages') );
    },

    run: function () {
        // create main window
        var mainWin = new Editor.Window('main', {
            'title': 'Editor Framework',
            'min-width': 800,
            'min-height': 600,
            'show': false,
            'resizable': true,
        });
        Editor.mainWindow = mainWin;

        // restore window size and position
        mainWin.restorePositionAndSize();

        // load and show main window
        mainWin.show();

        // page-level test case
        mainWin.load( 'app://app.html' );

        // open dev tools if needed
        if ( Editor.showDevtools ) {
            mainWin.openDevTools({
                detach: true
            });
        }
        mainWin.focus();
    },

    load: function () {
        // TODO
    },

    unload: function () {
        // TODO
    },

    'app:foobar': function () {
        Editor.log('foobar');
    },
};

require('./editor-framework/init');
