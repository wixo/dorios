//
// Dorios.js 0.0.1
// Simple left to right columns for your responsive adventures
// http://github.com/wixo/dorios
//

(function(e,g,h,d){d=function(){var a={container:null,build:function(b){var c=0,d=b&&b.columnCount||a.columnCount;b=b&&b.columnCount||a.columnCount;a.container.detach();a.container.find("div.dorios-column").remove();a.container.find(a.itemsName).remove();for(a.columns=[];b--;){var f=-(b-d);a.columns.push(e(h.createElement("div")).attr("class","dorios-column dorios-column-"+f).attr("data-dorios-id",f).appendTo(a.container))}a.items.forEach(function(b){c<d-1?(e(b).appendTo(a.columns[c]),c++):(e(b).appendTo(a.columns[c]),
c=0)});a.container.prependTo(a.parent)},init:function(b){var c;a.container=c=e(b.container);a.itemsName=b.items;a.items=a.items||c.find(b.items).toArray();a.columns=[];a.parent=c.parent();a.columnCount=b.columnCount;a.build({columnCount:b.columnCount})},push:function(b){a.items=a.items.concat(b.items);a.build()}};return{init:a.init,push:a.push,build:a.build}}();g.dorios=d})(window.jQuery,window,window.document);