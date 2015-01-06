var args = arguments[0] || {};

Ti.API.info(args);

function _onBack(e) {
    $.container.close();
}


var path = Ti.Filesystem.getFile(Ti.Filesystem.getResourcesDirectory(), '/templates/index.html');

Ti.API.info(path.nativePath);

// $.webview.setUrl(path.nativePath);

// $.webview.setHtml(path.read().getText());

    var ejs = require("ejs");

    // Ti.API.info(ejs);
    
    var str = "<h1><%= name %></h1>";
    
    args.filename = path.resolve();
    
    var ret = ejs.render(path.read().getText(), args);  
    
    $.webview.setHtml(ret);
