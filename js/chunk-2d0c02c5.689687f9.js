(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c02c5"],{"413e":function(t,e,n){"use strict";n.r(e);var l=n("7a23");const u={border:"1"};function c(t,e,n,c,o,r){const s=Object(l["v"])("router-link");return Object(l["q"])(),Object(l["e"])("div",null,[e[8]||(e[8]=Object(l["f"])("p",null,"Index Of Format",-1)),Object(l["f"])("p",null,[Object(l["h"])(s,{to:"/"},{default:Object(l["D"])(()=>e[6]||(e[6]=[Object(l["g"])("back to the contents")])),_:1})]),e[9]||(e[9]=Object(l["f"])("br",null,null,-1)),Object(l["f"])("table",u,[e[7]||(e[7]=Object(l["f"])("tr",null,[Object(l["f"])("th",null,"index of str"),Object(l["f"])("th",null,"index start plus"),Object(l["f"])("th",null,"index end subtrac")],-1)),Object(l["f"])("tr",null,[Object(l["f"])("td",null,[Object(l["E"])(Object(l["f"])("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>o.index_of_str=t)},null,512),[[l["B"],o.index_of_str]])]),Object(l["f"])("td",null,[Object(l["E"])(Object(l["f"])("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>o.index_start_plus=t)},null,512),[[l["B"],o.index_start_plus]])]),Object(l["f"])("td",null,[Object(l["E"])(Object(l["f"])("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>o.index_end_subtrac=t)},null,512),[[l["B"],o.index_end_subtrac]])])])]),Object(l["E"])(Object(l["f"])("textarea",{"onUpdate:modelValue":e[3]||(e[3]=t=>o.source=t),id:"source",rows:"30",cols:"50",placeholder:"source text"},null,512),[[l["B"],o.source]]),Object(l["E"])(Object(l["f"])("textarea",{"onUpdate:modelValue":e[4]||(e[4]=t=>o.output=t),id:"output",rows:"30",cols:"50",placeholder:"output",readonly:""},null,512),[[l["B"],o.output]]),e[10]||(e[10]=Object(l["f"])("br",null,null,-1)),Object(l["f"])("div",null,[Object(l["f"])("input",{value:"handle",type:"button",onClick:e[5]||(e[5]=t=>r.handle())})])])}var o={name:"IndexOfFormatView",data(){return{index_of_str:" as ",index_start_plus:4,index_end_subtrac:1,source:"name as name,\nage as age,",output:""}},methods:{handle(){this.output="";const t=Number.parseInt(this.index_start_plus),e=Number.parseInt(this.index_end_subtrac);let n="";if(""===this.index_of_str)return;const l=this.source.split("\n").map(t=>t.trim()).filter(t=>t);for(let u=0;u<l.length;u++){const c=l[u],o=c.indexOf(this.index_of_str);u===l.length-1?n+=c.substring(o+t,c.length-e):n=n+c.substring(o+t,c.length-e)+"\n"}this.output=n,navigator.clipboard.writeText(this.output).then(()=>console.log("copied"))}}},r=n("6b0d"),s=n.n(r);const d=s()(o,[["render",c]]);e["default"]=d}}]);