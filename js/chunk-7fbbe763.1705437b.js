(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7fbbe763"],{"00ee":function(t,e,l){var n=l("b622"),i=n("toStringTag"),r={};r[i]="z",t.exports="[object z]"===String(r)},"0cb2":function(t,e,l){var n=l("e330"),i=l("7b0b"),r=Math.floor,s=n("".charAt),o=n("".replace),u=n("".slice),a=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,c=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,l,n,p,d){var h=l+t.length,f=n.length,b=c;return void 0!==p&&(p=i(p),b=a),o(d,b,(function(i,o){var a;switch(s(o,0)){case"$":return"$";case"&":return t;case"`":return u(e,0,l);case"'":return u(e,h);case"<":a=p[u(o,1,-1)];break;default:var c=+o;if(0===c)return i;if(c>f){var d=r(c/10);return 0===d?i:d<=f?void 0===n[d-1]?s(o,1):n[d-1]+s(o,1):i}a=n[c-1]}return void 0===a?"":a}))}},"44e7":function(t,e,l){var n=l("861d"),i=l("c6b6"),r=l("b622"),s=r("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==i(t))}},"577e":function(t,e,l){var n=l("f5df"),i=String;t.exports=function(t){if("Symbol"===n(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},"5b81":function(t,e,l){"use strict";var n=l("23e7"),i=l("c65b"),r=l("e330"),s=l("1d80"),o=l("1626"),u=l("7234"),a=l("44e7"),c=l("577e"),p=l("dc4a"),d=l("90d8"),h=l("0cb2"),f=l("b622"),b=l("c430"),g=f("replace"),m=TypeError,_=r("".indexOf),v=r("".replace),y=r("".slice),A=Math.max,j=function(t,e,l){return l>t.length?-1:""===e?l:_(t,e,l)};n({target:"String",proto:!0},{replaceAll:function(t,e){var l,n,r,f,O,x,w,C,k,S=s(this),T=0,L=0,M="";if(!u(t)){if(l=a(t),l&&(n=c(s(d(t))),!~_(n,"g")))throw m("`.replaceAll` does not allow non-global regexes");if(r=p(t,g),r)return i(r,t,S,e);if(b&&l)return v(c(S),t,e)}f=c(S),O=c(t),x=o(e),x||(e=c(e)),w=O.length,C=A(1,w),T=j(f,O,0);while(-1!==T)k=x?c(e(O,T,f)):h(O,f,T,[],void 0,e),M+=y(f,L,T)+k,L=T+w,T=j(f,O,T+C);return L<f.length&&(M+=y(f,L)),M}})},"90d8":function(t,e,l){var n=l("c65b"),i=l("1a2d"),r=l("3a9b"),s=l("ad6d"),o=RegExp.prototype;t.exports=function(t){var e=t.flags;return void 0!==e||"flags"in o||i(t,"flags")||!r(o,t)?e:n(s,t)}},a035:function(t,e,l){"use strict";l.r(e);var n=l("7a23");const i=Object(n["f"])("p",null,"Generate Java Vo Code From Chinese",-1),r=Object(n["f"])("br",null,null,-1),s=Object(n["f"])("br",null,null,-1);function o(t,e,l,o,u,a){const c=Object(n["v"])("router-link");return Object(n["q"])(),Object(n["e"])("div",null,[i,Object(n["f"])("p",null,[Object(n["h"])(c,{to:"/"},{default:Object(n["C"])(()=>[Object(n["g"])("back to the contents")]),_:1})]),r,Object(n["D"])(Object(n["f"])("textarea",{"onUpdate:modelValue":e[0]||(e[0]=t=>u.source=t),id:"source",rows:"50",cols:"80",placeholder:"source text"},null,512),[[n["A"],u.source]]),Object(n["D"])(Object(n["f"])("textarea",{"onUpdate:modelValue":e[1]||(e[1]=t=>u.source_en=t),id:"source_en",rows:"50",cols:"80",placeholder:"source en text"},null,512),[[n["A"],u.source_en]]),Object(n["D"])(Object(n["f"])("textarea",{"onUpdate:modelValue":e[2]||(e[2]=t=>u.output=t),id:"output",rows:"50",cols:"80",placeholder:"output",readonly:""},null,512),[[n["A"],u.output]]),s,Object(n["f"])("div",null,[Object(n["f"])("input",{value:"handle",type:"button",onClick:e[3]||(e[3]=t=>a.handle())}),Object(n["f"])("input",{value:"format",type:"button",onClick:e[4]||(e[4]=t=>a.format())}),Object(n["f"])("input",{value:"format_en",type:"button",onClick:e[5]||(e[5]=t=>a.format_en())})])])}l("14d9"),l("5b81");var u={name:"GenerateJavaVoCodeFromChinese",data(){return{source:"姓名",source_en:"name",output:"",ignore_field:["请选择","~","yyyy"],field_default_template:'@ApiModelProperty("%a")\nprivate %t %n;',type_map:null,date_field:"日期",number_between_field:"范围",enlist:null}},created(){this.type_map=new Map;const t=this.type_map;t.set("s","String"),t.set("ls","List<String>"),t.set("i","Integer"),t.set("li","List<Integer>"),t.set("l","Long"),t.set("ll","List<Long>"),t.set("b","BigDecimal")},methods:{format_en(){let t="";this.enlist=[];const e=this.source_en.split("\n").map(t=>t.trim()).filter(t=>t);for(let l=0;l<e.length;l++){const n=e[l];let i="";for(let t=0;t<n.length;t++){const e=n[t];0===t?i+=e.toLowerCase():" "===n[t-1]?i+=e.toUpperCase():" "!==n[t]&&(i+=e)}this.enlist.push(i),l===e.length-1?t+=i:t=t+i+"\n"}this.source_en=t},format(){let t="";const e=this.source.split("\n").map(t=>t.trim()).filter(t=>t);let l=!1;for(let n=0;n<e.length;n++){l=!1;const i=e[n];for(let t=0;t<this.ignore_field.length;t++){const e=this.ignore_field[t];if(i.includes(e)){l=!0;break}}l||(n===e.length-1?t+=i:t=t+i+"\n")}this.source=t},handle(){this.format(),this.output="";const t=this.source.split("\n");for(let e=0;e<t.length;e++){let l=t[e],n="s";l.includes("ll")?(l=l.substring(0,l.length-2),n="ll"):l.includes("li")?(l=l.substring(0,l.length-2),n="li"):l.includes("ls")?(l=l.substring(0,l.length-2),n="ls"):l.includes("l")?(l=l.substring(0,l.length-1),n="l"):l.includes("i")?(l=l.substring(0,l.length-1),n="i"):l.includes("s")?(l=l.substring(0,l.length-1),n="s"):l.includes("b")&&(l=l.substring(0,l.length-1),n="b");const i=l;if(l.includes(this.date_field)){const t=[i+" start",i+" end"];let l=[];null!==this.enlist&&(l=[this.enlist[e]+"StartTime",this.enlist[e]+"EndTime"]);for(let e=0;e<2;e++)null===this.enlist?this.output=this.output+this.field_default_template.replaceAll("%a",t[e]).replaceAll("%t",this.type_map.get(n))+"\n\n":this.output=this.output+this.field_default_template.replaceAll("%a",t[e]).replaceAll("%t",this.type_map.get(n)).replaceAll("%n",l[e])+"\n\n"}else if(l.includes(this.number_between_field)){const t=[i+" max",i+" min"];let l=[];null!==this.enlist&&(l=[this.enlist[e]+"Max",this.enlist[e]+"Min"]);for(let e=0;e<2;e++)null===this.enlist?this.output=this.output+this.field_default_template.replaceAll("%a",t[e]).replaceAll("%t",this.type_map.get(n))+"\n\n":this.output=this.output+this.field_default_template.replaceAll("%a",t[e]).replaceAll("%t",this.type_map.get(n)).replaceAll("%n",l[e])+"\n\n"}else null===this.enlist?this.output=this.output+this.field_default_template.replaceAll("%a",i).replaceAll("%t",this.type_map.get(n))+"\n\n":this.output=this.output+this.field_default_template.replaceAll("%a",i).replaceAll("%t",this.type_map.get(n)).replaceAll("%n",this.enlist[e])+"\n\n"}navigator.clipboard.writeText(this.output).then(()=>console.log("copied"))}}},a=l("6b0d"),c=l.n(a);const p=c()(u,[["render",o]]);e["default"]=p},ad6d:function(t,e,l){"use strict";var n=l("825a");t.exports=function(){var t=n(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e}},f5df:function(t,e,l){var n=l("00ee"),i=l("1626"),r=l("c6b6"),s=l("b622"),o=s("toStringTag"),u=Object,a="Arguments"==r(function(){return arguments}()),c=function(t,e){try{return t[e]}catch(l){}};t.exports=n?r:function(t){var e,l,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(l=c(e=u(t),o))?l:a?r(e):"Object"==(n=r(e))&&i(e.callee)?"Arguments":n}}}]);
//# sourceMappingURL=chunk-7fbbe763.1705437b.js.map