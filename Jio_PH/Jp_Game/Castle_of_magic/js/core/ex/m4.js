(function(a,b){if(typeof define==="function"&&define.amd){define([],b)}else{a.m4=b()}}(this,function(){function l(ae,ab,ak){ak=ak||new Float32Array(16);var P=ab[0*4+0];var O=ab[0*4+1];var M=ab[0*4+2];var K=ab[0*4+3];var Z=ab[1*4+0];var Y=ab[1*4+1];var X=ab[1*4+2];var W=ab[1*4+3];var F=ab[2*4+0];var E=ab[2*4+1];var D=ab[2*4+2];var C=ab[2*4+3];var R=ab[3*4+0];var Q=ab[3*4+1];var N=ab[3*4+2];var L=ab[3*4+3];var ai=ae[0*4+0];var ag=ae[0*4+1];var ad=ae[0*4+2];var aa=ae[0*4+3];var J=ae[1*4+0];var I=ae[1*4+1];var H=ae[1*4+2];var G=ae[1*4+3];var V=ae[2*4+0];var U=ae[2*4+1];var T=ae[2*4+2];var S=ae[2*4+3];var aj=ae[3*4+0];var ah=ae[3*4+1];var af=ae[3*4+2];var ac=ae[3*4+3];ak[0]=P*ai+O*J+M*V+K*aj;ak[1]=P*ag+O*I+M*U+K*ah;ak[2]=P*ad+O*H+M*T+K*af;ak[3]=P*aa+O*G+M*S+K*ac;ak[4]=Z*ai+Y*J+X*V+W*aj;ak[5]=Z*ag+Y*I+X*U+W*ah;ak[6]=Z*ad+Y*H+X*T+W*af;ak[7]=Z*aa+Y*G+X*S+W*ac;ak[8]=F*ai+E*J+D*V+C*aj;ak[9]=F*ag+E*I+D*U+C*ah;ak[10]=F*ad+E*H+D*T+C*af;ak[11]=F*aa+E*G+D*S+C*ac;ak[12]=R*ai+Q*J+N*V+L*aj;ak[13]=R*ag+Q*I+N*U+L*ah;ak[14]=R*ad+Q*H+N*T+L*af;ak[15]=R*aa+Q*G+N*S+L*ac;return ak}function s(D,C,E){E=E||new Float32Array(3);E[0]=D[0]-C[0];E[1]=D[1]-C[1];E[2]=D[2]-C[2];return E}function u(C,E){E=E||new Float32Array(3);var D=Math.sqrt(C[0]*C[0]+C[1]*C[1]+C[2]*C[2]);if(D>0.00001){E[0]=C[0]/D;E[1]=C[1]/D;E[2]=C[2]/D}return E}function e(D,C,E){E=E||new Float32Array(3);E[0]=D[1]*C[2]-D[2]*C[1];E[1]=D[2]*C[0]-D[0]*C[2];E[2]=D[0]*C[1]-D[1]*C[0];return E}function B(C){C=C||new Float32Array(16);C[0]=1;C[1]=0;C[2]=0;C[3]=0;C[4]=0;C[5]=1;C[6]=0;C[7]=0;C[8]=0;C[9]=0;C[10]=1;C[11]=0;C[12]=0;C[13]=0;C[14]=0;C[15]=1;return C}function m(C,D){D=D||new Float32Array(16);D[0]=C[0];D[1]=C[4];D[2]=C[8];D[3]=C[12];D[4]=C[1];D[5]=C[5];D[6]=C[9];D[7]=C[13];D[8]=C[2];D[9]=C[6];D[10]=C[10];D[11]=C[14];D[12]=C[3];D[13]=C[7];D[14]=C[11];D[15]=C[15];return D}function c(I,G,C,H){H=H||new Float32Array(16);var F=u(s(I,G));var E=u(e(C,F));var D=u(e(F,E));H[0]=E[0];H[1]=E[1];H[2]=E[2];H[3]=0;H[4]=D[0];H[5]=D[1];H[6]=D[2];H[7]=0;H[8]=F[0];H[9]=F[1];H[10]=F[2];H[11]=0;H[12]=I[0];H[13]=I[1];H[14]=I[2];H[15]=1;return H}function q(D,E,F,C,I){I=I||new Float32Array(16);var H=Math.tan(Math.PI*0.5-0.5*D);var G=1/(F-C);I[0]=H/E;I[1]=0;I[2]=0;I[3]=0;I[4]=0;I[5]=H;I[6]=0;I[7]=0;I[8]=0;I[9]=0;I[10]=(F+C)*G;I[11]=-1;I[12]=0;I[13]=0;I[14]=F*C*G*2;I[15]=0;return I}function x(H,E,D,G,F,C,I){I=I||new Float32Array(16);I[0]=2/(E-H);I[1]=0;I[2]=0;I[3]=0;I[4]=0;I[5]=2/(G-D);I[6]=0;I[7]=0;I[8]=0;I[9]=0;I[10]=2/(F-C);I[11]=0;I[12]=(H+E)/(H-E);I[13]=(D+G)/(D-G);I[14]=(F+C)/(F-C);I[15]=1;return I}function i(D,H,C,G,F,E){var K=H-D;var J=G-C;var I=E-F;dst[0]=2*F/K;dst[1]=0;dst[2]=0;dst[3]=0;dst[4]=0;dst[5]=2*F/J;dst[6]=0;dst[7]=0;dst[8]=(D+H)/K;dst[9]=(G+C)/J;dst[10]=-(E+F)/I;dst[11]=-1;dst[12]=0;dst[13]=0;dst[14]=-2*F*E/I;dst[15]=0;return dst}function h(D,C,F,E){E=E||new Float32Array(16);E[0]=1;E[1]=0;E[2]=0;E[3]=0;E[4]=0;E[5]=1;E[6]=0;E[7]=0;E[8]=0;E[9]=0;E[10]=1;E[11]=0;E[12]=D;E[13]=C;E[14]=F;E[15]=1;return E}function n(O,U,S,Q,W){W=W||new Float32Array(16);var M=O[0];var K=O[1];var I=O[2];var G=O[3];var V=O[1*4+0];var T=O[1*4+1];var R=O[1*4+2];var P=O[1*4+3];var F=O[2*4+0];var E=O[2*4+1];var D=O[2*4+2];var C=O[2*4+3];var N=O[3*4+0];var L=O[3*4+1];var J=O[3*4+2];var H=O[3*4+3];if(O!==W){W[0]=M;W[1]=K;W[2]=I;W[3]=G;W[4]=V;W[5]=T;W[6]=R;W[7]=P;W[8]=F;W[9]=E;W[10]=D;W[11]=C}W[12]=M*U+V*S+F*Q+N;W[13]=K*U+T*S+E*Q+L;W[14]=I*U+R*S+D*Q+J;W[15]=G*U+P*S+C*Q+H;return W}function g(C,F){F=F||new Float32Array(16);var E=Math.cos(C);var D=Math.sin(C);F[0]=1;F[1]=0;F[2]=0;F[3]=0;F[4]=0;F[5]=E;F[6]=D;F[7]=0;F[8]=0;F[9]=-D;F[10]=E;F[11]=0;F[12]=0;F[13]=0;F[14]=0;F[15]=1;return F}function k(G,N,M){M=M||new Float32Array(16);var K=G[4];var J=G[5];var I=G[6];var H=G[7];var F=G[8];var E=G[9];var D=G[10];var C=G[11];var L=Math.cos(N);var O=Math.sin(N);M[4]=L*K+O*F;M[5]=L*J+O*E;M[6]=L*I+O*D;M[7]=L*H+O*C;M[8]=L*F-O*K;M[9]=L*E-O*J;M[10]=L*D-O*I;M[11]=L*C-O*H;if(G!==M){M[0]=G[0];M[1]=G[1];M[2]=G[2];M[3]=G[3];M[12]=G[12];M[13]=G[13];M[14]=G[14];M[15]=G[15]}return M}function z(C,F){F=F||new Float32Array(16);var E=Math.cos(C);var D=Math.sin(C);F[0]=E;F[1]=0;F[2]=-D;F[3]=0;F[4]=0;F[5]=1;F[6]=0;F[7]=0;F[8]=D;F[9]=0;F[10]=E;F[11]=0;F[12]=0;F[13]=0;F[14]=0;F[15]=1;return F}function y(G,K,I){I=I||new Float32Array(16);var N=G[0*4+0];var M=G[0*4+1];var L=G[0*4+2];var J=G[0*4+3];var F=G[2*4+0];var E=G[2*4+1];var D=G[2*4+2];var C=G[2*4+3];var H=Math.cos(K);var O=Math.sin(K);I[0]=H*N-O*F;I[1]=H*M-O*E;I[2]=H*L-O*D;I[3]=H*J-O*C;I[8]=H*F+O*N;I[9]=H*E+O*M;I[10]=H*D+O*L;I[11]=H*C+O*J;if(G!==I){I[4]=G[4];I[5]=G[5];I[6]=G[6];I[7]=G[7];I[12]=G[12];I[13]=G[13];I[14]=G[14];I[15]=G[15]}return I}function f(C,F){F=F||new Float32Array(16);var E=Math.cos(C);var D=Math.sin(C);F[0]=E;F[1]=D;F[2]=0;F[3]=0;F[4]=-D;F[5]=E;F[6]=0;F[7]=0;F[8]=0;F[9]=0;F[10]=1;F[11]=0;F[12]=0;F[13]=0;F[14]=0;F[15]=1;return F}function w(C,K,I){I=I||new Float32Array(16);var N=C[0*4+0];var M=C[0*4+1];var L=C[0*4+2];var J=C[0*4+3];var G=C[1*4+0];var F=C[1*4+1];var E=C[1*4+2];var D=C[1*4+3];var H=Math.cos(K);var O=Math.sin(K);I[0]=H*N+O*G;I[1]=H*M+O*F;I[2]=H*L+O*E;I[3]=H*J+O*D;I[4]=H*G-O*N;I[5]=H*F-O*M;I[6]=H*E-O*L;I[7]=H*D-O*J;if(C!==I){I[8]=C[8];I[9]=C[9];I[10]=C[10];I[11]=C[11];I[12]=C[12];I[13]=C[13];I[14]=C[14];I[15]=C[15]}return I}function p(G,M,J){J=J||new Float32Array(16);var N=G[0];var L=G[1];var K=G[2];var E=Math.sqrt(N*N+L*L+K*K);N/=E;L/=E;K/=E;var C=N*N;var H=L*L;var F=K*K;var I=Math.cos(M);var O=Math.sin(M);var D=1-I;J[0]=C+(1-C)*I;J[1]=N*L*D+K*O;J[2]=N*K*D-L*O;J[3]=0;J[4]=N*L*D-K*O;J[5]=H+(1-H)*I;J[6]=L*K*D+N*O;J[7]=0;J[8]=N*K*D+L*O;J[9]=L*K*D-N*O;J[10]=F+(1-F)*I;J[11]=0;J[12]=0;J[13]=0;J[14]=0;J[15]=1;return J}function b(ab,G,V,ak){ak=ak||new Float32Array(16);var R=G[0];var Q=G[1];var P=G[2];var Z=Math.sqrt(R*R+Q*Q+P*P);R/=Z;Q/=Z;P/=Z;var L=R*R;var Y=Q*Q;var ai=P*P;var af=Math.cos(V);var T=Math.sin(V);var F=1-af;var O=L+(1-L)*af;var N=R*Q*F+P*T;var M=R*P*F-Q*T;var ad=R*Q*F-P*T;var ac=Y+(1-Y)*af;var aa=Q*P*F+R*T;var E=R*P*F+Q*T;var D=Q*P*F-R*T;var C=ai+(1-ai)*af;var X=ab[0];var W=ab[1];var U=ab[2];var S=ab[3];var aj=ab[4];var ah=ab[5];var ag=ab[6];var ae=ab[7];var K=ab[8];var J=ab[9];var I=ab[10];var H=ab[11];ak[0]=O*X+N*aj+M*K;ak[1]=O*W+N*ah+M*J;ak[2]=O*U+N*ag+M*I;ak[3]=O*S+N*ae+M*H;ak[4]=ad*X+ac*aj+aa*K;ak[5]=ad*W+ac*ah+aa*J;ak[6]=ad*U+ac*ag+aa*I;ak[7]=ad*S+ac*ae+aa*H;ak[8]=E*X+D*aj+C*K;ak[9]=E*W+D*ah+C*J;ak[10]=E*U+D*ag+C*I;ak[11]=E*S+D*ae+C*H;if(ab!==ak){ak[12]=ab[12];ak[13]=ab[13];ak[14]=ab[14];ak[15]=ab[15]}return ak}function j(F,D,C,E){E=E||new Float32Array(16);E[0]=F;E[1]=0;E[2]=0;E[3]=0;E[4]=0;E[5]=D;E[6]=0;E[7]=0;E[8]=0;E[9]=0;E[10]=C;E[11]=0;E[12]=0;E[13]=0;E[14]=0;E[15]=1;return E}function A(C,G,E,D,F){F=F||new Float32Array(16);F[0]=G*C[0*4+0];F[1]=G*C[0*4+1];F[2]=G*C[0*4+2];F[3]=G*C[0*4+3];F[4]=E*C[1*4+0];F[5]=E*C[1*4+1];F[6]=E*C[1*4+2];F[7]=E*C[1*4+3];F[8]=D*C[2*4+0];F[9]=D*C[2*4+1];F[10]=D*C[2*4+2];F[11]=D*C[2*4+3];if(C!==F){F[12]=C[12];F[13]=C[13];F[14]=C[14];F[15]=C[15]}return F}function d(at,aq){aq=aq||new Float32Array(16);var K=at[0*4+0];var I=at[0*4+1];var H=at[0*4+2];var F=at[0*4+3];var aw=at[1*4+0];var av=at[1*4+1];var au=at[1*4+2];var ar=at[1*4+3];var al=at[2*4+0];var ak=at[2*4+1];var aj=at[2*4+2];var ah=at[2*4+3];var N=at[3*4+0];var M=at[3*4+1];var L=at[3*4+2];var J=at[3*4+3];var ai=aj*J;var ag=L*ah;var ae=au*J;var ac=L*ar;var Z=au*ah;var X=aj*ar;var V=H*J;var T=L*F;var S=H*ah;var Q=aj*F;var af=H*ar;var ad=au*F;var ab=al*M;var aa=N*ak;var Y=aw*M;var W=N*av;var U=aw*ak;var R=al*av;var P=K*M;var O=N*I;var G=K*ak;var E=al*I;var D=K*av;var C=aw*I;var ap=(ai*av+ac*ak+Z*M)-(ag*av+ae*ak+X*M);var ao=(ag*I+V*ak+Q*M)-(ai*I+T*ak+S*M);var an=(ae*I+T*av+af*M)-(ac*I+V*av+ad*M);var am=(X*I+S*av+ad*ak)-(Z*I+Q*av+af*ak);var ax=1/(K*ap+aw*ao+al*an+N*am);aq[0]=ax*ap;aq[1]=ax*ao;aq[2]=ax*an;aq[3]=ax*am;aq[4]=ax*((ag*aw+ae*al+X*N)-(ai*aw+ac*al+Z*N));aq[5]=ax*((ai*K+T*al+S*N)-(ag*K+V*al+Q*N));aq[6]=ax*((ac*K+V*aw+ad*N)-(ae*K+T*aw+af*N));aq[7]=ax*((Z*K+Q*aw+af*al)-(X*K+S*aw+ad*al));aq[8]=ax*((ab*ar+W*ah+U*J)-(aa*ar+Y*ah+R*J));aq[9]=ax*((aa*F+P*ah+E*J)-(ab*F+O*ah+G*J));aq[10]=ax*((Y*F+O*ar+D*J)-(W*F+P*ar+C*J));aq[11]=ax*((R*F+G*ar+C*ah)-(U*F+E*ar+D*ah));aq[12]=ax*((Y*aj+R*L+aa*au)-(U*L+ab*au+W*aj));aq[13]=ax*((G*L+ab*H+O*aj)-(P*aj+E*L+aa*H));aq[14]=ax*((P*au+C*L+W*H)-(D*L+Y*H+O*au));aq[15]=ax*((D*aj+U*H+E*au)-(G*au+C*aj+R*H));return aq}function r(C,D,G){G=G||new Float32Array(4);for(var F=0;F<4;++F){G[F]=0;for(var E=0;E<4;++E){G[F]+=D[E]*C[E*4+F]}}return G}function v(D,E,I){I=I||new Float32Array(3);var C=E[0];var H=E[1];var G=E[2];var F=C*D[0*4+3]+H*D[1*4+3]+G*D[2*4+3]+D[3*4+3];I[0]=(C*D[0*4+0]+H*D[1*4+0]+G*D[2*4+0]+D[3*4+0])/F;I[1]=(C*D[0*4+1]+H*D[1*4+1]+G*D[2*4+1]+D[3*4+1])/F;I[2]=(C*D[0*4+2]+H*D[1*4+2]+G*D[2*4+2]+D[3*4+2])/F;return I}function a(D,E,H){H=H||new Float32Array(3);var C=E[0];var G=E[1];var F=E[2];H[0]=C*D[0*4+0]+G*D[1*4+0]+F*D[2*4+0];H[1]=C*D[0*4+1]+G*D[1*4+1]+F*D[2*4+1];H[2]=C*D[0*4+2]+G*D[1*4+2]+F*D[2*4+2];return H}function o(D,F,I){I=I||new Float32Array(3);var E=d(D);var C=F[0];var H=F[1];var G=F[2];I[0]=C*E[0*4+0]+H*E[0*4+1]+G*E[0*4+2];I[1]=C*E[1*4+0]+H*E[1*4+1]+G*E[1*4+2];I[2]=C*E[2*4+0]+H*E[2*4+1]+G*E[2*4+2];return I}function t(C,D){D=D||new Float32Array(16);D[0]=C[0];D[1]=C[1];D[2]=C[2];D[3]=C[3];D[4]=C[4];D[5]=C[5];D[6]=C[6];D[7]=C[7];D[8]=C[8];D[9]=C[9];D[10]=C[10];D[11]=C[11];D[12]=C[12];D[13]=C[13];D[14]=C[14];D[15]=C[15];return D}return{copy:t,lookAt:c,subtractVectors:s,normalize:u,cross:e,identity:B,transpose:m,orthographic:x,frustum:i,perspective:q,translation:h,translate:n,xRotation:g,yRotation:z,zRotation:f,xRotate:k,yRotate:y,zRotate:w,axisRotation:p,axisRotate:b,scaling:j,scale:A,multiply:l,inverse:d,transformVector:r,transformPoint:v,transformDirection:a,transformNormal:o,}}));