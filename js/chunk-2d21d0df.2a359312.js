(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21d0df"],{d052:function(e,a,t){"use strict";t.r(a);var s=t("7a23");function l(e,a,t,l,n,c){const r=Object(s["v"])("router-link");return Object(s["q"])(),Object(s["e"])("div",null,[a[7]||(a[7]=Object(s["f"])("p",null,"Generate Java POJO File From Json",-1)),Object(s["f"])("p",null,[Object(s["h"])(r,{to:"/"},{default:Object(s["D"])(()=>a[6]||(a[6]=[Object(s["g"])("back to the contents")])),_:1})]),Object(s["E"])(Object(s["f"])("input",{"onUpdate:modelValue":a[0]||(a[0]=e=>n.class_name=e)},null,512),[[s["B"],n.class_name]]),a[8]||(a[8]=Object(s["f"])("br",null,null,-1)),Object(s["f"])("div",null,[Object(s["E"])(Object(s["f"])("textarea",{"onUpdate:modelValue":a[1]||(a[1]=e=>n.json_schema=e),id:"json_schema",rows:"30",cols:"50",placeholder:"json schema area"},null,512),[[s["B"],n.json_schema]]),Object(s["E"])(Object(s["f"])("textarea",{"onUpdate:modelValue":a[2]||(a[2]=e=>n.java_schema=e),id:"java_schema",rows:"30",cols:"50",placeholder:"java schema area",readonly:""},null,512),[[s["B"],n.java_schema]])]),a[9]||(a[9]=Object(s["f"])("br",null,null,-1)),Object(s["f"])("div",null,[Object(s["f"])("button",{onClick:a[3]||(a[3]=e=>c.format())},"format"),Object(s["f"])("button",{onClick:a[4]||(a[4]=e=>c.generate())},"generate"),Object(s["f"])("button",{onClick:a[5]||(a[5]=e=>c.clean())},"clean")])])}t("14d9");const n="private",c="Integer",r="Double",o="Boolean",i="String",h="Object",p="List",u="Map",b="Dto",f="public class %0% {",d=";",j="\n}",m="    ",g="\n\n",y=" ",O=/^(([a-z]+[0-9]+)|([0-9]+[a-z]+))[a-z0-9]*$/i;let k,v;const _=0;var T={name:"GenerateJavaPojoView",data(){return{json_schema:"",java_schema:"",class_name:"Root"}},methods:{clean(){this.java_schema="",this.json_schema=""},format(){try{const e=this.json_schema;this.json_schema=JSON.stringify(JSON.parse(e),null,4)}catch(e){console.log(e),alert("illegal json schema")}},replace_placeholder(e,a){if(1===arguments.length)return arguments[0];const t=arguments[1];let s=arguments[0];if("object"===typeof t)for(const l in t)s=s.replace(new RegExp("\\%"+l+"\\%","g"),t[l]);else for(let l=1;l<arguments.length;l++)s=s.replace(new RegExp("\\%"+(l-1)+"\\%","g"),arguments[l]);return s},generate(){try{const e=this.json_schema,a=JSON.parse(e);k=[],v={};const t=this.getJavaClassType(a);k.push({className:this.class_name,obj:a,type:t});let s,l="";while(k.length>0)s=this.packageJavaObject(k.pop()),null!=s&&(l=l+s+g);this.java_schema=this.replaceTempSymbol(l)}catch(e){console.log(e),alert("illegal json schema")}},replaceTempSymbol(e){while(e.includes("%"))e=this.replace_placeholder(e,v);return e},packageTypeInfo(e,a,t){switch(t){case b:case u:case p:return this.createTypePlaceholder(e+a+t);default:return t}},getJavaClassType(e){if("string"===typeof e)return i;if("boolean"===typeof e)return o;if("number"===typeof e)return e.toString().includes(".")?r:c;if(e instanceof Array)return p;if(null==e||0===Object.keys(e).length)return h;{let a=!1;for(const t in e){if(!isNaN(Number(t))){a=!0;break}if(O.test(t)){a=!0;break}}return a?u:b}},createTypePlaceholder(e){return"%"+e+"%"},pushHandleInfo(e,a,t){k.push({className:e,obj:a,type:t})},upperCaseFristElement(e){return e.substring(0,1).toUpperCase()+e.substring(1)},createClassName(e,a){return 0===a?e+"Item":this.upperCaseFristElement(a)},packageMapTypePlaceholder(e){return"Map<String, "+e+">"},packageListTypePlaceholder(e){return"List<"+e+">"},analysisFieldInfo(e,a,t,s,l){let n,c,r,o,i;switch(s){case b:n=this.createClassName(e,t)+s,v[e+t+s]=n,this.pushHandleInfo(n,a[t],s);break;case u:n=this.createClassName(e,t)+s,c=a[t],o=Object.keys(c)[0],i=this.getJavaClassType(c[o]),v[e+t+s]=this.packageMapTypePlaceholder(this.createTypePlaceholder(n+o+i)),this.pushHandleInfo(n,c,s);break;case p:n=this.createClassName(e,t)+s,r=a[t],i=this.getJavaClassType(r[_]),v[e+t+s]=this.packageListTypePlaceholder(this.createTypePlaceholder(n+_+i)),this.pushHandleInfo(n,r,s);break;default:l!==u&&l!==p||(v[e+t+s]=s);break}},packageJavaObject({className:e,obj:a,type:t}){let s,l,c,r=this.replace_placeholder(f,e);switch(t){case b:for(const l in a)s=this.getJavaClassType(a[l]),r=r+g+m+n+y+this.packageTypeInfo(e,l,s)+y+l+d,this.analysisFieldInfo(e,a,l,s,t);return r+j;case u:return l=Object.keys(a)[0],c=this.getJavaClassType(a[l]),this.analysisFieldInfo(e,a,l,c,t),null;case p:return c=this.getJavaClassType(a[_]),this.analysisFieldInfo(e,a,_,c,t),null}}}},J=t("6b0d"),C=t.n(J);const w=C()(T,[["render",l]]);a["default"]=w}}]);