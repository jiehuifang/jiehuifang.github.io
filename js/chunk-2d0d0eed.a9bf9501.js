(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d0eed"],{"69a5":function(t,e,n){"use strict";n.r(e);var o=n("7a23");const i={border:"1"};function c(t,e,n,c,l,r){const u=Object(o["v"])("router-link");return Object(o["q"])(),Object(o["e"])("div",null,[e[10]||(e[10]=Object(o["f"])("p",null,"Timer",-1)),Object(o["f"])("p",null,[Object(o["h"])(u,{to:"/"},{default:Object(o["D"])(()=>e[8]||(e[8]=[Object(o["g"])("back to the contents")])),_:1})]),e[11]||(e[11]=Object(o["f"])("br",null,null,-1)),Object(o["f"])("table",i,[e[9]||(e[9]=Object(o["f"])("tr",null,[Object(o["f"])("th",null,"hour"),Object(o["f"])("th",null,"minute"),Object(o["f"])("th",null,"second"),Object(o["f"])("th",null,"text")],-1)),Object(o["f"])("tr",null,[Object(o["f"])("td",null,[Object(o["E"])(Object(o["f"])("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>l.hour=t)},null,512),[[o["B"],l.hour]])]),Object(o["f"])("td",null,[Object(o["E"])(Object(o["f"])("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>l.minute=t)},null,512),[[o["B"],l.minute]])]),Object(o["f"])("td",null,[Object(o["E"])(Object(o["f"])("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>l.second=t)},null,512),[[o["B"],l.second]])]),Object(o["f"])("td",null,[Object(o["E"])(Object(o["f"])("input",{"onUpdate:modelValue":e[3]||(e[3]=t=>l.text=t)},null,512),[[o["B"],l.text]])])])]),Object(o["f"])("button",{onClick:e[4]||(e[4]=t=>r.start("plus"))},"plus"),Object(o["f"])("button",{onClick:e[5]||(e[5]=t=>r.start("minus"))},"minus"),Object(o["f"])("button",{onClick:e[6]||(e[6]=t=>r.start(null))},"continue"),Object(o["f"])("button",{onClick:e[7]||(e[7]=t=>r.stop())},"stop"),e[12]||(e[12]=Object(o["f"])("hr",null,null,-1)),Object(o["g"])(" "+Object(o["y"])(r.text_time),1)])}var l={name:"TimerView",data(){return{hour:0,minute:0,second:0,core_hour:0,core_minute:0,core_second:0,interval:null,model:null,text:"Time Out!"}},created(){const t=this,e=window.localStorage;if(!e)return!1;const n=e.getItem("jiehuifang_timer");if(null!==n){const e=JSON.parse(n);t.hour=e.hour,t.minute=e.minute,t.second=e.second}void 0!==window.Notification&&"granted"!==Notification.permission&&Notification.requestPermission()},computed:{core_time(){let t=0;return t+=3600*this.core_hour,t+=60*this.core_minute,t+=1*this.core_second,t},text_time(){let t=this.core_time;const e=parseInt(t/3600);t-=3600*e;const n=parseInt(t/60);return t-=60*n,e+"hour "+n+"minute "+t+"second"}},methods:{start(t){const e=this;if(null!==t||null!==e.model){if(null!==t){const n=window.localStorage,o={hour:e.hour,minute:e.minute,second:e.second};n&&n.setItem("jiehuifang_timer",JSON.stringify(o)),e.core_second=parseInt(e.second),e.core_minute=parseInt(e.minute),e.core_hour=parseInt(e.hour),e.model=t}null===e.interval?"plus"===this.model?e.interval=setInterval(()=>{e.core_second+=1},1e3):e.interval=setInterval(()=>{e.core_second-=1,e.core_time<=0&&(e.showNotification(e.text),e.stop())},1e3):alert("already started")}else alert("frist start")},stop(){const t=this;clearInterval(t.interval),t.interval=null},showNotification(t){const e=this;"granted"===Notification.permission?e.showWindowNotification(t):console.log("Notification Permission:"+Notification.permission)},showWindowNotification(t){const e=new Notification("Timer",{dir:"auto",icon:"/dog.ico",body:t,renotify:!0,tag:"Timer",requireInteraction:!0});e.onclick=()=>{window.focus()}}}},r=n("6b0d"),u=n.n(r);const s=u()(l,[["render",c]]);e["default"]=s}}]);