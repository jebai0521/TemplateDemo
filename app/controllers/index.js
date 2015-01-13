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
    
    var items = [];
    
    _.each(profiles, function(profile) {
        items.push({template : 'template', name : {text : profile.name}, gender : {text : profile.gender}});
    });
    
    $.mainSection.setItems(items);
}

function _doItemClick(e) {
    
    var controller = Alloy.createController("render", profiles[e.itemIndex]);
    
    controller.getView().open();
}

$.index.open();
