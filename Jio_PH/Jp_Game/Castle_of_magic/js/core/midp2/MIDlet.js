function MIDlet(){if(typeof MIDlet.s_inst_count=="undefined"){MIDlet.s_inst_count=0}this.m_inst_id=(MIDlet.s_inst_count++)}MIDlet.prototype.checkPermission=function(a){return 1};MIDlet.prototype.destroyApp=function(a){throw new Error("abstract function called: must be overriden!")};MIDlet.prototype.getAppProperty=function(a){return null};MIDlet.prototype.notifyDestroyed=function(){Warn("MIDlet.prototype.notifyDestroyed() is called.")};MIDlet.prototype.notifyPaused=function(){Assert(false,"MIDlet.prototype.notifyPaused() is called, but this function has not been implemented.")};MIDlet.prototype.pauseApp=function(){throw new Error("abstract function called: must be overriden!")};MIDlet.prototype.platformRequest=function(a){return false};MIDlet.prototype.resumeRequest=function(){Assert(false,"MIDlet.prototype.resumeRequest() is called, but this function has not been implemented.")};MIDlet.prototype.startApp=function(){throw new Error("abstract function called: must be overriden!")};