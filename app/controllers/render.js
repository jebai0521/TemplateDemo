var args = arguments[0] || {};

Ti.API.info(args);

function _onBack(e) {
    $.container.close();
}

var path = Ti.Filesystem.getFile(Ti.Filesystem.getResourcesDirectory(), '/templates/index.html');

var ejs = require("ejs");
    
args.filename = path.resolve();

var ret = ejs.render(path.read().getText(), args);  

$.webview.setHtml(ret);
