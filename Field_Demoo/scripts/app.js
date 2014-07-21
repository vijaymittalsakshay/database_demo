(function (global) {
    var app = global.app = global.app || {};

    app.makeUrlAbsolute = function (url) {
            var anchorEl = document.createElement("a");
            anchorEl.href = url;
            return anchorEl.href;
        };

    document.addEventListener("deviceready", function () {
                document.addEventListener("backbutton",onBackKeyDown, false);
    }, false);
    
    
    
    apps = new kendo.mobile.Application(document.body, { layout: "tabstrip-layout" ,skin:"flat",transition:"slide"});
   // app.el = new Everlive("dBl9KNK6JdSKJrQA");
})(window);