(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c868fa08"],{"0039":function(t,e,a){},"0530":function(t,e,a){"use strict";a("d3b1")},"0e54":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"搜索名称关键词"},model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}})],1)],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.pageList,border:"",fit:""}},[a("el-table-column",{attrs:{prop:"ID",label:"设备号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"Addr",width:"180px",align:"center",label:"地址"}}),t._v(" "),a("el-table-column",{attrs:{width:"80px",align:"center",label:"通道数"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.Channels?e.row.Channels.length:0)+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"100px",align:"center",label:"注册时间"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("show-time",{attrs:{time:t.row.RegisterTime}})]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"100px",align:"center",label:"更新时间"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("show-time",{attrs:{time:t.row.UpdateTime}})]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"110px",align:"center",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("status-show",{attrs:{status:t.row.Status}})]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",width:"120px",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.Channels&&e.row.Channels.length>0?a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.onShowChannelDialog(e.row)}}},[t._v("查看通道\n        ")]):t._e()]}}])})],1),t._v(" "),a("el-pagination",{staticStyle:{"margin-top":"10px"},attrs:{background:"","hide-on-single-page":"",layout:"prev, pager, next","current-page":t.currentLogPage,total:t.dataListFilter.length},on:{"update:currentPage":function(e){t.currentLogPage=e},"update:current-page":function(e){t.currentLogPage=e}}}),t._v(" "),a("el-dialog",{attrs:{title:"通道列表","show-close":!1,visible:t.dialogVisible,width:"70%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div",[t.dialogVisible?a("el-table",{staticStyle:{width:"100%"},attrs:{fit:"",border:"",data:t.channelList}},[a("el-table-column",{attrs:{prop:"DeviceID",label:"通道编号",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"Name",label:"名称",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"Manufacturer",label:"厂商"}}),t._v(" "),a("el-table-column",{attrs:{prop:"Address",label:"地址"}}),t._v(" "),a("el-table-column",{attrs:{prop:"Status",label:"状态"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.onPlay(e.row)}}},[t._v("播放")])]}}],null,!1,170552090)})],1):t._e()],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("关闭")])],1)]),t._v(" "),a("el-dialog",{attrs:{title:"设备播放","show-close":!1,"before-close":t.handlePlayClose,visible:t.dialogVisible2,width:"50%"},on:{"update:visible":function(e){t.dialogVisible2=e}}},[t.dialogVisible2&&t.tempRtcStream?a("div",{staticStyle:{height:"400px",overflow:"hidden"}},[a("jessibuca-player",{attrs:{"stream-path":t.tempRtcStream}})],1):t._e(),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.handlePlayClose}},[t._v("关闭")])],1)])],1)},i=[],r=(a("8e6e"),a("ac6a"),a("456d"),a("ade3")),s=a("2f62"),o=a("6280"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("el-tag",{attrs:{type:"success"}},[t._v(t._s(t.status))])],1)},l=[],u={name:"StatusShow",props:["status"]},p=u,h=a("2877"),m=Object(h["a"])(p,c,l,!1,null,"943aeb20",null),d=m.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:18}},[a("div",{staticStyle:{height:"100%",width:"100%",position:"relative"}},[a("webrtc-player",{attrs:{"stream-path":t.stream,controls:!1}})],1)]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"operation-block"},[a("ptz-cmd",{attrs:{"temp-item":t.tempPlayOption}})],1)])],1)},v=[],g=a("3724"),y=a("d7f4"),b={name:"Player",components:{WebrtcPlayer:g["a"],PtzCmd:y["a"]},props:["stream","tempPlayOption"],data:function(){return{}}},w=b,T=(a("26f1"),Object(h["a"])(w,f,v,!1,null,"18917e68",null)),P=T.exports,O=a("a7ca"),z=a("d2cd"),_=a("4ec3");function S(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function C(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?S(Object(a),!0).forEach((function(e){Object(r["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):S(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var M={name:"gb28181",components:{ShowTime:o["a"],StatusShow:d,Gb28181Player:P,Records:z["a"],JessibucaPlayer:O["a"]},data:function(){return{searchKey:"",dialogVisible:!1,dialogVisible2:!1,dialogItem:"",tempPlayOption:{},channelList:[],tempRtcStream:"",currentLogPage:1}},computed:C(C({},Object(s["b"])({dataList:function(t){return t.Gb28181List}})),{},{dataListFilter:function(){var t=[],e=this.searchKey.trim();return t=e?this.dataList.filter((function(t){return-1!==t.ID.indexOf(e)})):this.dataList,t},pageList:function(){return this.dataListFilter.slice(10*(this.currentLogPage-1),10*this.currentLogPage)}}),methods:{onPlay:function(t){var e=this,a=this.dialogItem.ID,n={id:a,channel:t.DeviceID};this.tempPlayOption=n,Object(_["m"])(n).then((function(){e.handleInvite(t,a)})).catch((function(n){e.handleInvite(t,a)}))},handleInvite:function(t,e){var a=this;this.$nextTick((function(){a.tempRtcStream=e+"/"+t.DeviceID,a.dialogVisible2=!0}))},handlePlayClose:function(){Object(_["b"])({id:this.tempPlayOption.id,channel:this.tempPlayOption.channel}),this.dialogVisible2=!1},onShowChannelDialog:function(t){this.dialogItem=t,this.channelList=t.Channels||[],this.dialogVisible=!0}}},x=M,k=Object(h["a"])(x,n,i,!1,null,"2c8fa582",null);e["default"]=k.exports},"26f1":function(t,e,a){"use strict";a("0039")},"88a2":function(t,e,a){"use strict";(function(t){a.d(e,"b",(function(){return o})),a.d(e,"a",(function(){return n}));a("6b54");var n={stop:"stop",right:"right",left:"left",up:"up",down:"down",leftUp:"leftUp",leftDown:"leftDown",rightUp:"rightUp",rightDown:"rightDown",zoomFar:"zoomFar",zoomNear:"zoomNear",apertureFar:"apertureFar",apertureNear:"apertureNear",focusFar:"focusFar",focusNear:"focusNear",setPos:"setPos",calPos:"calPos",delPos:"delPos"},i={stop:0,right:1,left:2,up:8,down:4,leftUp:10,leftDown:6,rightUp:9,rightDown:5,zoomFar:16,zoomNear:32,apertureFar:72,apertureNear:68,focusFar:66,focusNear:65,setPos:129,calPos:130,delPos:131},r=[25,50,75,100,125,150,175,200,225,250],s=[1,2,3,4,5,6,7,8,9,16];function o(t){var e,a,r,s,o=t.type,p=t.speed,h=t.index,m=c(p);switch(e=i[o],o){case n.up:case n.down:case n.apertureFar:case n.apertureNear:r=m;break;case n.right:case n.left:case n.focusFar:case n.focusNear:a=m;break;case n.leftUp:case n.leftDown:case n.rightUp:case n.rightDown:a=m,r=m;break;case n.zoomFar:case n.zoomNear:s=16;break;case n.calPos:case n.delPos:case n.setPos:r=l(h);break;default:break}return u(e,a,r,s)}function c(t){t=t||5;var e=t-1,a=r[e]||r[4];return a}function l(t){return s[t-1]}function u(e,a,n,i){var r=t.alloc(8);return r[0]=165,r[1]=15,r[2]=1,e&&(r[3]=e),a&&(r[4]=a),n&&(r[5]=n),i&&(r[6]=i),r[7]=(r[0]+r[1]+r[2]+r[3]+r[4]+r[5]+r[6])%256,p(r)}function p(t){for(var e="",a=0;a<t.length;a++){var n=t[a].toString(16);1===n.length&&(n="0"+n),e+=n.toUpperCase()}return e}}).call(this,a("b639").Buffer)},"966e":function(t,e,a){"use strict";a("ad9b")},ad9b:function(t,e,a){},d2cd:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"record-wrap"},[a("div",{staticClass:"record-player"},[a("div",{staticClass:"record-time-select"},[a("el-date-picker",{staticStyle:{width:"200px"},attrs:{type:"date",size:"small",clearable:!1,"value-format":"timestamp","picker-options":t.pickerOptions,placeholder:"选择日期"},on:{change:t.onSearchTimeChange},model:{value:t.searchTime,callback:function(e){t.searchTime=e},expression:"searchTime"}})],1),t._v(" "),t.recordList.length>0&&t.hasInitMinute?[t.recordSP?a("webrtc-player",{key:t.recordSP,attrs:{controls:!1,"stream-path":t.recordSP},on:{doPlayed:t.handlePlayed}}):a("p",{staticStyle:{"text-align":"center"}},[t._v("初始化...")])]:t._e()],2),t._v(" "),a("div",{staticClass:"record-time"},[a("div",{ref:"timeDay",staticClass:"time-day"},[t._l(t.minuteList,(function(e){return a("div",{staticClass:"time-minute",class:{active:e.hasRecord},attrs:{title:e.title},on:{click:function(a){return t.onMinuteClick(e)}}})})),t._v(" "),t._l(t.hourList,(function(e){return a("div",{staticClass:"time-text"},[t._v("\n        "+t._s(e.title)+"\n      ")])}))],2),t._v(" "),t.playTime.now?a("div",{staticClass:"time-cursor",style:t.playTimeStyle,on:{mousedown:t.onStartMove,mousemove:t.onDoingMove,mouseup:t.onStopMove}},[a("div",{staticClass:"time-cursor-text"},[t.isPlayTimeMoving?[t._v("\n          "+t._s(t.playMoveTime)+"\n        ")]:[t._v("\n          "+t._s(t._f("parseTimeFilter")(t.playTime.now,"{h}:{i}:{s}"))+"\n        ")]],2)]):t._e()])])},i=[],r=(a("8e6e"),a("456d"),a("6b54"),a("96cf"),a("1da1")),s=(a("7514"),a("ac6a"),a("ade3")),o=a("ed08"),c=a("3724"),l=a("2f62"),u=a("4ec3");function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function h(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(Object(a),!0).forEach((function(e){Object(s["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var m=(new Date).getTime();function d(){for(var t=[],e=1;e<1440;e++)t.push({title:Object(o["b"])(e),timestamp:e,endTimestamp:"",hasRecord:!1});return t}function f(){for(var t=[],e=0;e<24;e++){var a=e+":00";a<10&&(a="0"+a),t.push({title:a,timestamp:e+1})}return t}var v={name:"Record",props:{recordSearch:{type:Object,default:function(){return{}}}},data:function(){return{hasInitMinute:!1,hasQuery:!1,searchTime:m,minuteList:d(),hourList:f(),playTime:{start:"",end:"",now:""},isPlaying:!1,pickerOptions:{disabledDate:function(t){return t.getTime()>Date.now()}},recordSP:null,isPlayTimeMoving:!1,playTimeOffset:0}},created:function(){this.init()},timeInterval:null,components:{WebrtcPlayer:c["a"]},watch:{recordList:function(){!this.hasInitMinute&&this.hasQuery&&(this.hasInitMinute=!0,this.updateMinuteList())}},computed:h(h({},Object(l["b"])({gb28181List:function(t){return t.Gb28181List},gb28181ChannelList:function(t){var e=[];return t.Gb28181List.forEach((function(t){var a=t.Channels||[];a.length>0&&(e=e.concat(a.map((function(e){return e.id=t.ID,e.deviceId=e.DeviceID,e}))))})),e}})),{},{recordList:function(){var t=this,e=[],a=this.gb28181ChannelList.find((function(e){return e.deviceId===t.recordSearch.deviceId&&e.id===t.recordSearch.id}));if(a){var n=a.Records||[];e=n.map((function(t){var e=new Date(t.StartTime).getTime(),a=new Date(t.EndTime).getTime(),n=a-e,i=Object(o["h"])(e),r=Object(o["h"])(a);return t._startTime=e/1e3>>0,t._endTime=a/1e3>>0,t.timeLength=Math.floor(n/1e3/60%60),t.startTime=i,t.endTime=r,t.startTimestamp=e,t.endTimestamp=a,t}))}return e},playTimeStyle:function(){var t=0;if(this.isPlayTimeMoving)t=this.playTimeOffset;else if(this.playTime.now){var e=new Date(this.playTime.now),a=e.getHours(),n=e.getMinutes();t=60*a+n}var i={left:t+"px"};return i},playMoveTime:function(){return Object(o["b"])(this.playTimeOffset)}}),methods:{init:function(){this.hasQuery=!1,this.hasInitMinute=!1,this.playTime.now="",this.fetchList()},fetchList:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.getSearchTimeRange(),a={id:this.recordSearch.id,channel:this.recordSearch.channel,startTime:e.start,endTime:e.end},t.next=4,Object(u["q"])(a);case 4:this.hasQuery=!0;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getSearchTimeRange:function(){var t=Object(o["f"])(this.searchTime),e=t.start,a=t.end,n=new Date(e).toISOString(),i=new Date(a).toISOString();return{start:n,end:i}},onSearchTimeChange:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.minuteList=d(),t.next=3,this.stop();case 3:this.init();case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),updateMinuteList:function(){var t=this;this.playTime.start="",this.playTime.now="",this.playTime.endTime="",this.minuteList.forEach((function(e){var a=t.formatMinuteItemTimestamp(e);t.recordList.forEach((function(n){n.startTimestamp<=a&&n.endTimestamp>a&&(e.hasRecord=!0,e.endTimestamp=n.endTimestamp,t.playTime.start||(t.playTime.start=n.startTimestamp,t.playTime.end=n.endTimestamp))}))})),this.playTime.start&&this.play()},formatMinuteItemTimestamp:function(t){var e=Math.floor(t.timestamp/60)%60,a=Math.floor(t.timestamp%60),n=new Date(this.searchTime).setHours(e,a,0,0);return n},onStartMove:function(t){this.isPlayTimeMoving=!0,this.updatePlayTimeOffset(t)},onDoingMove:function(t){this.isPlayTimeMoving&&this.updatePlayTimeOffset(t)},onStopMove:function(t){if(this.isPlayTimeMoving){var e=this.minuteList[this.playTimeOffset];e&&this.onMinuteClick(e),this.isPlayTimeMoving=!1,this.playTimeOffset=0}},updatePlayTimeOffset:function(t){var e=this.getTimeRect(),a=t.clientX-e.left;this.playTimeOffset=parseInt(a,10)},getTimeRect:function(){var t=this.$refs.timeDay;return t.getBoundingClientRect()},onMinuteClick:function(t){if(t.hasRecord){var e=this.formatMinuteItemTimestamp(t);this.playTime.start=e,this.playTime.end=t.endTimestamp,this.play()}},play:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.stop();case 2:return e={id:this.recordSearch.id,channel:this.recordSearch.channel,startTime:this.playTime.start/1e3>>0,endTime:this.playTime.end/1e3>>0},t.prev=3,t.next=6,Object(u["o"])(e);case 6:this.recordSP="".concat(e.id,"/").concat(this.recordSearch.deviceId,"/").concat(e.startTime,"-").concat(e.endTime),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](3),console.error(t.t0);case 12:this.playTime.now=this.playTime.start;case 13:case"end":return t.stop()}}),t,this,[[3,9]])})));function e(){return t.apply(this,arguments)}return e}(),handlePlayed:function(){this.clearInterval(),this.intervalPlayTime()},stop:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.clearInterval(),this.isPlaying=!1,!this.recordSP){t.next=4;break}return t.abrupt("return",Object(u["u"])(this.recordSP));case 4:return t.abrupt("return",!0);case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),intervalPlayTime:function(){var t=this;this.isPlaying=!0,this.$options.timeInterval=setInterval((function(){t.playTime.now+=1e3,t.checkPlayNext()}),1e3)},checkPlayNext:function(){var t=this;if(this.playTime.now===this.playTime.end){var e=this.minuteList.find((function(e){var a=t.formatMinuteItemTimestamp(e);return e.hasRecord&&t.playTime.end<=a}));e&&(this.playTime.start=this.formatMinuteItemTimestamp(e),this.playTime.end=e.endTimestamp,this.playTime.now=this.playTime.start,this.play())}},clearInterval:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){this.$options.timeInterval&&(clearInterval(this.$options.timeInterval),this.$options.timeInterval=null)}))},destroyed:function(){this.stop()}},g=v,y=(a("966e"),a("2877")),b=Object(y["a"])(g,n,i,!1,null,"004a8893",null);e["a"]=b.exports},d3b1:function(t,e,a){},d7f4:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ptz-cmd-block"},[a("div",{staticClass:"control"},t._l(8,(function(e){return a("svg",{class:"arrow"+e,attrs:{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"64",height:"64"},on:{click:function(a){return t.ptzCmdDirection(e)}}},[a("path",{attrs:{d:"M682.666667 955.733333H341.333333a17.066667 17.066667 0 0 1-17.066666-17.066666V529.066667H85.333333a17.066667 17.066667 0 0 1-12.066133-29.1328l426.666667-426.666667a17.0496 17.0496 0 0 1 24.132266 0l426.666667 426.666667A17.066667 17.066667 0 0 1 938.666667 529.066667H699.733333v409.6a17.066667 17.066667 0 0 1-17.066666 17.066666z m-324.266667-34.133333h307.2V512a17.066667 17.066667 0 0 1 17.066667-17.066667h214.801066L512 109.4656 126.532267 494.933333H341.333333a17.066667 17.066667 0 0 1 17.066667 17.066667v409.6z","p-id":"6849"}})])})),0),t._v(" "),a("div",{staticClass:"control control2"},[a("el-tooltip",{attrs:{effect:"light",content:"镜头放大",placement:"top","open-delay":200}},[a("svg",{attrs:{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(e){return t.ptzCmd(t.ptzType.zoomFar)}}},[a("path",{attrs:{d:"M994.990643 859.352971L713.884166 578.246494A381.208198 381.208198 0 0 0 767.307984 383.653992C767.307984 171.765089 595.542895 0 383.653992 0S0 171.765089 0 383.653992s171.765089 383.653992 383.653992 383.653992c71.119859 0 137.507985-19.694238 194.592502-53.423818l281.106477 281.090491a95.913498 95.913498 0 1 0 135.637672-135.621686zM383.653992 671.394486c-158.912681 0-287.740494-128.827813-287.740494-287.740494S224.741311 95.913498 383.653992 95.913498s287.740494 128.827813 287.740494 287.740494-128.827813 287.740494-287.740494 287.740494z m159.85583-335.697243h-111.899081v-111.899081a47.956749 47.956749 0 1 0-95.913498 0v111.899081h-111.899081a47.956749 47.956749 0 1 0 0 95.913498h111.899081v111.899081a47.956749 47.956749 0 1 0 95.913498 0v-111.899081h111.899081a47.956749 47.956749 0 1 0 0-95.913498z"}})])]),t._v(" "),a("el-tooltip",{attrs:{effect:"light",content:"镜头缩小",placement:"top","open-delay":200}},[a("svg",{attrs:{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(e){return t.ptzCmd(t.ptzType.zoomNear)}}},[a("path",{attrs:{d:"M994.990643 859.352971L713.884166 578.246494A381.208198 381.208198 0 0 0 767.307984 383.653992C767.307984 171.765089 595.542895 0 383.653992 0S0 171.765089 0 383.653992s171.765089 383.653992 383.653992 383.653992c71.119859 0 137.507985-19.694238 194.592502-53.423818l281.106477 281.090491a95.913498 95.913498 0 1 0 135.637672-135.621686zM383.653992 671.394486c-158.912681 0-287.740494-128.827813-287.740494-287.740494S224.741311 95.913498 383.653992 95.913498s287.740494 128.827813 287.740494 287.740494-128.827813 287.740494-287.740494 287.740494z m159.85583-335.697243H223.798162a47.956749 47.956749 0 1 0 0 95.913498h319.71166a47.956749 47.956749 0 1 0 0-95.913498z"}})])])],1),t._v(" "),a("div",{staticClass:"control control3"},[a("el-tooltip",{attrs:{effect:"light",content:"光圈缩小",placement:"top","open-delay":200}},[a("svg",{attrs:{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(e){return t.ptzCmd(t.ptzType.apertureFar)}}},[a("path",{attrs:{d:"M956.39 400.827C922.164 266.675 828.186 155.703 701.502 99.874l94.522 443.782L956.39 400.827zM206.208 189.167C106.183 286.191 56.845 424.181 72.696 562.659l351.347-309.096-217.835-64.396zM643.118 78.847a446.363 446.363 0 0 0-138.947-16.775 448.047 448.047 0 0 0-250.583 86.934l437.868 146.949-48.338-217.108zM83.786 623.979c34.443 133.772 128.248 244.407 254.583 300.291l-95.915-426.55L83.786 623.979zM969.893 496.089a372.746 372.746 0 0 0-2.37-34.138l-329.972 303.78 196.157 69.256c91.522-88.456 141.056-211.704 136.185-338.898zM396.862 945.166a447.857 447.857 0 0 0 139.077 16.766 447.784 447.784 0 0 0 250.322-86.718L349.286 733.05l47.576 212.116z"}}),t._v(" "),a("path",{attrs:{fill:"#333333",d:"M397.253 471.171h245.668c22.593 0 40.923 18.32 40.923 40.913 0 22.592-18.33 40.922-40.923 40.922H397.253c-22.592 0-40.922-18.33-40.922-40.922 0-22.593 18.33-40.913 40.922-40.913z"}}),t._v(" "),a("path",{attrs:{fill:"#333333",d:"M479.17 634.879V389.21c0-22.593 18.32-40.923 40.913-40.923s40.923 18.33 40.923 40.923v245.668c0 22.592-18.33 40.922-40.923 40.922s-40.913-18.329-40.913-40.921z"}})])]),t._v(" "),a("el-tooltip",{attrs:{effect:"light",content:"光圈放大",placement:"top","open-delay":200}},[a("svg",{attrs:{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(e){return t.ptzCmd(t.ptzType.apertureNear)}}},[a("path",{attrs:{d:"M956.39 400.827C922.164 266.675 828.186 155.703 701.502 99.874l94.522 443.782L956.39 400.827z m-750.182-211.66C106.183 286.191 56.845 424.181 72.696 562.659l351.347-309.096-217.835-64.396z m436.91-110.32a446.363 446.363 0 0 0-138.947-16.775 448.047 448.047 0 0 0-250.583 86.934l437.868 146.949-48.338-217.108zM83.786 623.979c34.443 133.772 128.248 244.407 254.583 300.291l-95.915-426.55L83.786 623.979z m886.107-127.89a372.746 372.746 0 0 0-2.37-34.138l-329.972 303.78 196.157 69.256c91.522-88.456 141.056-211.704 136.185-338.898zM396.862 945.166a447.857 447.857 0 0 0 139.077 16.766 447.784 447.784 0 0 0 250.322-86.718L349.286 733.05l47.576 212.116z m0.391-474.039h245.668c22.593 0 40.923 18.32 40.923 40.912 0 22.593-18.33 40.923-40.923 40.923H397.253c-22.592 0-40.922-18.33-40.922-40.923 0-22.592 18.33-40.912 40.922-40.912z"}})])])],1),t._v(" "),a("div",{staticClass:"control control4"},[a("el-tooltip",{attrs:{effect:"light",content:"光圈缩小",placement:"top","open-delay":200}},[a("svg",{attrs:{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(e){return t.ptzCmd(t.ptzType.focusFar)}}},[a("path",{attrs:{d:"M849.07153297 646.81872559c9.30432153 0 17.26391602 3.30249 23.82934617 9.88769507 6.60992408 6.59509253 9.88769508 14.52502465 9.88769508 23.79473901v101.14617896c0 27.90801978-9.87780761 51.70275879-29.61364722 71.47814965-19.75067115 19.77539086-43.56518578 29.66308594-71.48803711 29.66308594h-101.1165166c-9.32409644 0-17.25402856-3.29754663-23.83428954-9.9865725-6.59509253-6.49127173-9.90252662-14.52502465-9.90252662-23.7947383 0-9.26971435 3.30743408-17.20458984 9.90252662-23.79473901 6.58026099-6.59014916 14.51019311-9.88769508 23.83428954-9.88769507h101.1165166c9.29937744 0 17.26391602-3.29754663 23.82440137-9.88769579 6.61486816-6.59014916 9.88769508-14.52008057 9.88769579-23.89361573v-101.04235815c0-9.36859107 3.28765845-17.30346656 9.89758254-23.78979493 6.57531762-6.69396997 14.52502465-9.99151587 23.83923363-9.99151587l-0.06427025 0.09887671zM242.38726782 141.3103025h101.10168506c9.30432153 0 17.2688601 3.29754663 23.819458 9.88769578 6.62475562 6.59509253 9.89758325 14.52502465 9.89758254 23.7947383 0 9.37353516-3.27282691 17.30346656-9.89758254 23.79473901-6.5505979 6.69396997-14.51513648 9.9865725-23.81451463 9.9865725h-101.10168433c-9.31915307 0-17.2688601 3.19372583-23.82934547 9.88769508-6.62475562 6.49127173-9.91241479 14.52502465-9.91241479 23.794739v101.04235816c0 9.36859107-3.28271508 17.30346656-9.89758324 23.89361573-6.57531762 6.59014916-14.51513648 9.88769508-23.81451392 9.88769507-9.31420898 0-17.25402856-3.29754663-23.82934547-9.88769507C144.49908423 360.80230689 141.21142578 352.86743141 141.21142578 343.49884033V242.45648217c0-27.91296386 9.86792016-51.70275879 29.62353539-71.47814965 19.75067115-19.77539086 43.57507324-29.66308594 71.48803711-29.66308594h0.06426954zM174.9877932 646.81872559c9.30432153 0 17.24414039 3.30249 23.81451393 9.88769507 6.62475562 6.59509253 9.90252662 14.52502465 9.90252662 23.79473901v101.14617896c0 9.26971435 3.27282691 17.19964576 9.89758324 23.78979492 6.57531762 6.59014916 14.51513648 9.88769508 23.81451393 9.88769579h101.12640404c9.29937744 0 17.25402856 3.29754663 23.82934547 9.88769507 6.60992408 6.59014916 9.88769508 14.52502465 9.88769579 23.89361572 0 9.26971435-3.27777099 17.20458984-9.88769579 23.79473901-6.57531762 6.59014916-14.52996803 9.88769508-23.82934547 9.88769508H242.41693092c-27.91296386 0-51.71264625-9.88769508-71.47814895-29.66308594-19.75561523-19.67651344-29.62353539-43.57012915-29.62353539-71.47814965v-101.04235816c0-9.26971435 3.27282691-17.30346656 9.88769507-23.89361573 6.58026099-6.59509253 14.52502465-9.88769508 23.81451464-9.88769507h-0.02966309zM680.57037329 141.3103025h101.1165166c27.92285133 0 51.73736596 9.88769508 71.48803711 29.56420922 19.73583961 19.77539086 29.61364722 43.57012915 29.61364722 71.47814965v101.14617896c0 9.26971435-3.27777099 17.30346656-9.88769508 23.78979493-6.56542945 6.69396997-14.52502465 9.88769508-23.82934617 9.88769506-9.29937744 0-17.26391602-3.19372583-23.82440139-9.88769506-6.61486816-6.48632836-9.88769508-14.52008057-9.88769579-23.78979493V242.35266137c0-9.26971435-3.28765845-17.19964576-9.90252661-23.78979492-6.57037354-6.59509253-14.52008057-9.88769508-23.83428955-9.88769579h-101.10168433c-9.31420898 0-17.2688601-3.29754663-23.82934618-9.88769507-6.60992408-6.59509253-9.89758325-14.52502465-9.89758254-23.79473902 0-9.37353516 3.28765845-17.30346656 9.89758254-23.89361571 6.56048608-6.59014916 14.51513648-9.88769508 23.82934618-9.88769508l0.04943799 0.09887672z"}})])]),t._v(" "),a("el-tooltip",{attrs:{effect:"light",content:"光圈缩小",placement:"top","open-delay":200}},[a("svg",{attrs:{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(e){return t.ptzCmd(t.ptzType.focusNear)}}},[a("path",{attrs:{d:"M512 170.666667A341.333333 341.333333 0 1 1 170.666667 512 341.333333 341.333333 0 0 1 512 170.666667m0-42.666667a384 384 0 1 0 384 384A384 384 0 0 0 512 128z"}}),t._v(" "),a("path",{attrs:{fill:"#333333",d:"M298.666667 533.333333H170.666667a21.333333 21.333333 0 0 1 0-42.666666h128a21.333333 21.333333 0 0 1 0 42.666666zM853.333333 533.333333h-128a21.333333 21.333333 0 0 1 0-42.666666h128a21.333333 21.333333 0 0 1 0 42.666666zM512 320a21.333333 21.333333 0 0 1-21.333333-21.333333V170.666667a21.333333 21.333333 0 0 1 42.666666 0v128a21.333333 21.333333 0 0 1-21.333333 21.333333zM512 874.666667a21.333333 21.333333 0 0 1-21.333333-21.333334v-128a21.333333 21.333333 0 0 1 42.666666 0v128a21.333333 21.333333 0 0 1-21.333333 21.333334z"}})])])],1),t._v(" "),a("div",{staticClass:"control-speed"},[t._v("\n    速度(1-10)：\n    "),a("el-input-number",{attrs:{size:"small",min:1,max:10,label:"速度"},model:{value:t.ptzSpeed,callback:function(e){t.ptzSpeed=e},expression:"ptzSpeed"}})],1)])},i=[],r=a("88a2"),s=a("4ec3"),o=[r["a"].up,r["a"].right,r["a"].down,r["a"].left,r["a"].leftUp,r["a"].rightUp,r["a"].leftDown,r["a"].rightDown],c={name:"PtzCmd",props:{tempItem:{type:Object}},data:function(){return{ptzType:r["a"],arrowTips:["上","右","下","左","左上","右上","左下","右下"],ptzSpeed:5,ptzPositionIndex:1}},methods:{ptzCmdDirection:function(t){var e=o[t-1];this.ptzCmd(e)},startPtzCmdCycle:function(){this.ptzCmd(r["a"].right,!0)},stopPtzCmdCycle:function(){this.ptzCmd(r["a"].stop)},ptzCmd:function(t,e){var a={type:t,speed:this.ptzSpeed,index:this.ptzPositionIndex,cycle:e},n=this.tempItem,i=Object(r["b"])(a),o=Object(r["b"])({type:r["a"].stop});Object(s["p"])({id:n.id,channel:n.channel,ptzcmd:i}),setTimeout((function(){Object(s["p"])({id:n.id,channel:n.channel,ptzcmd:o})}),500)}}},l=c,u=(a("0530"),a("2877")),p=Object(u["a"])(l,n,i,!1,null,"cdc8a226",null);e["a"]=p.exports}}]);