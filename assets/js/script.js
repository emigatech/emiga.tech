(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){var FilterCSS=require("cssfilter").FilterCSS;var getDefaultCSSWhiteList=require("cssfilter").getDefaultWhiteList;var _=require("./util");function getDefaultWhiteList(){return{a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","loop","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],sup:[],strong:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","loop","preload","src","height","width"]}}var defaultCSSFilter=new FilterCSS;function onTag(tag,html,options){}function onIgnoreTag(tag,html,options){}function onTagAttr(tag,name,value){}function onIgnoreTagAttr(tag,name,value){}function escapeHtml(html){return html.replace(REGEXP_LT,"&lt;").replace(REGEXP_GT,"&gt;")}function safeAttrValue(tag,name,value,cssFilter){value=friendlyAttrValue(value);if(name==="href"||name==="src"){value=_.trim(value);if(value==="#")return"#";if(!(value.substr(0,7)==="http://"||value.substr(0,8)==="https://"||value.substr(0,7)==="mailto:"||value.substr(0,4)==="tel:"||value[0]==="#"||value[0]==="/")){return""}}else if(name==="background"){REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex=0;if(REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)){return""}}else if(name==="style"){REGEXP_DEFAULT_ON_TAG_ATTR_7.lastIndex=0;if(REGEXP_DEFAULT_ON_TAG_ATTR_7.test(value)){return""}REGEXP_DEFAULT_ON_TAG_ATTR_8.lastIndex=0;if(REGEXP_DEFAULT_ON_TAG_ATTR_8.test(value)){REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex=0;if(REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)){return""}}if(cssFilter!==false){cssFilter=cssFilter||defaultCSSFilter;value=cssFilter.process(value)}}value=escapeAttrValue(value);return value}var REGEXP_LT=/</g;var REGEXP_GT=/>/g;var REGEXP_QUOTE=/"/g;var REGEXP_QUOTE_2=/&quot;/g;var REGEXP_ATTR_VALUE_1=/&#([a-zA-Z0-9]*);?/gim;var REGEXP_ATTR_VALUE_COLON=/&colon;?/gim;var REGEXP_ATTR_VALUE_NEWLINE=/&newline;?/gim;var REGEXP_DEFAULT_ON_TAG_ATTR_3=/\/\*|\*\//gm;var REGEXP_DEFAULT_ON_TAG_ATTR_4=/((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi;var REGEXP_DEFAULT_ON_TAG_ATTR_5=/^[\s"'`]*(d\s*a\s*t\s*a\s*)\:/gi;var REGEXP_DEFAULT_ON_TAG_ATTR_6=/^[\s"'`]*(d\s*a\s*t\s*a\s*)\:\s*image\//gi;var REGEXP_DEFAULT_ON_TAG_ATTR_7=/e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi;var REGEXP_DEFAULT_ON_TAG_ATTR_8=/u\s*r\s*l\s*\(.*/gi;function escapeQuote(str){return str.replace(REGEXP_QUOTE,"&quot;")}function unescapeQuote(str){return str.replace(REGEXP_QUOTE_2,'"')}function escapeHtmlEntities(str){return str.replace(REGEXP_ATTR_VALUE_1,function replaceUnicode(str,code){return code[0]==="x"||code[0]==="X"?String.fromCharCode(parseInt(code.substr(1),16)):String.fromCharCode(parseInt(code,10))})}function escapeDangerHtml5Entities(str){return str.replace(REGEXP_ATTR_VALUE_COLON,":").replace(REGEXP_ATTR_VALUE_NEWLINE," ")}function clearNonPrintableCharacter(str){var str2="";for(var i=0,len=str.length;i<len;i++){str2+=str.charCodeAt(i)<32?" ":str.charAt(i)}return _.trim(str2)}function friendlyAttrValue(str){str=unescapeQuote(str);str=escapeHtmlEntities(str);str=escapeDangerHtml5Entities(str);str=clearNonPrintableCharacter(str);return str}function escapeAttrValue(str){str=escapeQuote(str);str=escapeHtml(str);return str}function onIgnoreTagStripAll(){return""}function StripTagBody(tags,next){if(typeof next!=="function"){next=function(){}}var isRemoveAllTag=!Array.isArray(tags);function isRemoveTag(tag){if(isRemoveAllTag)return true;return _.indexOf(tags,tag)!==-1}var removeList=[];var posStart=false;return{onIgnoreTag:function(tag,html,options){if(isRemoveTag(tag)){if(options.isClosing){var ret="[/removed]";var end=options.position+ret.length;removeList.push([posStart!==false?posStart:options.position,end]);posStart=false;return ret}else{if(!posStart){posStart=options.position}return"[removed]"}}else{return next(tag,html,options)}},remove:function(html){var rethtml="";var lastPos=0;_.forEach(removeList,function(pos){rethtml+=html.slice(lastPos,pos[0]);lastPos=pos[1]});rethtml+=html.slice(lastPos);return rethtml}}}function stripCommentTag(html){return html.replace(STRIP_COMMENT_TAG_REGEXP,"")}var STRIP_COMMENT_TAG_REGEXP=/<!--[\s\S]*?-->/g;function stripBlankChar(html){var chars=html.split("");chars=chars.filter(function(char){var c=char.charCodeAt(0);if(c===127)return false;if(c<=31){if(c===10||c===13)return true;return false}return true});return chars.join("")}exports.whiteList=getDefaultWhiteList();exports.getDefaultWhiteList=getDefaultWhiteList;exports.onTag=onTag;exports.onIgnoreTag=onIgnoreTag;exports.onTagAttr=onTagAttr;exports.onIgnoreTagAttr=onIgnoreTagAttr;exports.safeAttrValue=safeAttrValue;exports.escapeHtml=escapeHtml;exports.escapeQuote=escapeQuote;exports.unescapeQuote=unescapeQuote;exports.escapeHtmlEntities=escapeHtmlEntities;exports.escapeDangerHtml5Entities=escapeDangerHtml5Entities;exports.clearNonPrintableCharacter=clearNonPrintableCharacter;exports.friendlyAttrValue=friendlyAttrValue;exports.escapeAttrValue=escapeAttrValue;exports.onIgnoreTagStripAll=onIgnoreTagStripAll;exports.StripTagBody=StripTagBody;exports.stripCommentTag=stripCommentTag;exports.stripBlankChar=stripBlankChar;exports.cssFilter=defaultCSSFilter;exports.getDefaultCSSWhiteList=getDefaultCSSWhiteList},{"./util":4,cssfilter:8}],2:[function(require,module,exports){var DEFAULT=require("./default");var parser=require("./parser");var FilterXSS=require("./xss");function filterXSS(html,options){var xss=new FilterXSS(options);return xss.process(html)}exports=module.exports=filterXSS;exports.filterXSS=filterXSS;exports.FilterXSS=FilterXSS;for(var i in DEFAULT)exports[i]=DEFAULT[i];for(var i in parser)exports[i]=parser[i];if(typeof window!=="undefined"){window.filterXSS=module.exports}function isWorkerEnv(){return typeof self!=="undefined"&&typeof DedicatedWorkerGlobalScope!=="undefined"&&self instanceof DedicatedWorkerGlobalScope}if(isWorkerEnv()){self.filterXSS=module.exports}},{"./default":1,"./parser":3,"./xss":5}],3:[function(require,module,exports){var _=require("./util");function getTagName(html){var i=_.spaceIndex(html);if(i===-1){var tagName=html.slice(1,-1)}else{var tagName=html.slice(1,i+1)}tagName=_.trim(tagName).toLowerCase();if(tagName.slice(0,1)==="/")tagName=tagName.slice(1);if(tagName.slice(-1)==="/")tagName=tagName.slice(0,-1);return tagName}function isClosing(html){return html.slice(0,2)==="</"}function parseTag(html,onTag,escapeHtml){"user strict";var rethtml="";var lastPos=0;var tagStart=false;var quoteStart=false;var currentPos=0;var len=html.length;var currentTagName="";var currentHtml="";for(currentPos=0;currentPos<len;currentPos++){var c=html.charAt(currentPos);if(tagStart===false){if(c==="<"){tagStart=currentPos;continue}}else{if(quoteStart===false){if(c==="<"){rethtml+=escapeHtml(html.slice(lastPos,currentPos));tagStart=currentPos;lastPos=currentPos;continue}if(c===">"){rethtml+=escapeHtml(html.slice(lastPos,tagStart));currentHtml=html.slice(tagStart,currentPos+1);currentTagName=getTagName(currentHtml);rethtml+=onTag(tagStart,rethtml.length,currentTagName,currentHtml,isClosing(currentHtml));lastPos=currentPos+1;tagStart=false;continue}if((c==='"'||c==="'")&&html.charAt(currentPos-1)==="="){quoteStart=c;continue}}else{if(c===quoteStart){quoteStart=false;continue}}}}if(lastPos<html.length){rethtml+=escapeHtml(html.substr(lastPos))}return rethtml}var REGEXP_ILLEGAL_ATTR_NAME=/[^a-zA-Z0-9_:\.\-]/gim;function parseAttr(html,onAttr){"user strict";var lastPos=0;var retAttrs=[];var tmpName=false;var len=html.length;function addAttr(name,value){name=_.trim(name);name=name.replace(REGEXP_ILLEGAL_ATTR_NAME,"").toLowerCase();if(name.length<1)return;var ret=onAttr(name,value||"");if(ret)retAttrs.push(ret)}for(var i=0;i<len;i++){var c=html.charAt(i);var v,j;if(tmpName===false&&c==="="){tmpName=html.slice(lastPos,i);lastPos=i+1;continue}if(tmpName!==false){if(i===lastPos&&(c==='"'||c==="'")&&html.charAt(i-1)==="="){j=html.indexOf(c,i+1);if(j===-1){break}else{v=_.trim(html.slice(lastPos+1,j));addAttr(tmpName,v);tmpName=false;i=j;lastPos=i+1;continue}}}if(/\s|\n|\t/.test(c)){html=html.replace(/\s|\n|\t/g," ");if(tmpName===false){j=findNextEqual(html,i);if(j===-1){v=_.trim(html.slice(lastPos,i));addAttr(v);tmpName=false;lastPos=i+1;continue}else{i=j-1;continue}}else{j=findBeforeEqual(html,i-1);if(j===-1){v=_.trim(html.slice(lastPos,i));v=stripQuoteWrap(v);addAttr(tmpName,v);tmpName=false;lastPos=i+1;continue}else{continue}}}}if(lastPos<html.length){if(tmpName===false){addAttr(html.slice(lastPos))}else{addAttr(tmpName,stripQuoteWrap(_.trim(html.slice(lastPos))))}}return _.trim(retAttrs.join(" "))}function findNextEqual(str,i){for(;i<str.length;i++){var c=str[i];if(c===" ")continue;if(c==="=")return i;return-1}}function findBeforeEqual(str,i){for(;i>0;i--){var c=str[i];if(c===" ")continue;if(c==="=")return i;return-1}}function isQuoteWrapString(text){if(text[0]==='"'&&text[text.length-1]==='"'||text[0]==="'"&&text[text.length-1]==="'"){return true}else{return false}}function stripQuoteWrap(text){if(isQuoteWrapString(text)){return text.substr(1,text.length-2)}else{return text}}exports.parseTag=parseTag;exports.parseAttr=parseAttr},{"./util":4}],4:[function(require,module,exports){module.exports={indexOf:function(arr,item){var i,j;if(Array.prototype.indexOf){return arr.indexOf(item)}for(i=0,j=arr.length;i<j;i++){if(arr[i]===item){return i}}return-1},forEach:function(arr,fn,scope){var i,j;if(Array.prototype.forEach){return arr.forEach(fn,scope)}for(i=0,j=arr.length;i<j;i++){fn.call(scope,arr[i],i,arr)}},trim:function(str){if(String.prototype.trim){return str.trim()}return str.replace(/(^\s*)|(\s*$)/g,"")},spaceIndex:function(str){var reg=/\s|\n|\t/;var match=reg.exec(str);return match?match.index:-1}}},{}],5:[function(require,module,exports){var FilterCSS=require("cssfilter").FilterCSS;var DEFAULT=require("./default");var parser=require("./parser");var parseTag=parser.parseTag;var parseAttr=parser.parseAttr;var _=require("./util");function isNull(obj){return obj===undefined||obj===null}function getAttrs(html){var i=_.spaceIndex(html);if(i===-1){return{html:"",closing:html[html.length-2]==="/"}}html=_.trim(html.slice(i+1,-1));var isClosing=html[html.length-1]==="/";if(isClosing)html=_.trim(html.slice(0,-1));return{html:html,closing:isClosing}}function shallowCopyObject(obj){var ret={};for(var i in obj){ret[i]=obj[i]}return ret}function FilterXSS(options){options=shallowCopyObject(options||{});if(options.stripIgnoreTag){if(options.onIgnoreTag){console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time')}options.onIgnoreTag=DEFAULT.onIgnoreTagStripAll}options.whiteList=options.whiteList||DEFAULT.whiteList;options.onTag=options.onTag||DEFAULT.onTag;options.onTagAttr=options.onTagAttr||DEFAULT.onTagAttr;options.onIgnoreTag=options.onIgnoreTag||DEFAULT.onIgnoreTag;options.onIgnoreTagAttr=options.onIgnoreTagAttr||DEFAULT.onIgnoreTagAttr;options.safeAttrValue=options.safeAttrValue||DEFAULT.safeAttrValue;options.escapeHtml=options.escapeHtml||DEFAULT.escapeHtml;this.options=options;if(options.css===false){this.cssFilter=false}else{options.css=options.css||{};this.cssFilter=new FilterCSS(options.css)}}FilterXSS.prototype.process=function(html){html=html||"";html=html.toString();if(!html)return"";var me=this;var options=me.options;var whiteList=options.whiteList;var onTag=options.onTag;var onIgnoreTag=options.onIgnoreTag;var onTagAttr=options.onTagAttr;var onIgnoreTagAttr=options.onIgnoreTagAttr;var safeAttrValue=options.safeAttrValue;var escapeHtml=options.escapeHtml;var cssFilter=me.cssFilter;if(options.stripBlankChar){html=DEFAULT.stripBlankChar(html)}if(!options.allowCommentTag){html=DEFAULT.stripCommentTag(html)}var stripIgnoreTagBody=false;if(options.stripIgnoreTagBody){var stripIgnoreTagBody=DEFAULT.StripTagBody(options.stripIgnoreTagBody,onIgnoreTag);onIgnoreTag=stripIgnoreTagBody.onIgnoreTag}var retHtml=parseTag(html,function(sourcePosition,position,tag,html,isClosing){var info={sourcePosition:sourcePosition,position:position,isClosing:isClosing,isWhite:whiteList.hasOwnProperty(tag)};var ret=onTag(tag,html,info);if(!isNull(ret))return ret;if(info.isWhite){if(info.isClosing){return"</"+tag+">"}var attrs=getAttrs(html);var whiteAttrList=whiteList[tag];var attrsHtml=parseAttr(attrs.html,function(name,value){var isWhiteAttr=_.indexOf(whiteAttrList,name)!==-1;var ret=onTagAttr(tag,name,value,isWhiteAttr);if(!isNull(ret))return ret;if(isWhiteAttr){value=safeAttrValue(tag,name,value,cssFilter);if(value){return name+'="'+value+'"'}else{return name}}else{var ret=onIgnoreTagAttr(tag,name,value,isWhiteAttr);if(!isNull(ret))return ret;return}});var html="<"+tag;if(attrsHtml)html+=" "+attrsHtml;if(attrs.closing)html+=" /";html+=">";return html}else{var ret=onIgnoreTag(tag,html,info);if(!isNull(ret))return ret;return escapeHtml(html)}},escapeHtml);if(stripIgnoreTagBody){retHtml=stripIgnoreTagBody.remove(retHtml)}return retHtml};module.exports=FilterXSS},{"./default":1,"./parser":3,"./util":4,cssfilter:8}],6:[function(require,module,exports){var DEFAULT=require("./default");var parseStyle=require("./parser");var _=require("./util");function isNull(obj){return obj===undefined||obj===null}function shallowCopyObject(obj){var ret={};for(var i in obj){ret[i]=obj[i]}return ret}function FilterCSS(options){options=shallowCopyObject(options||{});options.whiteList=options.whiteList||DEFAULT.whiteList;options.onAttr=options.onAttr||DEFAULT.onAttr;options.onIgnoreAttr=options.onIgnoreAttr||DEFAULT.onIgnoreAttr;options.safeAttrValue=options.safeAttrValue||DEFAULT.safeAttrValue;this.options=options}FilterCSS.prototype.process=function(css){css=css||"";css=css.toString();if(!css)return"";var me=this;var options=me.options;var whiteList=options.whiteList;var onAttr=options.onAttr;var onIgnoreAttr=options.onIgnoreAttr;var safeAttrValue=options.safeAttrValue;var retCSS=parseStyle(css,function(sourcePosition,position,name,value,source){var check=whiteList[name];var isWhite=false;if(check===true)isWhite=check;else if(typeof check==="function")isWhite=check(value);else if(check instanceof RegExp)isWhite=check.test(value);if(isWhite!==true)isWhite=false;value=safeAttrValue(name,value);if(!value)return;var opts={position:position,sourcePosition:sourcePosition,source:source,isWhite:isWhite};if(isWhite){var ret=onAttr(name,value,opts);if(isNull(ret)){return name+":"+value}else{return ret}}else{var ret=onIgnoreAttr(name,value,opts);if(!isNull(ret)){return ret}}});return retCSS};module.exports=FilterCSS},{"./default":7,"./parser":9,"./util":10}],7:[function(require,module,exports){function getDefaultWhiteList(){var whiteList={};whiteList["align-content"]=false;whiteList["align-items"]=false;whiteList["align-self"]=false;whiteList["alignment-adjust"]=false;whiteList["alignment-baseline"]=false;whiteList["all"]=false;whiteList["anchor-point"]=false;whiteList["animation"]=false;whiteList["animation-delay"]=false;whiteList["animation-direction"]=false;whiteList["animation-duration"]=false;whiteList["animation-fill-mode"]=false;whiteList["animation-iteration-count"]=false;whiteList["animation-name"]=false;whiteList["animation-play-state"]=false;whiteList["animation-timing-function"]=false;whiteList["azimuth"]=false;whiteList["backface-visibility"]=false;whiteList["background"]=true;whiteList["background-attachment"]=true;whiteList["background-clip"]=true;whiteList["background-color"]=true;whiteList["background-image"]=true;whiteList["background-origin"]=true;whiteList["background-position"]=true;whiteList["background-repeat"]=true;whiteList["background-size"]=true;whiteList["baseline-shift"]=false;whiteList["binding"]=false;whiteList["bleed"]=false;whiteList["bookmark-label"]=false;whiteList["bookmark-level"]=false;whiteList["bookmark-state"]=false;whiteList["border"]=true;whiteList["border-bottom"]=true;whiteList["border-bottom-color"]=true;whiteList["border-bottom-left-radius"]=true;whiteList["border-bottom-right-radius"]=true;whiteList["border-bottom-style"]=true;whiteList["border-bottom-width"]=true;whiteList["border-collapse"]=true;whiteList["border-color"]=true;whiteList["border-image"]=true;whiteList["border-image-outset"]=true;whiteList["border-image-repeat"]=true;whiteList["border-image-slice"]=true;whiteList["border-image-source"]=true;whiteList["border-image-width"]=true;whiteList["border-left"]=true;whiteList["border-left-color"]=true;whiteList["border-left-style"]=true;whiteList["border-left-width"]=true;whiteList["border-radius"]=true;whiteList["border-right"]=true;whiteList["border-right-color"]=true;whiteList["border-right-style"]=true;whiteList["border-right-width"]=true;whiteList["border-spacing"]=true;whiteList["border-style"]=true;whiteList["border-top"]=true;whiteList["border-top-color"]=true;whiteList["border-top-left-radius"]=true;whiteList["border-top-right-radius"]=true;whiteList["border-top-style"]=true;whiteList["border-top-width"]=true;whiteList["border-width"]=true;whiteList["bottom"]=false;whiteList["box-decoration-break"]=true;whiteList["box-shadow"]=true;whiteList["box-sizing"]=true;whiteList["box-snap"]=true;whiteList["box-suppress"]=true;whiteList["break-after"]=true;whiteList["break-before"]=true;whiteList["break-inside"]=true;whiteList["caption-side"]=false;whiteList["chains"]=false;whiteList["clear"]=true;whiteList["clip"]=false;whiteList["clip-path"]=false;whiteList["clip-rule"]=false;whiteList["color"]=true;whiteList["color-interpolation-filters"]=true;whiteList["column-count"]=false;whiteList["column-fill"]=false;whiteList["column-gap"]=false;whiteList["column-rule"]=false;whiteList["column-rule-color"]=false;whiteList["column-rule-style"]=false;whiteList["column-rule-width"]=false;whiteList["column-span"]=false;whiteList["column-width"]=false;whiteList["columns"]=false;whiteList["contain"]=false;whiteList["content"]=false;whiteList["counter-increment"]=false;whiteList["counter-reset"]=false;whiteList["counter-set"]=false;whiteList["crop"]=false;whiteList["cue"]=false;whiteList["cue-after"]=false;whiteList["cue-before"]=false;whiteList["cursor"]=false;whiteList["direction"]=false;whiteList["display"]=true;whiteList["display-inside"]=true;whiteList["display-list"]=true;whiteList["display-outside"]=true;whiteList["dominant-baseline"]=false;whiteList["elevation"]=false;whiteList["empty-cells"]=false;whiteList["filter"]=false;whiteList["flex"]=false;whiteList["flex-basis"]=false;whiteList["flex-direction"]=false;whiteList["flex-flow"]=false;whiteList["flex-grow"]=false;whiteList["flex-shrink"]=false;whiteList["flex-wrap"]=false;whiteList["float"]=false;whiteList["float-offset"]=false;whiteList["flood-color"]=false;whiteList["flood-opacity"]=false;whiteList["flow-from"]=false;whiteList["flow-into"]=false;whiteList["font"]=true;whiteList["font-family"]=true;whiteList["font-feature-settings"]=true;whiteList["font-kerning"]=true;whiteList["font-language-override"]=true;whiteList["font-size"]=true;whiteList["font-size-adjust"]=true;whiteList["font-stretch"]=true;whiteList["font-style"]=true;whiteList["font-synthesis"]=true;whiteList["font-variant"]=true;whiteList["font-variant-alternates"]=true;whiteList["font-variant-caps"]=true;whiteList["font-variant-east-asian"]=true;whiteList["font-variant-ligatures"]=true;whiteList["font-variant-numeric"]=true;whiteList["font-variant-position"]=true;whiteList["font-weight"]=true;whiteList["grid"]=false;whiteList["grid-area"]=false;whiteList["grid-auto-columns"]=false;whiteList["grid-auto-flow"]=false;whiteList["grid-auto-rows"]=false;whiteList["grid-column"]=false;whiteList["grid-column-end"]=false;whiteList["grid-column-start"]=false;whiteList["grid-row"]=false;whiteList["grid-row-end"]=false;whiteList["grid-row-start"]=false;whiteList["grid-template"]=false;whiteList["grid-template-areas"]=false;whiteList["grid-template-columns"]=false;whiteList["grid-template-rows"]=false;whiteList["hanging-punctuation"]=false;whiteList["height"]=true;whiteList["hyphens"]=false;whiteList["icon"]=false;whiteList["image-orientation"]=false;whiteList["image-resolution"]=false;whiteList["ime-mode"]=false;whiteList["initial-letters"]=false;whiteList["inline-box-align"]=false;whiteList["justify-content"]=false;whiteList["justify-items"]=false;whiteList["justify-self"]=false;whiteList["left"]=false;whiteList["letter-spacing"]=true;whiteList["lighting-color"]=true;whiteList["line-box-contain"]=false;whiteList["line-break"]=false;whiteList["line-grid"]=false;whiteList["line-height"]=false;whiteList["line-snap"]=false;whiteList["line-stacking"]=false;whiteList["line-stacking-ruby"]=false;whiteList["line-stacking-shift"]=false;whiteList["line-stacking-strategy"]=false;whiteList["list-style"]=true;whiteList["list-style-image"]=true;whiteList["list-style-position"]=true;whiteList["list-style-type"]=true;whiteList["margin"]=true;whiteList["margin-bottom"]=true;whiteList["margin-left"]=true;whiteList["margin-right"]=true;whiteList["margin-top"]=true;whiteList["marker-offset"]=false;whiteList["marker-side"]=false;whiteList["marks"]=false;whiteList["mask"]=false;whiteList["mask-box"]=false;whiteList["mask-box-outset"]=false;whiteList["mask-box-repeat"]=false;whiteList["mask-box-slice"]=false;whiteList["mask-box-source"]=false;whiteList["mask-box-width"]=false;whiteList["mask-clip"]=false;whiteList["mask-image"]=false;whiteList["mask-origin"]=false;whiteList["mask-position"]=false;whiteList["mask-repeat"]=false;whiteList["mask-size"]=false;whiteList["mask-source-type"]=false;whiteList["mask-type"]=false;whiteList["max-height"]=true;whiteList["max-lines"]=false;whiteList["max-width"]=true;whiteList["min-height"]=true;whiteList["min-width"]=true;whiteList["move-to"]=false;whiteList["nav-down"]=false;whiteList["nav-index"]=false;whiteList["nav-left"]=false;whiteList["nav-right"]=false;whiteList["nav-up"]=false;whiteList["object-fit"]=false;whiteList["object-position"]=false;whiteList["opacity"]=false;whiteList["order"]=false;whiteList["orphans"]=false;whiteList["outline"]=false;whiteList["outline-color"]=false;whiteList["outline-offset"]=false;whiteList["outline-style"]=false;whiteList["outline-width"]=false;whiteList["overflow"]=false;whiteList["overflow-wrap"]=false;whiteList["overflow-x"]=false;whiteList["overflow-y"]=false;whiteList["padding"]=true;whiteList["padding-bottom"]=true;whiteList["padding-left"]=true;whiteList["padding-right"]=true;whiteList["padding-top"]=true;whiteList["page"]=false;whiteList["page-break-after"]=false;whiteList["page-break-before"]=false;whiteList["page-break-inside"]=false;whiteList["page-policy"]=false;whiteList["pause"]=false;whiteList["pause-after"]=false;whiteList["pause-before"]=false;whiteList["perspective"]=false;whiteList["perspective-origin"]=false;whiteList["pitch"]=false;whiteList["pitch-range"]=false;whiteList["play-during"]=false;whiteList["position"]=false;whiteList["presentation-level"]=false;whiteList["quotes"]=false;whiteList["region-fragment"]=false;whiteList["resize"]=false;whiteList["rest"]=false;whiteList["rest-after"]=false;whiteList["rest-before"]=false;whiteList["richness"]=false;whiteList["right"]=false;whiteList["rotation"]=false;whiteList["rotation-point"]=false;whiteList["ruby-align"]=false;whiteList["ruby-merge"]=false;whiteList["ruby-position"]=false;whiteList["shape-image-threshold"]=false;whiteList["shape-outside"]=false;whiteList["shape-margin"]=false;whiteList["size"]=false;whiteList["speak"]=false;whiteList["speak-as"]=false;whiteList["speak-header"]=false;whiteList["speak-numeral"]=false;whiteList["speak-punctuation"]=false;whiteList["speech-rate"]=false;whiteList["stress"]=false;whiteList["string-set"]=false;whiteList["tab-size"]=false;whiteList["table-layout"]=false;whiteList["text-align"]=true;whiteList["text-align-last"]=true;whiteList["text-combine-upright"]=true;whiteList["text-decoration"]=true;whiteList["text-decoration-color"]=true;whiteList["text-decoration-line"]=true;whiteList["text-decoration-skip"]=true;whiteList["text-decoration-style"]=true;whiteList["text-emphasis"]=true;whiteList["text-emphasis-color"]=true;whiteList["text-emphasis-position"]=true;whiteList["text-emphasis-style"]=true;whiteList["text-height"]=true;whiteList["text-indent"]=true;whiteList["text-justify"]=true;whiteList["text-orientation"]=true;whiteList["text-overflow"]=true;whiteList["text-shadow"]=true;whiteList["text-space-collapse"]=true;whiteList["text-transform"]=true;whiteList["text-underline-position"]=true;whiteList["text-wrap"]=true;whiteList["top"]=false;whiteList["transform"]=false;whiteList["transform-origin"]=false;whiteList["transform-style"]=false;whiteList["transition"]=false;whiteList["transition-delay"]=false;whiteList["transition-duration"]=false;whiteList["transition-property"]=false;whiteList["transition-timing-function"]=false;whiteList["unicode-bidi"]=false;whiteList["vertical-align"]=false;whiteList["visibility"]=false;whiteList["voice-balance"]=false;whiteList["voice-duration"]=false;whiteList["voice-family"]=false;whiteList["voice-pitch"]=false;whiteList["voice-range"]=false;whiteList["voice-rate"]=false;whiteList["voice-stress"]=false;whiteList["voice-volume"]=false;whiteList["volume"]=false;whiteList["white-space"]=false;whiteList["widows"]=false;whiteList["width"]=true;whiteList["will-change"]=false;whiteList["word-break"]=true;whiteList["word-spacing"]=true;whiteList["word-wrap"]=true;whiteList["wrap-flow"]=false;whiteList["wrap-through"]=false;whiteList["writing-mode"]=false;whiteList["z-index"]=false;return whiteList}function onAttr(name,value,options){}function onIgnoreAttr(name,value,options){}var REGEXP_URL_JAVASCRIPT=/javascript\s*\:/gim;function safeAttrValue(name,value){if(REGEXP_URL_JAVASCRIPT.test(value))return"";return value}exports.whiteList=getDefaultWhiteList();exports.getDefaultWhiteList=getDefaultWhiteList;exports.onAttr=onAttr;exports.onIgnoreAttr=onIgnoreAttr;exports.safeAttrValue=safeAttrValue},{}],8:[function(require,module,exports){var DEFAULT=require("./default");var FilterCSS=require("./css");function filterCSS(html,options){var xss=new FilterCSS(options);return xss.process(html)}exports=module.exports=filterCSS;exports.FilterCSS=FilterCSS;for(var i in DEFAULT)exports[i]=DEFAULT[i];if(typeof window!=="undefined"){window.filterCSS=module.exports}},{"./css":6,"./default":7}],9:[function(require,module,exports){var _=require("./util");function parseStyle(css,onAttr){css=_.trimRight(css);if(css[css.length-1]!==";")css+=";";var cssLength=css.length;var isParenthesisOpen=false;var lastPos=0;var i=0;var retCSS="";function addNewAttr(){if(!isParenthesisOpen){var source=_.trim(css.slice(lastPos,i));var j=source.indexOf(":");if(j!==-1){var name=_.trim(source.slice(0,j));var value=_.trim(source.slice(j+1));if(name){var ret=onAttr(lastPos,retCSS.length,name,value,source);if(ret)retCSS+=ret+"; "}}}lastPos=i+1}for(;i<cssLength;i++){var c=css[i];if(c==="/"&&css[i+1]==="*"){var j=css.indexOf("*/",i+2);if(j===-1)break;i=j+1;lastPos=i+1;isParenthesisOpen=false}else if(c==="("){isParenthesisOpen=true}else if(c===")"){isParenthesisOpen=false}else if(c===";"){if(isParenthesisOpen){}else{addNewAttr()}}else if(c==="\n"){addNewAttr()}}return _.trim(retCSS)}module.exports=parseStyle},{"./util":10}],10:[function(require,module,exports){module.exports={indexOf:function(arr,item){var i,j;if(Array.prototype.indexOf){return arr.indexOf(item)}for(i=0,j=arr.length;i<j;i++){if(arr[i]===item){return i}}return-1},forEach:function(arr,fn,scope){var i,j;if(Array.prototype.forEach){return arr.forEach(fn,scope)}for(i=0,j=arr.length;i<j;i++){fn.call(scope,arr[i],i,arr)}},trim:function(str){if(String.prototype.trim){return str.trim()}return str.replace(/(^\s*)|(\s*$)/g,"")},trimRight:function(str){if(String.prototype.trimRight){return str.trimRight()}return str.replace(/(\s*$)/g,"")}}},{}]},{},[2]);
$( document ).ready(function() {
 	 
  emiga_app = '152945cf366446688129bd121c63cd5c';

  // Lazy Load
  AOS.init();
  var lazy = new LazyLoad({
    elements_selector: ".lazy",

  });
 
  // Query
  var app_query = (function(a) {
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i)
    {
        var p=a[i].split('=', 2);
        if (p.length == 1)
            b[p[0]] = "";
        else
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
  })(window.location.search.substr(1).split('&'));

  // Posting
  function PostHtml(date,url,title,image,content,description,author,source_name) {

  	return `
          <div data-aos="fade-down" class="col-12 border mt-1 mb-1 w-100">
            <div class="container pt-2 pb-2">

              <div class="d-flex justify-content-between pt-2 pb-2">
                <div></div>
                <div>
                  <h6 class="text-muted d-sm-none d-md-block">`+moment(filterXSS(date)).format("DD MMMM HH:mm, YYYY")+`</h6>
                </div>
              </div>

              <div class="row">            
                <div class="col-sm-12 col-md-4 col-lg-4 mt-1 mb-1 p-0">
                    <a href="`+filterXSS(url)+`" target="_blank" title="Go to `+filterXSS(title)+`">
                    	<div data-bg="url('`+filterXSS(image)+`')" alt="`+filterXSS(title)+`" class="lazy text-center img-fluid img-responsive bg-dark"></div>
                	</a>
                </div>
                <div class="col-sm-12 col-md-8 col-lg-8 bg-white p-3 mt-1 mb-1">
                    <a href="`+filterXSS(url)+`" target="_blank" title="Go to `+filterXSS(title)+`">
                      <h4>`+filterXSS(title)+`</h4>
                    </a>
                    <p class="pt-2 pb-2">`+filterXSS(content)+`</p>
                </div>
                <div class="tcontainer border col-sm-12 col-md-12 col-lg-12 p-0">
                  <div class="ticker-wrap">
                    <div class="ticker-move">
                      <div class="ticker-item">`+filterXSS(description)+`</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="d-flex justify-content-between pt-2 pb-2">
                <div>
                  <h6 class="text-muted d-sm-none d-md-block">by <b>`+filterXSS(author)+`</b> on `+filterXSS(source_name)+`</h6>
                </div>
              </div>

            </div>
          </div>
        `;
  }

  // Check url
  if(app_query['q'] == undefined) {

  	request = 'https://newsapi.org/v2/top-headlines?category=technology&sortBy=popularity&country=us&pageSize=100&apiKey='+emiga_app;
  }
  else {
  	request = 'https://newsapi.org/v2/everything?q='+filterXSS(app_query['q'])+'&sortBy=popularity&pageSize=100&apiKey='+emiga_app;
  }

  $.ajax(request, {
    type: "GET",
    dataType: "json",
    success: function(data) {
    	
      $('#loading').hide();
      $('#error-text').html('');

      	// Error Message
		if(data.totalResults==0){
 			$('.spinner-border').hide(); 	
		    $('#error-text').append(
				`
				<div class="pt-5"></div>
				<svg height="128" width="128" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M476.014,180.001l-93.05-27.197l-0.38-0.105c-2.816-0.744-5.794-0.744-8.61,0l-22.125,6.465V70.247C351.85,24.13,268.102,0,185.375,0S18.901,24.13,18.901,70.247v371.507c0,46.118,83.747,70.246,166.474,70.246s166.475-24.13,166.475-70.246v-24.057l1.378,0.811l0.841,0.459c7.58,3.826,15.895,5.739,24.211,5.739c8.316,0,16.631-1.913,24.211-5.739l0.429-0.216l61.203-35.973c17.887-9.241,28.977-27.431,28.977-47.598V202.423C493.098,191.957,486.085,182.773,476.014,180.001z M83.398,45.258c27.007-9.85,63.222-15.276,101.977-15.276c38.755,0,74.971,5.426,101.978,15.276c23.714,8.65,34.514,19.017,34.514,24.989c0,5.971-10.802,16.338-34.514,24.988c-27.007,9.85-63.224,15.276-101.978,15.276c-38.754,0-74.97-5.426-101.977-15.276c-23.714-8.65-34.514-19.017-34.514-24.988C48.883,64.275,59.684,53.908,83.398,45.258z M321.868,112.219v55.707l-41.323,12.075c-9.082,2.5-15.658,10.219-16.865,19.385c-23.241,5.533-49.884,8.441-77.805,8.441c-38.755,0-74.971-5.426-101.977-15.276c-23.715-8.65-34.514-19.016-34.514-24.988c0-1.308-0.185-2.57-0.5-3.78v-51.564c31.719,18.668,84.304,28.274,136.492,28.274C237.563,140.493,290.149,130.887,321.868,112.219z M48.883,209.239c31.664,18.863,84.529,28.571,136.991,28.571c27.422,0,53.853-2.633,77.587-7.657v62.628c-23.081,5.369-50.338,8.291-78.086,8.291c-38.754,0-74.97-5.426-101.977-15.276c-23.714-8.65-34.514-19.017-34.514-24.988V209.239z M48.883,302.78c31.719,18.668,84.304,28.274,136.492,28.274c27.743,0,54.344-2.601,78.086-7.563v11.689c0,18.625,9.463,35.558,25,45.318c-25.869,10.13-62.706,16.069-102.587,16.069c-38.754,0-74.971-5.426-101.977-15.276c-23.714-8.65-34.514-19.017-34.514-24.989c0-1.308-0.185-2.57-0.5-3.78V302.78z M321.869,441.754L321.869,441.754c-0.001,5.971-10.803,16.338-34.515,24.988c-27.007,9.85-63.224,15.276-101.978,15.276c-38.754,0-74.97-5.426-101.977-15.276c-23.714-8.65-34.514-19.017-34.514-24.988v-43.776c31.664,18.863,84.529,28.571,136.991,28.571c54.677,0,103.633-10.296,133.71-27.816l2.284,1.342V441.754z M450.15,356.247l-0.429,0.216l-61.12,35.924c-6.496,3.133-14.15,3.133-20.646,0l-60.707-35.681l-0.841-0.459c-7.997-4.037-12.965-12.11-12.965-21.067V211.356c0-0.002,0-0.004,0-0.006v-3.882l47.826-13.979c0.023-0.007,36.987-10.811,37.01-10.818l84.836,24.797v127.71h0.001C463.116,344.137,458.148,352.21,450.15,356.247z"/></g></g><g><g><path d="M399.147,289.009l22.065-22.065c5.854-5.854,5.854-15.346,0-21.2c-5.854-5.854-15.346-5.854-21.2,0l-22.065,22.065l-21.401-21.403c-5.854-5.855-15.346-5.854-21.2,0s-5.854,15.346,0,21.2l21.403,21.403l-20.255,20.255c-5.854,5.854-5.854,15.346,0,21.2c2.927,2.927,6.764,4.391,10.6,4.391c3.836,0,7.673-1.464,10.6-4.391l20.255-20.255l20.918,20.918c2.927,2.928,6.764,4.391,10.6,4.391s7.673-1.464,10.6-4.391c5.855-5.854,5.855-15.346,0-21.2L399.147,289.009z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
				<h4 class="pt-2">
					<b>Our monkeys are busy</b>
				</h4>
					</br>
				<h6>We do not handle what you want</h6>`);		      	
		}
	 	else {
		     $('#error-text').html('');
		}

	  // Parse Data	
      for(var i = 0; i < data.articles.length; i++)
      {
		
		date=data.articles[i].publishedAt,image=data.articles[i].urlToImage,title=data.articles[i].title,description=data.articles[i].description,url=data.articles[i].url,content=data.articles[i].content,author=data.articles[i].author,source_name=data.articles[i].source.name,"null"==date&&date,"null"==image&&date,"null"==title&&date,"null"==description&&date,"null"==url&&date,"null"==content&&date,"null"==author&&date,"null"==source_name&&date;

        $('#emiga-app').append(PostHtml(date,url,title,image,content,description,author,source_name));

        lazy.update();
      }
    },

    error: function(req, status, err) {
      $('.spinner-border').hide(); 	
      $('#error-text').append(
		`
		<div class="pt-5"></div>
		<svg height="128" viewBox="0 0 64 64" width="128" xmlns="http://www.w3.org/2000/svg"><path d="m61 39h-8a1 1 0 0 1 0-2h7v-10h-6.83a1 1 0 0 1 -.962-.728 20.5 20.5 0 0 0 -1.869-4.5 1 1 0 0 1 .164-1.2l4.833-4.833-7.076-7.075-4.833 4.836a1 1 0 0 1 -1.2.164 20.525 20.525 0 0 0 -4.5-1.869 1 1 0 0 1 -.727-.965v-6.83h-10v6.83a1 1 0 0 1 -.728.962 20.5 20.5 0 0 0 -4.5 1.869 1 1 0 0 1 -1.2-.164l-4.832-4.833-7.076 7.076 4.836 4.833a1 1 0 0 1 .164 1.2 20.553 20.553 0 0 0 -1.869 4.5 1 1 0 0 1 -.965.727h-6.83v10h6.83a1 1 0 0 1 0 2h-7.83a1 1 0 0 1 -1-1v-12a1 1 0 0 1 1-1h7.087a22.523 22.523 0 0 1 1.469-3.541l-5.013-5.012a1 1 0 0 1 0-1.414l8.49-8.49a1 1 0 0 1 1.414 0l5.013 5.013a22.473 22.473 0 0 1 3.54-1.469v-7.087a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7.087a22.473 22.473 0 0 1 3.54 1.469l5.013-5.013a1 1 0 0 1 1.414 0l8.49 8.49a1 1 0 0 1 0 1.414l-5.013 5.012a22.619 22.619 0 0 1 1.469 3.541h7.087a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1z"/><path d="m57 54.142v-7.142a1 1 0 0 0 -.419-.814l-6.581-4.701v-9.485a18 18 0 0 0 -36 0v9.485l-6.581 4.7a1 1 0 0 0 -.419.815v7.142a4 4 0 1 0 2 0v-6.627l6.581-4.7a1 1 0 0 0 .419-.815v-10a16 16 0 0 1 32 0v10a1 1 0 0 0 .419.814l6.581 4.701v6.627a4 4 0 1 0 2 0zm-47 3.858a2 2 0 1 1 -2-2 2 2 0 0 1 2 2zm46 2a2 2 0 1 1 2-2 2 2 0 0 1 -2 2z"/><path d="m44 46.142v-14.142a12 12 0 0 0 -24 0v14.142a4 4 0 1 0 2 0v-14.142a10 10 0 0 1 20 0v14.142a4 4 0 1 0 2 0zm-21 3.858a2 2 0 1 1 -2-2 2 2 0 0 1 2 2zm20 2a2 2 0 1 1 2-2 2 2 0 0 1 -2 2z"/><path d="m33 54.142v-16.142a1 1 0 0 0 -2 0v16.142a4 4 0 1 0 2 0zm-1 5.858a2 2 0 1 1 2-2 2 2 0 0 1 -2 2z"/><path d="m32 26a6 6 0 1 0 6 6 6.006 6.006 0 0 0 -6-6zm0 10a4 4 0 1 1 4-4 4 4 0 0 1 -4 4z"/><path d="m31 6h2v2h-2z"/><path d="m13.322 13.322h2v2h-2z" transform="matrix(.707 -.707 .707 .707 -5.932 14.322)"/><path d="m6 31h2v2h-2z"/><path d="m56 31h2v2h-2z"/><path d="m48.678 13.322h2v2h-2z" transform="matrix(.707 -.707 .707 .707 4.423 39.322)"/></svg>
		<h4 class="pt-2">
			<b>Connection Error</b>
		</h4>
			</br>
		<h6>Please check your network connection.</h6>`);
      console.error("Something went wrong! Status: %s (%s)", status, err);
    }
  });

	$(window).scroll(function(e) {

	    var scroll = $(window).scrollTop();
	    if (scroll >= 60) {
	        $('.footer').show();
	    } 
	    else {
	        $('.footer').hide();
	    }

	});

});
