(function(b,e){var f=25214903917;var d=11;var a=281474976710655;function c(g){if(g==e){g=0}this.setSeed(g)}c.prototype.nextInt=function(){return this.next(32)};c.prototype.next=function(i){var h,j;var g=this.seed;do{h=g;j=(h*f+d)&a}while(j==h);this.seed=j;return(j>>>(48-i))|0};c.prototype.setSeed=function(g){this.seed=(g^f)&a};b.Random=c})(window);