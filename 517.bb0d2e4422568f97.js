"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[517],{1517:(dt,M,l)=>{l.d(M,{j:()=>rt});var p=l(9862),O=l(7398),u=l(5219),f=l(6814),P=l(9731),t=l(4769),x=l(3557),k=l(3859),y=l(5905),m=l(95),D=l(981),S=l(5592),v=l(8814);let T=(()=>{var n;class s{constructor(i,e,o){this.router=i,this.api=e,this.http=o,this.socketStatus=!1,this.spinner=!1,this.baseURL="wss://fpapi.iotblitz.com/api/fps_routes/fps/FPMS/"}connect(i,e,o){return this.client_id=i,this.device_id=e,this.device=o,this.socket=new WebSocket(this.baseURL+`${i}/${e}/${o}`),new S.y(r=>(this.socket.onopen=c=>{this.socketStatus=!0,console.log("WebSocket connected"),this.callData()},this.socket.onmessage=c=>{try{const d=JSON.parse(c.data);r.next(d),console.log(d)}catch(d){r.error(d),console.log(d)}},this.socket.onerror=c=>{r.error(c),console.log(c)},this.socket.onclose=()=>{console.log("WebSocket closed"),r.complete(),this.socketStatus=!1},()=>{this.socket.close()}))}sendMessage(i){this.socket.send(JSON.stringify(i))}callData(){if(this.socketStatus){const i={device:this.device,device_id:this.device_id,client_id:this.client_id},e=localStorage.getItem("token"),o=(new p.WM).set("Authorization",`Bearer ${e}`);this.http.post(this.api.baseUrl+"/device/fpms_data_fpms",i,{headers:o}).subscribe(a=>{this.resData=a.data,console.log(a)},a=>{"401"==a.status&&this.router.navigate(["/"]),console.log(a.status),this.spinner=!1})}}}return(n=s).\u0275fac=function(i){return new(i||n)(t.LFG(x.F0),t.LFG(v.s),t.LFG(p.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),s})();var Z=l(7327),I=l(4104);const N=["chart"],z=["chart2"];function A(n,s){if(1&n&&(t.TgZ(0,"div",40)(1,"h4"),t._uU(2),t.ALo(3,"date"),t.qZA()()),2&n){const g=t.oxw();t.xp6(2),t.AsE("Date: ",t.xi3(3,2,null==g.WeatherData?null:g.WeatherData.date,"dd/MM/yyyy")," \xa0Time: ",g.WeatherData.time," ")}}function U(n,s){1&n&&t._UZ(0,"img",41)}function L(n,s){1&n&&t._UZ(0,"img",42)}function Y(n,s){1&n&&(t.TgZ(0,"span"),t._uU(1,"(Fire)"),t.qZA())}function F(n,s){1&n&&(t.TgZ(0,"span"),t._uU(1,"(Short)"),t.qZA())}function W(n,s){1&n&&(t.TgZ(0,"span"),t._uU(1,"(Open)"),t.qZA())}function J(n,s){1&n&&(t.TgZ(0,"span"),t._uU(1,"(Normal)"),t.qZA())}function q(n,s){1&n&&(t.TgZ(0,"span"),t._uU(1,"(No Status)"),t.qZA())}function Q(n,s){1&n&&t._UZ(0,"img",41)}function H(n,s){1&n&&t._UZ(0,"img",42)}function E(n,s){1&n&&(t.TgZ(0,"span"),t._uU(1,"(Fire)"),t.qZA())}function B(n,s){1&n&&(t.TgZ(0,"span"),t._uU(1,"(Short)"),t.qZA())}function R(n,s){1&n&&(t.TgZ(0,"span"),t._uU(1,"(Open)"),t.qZA())}function G(n,s){1&n&&(t.TgZ(0,"span"),t._uU(1,"(Normal)"),t.qZA())}function j(n,s){1&n&&(t.TgZ(0,"span"),t._uU(1,"(No Status)"),t.qZA())}function $(n,s){1&n&&t._UZ(0,"img",43)}function K(n,s){1&n&&t._UZ(0,"img",44)}function V(n,s){1&n&&(t.TgZ(0,"span"),t._uU(1,"(Normal)"),t.qZA())}function X(n,s){1&n&&(t.TgZ(0,"span"),t._uU(1,"(Cretical)"),t.qZA())}function tt(n,s){1&n&&t._UZ(0,"img",45)}function et(n,s){1&n&&t._UZ(0,"img",46)}function it(n,s){if(1&n){const g=t.EpF();t.TgZ(0,"button",47),t.NdJ("click",function(){t.CHM(g);const e=t.oxw();return t.KtG(e.reset())}),t._uU(1,"RESET"),t.qZA()}}function nt(n,s){if(1&n){const g=t.EpF();t.TgZ(0,"button",48),t.NdJ("click",function(){t.CHM(g);const e=t.oxw();return t.KtG(e.reset())}),t._uU(1,"RESET"),t.qZA()}}function ot(n,s){1&n&&(t.TgZ(0,"div",49),t._UZ(1,"div")(2,"div")(3,"div")(4,"div")(5,"div"),t.qZA())}function at(n,s){1&n&&t._UZ(0,"div",50)}const st=function(){return{standalone:!0}};let rt=(()=>{var n;class s{constructor(i,e,o,a,r,c,d,_,h,C,w){this.router=i,this.datePipe=e,this.layoutService=o,this.authservice=a,this.fb=r,this.http=c,this.productService=d,this.websocketService=_,this.messageService=h,this.confirmationService=C,this.api=w,this.activeOptionButton="all",this.updateOptionsData={"1m":{xaxis:{min:new Date("28 Jan 2013").getTime(),max:new Date("27 Feb 2013").getTime()}},"6m":{xaxis:{min:new Date("27 Sep 2012").getTime(),max:new Date("27 Feb 2013").getTime()}},"1y":{xaxis:{min:new Date("27 Feb 2012").getTime(),max:new Date("27 Feb 2013").getTime()}},"1yd":{xaxis:{min:new Date("01 Jan 2013").getTime(),max:new Date("01 Jan 2013").getTime()}},all:{xaxis:{min:void 0,max:void 0}}},this.prevStr="",this.prevName="",this.led1=!1,this.led2=!0,this.led3=!1,this.led4=!0,this.s_on=!1,this.r_on=!1,this.dis1=!1,this.dis2=!1,this.callDo=!1,this.spinner=!1,this.filteredCountries=[],this.filteredDealer=[],this.countries=[],this.selectedState=null,this.data1=[],this.cities=[],this.liveData=[],this.flowData=[],this.flowDate=[],this.rpmData=[],this.rpmDate=[],this.user_type="",this.lastUpdateTime="",this.checked=!0,this.alert_type="",this.countdown=30,this.timeoutMessage="",this.client_id=+localStorage.getItem("c_id"),this.Firez1="0",this.Firez2="0",this.openz1="0",this.openz2="0",this.shortz1="0",this.shortz2="0",this.normalz1="0",this.normalz2="0",this.batteryv="0",this.power="0",this.silence="0",this.cities2=[{unit_name:"Single Phase",unit:"single"},{unit_name:"Two Phase",unit:"two"},{unit_name:"Three Phase",unit:"three"}],this.messages=[],this.selectedPhase={unit_name:"Single Phase",unit:"single"},this.loginType=localStorage.getItem("loginType"),this.WeatherData=[],this.atm_pressure=0,this.humidity=0,this.rainfall=0,this.rainfall_cumulative=0,this.solar_radiation=0,this.temperature=0,this.wind_direction=0,this.wind_speed=0,this.digital_output=[],this.livechartForGraph=[],this.weekdayName=[],this.humidity1=[],this.rainfall1=[],this.rainfall_cum=[],this.solar_radiation1=[],this.temperature1=[],this.wind_direction1=[],this.atm_pressure1=[],this.wind_speed1=[],this.AddproductDialog=!1,this.subscription=this.layoutService.configUpdate$.subscribe(b=>{}),this.zone1="0",this.zone2="0",this.zone3="0",this.zone4="0"}convertToISTDateTime(i){const e=new Date(i);return this.datePipe.transform(e,"dd-MM-yyyy HH:mm:ss","+0530")||""}ggg(){}ngOnInit(){this.updateDateTime(),this.intervalId=setInterval(()=>this.updateDateTime(),1e3),this.items=[{label:"Live",icon:"pi pi-fw pi-home",routerLink:["/app/outlet/alert"]},{label:"device Info",icon:"pi pi-fw pi-calendar",routerLink:["/app/outlet/alert"]},{label:"Graphical View",icon:"pi pi-fw pi-pencil",routerLink:["/app/outlet/alert"]},{label:"Create Alert",icon:"pi pi-fw pi-file",routerLink:["/app/outlet/alert"]},{label:"Historic Data",icon:"pi pi-fw pi-cog",routerLink:["/app/outlet/alert"]}],this.activeItem=this.items[0],this.getDevice()}updateDateTime(){this.currentDateTime=new Date}startCountdown(){this.countdown=30,this.intervalId2=setInterval(()=>{this.countdown--,20===this.countdown&&this.updateFireDO(this.prevStr,this.prevName),10===this.countdown&&this.updateFireDO(this.prevStr,this.prevName),0===this.countdown&&(clearInterval(this.intervalId2),this.hideDialog(),this.dis1=!1,this.dis2=!1,this.s_on=!1,this.r_on=!1,this.messageService.add({severity:"success",summary:"Successful",detail:"Device Updated",life:3e3}))},1e3)}getWindDirection(i){return["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"][Math.round(i%360/22.5)%16]}connectToWebSocket(i,e,o){this.zone1="0",this.zone2="0",this.zone3="0",this.zone4="0",this.callDo=!1,this.spinner=!0,this.websocketSubscription=this.websocketService.connect(i,e,o).subscribe(a=>{console.log("Received message:",a);const c=JSON.parse(a);if(console.log(c),this.wsData=c,this.WeatherData=c.data,this.digital_Input=this.WeatherData.digital_Input,this.digital_output=c.digital_output.digital_output,this.AddproductDialog&&(this.hideDialog(),this.messageService.add({severity:"success",summary:"Successful",detail:"Acknowledged",life:3e3}),this.s_on=!1,this.r_on=!1,this.dis1=!1,this.dis2=!1),this.digital_Input){const h=this.digital_Input.toString().padStart(11,"0");console.log(h);const b=h.split(",").map(ct=>ct.trim())[9];console.log(b),this.Firez1=h.charAt(0),this.Firez2=h.charAt(3),this.openz1=h.charAt(6),this.openz2=h.charAt(9),this.shortz1=h.charAt(12),this.shortz2=h.charAt(15),this.normalz1=h.charAt(18),this.normalz2=h.charAt(21),this.power=h.charAt(24),this.batteryv=b,this.silence=h.charAt(33),console.log(this.Firez1,this.Firez2,this.openz1,this.openz2,this.shortz1,this.shortz2,this.normalz1,this.normalz2,this.power,this.batteryv,this.silence)}this.spinner=!1,this.humidity=parseFloat(this.WeatherData?.humidity?this.WeatherData?.humidity.toFixed(2):0),this.temperature=parseFloat(this.WeatherData?.temperature?this.WeatherData?.temperature.toFixed(2):0)},a=>{"401"==a.status&&this.router.navigate(["/"]),console.log(a.status),this.spinner=!1,console.error("WebSocket error:",a)},()=>{this.spinner=!1,console.log("WebSocket connection closed")})}siren(){this.prevStr="",this.prevName="",this.s_on=!this.s_on,this.dis2=!0;const i=this.s_on?"2":"1",e=this.r_on?"2":"1",o=e+i+"00";this.prevStr=o,this.prevName="SR",console.log(e+i+"00"),this.callDo=!0,this.updateFireDO(o,"SR")}reset(){this.prevStr="",this.prevName="",this.r_on=!this.r_on,this.dis1=!0;const i=this.s_on?"2":"1",e=this.r_on?"2":"1",o=e+i+"00";this.prevStr=o,this.prevName="RT",console.log(e+i+"00"),this.callDo=!0,this.updateFireDO(o,"RT")}updateFireDO(i,e){if(this.callDo){const o={device:this.selectedDealer.device,device_id:this.selectedDealer.device_id,digital_output:this.silence};this.callDo=!1,this.api.call_api(1,"mqtt/publish_digital_output",o).pipe((0,O.U)(a=>a.data)).subscribe(a=>{a?(this.spinner=!1,this.messageService.add({severity:"success",summary:"Successful",detail:"Device Updated",life:3e3}),this.spinner=!1):(this.spinner=!1,this.messageService.add({severity:"error",summary:"Error",detail:"Data Related Issue!!",life:3e3}))})}else this.api.resetCall({device:this.selectedDealer.device,device_id:this.selectedDealer.device_id,digital_output:this.silence}).subscribe(a=>{"success"==a.status?(this.spinner=!1,this.messageService.add({severity:"success",summary:"Successful",detail:"Device Updated",life:3e3}),this.spinner=!1):(this.spinner=!1,this.messageService.add({severity:"error",summary:"Error",detail:"Data Related Issue!!",life:3e3}))})}hideDialog(){this.AddproductDialog=!1}onCheckbox1Change(i){this.getIODevice(1,i.target.checked?1:0)}onCheckbox2Change(i){this.getIODevice(2,i.target.checked?1:0)}onCheckbox3Change(i){this.getIODevice(3,i.target.checked?1:0)}onCheckbox4Change(i){this.getIODevice(4,i.target.checked?1:0)}getIODevice(i,e){const o={do_no:i,do_status:e},a=this.api.baseUrl,r=localStorage.getItem("token"),c=(new p.WM).set("Authorization",`Bearer ${r}`);this.spinner=!0,this.http.post(a+"/mqtt/publish_io",o,{headers:c}).subscribe(d=>{console.log(d),this.spinner=!1,"success"==d.status?(this.spinner=!1,this.messageService.add({severity:"success",summary:"Successful",detail:"Switch"+i+" Updated",life:3e3})):(this.spinner=!1,this.messageService.add({severity:"error",summary:"Error",detail:"Data Related Issue!!",life:3e3}))},d=>{"401"==d.status&&this.router.navigate(["/"]),console.log(d.status),this.spinner=!1,"401"==d.status&&this.router.navigate(["/"]),console.log(d.status)})}convertToPercentage(i){return i<0?0:i>30?100:i/30*100}setPhase(i){console.log(i,this.selectedPhase)}abc(){this.alert_type="",console.log(this.selectedAlert),this.alert_type=this.selectedAlert?.unit_name,this.alert_type=" "+this.alert_type}getDevice(){const i={client_id:this.client_id},e=this.api.baseUrl,o=localStorage.getItem("token"),a=(new p.WM).set("Authorization",`Bearer ${o}`);this.spinner=!0,this.http.post(e+"/client/devices/list",i,{headers:a}).subscribe(r=>{console.log(r),this.spinner=!1,this.data1=r,this.cities=this.data1.data,this.selectedDealer=this.cities[0],this.getDeviceLiveData(this.selectedDealer.device,this.selectedDealer.device_id),console.log(this.selectedDealer)},r=>{"401"==r.status&&this.router.navigate(["/"]),console.log(r.status),this.spinner=!1,"401"==r.status&&this.router.navigate(["/"]),console.log(r.status)})}dateConvt(i){const e=new Date(i),r=`${String(e.getMonth()+1).padStart(2,"0")}/${String(e.getDate()).padStart(2,"0")}`;return console.log(r),r}getDeviceLiveData(i,e){this.connectToWebSocket(this.client_id,e,i),console.log(this.websocketService.socketStatus),this.spinner=!0,this.websocketService.resData&&console.log(this.websocketService.resData)}dateChange(i){const c=new Date(this.liveData2.created_at).toLocaleString("en-US",{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1,timeZone:"Asia/Kolkata"});return console.log(c),c}setDevice(){console.log(this.selectedDealer),this.getDeviceLiveData(this.selectedDealer.device,this.selectedDealer.device_id)}filterDealer(i){const e=[],o=i.query;for(let a=0;a<this.cities.length;a++){const r=this.cities[a];0==r.device.toLowerCase().indexOf(o.toLowerCase())&&e.push(r)}this.filteredDealer=e}getWeekdayName(i){return new Date(i).toLocaleDateString("en-US",{weekday:"long"})}initCharts(){this.weekdayName=[],this.humidity1=[],this.humidity1=[],this.rainfall1=[],this.rainfall_cum=[],this.solar_radiation1=[],this.temperature1=[],this.wind_direction1=[],this.wind_speed1=[],this.atm_pressure1=[],this.livechartForGraph?.forEach(i=>{this.weekdayName?.push(i.time),this.humidity1?.push(Number(i.humidity)),this.rainfall1?.push(Number(i.rainfall)),this.rainfall_cum?.push(Number(i.rainfall_cumulative)),this.solar_radiation1?.push(Number(i.solar_radiation)),this.temperature1?.push(Number(i.temperature)),this.wind_direction1?.push(Number(i.wind_direction)),this.atm_pressure1?.push(Number(i.atm_pressure)),this.wind_speed1?.push(Number(i.wind_speed))}),console.log(this.weekdayName),console.log(this.temperature1),console.log(this.humidity1),console.log(this.wind_direction1),console.log(this.atm_pressure1),console.log(this.wind_speed1),console.log(this.rainfall1),console.log(this.solar_radiation1),this.chartOptions={series:[{name:"Temperature",data:this.temperature1},{name:"Humidity",data:this.humidity1},{name:"Atm Pressure",data:this.atm_pressure1},{name:"Wind Speed",data:this.wind_speed1},{name:"Wind Direction",data:this.wind_direction1},{name:"Solar Radiation",data:this.solar_radiation1},{name:"Rainfall",data:this.rainfall1},{name:"Rainfall Cumultive",data:this.rainfall_cum}],chart:{height:350,type:"line"},dataLabels:{enabled:!1},title:{text:"Live Chart",align:"left"},markers:{size:0,hover:{sizeOffset:6}},xaxis:{labels:{trim:!1},categories:this.weekdayName},tooltip:{y:[{title:{}},{title:{}},{title:{}}]},grid:{borderColor:"#f1f1f1"}}}generateDayWiseTimeSeries(i,e,o){for(var a=0,r=[];a<e;){var c=i,d=Math.floor(Math.random()*(o.max-o.min+1))+o.min;r.push([c,d]),i+=864e5,a++}return r}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe(),this.intervalId&&clearInterval(this.intervalId),this.intervalId2&&clearInterval(this.intervalId2)}}return(n=s).\u0275fac=function(i){return new(i||n)(t.Y36(x.F0),t.Y36(f.uU),t.Y36(k.P),t.Y36(y.$),t.Y36(m.qu),t.Y36(p.eN),t.Y36(D.M),t.Y36(T),t.Y36(u.ez),t.Y36(u.YP),t.Y36(v.s))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-chartsdemo"]],viewQuery:function(i,e){if(1&i&&(t.Gf(P.w,5),t.Gf(N,5),t.Gf(z,5)),2&i){let o;t.iGM(o=t.CRH())&&(e.msg=o.first),t.iGM(o=t.CRH())&&(e.chart=o.first),t.iGM(o=t.CRH())&&(e.chart2=o.first)}},features:[t._Bn([u.ez,u.YP,f.uU])],decls:120,vars:33,consts:[[1,"grey-bg","container-fluid"],["id","minimal-statistics"],[1,"row"],[1,"col-xl-12","col-sm-6","col-12"],["style","float: left;padding-top: 10px;",4,"ngIf"],[2,"float","right"],["placeholder","Select a device","field","device",3,"ngModel","ngModelOptions","suggestions","dropdown","ngModelChange","onSelect","completeMethod"],[1,"col-xl-3","col-sm-6","col-12"],[1,"card"],[1,"card-content"],[1,"card-body",2,"padding","0.5rem!important"],[1,"media","d-flex"],[1,"align-self-center"],["src","assets/demo/images/fire/heat_n.png","alt","Image","height","80","width","80",4,"ngIf"],["src","assets/demo/images/fire/heat_r.png","alt","Image","height","80","width","80",4,"ngIf"],[1,"media-body","text-right"],[4,"ngIf"],[1,"card-body",2,"padding","0.8rem!important"],["src","assets/demo/images/fire/main_n.png","alt","Image","height","70","width","70",4,"ngIf"],["src","assets/demo/images/fire/main_r.png","alt","Image","height","70","width","70",4,"ngIf"],[1,"card-body",2,"padding","0.9rem!important"],[1,"media-body","text-left"],["src","assets/demo/images/fire/bat_n.png","alt","Image","height","70","width","70",4,"ngIf"],["src","assets/demo/images/fire/battery_r.png","alt","Image","height","70","width","70",4,"ngIf"],["id","stats-subtitle"],[1,"col-xl-6","col-md-12"],[1,"card-body","cleartfix"],[1,"media","align-items-stretch"],[1,"align-self-center",2,"padding-right","70px!important"],[1,"mr-2"],[1,"media-body"],["src","assets/demo/images/icons/temp.png","alt","Image","height","80","width","70",2,"padding-top","10px"],["src","assets/demo/images/icons/humidity.png","alt","Image","height","80","width","70",2,"padding-top","10px"],[1,"card-body"],[1,"col-xl-6","col-sm-6","col-12"],["id","r_on","class","btn-Start_green",3,"click",4,"ngIf"],["id","r_off","class","btn-Stop_red",3,"click",4,"ngIf"],[1,"grid",2,"margin-left","0rem!important"],["class","loader",4,"ngIf"],["class","overlay",4,"ngIf"],[2,"float","left","padding-top","10px"],["src","assets/demo/images/fire/heat_n.png","alt","Image","height","80","width","80"],["src","assets/demo/images/fire/heat_r.png","alt","Image","height","80","width","80"],["src","assets/demo/images/fire/main_n.png","alt","Image","height","70","width","70"],["src","assets/demo/images/fire/main_r.png","alt","Image","height","70","width","70"],["src","assets/demo/images/fire/bat_n.png","alt","Image","height","70","width","70"],["src","assets/demo/images/fire/battery_r.png","alt","Image","height","70","width","70"],["id","r_on",1,"btn-Start_green",3,"click"],["id","r_off",1,"btn-Stop_red",3,"click"],[1,"loader"],[1,"overlay"]],template:function(i,e){1&i&&(t.TgZ(0,"div",0),t._UZ(1,"section"),t.TgZ(2,"section",1)(3,"div",2)(4,"div",3),t.YNc(5,A,4,5,"div",4),t.TgZ(6,"div",5)(7,"p-autoComplete",6),t.NdJ("ngModelChange",function(a){return e.selectedDealer=a})("onSelect",function(){return e.setDevice()})("completeMethod",function(a){return e.filterDealer(a)}),t.qZA()()()(),t.TgZ(8,"div",2)(9,"div",7)(10,"div",8)(11,"div",9)(12,"div",10)(13,"div",11)(14,"div",12),t.YNc(15,U,1,0,"img",13),t.YNc(16,L,1,0,"img",14),t.qZA(),t.TgZ(17,"div",15)(18,"h3"),t._uU(19,"ZONE 1"),t.qZA(),t.YNc(20,Y,2,0,"span",16),t.YNc(21,F,2,0,"span",16),t.YNc(22,W,2,0,"span",16),t.YNc(23,J,2,0,"span",16),t.YNc(24,q,2,0,"span",16),t.qZA()()()()()(),t.TgZ(25,"div",7)(26,"div",8)(27,"div",9)(28,"div",10)(29,"div",11)(30,"div",12),t.YNc(31,Q,1,0,"img",13),t.YNc(32,H,1,0,"img",14),t.qZA(),t.TgZ(33,"div",15)(34,"h3"),t._uU(35,"ZONE 2"),t.qZA(),t.YNc(36,E,2,0,"span",16),t.YNc(37,B,2,0,"span",16),t.YNc(38,R,2,0,"span",16),t.YNc(39,G,2,0,"span",16),t.YNc(40,j,2,0,"span",16),t.qZA()()()()()(),t.TgZ(41,"div",7)(42,"div",8)(43,"div",9)(44,"div",17)(45,"div",11)(46,"div",12),t.YNc(47,$,1,0,"img",18),t.YNc(48,K,1,0,"img",19),t.qZA(),t.TgZ(49,"div",15)(50,"h3"),t._uU(51,"MAIN"),t.qZA(),t.YNc(52,V,2,0,"span",16),t.YNc(53,X,2,0,"span",16),t.qZA()()()()()(),t.TgZ(54,"div",7)(55,"div",8)(56,"div",9)(57,"div",20)(58,"div",11)(59,"div",21)(60,"h3"),t._uU(61,"Battery"),t.qZA(),t.TgZ(62,"span"),t._uU(63),t.qZA()(),t.TgZ(64,"div",12),t.YNc(65,tt,1,0,"img",22),t.YNc(66,et,1,0,"img",23),t.qZA()()()()()()()(),t.TgZ(67,"section",24)(68,"div",2)(69,"div",25)(70,"div",8)(71,"div",9)(72,"div",26)(73,"div",27)(74,"div",28)(75,"h2",29),t._uU(76),t.TgZ(77,"sup"),t._uU(78," o"),t.qZA(),t._uU(79,"C"),t.qZA()(),t.TgZ(80,"div",30)(81,"h4"),t._uU(82,"TEMPERATURE"),t.qZA(),t.TgZ(83,"span"),t._uU(84,"Today Temperature"),t.qZA()(),t.TgZ(85,"div",12),t._UZ(86,"img",31),t.qZA()()()()()(),t.TgZ(87,"div",25)(88,"div",8)(89,"div",9)(90,"div",26)(91,"div",27)(92,"div",28)(93,"h2",29),t._uU(94),t.qZA()(),t.TgZ(95,"div",30)(96,"h4"),t._uU(97,"HUMIDITY"),t.qZA(),t.TgZ(98,"span"),t._uU(99,"Humidity right now"),t.qZA()(),t.TgZ(100,"div",12),t._UZ(101,"img",32),t.qZA()()()()()(),t.TgZ(102,"div",7)(103,"div",8)(104,"div",9)(105,"div",33)(106,"div",11)(107,"div",21)(108,"div",2)(109,"div",34)(110,"h4"),t._uU(111,"Push switch"),t.qZA()(),t.TgZ(112,"div",34),t.YNc(113,it,2,0,"button",35),t.YNc(114,nt,2,0,"button",36),t.qZA()()(),t._UZ(115,"div",12),t.qZA()()()()()()()(),t.TgZ(116,"div",37),t._UZ(117,"p-toast"),t.YNc(118,ot,6,0,"div",38),t.YNc(119,at,1,0,"div",39),t.qZA()),2&i&&(t.xp6(5),t.Q6J("ngIf",e.WeatherData.date),t.xp6(2),t.Q6J("ngModel",e.selectedDealer)("ngModelOptions",t.DdM(32,st))("suggestions",e.filteredDealer)("dropdown",!0),t.xp6(8),t.Q6J("ngIf","0"==e.Firez1),t.xp6(1),t.Q6J("ngIf","1"==e.Firez1),t.xp6(4),t.Q6J("ngIf","1"==e.Firez1),t.xp6(1),t.Q6J("ngIf","1"==e.shortz1),t.xp6(1),t.Q6J("ngIf","1"==e.openz1),t.xp6(1),t.Q6J("ngIf","1"==e.normalz1),t.xp6(1),t.Q6J("ngIf","0"==e.normalz1&&"0"==e.shortz1&&"0"==e.openz1&&"0"==e.Firez1),t.xp6(7),t.Q6J("ngIf","0"==e.zone2),t.xp6(1),t.Q6J("ngIf","1"==e.zone2),t.xp6(4),t.Q6J("ngIf","1"==e.Firez2),t.xp6(1),t.Q6J("ngIf","1"==e.shortz2),t.xp6(1),t.Q6J("ngIf","1"==e.openz2),t.xp6(1),t.Q6J("ngIf","1"==e.normalz2),t.xp6(1),t.Q6J("ngIf","0"==e.normalz2&&"0"==e.shortz2&&"0"==e.openz2&&"0"==e.Firez2),t.xp6(7),t.Q6J("ngIf","0"==e.power),t.xp6(1),t.Q6J("ngIf","1"==e.power),t.xp6(4),t.Q6J("ngIf","0"==e.power),t.xp6(1),t.Q6J("ngIf","1"==e.power),t.xp6(10),t.hij("",e.batteryv/100," V"),t.xp6(2),t.Q6J("ngIf","0"==e.batteryv),t.xp6(1),t.Q6J("ngIf",e.batteryv>"0"&&e.batteryv<3e3),t.xp6(10),t.Oqu(e.temperature),t.xp6(18),t.hij("",e.humidity," %"),t.xp6(19),t.Q6J("ngIf","0"==e.silence),t.xp6(1),t.Q6J("ngIf","1"==e.silence),t.xp6(4),t.Q6J("ngIf",e.spinner),t.xp6(1),t.Q6J("ngIf",e.spinner))},dependencies:[f.O5,Z.Qc,m.JJ,m.On,I.FN,f.uU],styles:['html[_ngcontent-%COMP%]{width:100%;height:100%}.grey-bg[_ngcontent-%COMP%]{background-color:#f5f7fa}.wrapper[_ngcontent-%COMP%]{height:100vh;lost-utility:clearfix;lost-center:980px;display:flex;justify-content:center;align-items:center}button[_ngcontent-%COMP%]:before{border-radius:50%;border-top:20px solid black(.6)}button[_ngcontent-%COMP%]{width:70px;height:70px;border-radius:50%;border:1px;text-transform:uppercase;box-shadow:inset 10px 10px 10px #0003;cursor:pointer;text-shadow:0px 3px 5px #000}.btn-Start_green[_ngcontent-%COMP%]{border-radius:50%;border:solid 5px #0a290a;background-color:#145214;color:#fff;font-size:1em;box-shadow:0 10px #228b22}.btn-Start_green[_ngcontent-%COMP%]:active{box-shadow:0 2px #228b22;transform:translateY(5px)}.btn-Stop_red[_ngcontent-%COMP%]{border:solid 5px #330000;background-color:#600;color:#fff;font-size:1em;box-shadow:0 10px brown}.btn-Stop_red[_ngcontent-%COMP%]:active{box-shadow:0 2px brown;transform:translateY(5px)}body[_ngcontent-%COMP%]{background-color:#333}h5[_ngcontent-%COMP%]{margin:0;font-size:13px;padding:0!important}h3[_ngcontent-%COMP%]{font-size:19px;font-weight:500;color:#444}.holder[_ngcontent-%COMP%]{max-width:455px;margin:0 auto}.holder[_ngcontent-%COMP%]   .follow[_ngcontent-%COMP%]{display:block;text-decoration:none;font-family:sans-serif;font-size:12px;color:#666;text-align:center}.livenow[_ngcontent-%COMP%]{margin-top:23px;width:30px;margin-left:15px;display:inline-block}.livenow[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{vertical-align:middle;width:22px;height:22px;border-radius:100%;position:absolute;margin:0 auto;border:3px solid rgb(255,0,0);animation:_ngcontent-%COMP%_live 1.4s infinite ease-in-out;animation-fill-mode:both}.livenow[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){background-color:#ffffff4d;background-color:#f81010;animation-delay:-.1s}.livenow[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){animation-delay:.16s}.livenow[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){animation-delay:.42s;border:3px solid rgba(255,255,255,.5)}.livenow[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){border:3px solid rgba(255,255,255,1);animation-delay:-.42s}@keyframes _ngcontent-%COMP%_live{0%,80%,to{transform:scale(.6);-webkit-transform:scale(.6)}40%{transform:scale(1);-webkit-transform:scale(1)}}.xcard[_ngcontent-%COMP%]{height:100%!important}.xxx[_ngcontent-%COMP%]{height:40px}.Fire_Panel[_ngcontent-%COMP%]{width:100%;height:auto}p-tabview[_ngcontent-%COMP%]   .p-tabview-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:33.3%!important}.cylinder[_ngcontent-%COMP%]{position:relative;overflow:hidden;margin:24px auto;width:137px;height:70px;border-radius:50px/25px;background-color:#a0a0a080}.cylinder[_ngcontent-%COMP%]:before{position:absolute;left:0;top:0;width:100px;height:50px;border-radius:50px/25px;background-color:#a0a0a033;content:""}.cylinder[_ngcontent-%COMP%]:after{position:absolute;left:0;bottom:0;width:100px;height:50px;border-radius:50px/25px;background-color:#a0a0a066;content:""}.water[_ngcontent-%COMP%]{position:absolute;left:0;bottom:0;width:108px;height:0;padding-top:50px;border-radius:50px/25px;background-color:#00a0a080;transition:.3s linear}.water[_ngcontent-%COMP%]:before{position:absolute;left:0;top:0;width:108px;height:50px;border-radius:50px/25px;background-color:#00a0a033;content:""}.water[_ngcontent-%COMP%]:after{position:absolute;left:0;bottom:0;width:108px;height:50px;border-radius:50px/25px;background-color:#00a0a066;content:""}.water--0[_ngcontent-%COMP%]:checked ~ .cylinder[_ngcontent-%COMP%]   .water[_ngcontent-%COMP%]{bottom:-50px}.water--30[_ngcontent-%COMP%]:checked ~ .cylinder[_ngcontent-%COMP%]   .water[_ngcontent-%COMP%]{height:75px}.cylinder[_ngcontent-%COMP%]   .water[_ngcontent-%COMP%]{height:150px}.water--90[_ngcontent-%COMP%]:checked ~ .cylinder[_ngcontent-%COMP%]   .water[_ngcontent-%COMP%]{height:225px}.UPSCylindre[_ngcontent-%COMP%], .BCylindre[_ngcontent-%COMP%]{overflow:hidden;position:relative;width:120px;height:215px;margin:20px auto;box-shadow:0 0 0 1px #80808026 inset;background:linear-gradient(90deg,rgba(128,128,128,.2) 0%,rgba(128,128,128,.2) 20%,rgba(128,128,128,.2) 20%,transparent 50%,transparent 75%,rgba(128,128,128,.2) 90%);border-radius:60px/30px}.PPole[_ngcontent-%COMP%]{position:absolute;left:0;right:0;top:-1px;width:99%;height:57px;border:1px solid rgba(128,128,128,.15);border-radius:60px/30px;background:linear-gradient(rgba(128,128,128,.25) 0%,rgba(128,128,128,.15) 20%,rgba(128,128,128,.15) 20%,transparent 50%,transparent 75%,rgba(128,128,128,.15) 90%)}.PPole[_ngcontent-%COMP%]:after{content:"";position:absolute;width:36%;left:31.5%;top:1px;height:30px;border-radius:60px/27.5px;box-shadow:0 0 0 1px #ffffff59;background:linear-gradient(90deg,rgba(128,128,128,1) 0%,rgba(128,128,128,.3) 30%,transparent 50%,transparent 75%,rgba(128,128,128,1) 90%)}.PPole[_ngcontent-%COMP%]:before{content:"";position:absolute;left:8%;right:0;top:8%;width:84%;height:73%;border-radius:55px/24px;background-color:#80808080;box-shadow:0 1px 0 1px #ffffff59}.UPSCylindre[_ngcontent-%COMP%]:after{content:"";position:absolute;width:32%;left:33%;top:1px;height:6%;border:1px solid rgba(255,255,255,.25);border-radius:60px/25px;background-color:#80808099;box-shadow:0 0 0 1px #80808099}.UPSCylindre[_ngcontent-%COMP%]:before{content:"";position:absolute;width:92%;height:20%;inset:78% 5px 0;border-radius:60px/25px;background-color:#80808080;box-shadow:0 0 0 1px #ffffff59}.BCylindre[_ngcontent-%COMP%]:after{content:"";position:absolute;width:32%;left:33%;top:1px;height:6%;border:1px solid rgba(255,255,255,.25);border-radius:60px/25px;background-color:#80808099;box-shadow:0 0 0 1px #80808099}.BCylindre[_ngcontent-%COMP%]:before{content:"";position:absolute;width:92%;height:20%;inset:78% 5px 0;border-radius:60px/25px;background-color:#80808080;box-shadow:0 0 0 1px #ffffff59}.NiMH[_ngcontent-%COMP%]{position:absolute;left:5px;right:5px;bottom:5px;height:0;padding-top:30px;border-radius:54px/24px;background:linear-gradient(90deg,rgba(0,204,0,.6) 0%,rgba(0,170,0,.6) 50%,rgba(0,204,0,.6) 100%);box-shadow:0 0 10px #0c0;transition:.5s linear}.NiMH[_ngcontent-%COMP%]:after{content:"";position:absolute;left:.5%;right:0;top:0;width:99%;height:50px;border-radius:54px/25px;background-color:#00aa0059;box-shadow:0 0 10px #0c0 inset}.cath_NA[_ngcontent-%COMP%]:checked ~ .BCylindre[_ngcontent-%COMP%]   .NiMH[_ngcontent-%COMP%]{height:12px;background:linear-gradient(90deg,rgba(255,0,0,.6) 0%,rgba(195,0,0,.6) 50%,rgba(255,0,0,.6) 100%);box-shadow:0 0 10px red;transform:scale(0);-webkit-transform:scale(0);-o-transform:scale(0);-moz-transform:scale(0)}.cath_NA[_ngcontent-%COMP%]:checked ~ .BCylindre[_ngcontent-%COMP%]   .NiMH[_ngcontent-%COMP%]:after{background-color:#c3000059;box-shadow:0 0 10px red inset}.cath_0[_ngcontent-%COMP%]:checked ~ .BCylindre[_ngcontent-%COMP%]   .NiMH[_ngcontent-%COMP%]{background:linear-gradient(90deg,rgba(255,0,0,.8) 0%,rgba(195,0,0,.6) 50%,rgba(255,0,0,.8) 100%);box-shadow:0 0 10px red;height:18.55px}.cath_0[_ngcontent-%COMP%]:checked ~ .BCylindre[_ngcontent-%COMP%]   .NiMH[_ngcontent-%COMP%]:after{background-color:#c3000059;box-shadow:0 0 10px red inset}.cath_2[_ngcontent-%COMP%]:checked ~ .BCylindre[_ngcontent-%COMP%]   .NiMH[_ngcontent-%COMP%]{background:linear-gradient(90deg,rgba(255,0,0,.8) 0%,rgba(195,0,0,.6) 50%,rgba(255,0,0,.8) 100%);box-shadow:0 0 10px red;height:38px}.cath_2[_ngcontent-%COMP%]:checked ~ .BCylindre[_ngcontent-%COMP%]   .NiMH[_ngcontent-%COMP%]:after{background-color:#c3000059;box-shadow:0 0 10px red inset}.cath_4[_ngcontent-%COMP%]:checked ~ .BCylindre[_ngcontent-%COMP%]   .NiMH[_ngcontent-%COMP%]{background:linear-gradient(90deg,rgba(255,204,0,.7) 0%,rgba(204,163,0,.6) 50%,rgba(255,204,0,.7) 100%);box-shadow:0 0 10px #fc0;height:76px}.cath_4[_ngcontent-%COMP%]:checked ~ .BCylindre[_ngcontent-%COMP%]   .NiMH[_ngcontent-%COMP%]:after{background-color:#cca30059;box-shadow:0 0 10px #fc0 inset}.cath_6[_ngcontent-%COMP%]:checked ~ .BCylindre[_ngcontent-%COMP%]   .NiMH[_ngcontent-%COMP%]{background:linear-gradient(90deg,rgba(255,204,0,.7) 0%,rgba(204,163,0,.6) 50%,rgba(255,204,0,.7) 100%);box-shadow:0 0 10px #fc0;height:114px}.cath_6[_ngcontent-%COMP%]:checked ~ .BCylindre[_ngcontent-%COMP%]   .NiMH[_ngcontent-%COMP%]:after{background-color:#cca30059;box-shadow:0 0 10px #fc0 inset}.UPSCylindre[_ngcontent-%COMP%]   .NiMH[_ngcontent-%COMP%]{background:linear-gradient(90deg,rgba(255,204,0,.7) 0%,rgba(204,163,0,.6) 50%,rgba(255,204,0,.7) 100%);box-shadow:0 0 10px #fc0;height:114px}.UPSCylindre[_ngcontent-%COMP%]   .NiMH[_ngcontent-%COMP%]:after{background-color:#cca30059;box-shadow:0 0 10px #fc0 inset}.BCylindre[_ngcontent-%COMP%]   .NiMH[_ngcontent-%COMP%]{height:152px}.cath_10[_ngcontent-%COMP%]:checked ~ .BCylindre[_ngcontent-%COMP%]   .NiMH[_ngcontent-%COMP%]{height:190px}.customeX[_ngcontent-%COMP%]{font-size:large;color:#4f46e5}table[_ngcontent-%COMP%]{overflow-x:auto;border-collapse:collapse;border-spacing:0;width:100%;border:1px solid #b8b7b7}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #b8b7b7;padding:10px}.circle[_ngcontent-%COMP%]{color:red;transform:translate(-50%) translateY(-50%);width:20px;height:20px;margin-left:30px;margin-top:30px}.circle[_ngcontent-%COMP%]:before{content:"";position:relative;display:block;width:250%;height:250%;box-sizing:border-box;margin-left:-75%;margin-top:-75%;border-radius:45px;background-color:red;animation:_ngcontent-%COMP%_pulse 1.25s cubic-bezier(.215,.61,.355,1) infinite}.circle[_ngcontent-%COMP%]:after{content:"";position:absolute;left:0;top:0;display:block;width:100%;height:100%;background-color:red;border-radius:50px;animation:_ngcontent-%COMP%_circle 1.25s cubic-bezier(.455,.03,.515,.955) -.4s infinite}@keyframes _ngcontent-%COMP%_pulse{0%{transform:scale(.33)}80%,to{opacity:0}}@keyframes _ngcontent-%COMP%_circle{0%{transform:scale(.8)}50%{transform:scale(1)}to{transform:scale(.8)}}@use postcss-preset-env{stage: 0;}.on-off-toggle[_ngcontent-%COMP%]{width:76px;height:24px;position:relative;display:inline-block}.on-off-toggle__slider[_ngcontent-%COMP%]{width:76px;height:24px;display:block;border-radius:34px;background-color:#d8d8d8;transition:background-color .4s}.on-off-toggle__slider[_ngcontent-%COMP%]:before{content:"";display:block;background-color:#fff;box-shadow:0 0 0 1px #949494;bottom:3px;height:18px;left:24px;position:absolute;transition:.4s;width:18px;z-index:5;border-radius:100%}.on-off-toggle__slider[_ngcontent-%COMP%]:after{display:block;line-height:24px;text-transform:uppercase;font-size:12px;font-weight:700;content:"day";color:#484848;padding-left:46px;transition:all .4s}.on-off-toggle__input[_ngcontent-%COMP%]{position:absolute;opacity:0}.on-off-toggle__input[_ngcontent-%COMP%]:checked + .on-off-toggle__slider[_ngcontent-%COMP%]{background-color:#000}.on-off-toggle__input[_ngcontent-%COMP%]:checked + .on-off-toggle__slider[_ngcontent-%COMP%]:before{transform:translate(32px)}.on-off-toggle__input[_ngcontent-%COMP%]:checked + .on-off-toggle__slider[_ngcontent-%COMP%]:after{content:"month";color:#fff;padding-left:8px}*[_ngcontent-%COMP%]{box-sizing:border-box}#chart[_ngcontent-%COMP%]{max-width:480px;margin:35px auto;padding:0}.subCard[_ngcontent-%COMP%]{width:100%;display:flex;padding:1rem;margin:1rem 0rem;background-color:#f0f0f0;justify-content:space-between}.subcard-icon[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:.5rem}.icon[_ngcontent-%COMP%]{height:1.2rem;width:1.2rem}.icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}.unit[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:600}.qbutton[_ngcontent-%COMP%]{background:#fff;color:#222;border:1px solid #e7e7e7;border-bottom:2px solid #ddd;border-radius:2px;padding:4px 17px}.qbutton.active[_ngcontent-%COMP%]{color:#fff;background:#008ffb;border:1px solid blue;border-bottom:2px solid blue}.qbutton[_ngcontent-%COMP%]:focus{outline:0}.tiles__header[_ngcontent-%COMP%]{display:flex;justify-content:space-around;flex-direction:column}#chart[_ngcontent-%COMP%]{max-width:1080px;margin:35px auto}.switch[_ngcontent-%COMP%]{position:relative;display:inline-block;vertical-align:top;width:56px;height:20px;padding:3px;background-color:#fff;border-radius:18px;box-shadow:inset 0 -1px #fff,inset 0 1px 1px #0000000d;cursor:pointer;background-image:linear-gradient(to bottom,#eeeeee,white 25px)}.switch-input[_ngcontent-%COMP%]{position:absolute;top:0;left:0;opacity:0}.switch-label[_ngcontent-%COMP%]{position:relative;display:block;height:inherit;font-size:10px;text-transform:uppercase;background:#ce0707;border-radius:inherit;box-shadow:inset 0 1px 2px #0000001f,inset 0 0 2px #00000026;transition:.15s ease-out;transition-property:opacity background}.switch-label[_ngcontent-%COMP%]:before, .switch-label[_ngcontent-%COMP%]:after{position:absolute;top:50%;margin-top:-.5em;line-height:1;transition:inherit}.switch-label[_ngcontent-%COMP%]:before{content:attr(data-off);right:11px;color:#fff;text-shadow:0 1px rgba(255,255,255,.5)}.switch-label[_ngcontent-%COMP%]:after{content:attr(data-on);left:11px;color:#fff;text-shadow:0 1px rgba(0,0,0,.2);opacity:0}.switch-input[_ngcontent-%COMP%]:checked ~ .switch-label[_ngcontent-%COMP%]{background:#47a8d8;box-shadow:inset 0 1px 2px #00000026,inset 0 0 3px #0003}.switch-input[_ngcontent-%COMP%]:checked ~ .switch-label[_ngcontent-%COMP%]:before{opacity:0}.switch-input[_ngcontent-%COMP%]:checked ~ .switch-label[_ngcontent-%COMP%]:after{opacity:1}.switch-handle[_ngcontent-%COMP%]{position:absolute;top:4px;left:4px;width:18px;height:18px;background:white;border-radius:10px;box-shadow:1px 1px 5px #0003;background-image:linear-gradient(to bottom,white 40%,#f0f0f0);transition:left .15s ease-out}.switch-handle[_ngcontent-%COMP%]:before{content:"";position:absolute;top:50%;left:50%;margin:-6px 0 0 -6px;width:12px;height:12px;background:#f9f9f9;border-radius:6px;box-shadow:inset 0 1px #00000005;background-image:linear-gradient(to bottom,#eeeeee,white)}.switch-input[_ngcontent-%COMP%]:checked ~ .switch-handle[_ngcontent-%COMP%]{left:40px;box-shadow:-1px 1px 5px #0003}.switch-green[_ngcontent-%COMP%] > .switch-input[_ngcontent-%COMP%]:checked ~ .switch-label[_ngcontent-%COMP%]{background:#4fb845}.null[_ngcontent-%COMP%]{background-image:-webkit-linear-gradient(top,#8c8c8c 0%,#7c7d7c 50%,#7e7e7e 100%)}.green[_ngcontent-%COMP%]{background-image:-webkit-linear-gradient(top,#13fB04 0%,#58e343 50%,#ADED99 100%)}.orange[_ngcontent-%COMP%]{background-image:-webkit-linear-gradient(top,#f9a004 0%,#e0ac45 50%,#ead698 100%)}.yellow[_ngcontent-%COMP%]{background-image:-webkit-linear-gradient(top,#dafb04 0%,#d8e343 50%,#eaed99 100%)}.red[_ngcontent-%COMP%]{background-image:-webkit-linear-gradient(top,#fb1304 0%,#e35843 50%,#edad99 100%)}.blue[_ngcontent-%COMP%]{background-image:-webkit-linear-gradient(top,#0442fb 0%,#5043e3 50%,#a099ed 100%)}.pink[_ngcontent-%COMP%]{background-image:-webkit-linear-gradient(top,#fb04e2 0%,#e343e3 50%,#ed99e2 100%)}.sky[_ngcontent-%COMP%]{background-image:-webkit-linear-gradient(top,#04eafb 0%,#43d3e3 50%,#99e5ed 100%)}.merun[_ngcontent-%COMP%]{background-image:-webkit-linear-gradient(top,#ad04fb 0%,#9643e3 50%,#ca99ed 100%)}.led[_ngcontent-%COMP%]{border-radius:5px;width:10px;height:10px;box-shadow:0 0 3px #000;zoom:4;margin:2px 2px 2px 34%}.led[_ngcontent-%COMP%]:after{display:block;content:"";margin-left:1px;margin-right:1px;width:8px;height:6px;-webkit-border-top-right-radius:4px 3px;-webkit-border-top-left-radius:4px 3px;-webkit-border-bottom-right-radius:4px 3px;-webkit-border-bottom-left-radius:4px 3px;background-image:-webkit-linear-gradient(top,rgba(255,255,255,.8) 0%,rgba(255,255,255,.2) 100%)}']}),s})()}}]);