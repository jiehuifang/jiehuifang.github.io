(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70c1c1b7"],{"69a5":function(t,n,e){"use strict";e.r(n);var o=e("7a23"),i=Object(o["f"])("p",null,"Timer",-1),r=Object(o["g"])("back to the contents"),u=Object(o["f"])("br",null,null,-1),c={border:"1"},l=Object(o["f"])("tr",null,[Object(o["f"])("th",null,"hour"),Object(o["f"])("th",null,"minute"),Object(o["f"])("th",null,"second")],-1),a=Object(o["f"])("hr",null,null,-1);function s(t,n,e,s,f,d){var b=Object(o["v"])("router-link");return Object(o["q"])(),Object(o["e"])("div",null,[i,Object(o["f"])("p",null,[Object(o["h"])(b,{to:"/"},{default:Object(o["C"])((function(){return[r]})),_:1})]),u,Object(o["f"])("table",c,[l,Object(o["f"])("tr",null,[Object(o["f"])("td",null,[Object(o["D"])(Object(o["f"])("input",{"onUpdate:modelValue":n[0]||(n[0]=function(t){return f.hour=t})},null,512),[[o["A"],f.hour]])]),Object(o["f"])("td",null,[Object(o["D"])(Object(o["f"])("input",{"onUpdate:modelValue":n[1]||(n[1]=function(t){return f.minute=t})},null,512),[[o["A"],f.minute]])]),Object(o["f"])("td",null,[Object(o["D"])(Object(o["f"])("input",{"onUpdate:modelValue":n[2]||(n[2]=function(t){return f.second=t})},null,512),[[o["A"],f.second]])])])]),Object(o["f"])("button",{onClick:n[3]||(n[3]=function(t){return d.start("plus")})},"plus"),Object(o["f"])("button",{onClick:n[4]||(n[4]=function(t){return d.start("minus")})},"minus"),Object(o["f"])("button",{onClick:n[5]||(n[5]=function(t){return d.start(null)})},"continue"),Object(o["f"])("button",{onClick:n[6]||(n[6]=function(t){return d.stop()})},"stop"),a,Object(o["g"])(" "+Object(o["x"])(d.text_time),1)])}e("e9c4");var f={name:"TimerView",data:function(){return{hour:0,minute:0,second:0,core_hour:0,core_minute:0,core_second:0,interval:null,model:null}},created:function(){var t=this,n=window.localStorage;if(!n)return!1;var e=n.getItem("jiehuifang_timer");if(null!==e){var o=JSON.parse(e);t.hour=o.hour,t.minute=o.minute,t.second=o.second}void 0!==window.Notification&&"granted"!==Notification.permission&&Notification.requestPermission()},computed:{core_time:function(){var t=0;return t+=3600*this.core_hour,t+=60*this.core_minute,t+=1*this.core_second,t},text_time:function(){var t=this.core_time,n=parseInt(t/3600);t-=3600*n;var e=parseInt(t/60);return t-=60*e,n+"hour "+e+"minute "+t+"second"}},methods:{start:function(t){var n=this;if(null!==t||null!==n.model){if(null!==t){var e=window.localStorage,o={hour:n.hour,minute:n.minute,second:n.second};e&&e.setItem("jiehuifang_timer",JSON.stringify(o)),n.core_second=parseInt(n.second),n.core_minute=parseInt(n.minute),n.core_hour=parseInt(n.hour),n.model=t}null===n.interval?"plus"===this.model?n.interval=setInterval((function(){n.core_second+=1}),1e3):n.interval=setInterval((function(){n.core_second-=1,n.core_time<=0&&(n.showNotification("Time Out!"),n.stop())}),1e3):alert("already started")}else alert("frist start")},stop:function(){var t=this;clearInterval(t.interval),t.interval=null},showNotification:function(t){var n=this;"granted"===Notification.permission?n.showWindowNotification(t):console.log("Notification Permission:"+Notification.permission)},showWindowNotification:function(t){var n=new Notification("Timer",{dir:"auto",icon:"/dog.ico",body:t,renotify:!0,tag:"Timer",requireInteraction:!0});n.onclick=function(){window.focus()}}}},d=e("6b0d"),b=e.n(d);const m=b()(f,[["render",s]]);n["default"]=m},e9c4:function(t,n,e){var o=e("23e7"),i=e("da84"),r=e("d066"),u=e("2ba4"),c=e("e330"),l=e("d039"),a=i.Array,s=r("JSON","stringify"),f=c(/./.exec),d=c("".charAt),b=c("".charCodeAt),m=c("".replace),h=c(1..toString),O=/[\uD800-\uDFFF]/g,j=/^[\uD800-\uDBFF]$/,p=/^[\uDC00-\uDFFF]$/,v=function(t,n,e){var o=d(e,n-1),i=d(e,n+1);return f(j,t)&&!f(p,i)||f(p,t)&&!f(j,o)?"\\u"+h(b(t,0),16):t},w=l((function(){return'"\\udf06\\ud834"'!==s("\udf06\ud834")||'"\\udead"'!==s("\udead")}));s&&o({target:"JSON",stat:!0,forced:w},{stringify:function(t,n,e){for(var o=0,i=arguments.length,r=a(i);o<i;o++)r[o]=arguments[o];var c=u(s,null,r);return"string"==typeof c?m(c,O,v):c}})}}]);
//# sourceMappingURL=chunk-70c1c1b7.b3c93116.js.map