function doClick(e) {
    alert($.label.text);
}



var profiles = [{
    name : "Lily",
    gender : "female",
}, {
    name : "LiLei",
    gender : "male",
}, {
    name : "Poly",
    gender : "unknown",
}, {
    name : "HanMeiMei",
    gender : "female",
}]; 


function _onOpen(e) {
    
    // alert("_onOpen");
    var items = [];
    
    // items.push({template : 'template', info : {text : "属性1"}}); items.push({template : 'template', info : {text : "属性2"}});
    // items.push({template : 'template', info : {text : "属性3"}}); items.push({template : 'template', info : {text : "属性4"}});
    
    _.each(profiles, function(profile) {
        items.push({template : 'template', name : {text : profile.name}, gender : {text : profile.gender}});
    });
    
    $.mainSection.setItems(items);
}

function _doItemClick(e) {

    // alert(JSON.stringify(e));   


    // Ti.API.info(profiles[e.itemIndex]);
// 
    // var options = {};
//     
    // if (e.itemIndex == 0) {
        // options.name = "Lily";
        // options.gender = "female";
    // } else if (e.itemIndex == 1) {
        // options.name = "LiLei";
        // options.gender = "male";
    // } else if (e.itemIndex == 2) {
        // options.name = "Poly";
        // options.gender = "unknown";
    // } else if (e.itemIndex == 3) {
        // options.name = "HanMeiMei";
        // options.gender = "female";
    // }
//     
    // Ti.API.info(options);
    
    var controller = Alloy.createController("render", profiles[e.itemIndex]);
    
    controller.getView().open();
}
var path = Ti.Filesystem.getFile(Ti.Filesystem.getResourcesDirectory(), '/templates/index.html');
Ti.API.info("parent ==>", Titanium.Filesystem.getFile(path.resolve()).getParent());
// Ti.API.info("parent ==>", Titanium.Filesystem.getFile(path.resolve()).getParent());

$.index.open();
