function Displayable(){this.m_HTMLElement=null;this.m_Graphics=null}Displayable.prototype.onresize=function(b,e,c,a,d){this.m_ScaleToFitScreen=d;this.m_HTMLElement.width=c/d;this.m_HTMLElement.height=a/d;LowAPI.applyStyle(this.m_HTMLElement,{width:c+"px",height:a+"px","min-width":c+"px","min-height":a+"px",position:"relative",left:b+"px",top:e+"px",});this.m_Graphics=new GraphicsEX(this.m_HTMLElement);this.m_BoundingRect=this.m_HTMLElement.getBoundingClientRect()};Displayable.prototype.getHTMLElement=function(){if(this.m_HTMLElement==null){throw new Error("The wrapper HTML element is not found!")}return this.m_HTMLElement};Displayable.prototype.getWidth=function(){return this.m_HTMLElement.width};Displayable.prototype.getHeight=function(){return this.m_HTMLElement.height};Displayable.prototype.onVisible=function(a){};