function Canvas(){if(typeof Canvas.__declared_statics__=="undefined"){Canvas.__declared_statics__=true;Canvas.setDefaultStyle({})}Canvas.__superclass__.call(this);this.m_HTMLElement=Canvas.createDefaultHtmlCanvas();this.isTouchDevice=Device.isTouchDevice;this.m_HTMLElement.addEventListener(this.isTouchDevice?"touchstart":"mousedown",LowAPI.proxy(this._handleMouseDown,this),false);this.m_HTMLElement.addEventListener(this.isTouchDevice?"touchmove":"mousemove",LowAPI.proxy(this._handleMouseMove,this),false);this.m_HTMLElement.addEventListener(this.isTouchDevice?"touchend":"mouseup",LowAPI.proxy(this._handleMouseUp,this),false);this.m_HTMLElement.addEventListener(this.isTouchDevice?"touchleave":"mouseleave",LowAPI.proxy(this._handleMouseUp,this),false);document.addEventListener("visibilitychange",LowAPI.proxy(this.onVisible,this),false);document.addEventListener("mozvisibilitychange",LowAPI.proxy(this.onVisible,this),false);document.addEventListener("webkitvisibilitychange",LowAPI.proxy(this.onVisible,this),false);document.addEventListener("msvisibilitychange",LowAPI.proxy(this.onVisible,this),false);document.addEventListener("focus",LowAPI.proxy(this.onFocus,this),false);document.addEventListener("blur",LowAPI.proxy(this.onBlur,this),false);if(this.isTouchDevice){this.m_HTMLElement.addEventListener("touchcancel",LowAPI.proxy(this._handleMouseUp,this),false)}else{window.addEventListener("keydown",LowAPI.proxy(this._handleKeyDown,this),false);window.addEventListener("keyup",LowAPI.proxy(this._handleKeyUp,this),false)}}LowAPI.extendClass(Canvas,Displayable);Canvas.createDefaultHtmlCanvas=function(c,a,d){var b=document.createElement("canvas");if(c&&a){b.width=c;b.height=a}if(d){b.style.zIndex=d}LowAPI.applyStyle(b,Canvas.DEFAULT_CSS_STYLE);return b};Canvas.setDefaultStyle=function(a){var b=Canvas.DEFAULT_CSS_STYLE;if(typeof b=="undefined"){b={}}Canvas.DEFAULT_CSS_STYLE=LowAPI.extendObject(b,a)};Canvas.prototype.hideNotify=function(){try{}finally{}};Canvas.prototype.showNotify=function(){try{}finally{}};Canvas.prototype.setFullScreenMode=function(a){};Canvas.prototype.repaint=function(){var a=this.m_Graphics;this.paint(a)};Canvas.prototype.paint=function(a){};Canvas.prototype.pointerPressed=function(a,b){};Canvas.prototype.pointerDragged=function(a,b){};Canvas.prototype.pointerReleased=function(a,b){};Canvas._Pointer_idle=0;Canvas._Pointer_Pressed=1;Canvas.prototype._PointerState=Canvas._Pointer_idle;Canvas.prototype._PointerLastEffectPoint=null;Canvas.prototype._TouchIDHanding=-1;function isCanvasInputEvent(b){var a=b.target;if(!a){return true}if(a===document||a===window){return true}if(document&&document.body&&a===document.body){return true}if(a.tagName&&a.tagName.toLowerCase()==="canvas".toLowerCase()){return true}return false}Canvas.prototype._handleMouseDown=function(a){window.focus();if(a&&a.preventDefault&&isCanvasInputEvent(a)){try{a.preventDefault()}catch(b){}}if(this._PointerState!=Canvas._Pointer_idle){this._handleMouseUp()}const c=this.getMousePos(this.m_HTMLElement,a);if(c!=null){this.pointerPressed(c.x,c.y);this._PointerState=Canvas._Pointer_Pressed;this._PointerLastEffectPoint=c;this._TouchIDHanding=c.identifier}};Canvas.prototype._FakegetMousePos=function(a){return this.getMousePos(this.m_HTMLElement,a)};Canvas.prototype._handleMouseMove=function(a){if(a&&a.preventDefault){try{a.preventDefault()}catch(b){}}if(this.isTouchDevice||this._PointerState==Canvas._Pointer_Pressed){const c=this.getMousePos(this.m_HTMLElement,a,this._TouchIDHanding);if(c!=null){this.pointerDragged(c.x,c.y);this._PointerLastEffectPoint=c}}};Canvas.prototype._handleMouseUp=function(a){if(a&&a.preventDefault&&isCanvasInputEvent(a)){try{a.preventDefault()}catch(b){}}if(this._PointerLastEffectPoint!=null){this.pointerReleased(this._PointerLastEffectPoint.x,this._PointerLastEffectPoint.y);this._PointerState=Canvas._Pointer_idle;this._PointerLastEffectPoint=null;this._TouchIDHanding=-1}};Canvas.prototype._handleMouseLeave=function(a){this._PointerState=Canvas._Pointer_idle;this._PointerLastEffectPoint=null;this._TouchIDHanding=-1};Canvas.DEF_SOFT_LEFT_CODE=12001;Canvas.DEF_SOFT_RIGHT_CODE=12002;Canvas.DEF_CALL_CODE=12003;Canvas.DEF_SOFT_LEFT_NAME="SoftLeft";Canvas.DEF_SOFT_RIGHT_NAME="SoftRight";Canvas.DEF_CALL_NAME="Call";Canvas.prototype._handleKeyDown=function(a){var b=a.keyCode;if(b==0){switch(a.key){case Canvas.DEF_SOFT_LEFT_NAME:b=Canvas.DEF_SOFT_LEFT_CODE;break;case Canvas.DEF_SOFT_RIGHT_NAME:b=Canvas.DEF_SOFT_RIGHT_CODE;break;case Canvas.DEF_CALL_NAME:b=Canvas.DEF_CALL_CODE;break}}this.keyPressed(b);if(a.keyCode==8){a.preventDefault()}};Canvas.prototype._handleKeyUp=function(a){var b=a.keyCode;if(b==0){switch(a.key){case Canvas.DEF_SOFT_LEFT_NAME:b=Canvas.DEF_SOFT_LEFT_CODE;break;case Canvas.DEF_SOFT_RIGHT_NAME:b=Canvas.DEF_SOFT_RIGHT_CODE;break;case Canvas.DEF_CALL_NAME:b=Canvas.DEF_CALL_CODE;break}}this.keyReleased(b);if(a.keyCode==8){a.preventDefault()}};Canvas.prototype.preventDefault=function(a){try{a.preventDefault()}catch(b){}};Canvas.prototype.getMousePos=function(b,a,l){var k=-1,j=-1,g=0;var e=a.changedTouches;if(e){var d;var l=l;if(typeof l=="undefined"){d=e[0]}else{for(var c=0,f=e.length;c<f;c++){if(e[c].identifier==l){d=e[c];break}}}if(d){k=d.pageX;j=d.pageY;g=d.identifier}}else{k=a.pageX;j=a.pageY}var h=this.m_BoundingRect;return{x:LowAPI.Float2Int((k-h.left)/this.m_ScaleToFitScreen),y:LowAPI.Float2Int((j-h.top)/this.m_ScaleToFitScreen),identifier:g}};Canvas.prototype.IS_SENT_HIDENOTIFY=false;Canvas.prototype.onVisible=function(){if(document.hidden||document.mozHidden||document.webkitHidden||document.msHidden){if(!this.IS_SENT_HIDENOTIFY){this.hideNotify();this.IS_SENT_HIDENOTIFY=true}}else{window.focus();if(this.IS_SENT_HIDENOTIFY&&document.hasFocus()){this.showNotify();this.IS_SENT_HIDENOTIFY=false}}};Canvas.prototype.onFocus=function(){if(document.hasFocus()){window.focus();if(this.IS_SENT_HIDENOTIFY){this.showNotify();this.IS_SENT_HIDENOTIFY=false}}};Canvas.prototype.onBlur=function(){if(!this.IS_SENT_HIDENOTIFY){this.hideNotify();this.IS_SENT_HIDENOTIFY=true}};