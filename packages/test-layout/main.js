module.exports = {
    load: function () {
    },

    unload: function () {
    },

    'layout:test': function () {
        var Fs = require('fs');
        var layoutInfo = JSON.parse(Fs.readFileSync(Editor.url('app://packages/test-layout/layout.json') ));
        Editor.sendToMainWindow( 'editor:reset-layout', layoutInfo);
    },
};
