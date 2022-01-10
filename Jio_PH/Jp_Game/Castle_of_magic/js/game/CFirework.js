window.FIREWORKS={};FIREWORKS.MAX_NO_FIREWORKS=7;FIREWORKS.MAX_NO_PATCH=10;FIREWORKS.PATCH_LENGHT=50;FIREWORKS.MAX_ENERGY=1000;FIREWORKS.GRAVITY=900;(function(s,e){var b;var k;var o;q._posX;q._posY;var j=true;var d,c,m=[],l=[],f,a,i,p;var h=[];q.SV_X=11;q.SV_Y=18;q.SV_W=DEF.VIEW_W-11;q.SV_H=DEF.VIEW_H-18;q.BACKGROUND_COLOR=[6031882,11555,6199,986949,4328514];q._random=new Random();q.Rnd=function(t){if(t==0){return 0}return(q._random.nextInt()&4095)%t};q.GetGradientColor=function(B,A,w,y){if(w<0){w=0}if(w>y){w=y}var v=(B>>16)&255;var t=(B>>8)&255;var z=(B)&255;var u=(A>>16)&255;var C=(A>>8)&255;var x=(A)&255;v=v+(u-v)*w/y;z=z+(x-z)*w/y;t=t+(C-t)*w/y;return(255<<24)+(v<<16)+(t<<8)+z};function q(t){o=t}q.prototype.Init=function(w,u,t){var v;b=w;k=u;r=t;m=LowAPI.Gen_Array([FIREWORKS.MAX_NO_PATCH],0);l=LowAPI.Gen_Array([FIREWORKS.MAX_NO_PATCH],0);h=LowAPI.Gen_Array([3][k],null);f=Rnd(128)+128;a=Rnd(128)+128;i=Rnd(128)+128;switch(o){case 0:d=SV_X+Rnd(SV_W/2-30)+30;c=SV_Y+Rnd(SV_H/4-10)+10;break;case 1:d=SV_X+Rnd(SV_W/2-30)+SV_W/2;c=SV_Y+Rnd(SV_H/4-10)+10;break;case 2:d=SV_X+Rnd(SV_W/2-30)+30;c=SV_Y+Rnd(SV_H/4-10)+SV_H/4;break;case 3:d=SV_X+Rnd(SV_W/2-30)+SV_W/2;c=SV_Y+Rnd(SV_H/4-10)+SV_H/4;break}c=SV_Y+SV_H;for(v=0;v<FIREWORKS.MAX_NO_PATCH;v++){m[v]=Rnd(b)-(b>>1);l[v]=(Rnd(b*7)>>3)+(b<<1)}p=0;n=0;j=false};q.prototype.Update=function(){if(!j){for(var t=0;t<=(p>>4);t++){p++;if(p>=k){break}var u;u=Rnd(64)-32+f;if(u>=0&&u<256){f=u}u=Rnd(64)-32+a;if(u>=0&&u<256){a=u}u=Rnd(64)-32+i;if(u>=0&&u<256){i=u}h[0][p]=f;h[1][p]=a;h[2][p]=i}if(p>=k+g){j=true}}};var r;var g=6;var n;q.prototype.Paint=function(A){if(k==0){return}var C,B;var t=p-g;var w=p;if(t<0){t=0}if(w>=k){w=k-1}this.Update();if(!j){for(var v=t;v<=w;v++){var z;var D=((FIREWORKS.GRAVITY*v*v)>>12);for(z=0;z<FIREWORKS.MAX_NO_PATCH;z++){C=d+((m[z]*v/1)>>6);B=c-(((l[z]*v/2)>>6)-D);if(v!=w){var u=parseInt((h[0][v]&255)<<16)+parseInt((h[1][v]&255)<<8)+parseInt(h[2][v]&255);if(v>(k>>1)){A.setColor(GetGradientColor(u,BACKGROUND_COLOR[0],v,k))}else{A.setColor(u)}if(v>10||r){A.fillRect(C,B,2,2)}else{A.fillRect(C,B,1,1)}}else{_posX=C;_posY=B;CGame.PaintFireworkSprite(A)}}}}};LowAPI.extendObject(s,{CFirework:q,},true)})(window);