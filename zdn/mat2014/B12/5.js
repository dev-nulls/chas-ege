(function() {

var a=sluchch(1,20);
var p1=sluchch(1,15);
var p2=sluchch(p1+1,20);

var v1=sl1();

var c='Зависимость объёма спроса $q$ (единиц в месяц) на продукцию предприятия-монополиста от цены $p$ (тыс. руб.) '+
	'задаётся формулой $q='+((p1+p2)*a)+'-'+a+'p$. Выручка предприятия за месяц $r$ (в тыс. руб.) вычисляется по формуле $r(p)=q\\cdot p$.'+
	' Определите '+(v1?'наибольшую':'наименьшую')+' цену $p$, при которой месячная выручка $r(p)$ составит не менее '+(a*p1*p2)+' тыс. руб. '+
	'Ответ приведите в тыс. руб.';

window.vopr.txt=c.plusminus();
window.vopr.ver=[v1?p2:p1];

window.vopr.kat['log']=0;
window.vopr.kat['prz']=0;
window.vopr.kat['drs']=0;
window.vopr.kat['tri']=0;
})();
