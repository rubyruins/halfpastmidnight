/*! For license information please see 84a15deefff097bddf7eee49939f0fda1c4b15f3-585e87fa7639122c62d4.js.LICENSE.txt */
(self.webpackChunkhalfpastmidnight=self.webpackChunkhalfpastmidnight||[]).push([[343],{9741:function(t,e,i){var n,o;!function(s,r){"use strict";void 0===(o="function"==typeof(n=r)?n.call(e,i,e,t):n)||(t.exports=o)}(window,(function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i]+"MatchesSelector";if(t[n])return n}}();return function(e,i){return e[t](i)}}))},7158:function(t,e,i){var n,o;"undefined"!=typeof window&&window,void 0===(o="function"==typeof(n=function(){"use strict";function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{};return(i[t]=i[t]||{})[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var n=this._onceEvents&&this._onceEvents[t],o=0;o<i.length;o++){var s=i[o];n&&n[s]&&(this.off(t,s),delete n[s]),s.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t})?n.call(e,i,e,t):n)||(t.exports=o)},9047:function(t,e,i){var n,o;!function(s,r){n=[i(9741)],o=function(t){return function(t,e){"use strict";var i={extend:function(t,e){for(var i in e)t[i]=e[i];return t},modulo:function(t,e){return(t%e+e)%e}},n=Array.prototype.slice;i.makeArray=function(t){return Array.isArray(t)?t:null==t?[]:"object"==typeof t&&"number"==typeof t.length?n.call(t):[t]},i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var o=[];return t.forEach((function(t){if(t instanceof HTMLElement)if(n){e(t,n)&&o.push(t);for(var i=t.querySelectorAll(n),s=0;s<i.length;s++)o.push(i[s])}else o.push(t)})),o},i.debounceMethod=function(t,e,i){i=i||100;var n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];clearTimeout(t);var e=arguments,s=this;this[o]=setTimeout((function(){n.apply(s,e),delete s[o]}),i)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,(function(t,e,i){return e+"-"+i})).toLowerCase()};var o=t.console;return i.htmlInit=function(e,n){i.docReady((function(){var s=i.toDashed(n),r="data-"+s,a=document.querySelectorAll("["+r+"]"),h=document.querySelectorAll(".js-"+s),u=i.makeArray(a).concat(i.makeArray(h)),c=r+"-options",l=t.jQuery;u.forEach((function(t){var i,s=t.getAttribute(r)||t.getAttribute(c);try{i=s&&JSON.parse(s)}catch(h){return void(o&&o.error("Error parsing "+r+" on "+t.className+": "+h))}var a=new e(t,i);l&&l.data(t,n,a)}))}))},i}(s,t)}.apply(e,n),void 0===o||(t.exports=o)}(window)},8004:function(t,e,i){"use strict";i.d(e,{Z:function(){return y}});var n=i(7294),o=i(3391),s=i.n(o),r=i(1883),a=i(1804),h=i.n(a),u=i(3723),c=i(7814),l=i(4288),m=i(3636);i(9190);m.vc.autoAddCss=!1;var d=t=>{let{nodes:e}=t;return n.createElement("div",{className:"sort-container row"},e.map((t=>function(t){const e=(0,u.c)(t.frontmatter.cover_image);return n.createElement("div",null,n.createElement("article",{key:t.id,className:"postitem postcolumn col-xl-4 col-lg-6 col-md-6 col-sm-6 col-xs-6"},n.createElement("div",{className:"postitem-content"},n.createElement("div",{className:"postitem-img"},n.createElement(u.G,{image:e})),n.createElement("div",{className:"postitem-text"},n.createElement("h3",{className:"title mb-0"},n.createElement(r.rU,{to:"/reviews/"+h()(t.frontmatter.title)},t.fields.articleTitle)),n.createElement("p",{className:"postitem-author mb-0"},t.frontmatter.author),n.createElement("span",{className:"postitem-excerpt"},t.excerpt),n.createElement("div",{className:"postitem-bottom-container"},n.createElement("span",{className:"date"},n.createElement(c.G,{icon:l.SZw,size:"1x",className:"pe-2 postitem-icon"}),t.frontmatter.date),n.createElement("span",{className:"rating hide-element"},n.createElement(c.G,{icon:l.Tab,size:"1x",className:"pe-2 postitem-icon"}),t.frontmatter.rating),n.createElement("span",{className:"rating-show-element"},n.createElement(c.G,{icon:l.Tab,size:"1x",className:"pe-2 postitem-icon"}),t.fields.roundRating))))))}(t))))};m.vc.autoAddCss=!1;var f=t=>{let{nodes:e}=t;return n.createElement("div",{className:"sort-container row"},e.map((t=>function(t){return n.createElement("div",{className:"row"},n.createElement("article",{key:t.id,className:"postitem postrow"},n.createElement("div",{className:"postitem-content"},n.createElement("h3",{className:"title mb-0"},n.createElement(r.rU,{to:"/reviews/"+h()(t.frontmatter.title)},t.fields.articleTitle)),n.createElement("p",{className:"postitem-author mb-0"},t.frontmatter.author),n.createElement("span",{className:"postitem-excerpt"},t.excerpt),n.createElement("div",{className:"postitem-bottom-container"},n.createElement("span",{className:"date"},n.createElement(c.G,{icon:l.SZw,size:"1x",className:"pe-2 postitem-icon"}),t.frontmatter.date),n.createElement("span",{className:"rating hide-element"},n.createElement(c.G,{icon:l.Tab,size:"1x",className:"pe-2 postitem-icon"}),t.frontmatter.rating),n.createElement("span",{className:"rating-show-element"},n.createElement(c.G,{icon:l.Tab,size:"1x",className:"ps-2 postitem-icon pe-2"}),t.fields.roundRating)))))}(t))))},p=i(9417);m.vc.autoAddCss=!1;var g=t=>{let{className:e,handleSortKeyChange:i,handleLayoutKeyChange:o}=t;return n.createElement("div",{className:"row mx-0 all-buttons-group "+e},n.createElement("ul",{className:"custom-button-group view-button-group p-0"},n.createElement("button",{onClick:()=>o("column"),title:"View as columns","aria-label":"View as columns",className:"custom-button view-button custom-button-clicked layout-column"},n.createElement(c.G,{icon:p.rWw,size:"1x",className:"view-button-icon"})),n.createElement("button",{onClick:()=>o("row"),title:"View as rows","aria-label":"View as rows",className:"custom-button view-button layout-row"},n.createElement(c.G,{icon:p.Zrf,size:"1x",className:"view-button-icon"}))),n.createElement("ul",{className:"custom-button-group sort-button-group p-0"},n.createElement("button",{onClick:()=>i("title"),title:"Sort by title","aria-label":"Sort by title",className:"custom-button sort-button sort-title"},"Title",n.createElement(c.G,{icon:p.FPD,size:"1x",className:"ps-2 sort-order-true sort-button-icon"}),n.createElement(c.G,{icon:p.r5q,size:"1x",className:"ps-2 sort-order-false sort-button-icon sort-button-icon-hide"})),n.createElement("button",{onClick:()=>i("date"),title:"Sort by date","aria-label":"Sort by date",className:"custom-button sort-button sort-date"},"Date",n.createElement(c.G,{icon:p.FPD,size:"1x",className:"ps-2 sort-order-true sort-button-icon sort-button-icon-hide"}),n.createElement(c.G,{icon:p.r5q,size:"1x",className:"ps-2 sort-order-false sort-button-icon sort-button-icon-hide"})),n.createElement("button",{onClick:()=>i("rating"),title:"Sort by rating","aria-label":"Sort by rating",className:"custom-button sort-button sort-rating"},"Rating",n.createElement(c.G,{icon:p.FPD,size:"1x",className:"ps-2 sort-order-true sort-button-icon sort-button-icon-hide"}),n.createElement(c.G,{icon:p.r5q,size:"1x",className:"ps-2 sort-order-false sort-button-icon sort-button-icon-hide"}))))};var y=t=>{let{nodes:e,prefSortKey:i,prefSortOrder:o,prefLayout:r,prefHideButtons:a}=t;const h=n.useRef(),[u,c]=n.useState(i||"title"),[l,m]=n.useState(i||"title"),[p,y]=n.useState(o&&!0),[v,_]=n.useState(r||"row");function E(t){l===t?y(!p):(y(!0),c(t)),m(t),console.log(u,l,p,v,"here")}function b(t){_(t)}return console.log(u,p,l,v),n.useEffect((()=>{if(void 0!==document){let t=document.querySelectorAll(".view-button");[].forEach.call(t,(function(t){t.classList.remove("custom-button-clicked")})),document.querySelector(".layout-"+v).classList.add("custom-button-clicked")}return h.current=new(s())(".sort-container",{itemSelector:".postitem",masonry:{horizontalOrder:!0},getSortData:{rating:".rating",title:".title",date:".date"}}),h.current.arrange({sortBy:u,sortAscending:p}),()=>h.current.destroy()}),[v]),n.useEffect((()=>{if(h.current.arrange({sortBy:u,sortAscending:p}),void 0!==document){let t=document.querySelectorAll(".sort-button");[].forEach.call(t,(function(t){t.classList.remove("custom-button-clicked");let e=t.querySelectorAll(".sort-button-icon");[].forEach.call(e,(function(t){t.classList.add("sort-button-icon-hide")}))}));let e=document.querySelector(".sort-"+u);e.classList.add("custom-button-clicked"),e.querySelector(".sort-order-"+p.toString()).classList.remove("sort-button-icon-hide")}}),[u,p,l]),n.createElement(n.Fragment,null,a?n.createElement(g,{handleSortKeyChange:E,handleLayoutKeyChange:b,className:"hide-all-buttons-group"}):n.createElement(g,{handleSortKeyChange:E,handleLayoutKeyChange:b}),"column"===v?n.createElement(d,{nodes:e}):"row"===v?n.createElement(f,{nodes:e}):void 0)}},2491:function(t,e,i){"use strict";var n=i(7294),o=i(1883),s=i(3723);const r=n.memo((()=>{let t=function(t){let e=t.allMarkdownRemark.nodes,i=e.length,n=Math.floor(Math.random()*i);return console.log("Header index: "+n),e[n]}((0,o.K2)("2536785139")),e=(0,s.c)(t.frontmatter.cover_image),i=t.frontmatter.name+"\n"+t.frontmatter.contributor+" on Unsplash";return n.createElement("div",null,n.createElement(s.G,{image:e,className:"header-image",alt:i,title:i}))}));e.Z=r},6131:function(t,e,i){var n,o;window,void 0===(o="function"==typeof(n=function(){"use strict";function t(t){var e=parseFloat(t);return-1==t.indexOf("%")&&!isNaN(e)&&e}function e(){}var i="undefined"==typeof console?e:function(t){console.error(t)},n=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],o=n.length;function s(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<o;e++)t[n[e]]=0;return t}function r(t){var e=getComputedStyle(t);return e||i("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),e}var a,h=!1;function u(){if(!h){h=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var n=r(e);a=200==Math.round(t(n.width)),c.isBoxSizeOuter=a,i.removeChild(e)}}function c(e){if(u(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var i=r(e);if("none"==i.display)return s();var h={};h.width=e.offsetWidth,h.height=e.offsetHeight;for(var c=h.isBorderBox="border-box"==i.boxSizing,l=0;l<o;l++){var m=n[l],d=i[m],f=parseFloat(d);h[m]=isNaN(f)?0:f}var p=h.paddingLeft+h.paddingRight,g=h.paddingTop+h.paddingBottom,y=h.marginLeft+h.marginRight,v=h.marginTop+h.marginBottom,_=h.borderLeftWidth+h.borderRightWidth,E=h.borderTopWidth+h.borderBottomWidth,b=c&&a,I=t(i.width);!1!==I&&(h.width=I+(b?0:p+_));var z=t(i.height);return!1!==z&&(h.height=z+(b?0:g+E)),h.innerWidth=h.width-(p+_),h.innerHeight=h.height-(g+E),h.outerWidth=h.width+y,h.outerHeight=h.height+v,h}}return c})?n.call(e,i,e,t):n)||(t.exports=o)},3391:function(t,e,i){var n,o;!function(s,r){n=[i(1794),i(6131),i(9741),i(9047),i(5568),i(1835),i(666),i(8947),i(4257)],o=function(t,e,i,n,o,r){return function(t,e,i,n,o,s,r){"use strict";var a=t.jQuery,h=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},u=e.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});u.Item=s,u.LayoutMode=r;var c=u.prototype;c._create=function(){for(var t in this.itemGUID=0,this._sorters={},this._getSorters(),e.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"],r.modes)this._initLayoutMode(t)},c.reloadItems=function(){this.itemGUID=0,e.prototype.reloadItems.call(this)},c._itemize=function(){for(var t=e.prototype._itemize.apply(this,arguments),i=0;i<t.length;i++){t[i].id=this.itemGUID++}return this._updateItemsSortData(t),t},c._initLayoutMode=function(t){var e=r.modes[t],i=this.options[t]||{};this.options[t]=e.options?o.extend(e.options,i):i,this.modes[t]=new e(this)},c.layout=function(){this._isLayoutInited||!this._getOption("initLayout")?this._layout():this.arrange()},c._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},c.arrange=function(t){this.option(t),this._getIsInstant();var e=this._filter(this.items);this.filteredItems=e.matches,this._bindArrangeComplete(),this._isInstant?this._noTransition(this._hideReveal,[e]):this._hideReveal(e),this._sort(),this._layout()},c._init=c.arrange,c._hideReveal=function(t){this.reveal(t.needReveal),this.hide(t.needHide)},c._getIsInstant=function(){var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;return this._isInstant=e,e},c._bindArrangeComplete=function(){var t,e,i,n=this;function o(){t&&e&&i&&n.dispatchEvent("arrangeComplete",null,[n.filteredItems])}this.once("layoutComplete",(function(){t=!0,o()})),this.once("hideComplete",(function(){e=!0,o()})),this.once("revealComplete",(function(){i=!0,o()}))},c._filter=function(t){var e=this.options.filter;e=e||"*";for(var i=[],n=[],o=[],s=this._getFilterTest(e),r=0;r<t.length;r++){var a=t[r];if(!a.isIgnored){var h=s(a);h&&i.push(a),h&&a.isHidden?n.push(a):h||a.isHidden||o.push(a)}}return{matches:i,needReveal:n,needHide:o}},c._getFilterTest=function(t){return a&&this.options.isJQueryFiltering?function(e){return a(e.element).is(t)}:"function"==typeof t?function(e){return t(e.element)}:function(e){return n(e.element,t)}},c.updateSortData=function(t){var e;t?(t=o.makeArray(t),e=this.getItems(t)):e=this.items,this._getSorters(),this._updateItemsSortData(e)},c._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=l(i)}},c._updateItemsSortData=function(t){for(var e=t&&t.length,i=0;e&&i<e;i++){t[i].updateSortData()}};var l=function(){function t(t){if("string"!=typeof t)return t;var i=h(t).split(" "),n=i[0],o=n.match(/^\[(.+)\]$/),s=e(o&&o[1],n),r=u.sortDataParsers[i[1]];return t=r?function(t){return t&&r(s(t))}:function(t){return t&&s(t)}}function e(t,e){return t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e);return i&&i.textContent}}return t}();function m(t,e){return function(i,n){for(var o=0;o<t.length;o++){var s=t[o],r=i.sortData[s],a=n.sortData[s];if(r>a||r<a)return(r>a?1:-1)*((void 0!==e[s]?e[s]:e)?1:-1)}return 0}}u.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},c._sort=function(){if(this.options.sortBy){var t=o.makeArray(this.options.sortBy);this._getIsSameSortBy(t)||(this.sortHistory=t.concat(this.sortHistory));var e=m(this.sortHistory,this.options.sortAscending);this.filteredItems.sort(e)}},c._getIsSameSortBy=function(t){for(var e=0;e<t.length;e++)if(t[e]!=this.sortHistory[e])return!1;return!0},c._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw new Error("No layout mode: "+t);return e.options=this.options[t],e},c._resetLayout=function(){e.prototype._resetLayout.call(this),this._mode()._resetLayout()},c._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},c._manageStamp=function(t){this._mode()._manageStamp(t)},c._getContainerSize=function(){return this._mode()._getContainerSize()},c.needsResizeLayout=function(){return this._mode().needsResizeLayout()},c.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},c.prepended=function(t){var e=this._itemize(t);if(e.length){this._resetLayout(),this._manageStamps();var i=this._filterRevealAdded(e);this.layoutItems(this.filteredItems),this.filteredItems=i.concat(this.filteredItems),this.items=e.concat(this.items)}},c._filterRevealAdded=function(t){var e=this._filter(t);return this.hide(e.needHide),this.reveal(e.matches),this.layoutItems(e.matches,!0),e.matches},c.insert=function(t){var e=this.addItems(t);if(e.length){var i,n,o=e.length;for(i=0;i<o;i++)n=e[i],this.element.appendChild(n.element);var s=this._filter(e).matches;for(i=0;i<o;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;i<o;i++)delete e[i].isLayoutInstant;this.reveal(s)}};var d=c.remove;return c.remove=function(t){t=o.makeArray(t);var e=this.getItems(t);d.call(this,t);for(var i=e&&e.length,n=0;i&&n<i;n++){var s=e[n];o.removeFrom(this.filteredItems,s)}},c.shuffle=function(){for(var t=0;t<this.items.length;t++){this.items[t].sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},c._noTransition=function(t,e){var i=this.options.transitionDuration;this.options.transitionDuration=0;var n=t.apply(this,e);return this.options.transitionDuration=i,n},c.getFilteredItemElements=function(){return this.filteredItems.map((function(t){return t.element}))},u}(s,t,0,i,n,o,r)}.apply(e,n),void 0===o||(t.exports=o)}(window)},5568:function(t,e,i){var n,o,s;window,o=[i(1794)],n=function(t){"use strict";function e(){t.Item.apply(this,arguments)}var i=e.prototype=Object.create(t.Item.prototype),n=i._create;i._create=function(){this.id=this.layout.itemGUID++,n.call(this),this.sortData={}},i.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var n=e[i];this.sortData[i]=n(this.element,this)}}};var o=i.destroy;return i.destroy=function(){o.apply(this,arguments),this.css({display:""})},e},void 0===(s="function"==typeof n?n.apply(e,o):n)||(t.exports=s)},1835:function(t,e,i){var n,o,s;window,o=[i(6131),i(1794)],n=function(t,e){"use strict";function i(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}var n=i.prototype;return["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout","_getOption"].forEach((function(t){n[t]=function(){return e.prototype[t].apply(this.isotope,arguments)}})),n.needsVerticalResizeLayout=function(){var e=t(this.isotope.element);return this.isotope.size&&e&&e.innerHeight!=this.isotope.size.innerHeight},n._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},n.getColumnWidth=function(){this.getSegmentSize("column","Width")},n.getRowHeight=function(){this.getSegmentSize("row","Height")},n.getSegmentSize=function(t,e){var i=t+e,n="outer"+e;if(this._getMeasurement(i,n),!this[i]){var o=this.getFirstItemSize();this[i]=o&&o[n]||this.isotope.size["inner"+e]}},n.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element)},n.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},n.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(t,e){function o(){i.apply(this,arguments)}return o.prototype=Object.create(n),o.prototype.constructor=o,e&&(o.options=e),o.prototype.namespace=t,i.modes[t]=o,o},i},void 0===(s="function"==typeof n?n.apply(e,o):n)||(t.exports=s)},8947:function(t,e,i){var n,o,s;window,o=[i(1835)],void 0===(s="function"==typeof(n=function(t){"use strict";var e=t.create("fitRows"),i=e.prototype;return i._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},i._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth+this.gutter,i=this.isotope.size.innerWidth+this.gutter;0!==this.x&&e+this.x>i&&(this.x=0,this.y=this.maxY);var n={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=e,n},i._getContainerSize=function(){return{height:this.maxY}},e})?n.apply(e,o):n)||(t.exports=s)},666:function(t,e,i){var n,o,s;window,o=[i(1835),i(8751)],n=function(t,e){"use strict";var i=t.create("masonry"),n=i.prototype,o={_getElementOffset:!0,layout:!0,_getMeasurement:!0};for(var s in e.prototype)o[s]||(n[s]=e.prototype[s]);var r=n.measureColumns;n.measureColumns=function(){this.items=this.isotope.filteredItems,r.call(this)};var a=n._getOption;return n._getOption=function(t){return"fitWidth"==t?void 0!==this.options.isFitWidth?this.options.isFitWidth:this.options.fitWidth:a.apply(this.isotope,arguments)},i},void 0===(s="function"==typeof n?n.apply(e,o):n)||(t.exports=s)},4257:function(t,e,i){var n,o,s;window,o=[i(1835)],void 0===(s="function"==typeof(n=function(t){"use strict";var e=t.create("vertical",{horizontalAlignment:0}),i=e.prototype;return i._resetLayout=function(){this.y=0},i._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},i._getContainerSize=function(){return{height:this.y}},e})?n.apply(e,o):n)||(t.exports=s)},8751:function(t,e,i){var n,o,s;window,o=[i(1794),i(6131)],void 0===(s="function"==typeof(n=function(t,e){"use strict";var i=t.create("masonry");i.compatOptions.fitWidth="isFitWidth";var n=i.prototype;return n._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},n.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var n=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,s=o/n,r=n-o%n;s=Math[r&&r<1?"round":"floor"](s),this.cols=Math.max(s,1)},n.getContainerWidth=function(){var t=this._getOption("fitWidth")?this.element.parentNode:this.element,i=e(t);this.containerWidth=i&&i.innerWidth},n._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=Math[e&&e<1?"round":"ceil"](t.size.outerWidth/this.columnWidth);i=Math.min(i,this.cols);for(var n=this[this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition"](i,t),o={x:this.columnWidth*n.col,y:n.y},s=n.y+t.size.outerHeight,r=i+n.col,a=n.col;a<r;a++)this.colYs[a]=s;return o},n._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e);return{col:e.indexOf(i),y:i}},n._getTopColGroup=function(t){if(t<2)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;n<i;n++)e[n]=this._getColGroupY(n,t);return e},n._getColGroupY=function(t,e){if(e<2)return this.colYs[t];var i=this.colYs.slice(t,t+e);return Math.max.apply(Math,i)},n._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols;i=t>1&&i+t>this.cols?0:i;var n=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=n?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},n._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this._getOption("originLeft")?n.left:n.right,s=o+i.outerWidth,r=Math.floor(o/this.columnWidth);r=Math.max(0,r);var a=Math.floor(s/this.columnWidth);a-=s%this.columnWidth?0:1,a=Math.min(this.cols-1,a);for(var h=(this._getOption("originTop")?n.top:n.bottom)+i.outerHeight,u=r;u<=a;u++)this.colYs[u]=Math.max(h,this.colYs[u])},n._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},n._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},n.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i})?n.apply(e,o):n)||(t.exports=s)},652:function(t,e,i){var n,o,s;window,o=[i(7158),i(6131)],void 0===(s="function"==typeof(n=function(t,e){"use strict";function i(t){for(var e in t)return!1;return!0}var n=document.documentElement.style,o="string"==typeof n.transition?"transition":"WebkitTransition",s="string"==typeof n.transform?"transform":"WebkitTransform",r={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[o],a={transform:s,transition:o,transitionDuration:o+"Duration",transitionProperty:o+"Property",transitionDelay:o+"Delay"};function h(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}var u=h.prototype=Object.create(t.prototype);function c(t){return t.replace(/([A-Z])/g,(function(t){return"-"+t.toLowerCase()}))}u.constructor=h,u._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},u.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},u.getSize=function(){this.size=e(this.element)},u.css=function(t){var e=this.element.style;for(var i in t)e[a[i]||i]=t[i]},u.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),n=t[e?"left":"right"],o=t[i?"top":"bottom"],s=parseFloat(n),r=parseFloat(o),a=this.layout.size;-1!=n.indexOf("%")&&(s=s/100*a.width),-1!=o.indexOf("%")&&(r=r/100*a.height),s=isNaN(s)?0:s,r=isNaN(r)?0:r,s-=e?a.paddingLeft:a.paddingRight,r-=i?a.paddingTop:a.paddingBottom,this.position.x=s,this.position.y=r},u.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),o=i?"paddingLeft":"paddingRight",s=i?"left":"right",r=i?"right":"left",a=this.position.x+t[o];e[s]=this.getXValue(a),e[r]="";var h=n?"paddingTop":"paddingBottom",u=n?"top":"bottom",c=n?"bottom":"top",l=this.position.y+t[h];e[u]=this.getYValue(l),e[c]="",this.css(e),this.emitEvent("layout",[this])},u.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},u.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},u._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=t==this.position.x&&e==this.position.y;if(this.setPosition(t,e),!o||this.isTransitioning){var s=t-i,r=e-n,a={};a.transform=this.getTranslate(s,r),this.transition({to:a,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})}else this.layoutPosition()},u.getTranslate=function(t,e){return"translate3d("+(t=this.layout._getOption("originLeft")?t:-t)+"px, "+(e=this.layout._getOption("originTop")?e:-e)+"px, 0)"},u.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},u.moveTo=u._transitionTo,u.setPosition=function(t,e){this.position.x=parseFloat(t),this.position.y=parseFloat(e)},u._nonTransition=function(t){for(var e in this.css(t.to),t.isCleaning&&this._removeStyles(t.to),t.onTransitionEnd)t.onTransitionEnd[e].call(this)},u.transition=function(t){if(parseFloat(this.layout.options.transitionDuration)){var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);t.from&&(this.css(t.from),this.element.offsetHeight),this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0}else this._nonTransition(t)};var l="opacity,"+c(s);u.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(r,this,!1)}},u.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},u.onotransitionend=function(t){this.ontransitionend(t)};var m={"-webkit-transform":"transform"};u.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,n=m[t.propertyName]||t.propertyName;delete e.ingProperties[n],i(e.ingProperties)&&this.disableTransition(),n in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[n]),n in e.onEnd&&(e.onEnd[n].call(this),delete e.onEnd[n]),this.emitEvent("transitionEnd",[this])}},u.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(r,this,!1),this.isTransitioning=!1},u._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var d={transitionProperty:"",transitionDuration:"",transitionDelay:""};return u.removeTransitionStyles=function(){this.css(d)},u.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},u.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},u.remove=function(){o&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",(function(){this.removeElem()})),this.hide()):this.removeElem()},u.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={};e[this.getHideRevealTransitionEndProperty("visibleStyle")]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},u.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},u.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},u.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={};e[this.getHideRevealTransitionEndProperty("hiddenStyle")]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},u.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},u.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},h})?n.apply(e,o):n)||(t.exports=s)},1794:function(t,e,i){var n,o;!function(s,r){"use strict";n=[i(7158),i(6131),i(9047),i(652)],o=function(t,e,i,n){return function(t,e,i,n,o){var s=t.console,r=t.jQuery,a=function(){},h=0,u={};function c(t,e){var i=n.getQueryElement(t);if(i){this.element=i,r&&(this.$element=r(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e);var o=++h;this.element.outlayerGUID=o,u[o]=this,this._create(),this._getOption("initLayout")&&this.layout()}else s&&s.error("Bad element for "+this.constructor.namespace+": "+(i||t))}c.namespace="outlayer",c.Item=o,c.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var l=c.prototype;function m(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}n.extend(l,e.prototype),l.option=function(t){n.extend(this.options,t)},l._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},c.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},l._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle),this._getOption("resize")&&this.bindResize()},l.reloadItems=function(){this.items=this._itemize(this.element.children)},l._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],o=0;o<e.length;o++){var s=new i(e[o],this);n.push(s)}return n},l._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},l.getItemElements=function(){return this.items.map((function(t){return t.element}))},l.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},l._init=l.layout,l._resetLayout=function(){this.getSize()},l.getSize=function(){this.size=i(this.element)},l._getMeasurement=function(t,e){var n,o=this.options[t];o?("string"==typeof o?n=this.element.querySelector(o):o instanceof HTMLElement&&(n=o),this[t]=n?i(n)[e]:o):this[t]=0},l.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},l._getItemsForLayout=function(t){return t.filter((function(t){return!t.isIgnored}))},l._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach((function(t){var n=this._getItemLayoutPosition(t);n.item=t,n.isInstant=e||t.isLayoutInstant,i.push(n)}),this),this._processLayoutQueue(i)}},l._getItemLayoutPosition=function(){return{x:0,y:0}},l._processLayoutQueue=function(t){this.updateStagger(),t.forEach((function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)}),this)},l.updateStagger=function(){var t=this.options.stagger;if(null!=t)return this.stagger=f(t),this.stagger;this.stagger=0},l._positionItem=function(t,e,i,n,o){n?t.goTo(e,i):(t.stagger(o*this.stagger),t.moveTo(e,i))},l._postLayout=function(){this.resizeContainer()},l.resizeContainer=function(){if(this._getOption("resizeContainer")){var t=this._getContainerSize();t&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))}},l._getContainerSize=a,l._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},l._emitCompleteOnItems=function(t,e){var i=this;function n(){i.dispatchEvent(t+"Complete",null,[e])}var o=e.length;if(e&&o){var s=0;e.forEach((function(e){e.once(t,r)}))}else n();function r(){++s==o&&n()}},l.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),r)if(this.$element=this.$element||r(this.element),e){var o=r.Event(e);o.type=t,this.$element.trigger(o,i)}else this.$element.trigger(t,i)},l.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},l.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},l.stamp=function(t){(t=this._find(t))&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},l.unstamp=function(t){(t=this._find(t))&&t.forEach((function(t){n.removeFrom(this.stamps,t),this.unignore(t)}),this)},l._find=function(t){if(t)return"string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n.makeArray(t)},l._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},l._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},l._manageStamp=a,l._getElementOffset=function(t){var e=t.getBoundingClientRect(),n=this._boundingRect,o=i(t);return{left:e.left-n.left-o.marginLeft,top:e.top-n.top-o.marginTop,right:n.right-e.right-o.marginRight,bottom:n.bottom-e.bottom-o.marginBottom}},l.handleEvent=n.handleEvent,l.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},l.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},l.onresize=function(){this.resize()},n.debounceMethod(c,"onresize",100),l.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},l.needsResizeLayout=function(){var t=i(this.element);return this.size&&t&&t.innerWidth!==this.size.innerWidth},l.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},l.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},l.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},l.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach((function(t,i){t.stagger(i*e),t.reveal()}))}},l.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach((function(t,i){t.stagger(i*e),t.hide()}))}},l.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},l.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},l.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},l.getItems=function(t){t=n.makeArray(t);var e=[];return t.forEach((function(t){var i=this.getItem(t);i&&e.push(i)}),this),e},l.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach((function(t){t.remove(),n.removeFrom(this.items,t)}),this)},l.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach((function(t){t.destroy()})),this.unbindResize();var e=this.element.outlayerGUID;delete u[e],delete this.element.outlayerGUID,r&&r.removeData(this.element,this.constructor.namespace)},c.data=function(t){var e=(t=n.getQueryElement(t))&&t.outlayerGUID;return e&&u[e]},c.create=function(t,e){var i=m(c);return i.defaults=n.extend({},c.defaults),n.extend(i.defaults,e),i.compatOptions=n.extend({},c.compatOptions),i.namespace=t,i.data=c.data,i.Item=m(o),n.htmlInit(i,t),r&&r.bridget&&r.bridget(t,i),i};var d={ms:1,s:1e3};function f(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],n=e&&e[2];return i.length?(i=parseFloat(i))*(d[n]||1):0}return c.Item=o,c}(s,t,e,i,n)}.apply(e,n),void 0===o||(t.exports=o)}(window)}}]);
//# sourceMappingURL=84a15deefff097bddf7eee49939f0fda1c4b15f3-585e87fa7639122c62d4.js.map