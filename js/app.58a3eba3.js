(function(e){function t(t){for(var i,c,a=t[0],l=t[1],o=t[2],b=0,d=[];b<a.length;b++)c=a[b],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);u&&u(t);while(d.length)d.shift()();return s.push.apply(s,o||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(i=!1)}i&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var i={},r={app:0},s=[];function c(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=i,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)c.d(n,i,function(t){return e[t]}.bind(null,i));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/game-foe-top-winners/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var o=0;o<a.length;o++)t(a[o]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23"),r={class:"block"},s=Object(i["g"])("h1",{class:"title"},"Point splitter for top champions!",-1),c={key:1,class:"notification is-warning is-light"},a={key:1,class:"notification is-warning is-light"},l={key:1,class:"notification is-warning is-light"};function o(e,t,n,o,u,b){var d=Object(i["k"])("TabsHeader"),p=Object(i["k"])("Participants"),O=Object(i["k"])("Tab"),j=Object(i["k"])("Winners"),m=Object(i["k"])("PointSplitter"),f=Object(i["k"])("MessageGenerator");return Object(i["h"])(),Object(i["c"])("div",r,[s,Object(i["g"])(d,{current:e.currentTab,onTabClicked:b.tabClicked,tabs:e.tabs},null,8,["current","onTabClicked","tabs"]),Object(i["g"])(O,{active:"participants"==e.currentTab},{default:Object(i["o"])((function(){return[Object(i["g"])(p,{items:e.items,"onUpdate:items":t[1]||(t[1]=function(t){return e.items=t}),onExtracted:t[2]||(t[2]=function(t){return e.currentTab="winners"})},null,8,["items"])]})),_:1},8,["active"]),Object(i["g"])(O,{active:"winners"==e.currentTab},{default:Object(i["o"])((function(){return[b.hasItems()?(Object(i["h"])(),Object(i["c"])(j,{key:0,items:e.items,numberOfMember:e.numberOfMember,total:e.total,"onUpdate:total":t[3]||(t[3]=function(t){return e.total=t}),onSplitted:b.splittedValues},null,8,["items","numberOfMember","total","onSplitted"])):(Object(i["h"])(),Object(i["c"])("div",c," Merci de choisir les participants d'abord. "))]})),_:1},8,["active"]),Object(i["g"])(O,{active:"points"==e.currentTab},{default:Object(i["o"])((function(){return[e.repartition[e.numberOfMember-1]>0?(Object(i["h"])(),Object(i["c"])(m,{key:0,numberOfMember:e.numberOfMember,winners:e.winners.winners,repartition:e.repartition,buckets:e.winners.buckets,splitter:e.winners.splitter,splitterValue:e.winners.splitterValue,onValidated:b.pointValidated},null,8,["numberOfMember","winners","repartition","buckets","splitter","splitterValue","onValidated"])):(Object(i["h"])(),Object(i["c"])("div",a," Merci de choisir les gagnants et le répartiteur. "))]})),_:1},8,["active"]),Object(i["g"])(O,{active:"messages"==e.currentTab},{default:Object(i["o"])((function(){return[e.winners&&e.winners.buckets&&e.winners.buckets.length>0?(Object(i["h"])(),Object(i["c"])(f,{key:0,buckets:e.winners.buckets,splitters:e.splitters,winners:e.winners.winners},null,8,["buckets","splitters","winners"])):(Object(i["h"])(),Object(i["c"])("div",l," Merci de choisir de répartir les points avant. "))]})),_:1},8,["active"])])}var u=n("5530"),b=(n("cb29"),n("b64b"),n("d4ec")),d=function e(t,n,i){Object(b["a"])(this,e),this.id=t,this.title=n,this.icon=i},p={class:"tabs is-centered is-boxed is-medium"},O={class:"icon is-large"},j={class:"is-hidden-touch"};function m(e,t,n,r,s,c){return Object(i["h"])(),Object(i["c"])("div",p,[Object(i["g"])("ul",null,[(Object(i["h"])(!0),Object(i["c"])(i["a"],null,Object(i["i"])(n.tabs,(function(e){return Object(i["h"])(),Object(i["c"])("li",{key:e.id,class:{"is-active":e.id==n.current},onClick:function(t){return c.clickedTab(e)}},[Object(i["g"])("a",null,[Object(i["g"])("span",O,[Object(i["g"])("span",{class:["mdi",e.icon],"aria-hidden":"true"},null,2)]),Object(i["g"])("span",j,Object(i["l"])(e.title),1)])],10,["onClick"])})),128))])])}var f={name:"TabsHeader",emits:["tab-clicked"],props:{tabs:{type:Array,validator:function(e){return e.length>0&&e.reduce((function(e,t){return e&&t instanceof d}),!0)}},current:String},methods:{clickedTab:function(e){this.$emit("tab-clicked",e)}}};f.render=m;var h=f,g={key:0,class:"tab-content"},v={class:"box"};function y(e,t,n,r,s,c){return n.active?(Object(i["h"])(),Object(i["c"])("section",g,[Object(i["g"])("div",v,[Object(i["j"])(e.$slots,"default")])])):Object(i["d"])("",!0)}var k={name:"Tab",props:{active:Boolean}};k.render=y;var w=k,V=(n("d3b7"),n("ddb0"),Object(i["g"])("h3",{class:"title is-3"},"Participants",-1)),T={class:"field"},P={class:"label"},C=Object(i["f"])(" Valeurs a répartir : "),M={class:"control"},x={class:"field"},S={class:"control"};function q(e,t,n,r,s,c){return Object(i["h"])(),Object(i["c"])("div",null,[V,Object(i["g"])("div",T,[Object(i["g"])("label",P,[C,Object(i["g"])("button",{class:"button is-warning is-small",onClick:t[1]||(t[1]=function(){return c.testValue&&c.testValue.apply(c,arguments)})},"test text")]),Object(i["g"])("div",M,[Object(i["p"])(Object(i["g"])("textarea",{class:"textarea","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.values=t}),style:{height:"100%"}},null,512),[[i["n"],e.values]])])]),Object(i["g"])("div",x,[Object(i["g"])("div",S,[Object(i["g"])("button",{class:"button is-info",onClick:t[3]||(t[3]=function(){return c.splitValues&&c.splitValues.apply(c,arguments)})},"Extraire")])])])}var A=n("b85c"),R=(n("498a"),n("ac1f"),n("1276"),n("4d63"),n("25f0"),n("4e82"),n("c1f9"),n("d81d"),n("b0c0"),function e(t,n,i){Object(b["a"])(this,e),this.name=t,this.value=n,this.isAuto=null!==i&&void 0!==i&&i}),D={name:"Participants",data:function(){return{values:""}},props:{items:Object},emits:["update:items","extracted"],methods:{splitValues:function(){if(!(this.values.trim().length<=0)){var e,t=this.values.trim().split("\n"),n=new RegExp("^(.+)\\s+([0-9]+)(\\s+\\(auto\\){1})?$"),i=[],r=Object(A["a"])(t);try{for(r.s();!(e=r.n()).done;){var s=e.value;if(!(s.trim().length<=0)){var c=n.exec(s.trim());console.log(c),c&&c[1]&&c[2]&&"total"!=c[1].trim().toLowerCase()&&i.push(new R(c[1].trim(),parseInt(c[2]),void 0!==c[3]))}}}catch(a){r.e(a)}finally{r.f()}i=i.sort((function(e,t){return t.value-e.value})),this.$emit("update:items",Object.fromEntries(i.map((function(e){return[e.name,e]})))),this.$emit("extracted")}},testValue:function(){this.values="blabla foo bar lorem ipsum : HBHJQJBQBHB\n\nQuietus 100\nHonorius   40\nD.Willy 40 (auto)\nLilliann 100   \t(auto)\nCirius 40\nJijy : 80\n\nLaure 50\nElemental 100\nKarelcote 40\nFoo 40\nBar 40\nTotal 500"}}};D.render=q;var B=D,N={class:"table-container"},E=Object(i["g"])("h3",{class:"title is-3"},"Gagants",-1),H=Object(i["g"])("h5",{class:"subtitle is-5"},"Choix des gagnants et du répartiteur",-1),L={class:"table is-stripped is-fullwidth"},U=Object(i["g"])("tr",null,[Object(i["g"])("th",null,"Nom"),Object(i["g"])("th",null,"Point"),Object(i["g"])("th",null,[Object(i["f"])("Gagnant"),Object(i["g"])("br"),Object(i["f"])("(1"),Object(i["g"])("sup",null,"er"),Object(i["f"])(", 2"),Object(i["g"])("sup",null,"ième"),Object(i["f"])(", ...)")]),Object(i["g"])("th",null,"Répartiteur")],-1),_={key:0,class:"tag is-light is-rounded is-success"},I=Object(i["g"])("span",{class:"icon is-large"},[Object(i["g"])("span",{class:"mdi mdi-autorenew","aria-hidden":"true"})],-1),G={class:"control"},$={class:"control"},J={class:"box"},F=Object(i["f"])(" Total : "),W={class:"tag is-info is-medium"},z=Object(i["g"])("span",{class:"icon"},[Object(i["g"])("i",{class:"mid mid-summit"})],-1),Q={class:"field"},K={class:"control"},X=Object(i["g"])("span",{class:"icon"},[Object(i["g"])("i",{class:"mid mid-call-split"})],-1),Y=Object(i["f"])(" Répartir ");function Z(e,t,n,r,s,c){return Object(i["h"])(),Object(i["c"])("div",N,[E,H,Object(i["g"])("table",L,[U,(Object(i["h"])(!0),Object(i["c"])(i["a"],null,Object(i["i"])(n.items,(function(r){return Object(i["h"])(),Object(i["c"])("tr",{key:r.name},[Object(i["g"])("td",null,Object(i["l"])(r.name),1),Object(i["g"])("td",null,[Object(i["f"])(Object(i["l"])(r.value)+" ",1),r.isAuto?(Object(i["h"])(),Object(i["c"])("span",_,[I])):Object(i["d"])("",!0)]),Object(i["g"])("td",null,[Object(i["g"])("div",G,[(Object(i["h"])(!0),Object(i["c"])(i["a"],null,Object(i["i"])(n.numberOfMember,(function(t){return Object(i["p"])((Object(i["h"])(),Object(i["c"])("input",{key:t,type:"radio",class:"radio",name:"winners["+(t-1)+"]",value:r.name,"onUpdate:modelValue":function(n){return e.winners[t-1]=n},disabled:!c.isPossibleWinner(t-1,r.name)},null,8,["name","value","onUpdate:modelValue","disabled"])),[[i["m"],e.winners[t-1]]])})),128))])]),Object(i["g"])("td",null,[Object(i["g"])("div",$,[Object(i["p"])(Object(i["g"])("input",{class:"radio",type:"radio",name:"splitter",value:r.name,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.splitter=t}),disabled:c.isPossibleSplitter(r.name)},null,8,["value","disabled"]),[[i["m"],e.splitter]])])])])})),128))]),Object(i["g"])("div",J,[F,Object(i["g"])("span",W,[z,Object(i["f"])(" "+Object(i["l"])(c.totalToSplit),1)])]),Object(i["g"])("div",Q,[Object(i["g"])("div",K,[Object(i["g"])("button",{class:"button is-info",onClick:t[2]||(t[2]=function(){return c.splitIntoBuckets&&c.splitIntoBuckets.apply(c,arguments)})},[X,Y])])])])}var ee=n("3835"),te=(n("a9e3"),n("7db0"),n("4fad"),n("07ac"),{name:"Winners",data:function(){return{splitter:"",winners:new Array(this.numberOfMember).fill(""),splitterValue:0}},props:{numberOfMember:Number,items:Object,total:Number},emmits:["splitted","update:total"],methods:{isPossibleSplitter:function(e){return void 0!=this.winners.find((function(t){return t==e}))},isPossibleWinner:function(e,t){if(this.splitter==t)return!1;var n,i=Object(A["a"])(this.winners.entries());try{for(i.s();!(n=i.n()).done;){var r=Object(ee["a"])(n.value,2),s=r[0],c=r[1];if(s!=e&&t==c)return!1}}catch(a){i.e(a)}finally{i.f()}return!0},splitIntoBuckets:function(){for(var e=[],t=0;t<this.numberOfMember;t++){var n=0==t?this.numberOfMember-1:t-1;e.push([this.items[this.winners[n]]])}var i=Object(u["a"])({},this.items);delete i[this.winners[0]],delete i[this.winners[1]],delete i[this.winners[2]],this.splitterValue=i[this.splitter].value,delete i[this.splitter];for(var r=Object.entries(i),s=[],c=this.numberOfMember;c>0;c--)s.push(c);s.forEach((function(t,n){while(t>0){var i=r.shift();i&&e[n].push(i[1]),t--}}));var a=0,l=null;while(void 0!=(l=r.shift()))e[a%this.numberOfMember].push(l[1]),a++;for(var o=[],b=0;b<this.numberOfMember;b++)for(var d in e[b])void 0==o[d]&&(o[d]=new Array(this.numberOfMember).fill(new R("",0,!1))),o[d][b]=e[b][d];this.$emit("update:total",this.totalToSplit),this.$emit("splitted",{splitter:this.splitter,winners:this.winners,buckets:o,splitterValue:this.splitterValue})}},computed:{totalToSplit:function(){return Object.keys(this.items).length<=0?0:Object.values(this.items).reduce((function(e,t){return parseInt(e)+t.value}),0)}}});te.render=Z;var ne=te,ie={class:"table-container"},re=Object(i["g"])("h3",{class:"title is-3"},"Répartitions",-1),se=Object(i["g"])("h5",{class:"subtitle is-5"},"Répartition des gains entre les gagnants",-1),ce={class:"table is-stripped is-fullwidth"},ae=Object(i["g"])("th",null,null,-1),le=Object(i["g"])("th",null,null,-1),oe=Object(i["g"])("th",null,"Nom",-1),ue=Object(i["g"])("th",null,"PF",-1),be=Object(i["g"])("td",null,null,-1),de=Object(i["g"])("span",{class:"icon is-large"},[Object(i["g"])("span",{class:"mdi mdi-arrow-left-thick","aria-hidden":"true"})],-1),pe={key:1,class:"tag is-light is-rounded is-success"},Oe=Object(i["g"])("span",{class:"icon is-large"},[Object(i["g"])("span",{class:"mdi mdi-autorenew","aria-hidden":"true"})],-1),je=Object(i["g"])("span",{class:"icon is-large"},[Object(i["g"])("span",{class:"mdi mdi-arrow-right-thick","aria-hidden":"true"})],-1),me=Object(i["g"])("th",null,null,-1),fe={class:"field"},he={class:"control"},ge=Object(i["g"])("span",{class:"icon"},[Object(i["g"])("i",{class:"mid mid-mark-check"})],-1),ve=Object(i["f"])(" Valider la répartition ");function ye(e,t,n,r,s,c){return Object(i["h"])(),Object(i["c"])("div",ie,[re,se,Object(i["g"])("table",ce,[Object(i["g"])("thead",null,[Object(i["g"])("tr",null,[ae,(Object(i["h"])(!0),Object(i["c"])(i["a"],null,Object(i["i"])(n.numberOfMember,(function(e){return Object(i["h"])(),Object(i["c"])("th",{key:e,colspan:"2"},Object(i["l"])(n.winners[e-1])+" ("+Object(i["l"])(n.repartition[e-1])+") ",1)})),128))]),Object(i["g"])("tr",null,[le,(Object(i["h"])(!0),Object(i["c"])(i["a"],null,Object(i["i"])(n.numberOfMember,(function(e){return Object(i["h"])(),Object(i["c"])(i["a"],{key:e},[oe,ue],64)})),128))])]),Object(i["g"])("tbody",null,[(Object(i["h"])(!0),Object(i["c"])(i["a"],null,Object(i["i"])(e.bucketValues,(function(e,t){return Object(i["h"])(),Object(i["c"])("tr",{key:t},[be,(Object(i["h"])(!0),Object(i["c"])(i["a"],null,Object(i["i"])(e,(function(e,r){return Object(i["h"])(),Object(i["c"])(i["a"],{key:r},[Object(i["g"])("td",null,[e.value>0?(Object(i["h"])(),Object(i["c"])(i["a"],{key:0},[0!=r&&0!=t?(Object(i["h"])(),Object(i["c"])("button",{key:0,class:"button","aria-label":"move to left",onClick:function(n){return c.moveToLeft(r,t,e)}},[de],8,["onClick"])):Object(i["d"])("",!0),Object(i["f"])(" "+Object(i["l"])(e.name)+" ",1),e.isAuto?(Object(i["h"])(),Object(i["c"])("span",pe,[Oe])):Object(i["d"])("",!0)],64)):Object(i["d"])("",!0)]),Object(i["g"])("td",null,[e.value>0?(Object(i["h"])(),Object(i["c"])(i["a"],{key:0},[Object(i["f"])(Object(i["l"])(e.value)+" ",1),r!=n.numberOfMember-1&&0!=t?(Object(i["h"])(),Object(i["c"])("button",{key:0,class:"button is-pulled-right","aria-label":"move to right",onClick:function(n){return c.moveToRight(r,t,e)}},[je],8,["onClick"])):Object(i["d"])("",!0)],64)):Object(i["d"])("",!0)])],64)})),128))])})),128)),Object(i["g"])("tr",null,[Object(i["g"])("td",{class:{"is-danger":c.sumOfSPlittedValues>n.splitterValue,"is-success":c.sumOfSPlittedValues==n.splitterValue}},Object(i["l"])(n.splitter)+" (reste "+Object(i["l"])(n.splitterValue-c.sumOfSPlittedValues)+" sur "+Object(i["l"])(n.splitterValue)+") ",3),(Object(i["h"])(!0),Object(i["c"])(i["a"],null,Object(i["i"])(n.numberOfMember,(function(t){return Object(i["h"])(),Object(i["c"])("td",{key:t,colspan:"2"},[Object(i["p"])(Object(i["g"])("input",{type:"number",min:"0",max:n.splitterValue-c.sumOfSPlittedValues+e.splitValues[t-1],"onUpdate:modelValue":function(n){return e.splitValues[t-1]=n}},null,8,["max","onUpdate:modelValue"]),[[i["n"],e.splitValues[t-1],void 0,{number:!0}]])])})),128))])]),Object(i["g"])("tfoot",null,[Object(i["g"])("tr",null,[me,(Object(i["h"])(!0),Object(i["c"])(i["a"],null,Object(i["i"])(n.numberOfMember,(function(t){return Object(i["h"])(),Object(i["c"])("th",{key:t,colspan:"2",class:c.classOfRepartitionBlance(t-1)},Object(i["l"])(c.sumOfRepartition[t-1]+e.splitValues[t-1])+" / "+Object(i["l"])(n.repartition[t-1])+" ("+Object(i["l"])(c.sumOfRepartition[t-1]+e.splitValues[t-1]-n.repartition[t-1])+") ",3)})),128))])])]),Object(i["g"])("div",fe,[Object(i["g"])("div",he,[Object(i["g"])("button",{class:"button is-info",onClick:t[1]||(t[1]=function(){return c.validatePoints&&c.validatePoints.apply(c,arguments)})},[ge,ve])])])])}n("a434"),n("c740");var ke={name:"PointSplitter",data:function(){return{splitValues:new Array(this.numberOfMember).fill(0),bucketValues:this.buckets}},props:{numberOfMember:Number,winners:Array,repartition:Array,buckets:Array,splitter:String,splitterValue:Number},emmits:["validated"],methods:{repartitionBalance:function(e){return this.sumOfRepartition[e]+this.splitValues[e]<this.repartition[e]?-1:this.sumOfRepartition[e]+this.splitValues[e]>this.repartition[e]?1:0},classOfRepartitionBlance:function(e){switch(this.repartitionBalance(e)){case-1:return"is-warning";case 0:return"is-success";case 1:return"is-danger"}},moveToRight:function(e,t,n){e+1>=this.numberOfMember||this.moveToDirection(e,t,n,1)},moveToLeft:function(e,t,n){e-1<0||this.moveToDirection(e,t,n,-1)},moveToDirection:function(e,t,n,i){if(this.bucketValues[t].splice(e,1,new R("",0,!1)),this.bucketValues[t+1]&&0!=this.bucketValues[t+1][e].value){for(var r=this.bucketValues.length,s=t;s<r&&this.bucketValues[s+1];s++)this.bucketValues[s][e]=this.bucketValues[s+1][e];this.bucketValues[r-1][e]=new R("",0,!1)}var c=this.bucketValues.findIndex((function(t){return 0===t[e+i].value}));-1==c&&(c=this.bucketValues.length,this.bucketValues.push(new Array(this.numberOfMember).fill(new R("",0,!1)))),this.bucketValues[c][e+i]=n},validatePoints:function(){this.$emit("validated",{buckets:this.bucketValues,splitter:[{values:this.splitValues,splitter:this.splitter}]})}},computed:{sumOfRepartition:function(){var e=new Array(this.numberOfMember).fill(0);if(this.repartition[this.numberOfMember-1]<=0)return e;var t=this.numberOfMember;return this.bucketValues.reduce((function(e,n){for(var i=0;i<t;i++)e[i]+=n[i]?n[i].value:0;return e}),e),e},sumOfSPlittedValues:function(){return this.splitValues.reduce((function(e,t){return e+t}),0)}}};ke.render=ye;var we=ke,Ve=(n("a15b"),Object(i["g"])("h3",{class:"title is-3"},"Messages",-1)),Te={class:"field"},Pe=Object(i["g"])("label",{for:"period",class:"label"},"Début de période",-1),Ce={class:"control"},Me={key:0},xe=Object(i["g"])("h5",{class:"subtitle is-5"},"Récompenses",-1),Se={class:"content"},qe={class:"content"},Ae=Object(i["f"])(" Bonsoir à tous,"),Re=Object(i["g"])("br",null,null,-1),De=Object(i["g"])("br",null,null,-1),Be=Object(i["g"])("br",null,null,-1),Ne=Object(i["g"])("br",null,null,-1),Ee=Object(i["f"])(" Merci à tous trois de lier votre GM dans ce fil (⚠ pas un gm 1.9 ⚠, pour la facilité le suivit) afin que les promesses de dons vous soient déposées."),He=Object(i["g"])("br",null,null,-1),Le=Object(i["g"])("br",null,null,-1),Ue=Object(i["g"])("br",null,null,-1),_e=Object(i["g"])("br",null,null,-1),Ie=Object(i["g"])("br",null,null,-1),Ge=Object(i["g"])("br",null,null,-1),$e=Object(i["f"])(" Ps: comme c’est un don, merci de reverser le bénéfice sur le même gm au cas où vous prenez une place à pf sur le gm. Je compte sur votre honnêteté! "),Je=Object(i["g"])("h5",{class:"subtitle is-5"},"Nouveau sujet top message",-1),Fe={class:"content"},We={class:"content"},ze=Object(i["e"])(" Suite au classement de la meilleure progression, nous récompensons le top 3 de la meilleure progression ***toutes les 2 semaines***<br> Comment ?<br> Sur ce fil, chaque 2 semaines, les promesses aux dons seront ouvertes et chaque joueur pourra écrire son nom et le nombre de PF qu’il souhaite donner. Ce don n’est absolument pas obligatoire et seuls ceux qui le souhaitent participent 😊 Mais ne sauront pris en compte comme participants que ceux participants à la cagnotte.<br> Une promesse de don = une inscription à la cagnotte, avant la clôture.<br><br> Le total de ces promesses constituera la cagnotte qui sera répartie entre les trois vainqueurs de la façon suivante :<br> P1 : 50% des dons 🎁🎁🎁<br> P2 : 30% des dons🎁🎁<br> P3 : 20% des dons🎁<br><br> Les gagnants pourront alors indiquer dans le fil sur quel GM ils souhaitent que la récompense soit déposée. Pas d’inquiétude ! pas de calcul de répartition ou de pourcentage à faire ! J’indiquerai à chacun le lundi à qui il doit donner ses PF pour que chaque gagnant touche le bon montant de la récompense 😊<br><br> Mais il est donc important d’attendre mes indications avant de déposer les PF, sinon il nous sera impossible d’obtenir la répartition 50, 30, 20 !<br><br> Il sera impossible de gagner deux fois d’affiliées :<br> Exemple:<br> si vous êtes 3ième la periode 1<br> Et 3ième la période 2.<br> Vous ne toucherez pas de récompense. Celle ci sera attribuée au 4ième.<br><br> Autre exemple:<br> Vous êtes 3ième la période 1<br> Premier la période 2<br> Vous ne toucherez pas de récompenses<br><br> Tout redevient normal en période 3, vous pouvez de nouveau gagner la récompense<br><br> Les membres du conseil de Calaadan renoncent à leur droit de gagner la cagnotte, merci à eux 😉. Les membres du conseil sont Bobbie joe, Elemental, Chokkobons, Christophe, Quiétus et Fred. ",48),Qe={class:"content"},Ke=Object(i["g"])("br",null,null,-1),Xe=Object(i["g"])("br",null,null,-1),Ye=Object(i["f"])(" Promesses de dons (Nom suivi de pf):"),Ze=Object(i["g"])("br",null,null,-1),et=Object(i["g"])("br",null,null,-1),tt=Object(i["g"])("br",null,null,-1);function nt(e,t,n,r,s,c){return Object(i["h"])(),Object(i["c"])("div",null,[Ve,Object(i["g"])("div",Te,[Pe,Object(i["g"])("div",Ce,[Object(i["p"])(Object(i["g"])("input",{type:"date",id:"period","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.period=t})},null,512),[[i["n"],e.period]])])]),""!=e.period?(Object(i["h"])(),Object(i["c"])("div",Me,[xe,Object(i["g"])("div",Se,[Object(i["g"])("blockquote",{onClick:t[2]||(t[2]=function(){return c.copyToClipboard&&c.copyToClipboard.apply(c,arguments)}),onTouchend:t[3]||(t[3]=function(){return c.copyToClipboard&&c.copyToClipboard.apply(c,arguments)})}," 🥇🥈🥉 Répartition cagnotte des gagnants ",32)]),Object(i["g"])("div",qe,[Object(i["g"])("blockquote",{onClick:t[4]||(t[4]=function(){return c.copyToClipboard&&c.copyToClipboard.apply(c,arguments)}),onTouchend:t[5]||(t[5]=function(){return c.copyToClipboard&&c.copyToClipboard.apply(c,arguments)})},[Ae,Re,Object(i["f"])(" Les attributions des dons pour les meilleurs progressions en points, sur la semaine du "+Object(i["l"])(c.startOfPeriod)+" au "+Object(i["l"])(c.endOfPeriod)+", sont les suivants :",1),De,(Object(i["h"])(!0),Object(i["c"])(i["a"],null,Object(i["i"])(n.winners,(function(e){return Object(i["h"])(),Object(i["c"])(i["a"],{key:e},[Object(i["f"])(" * "+Object(i["l"])(e),1),Be],64)})),128)),Ne,Ee,He,Le,(Object(i["h"])(!0),Object(i["c"])(i["a"],null,Object(i["i"])(n.winners,(function(t,r){return Object(i["h"])(),Object(i["c"])(i["a"],{key:r},[Object(i["f"])(Object(i["l"])(r+1)+". Doivent déposer sur le gm de "+Object(i["l"])(t)+" :",1),Ue,(Object(i["h"])(!0),Object(i["c"])(i["a"],null,Object(i["i"])(e.bucketValues[r],(function(e){return Object(i["h"])(),Object(i["c"])(i["a"],{key:e.name},[Object(i["f"])(Object(i["l"])(e.name)+" "+Object(i["l"])(e.value),1),_e],64)})),128)),Object(i["f"])(" "+Object(i["l"])(n.splitters[0].splitter)+" "+Object(i["l"])(n.splitters[0].values[r]),1),Ie,Ge],64)})),128)),$e],32)]),Je,Object(i["g"])("div",Fe,[Object(i["g"])("blockquote",{onClick:t[6]||(t[6]=function(){return c.copyToClipboard&&c.copyToClipboard.apply(c,arguments)}),onTouchend:t[7]||(t[7]=function(){return c.copyToClipboard&&c.copyToClipboard.apply(c,arguments)})}," 🥇 Cagnotte du "+Object(i["l"])(c.startOfNextPeriod)+" au "+Object(i["l"])(c.endOfNextPeriod),33)]),Object(i["g"])("div",We,[Object(i["g"])("blockquote",{onClick:t[8]||(t[8]=function(){return c.copyToClipboard&&c.copyToClipboard.apply(c,arguments)}),onTouchend:t[9]||(t[9]=function(){return c.copyToClipboard&&c.copyToClipboard.apply(c,arguments)})},[ze],32)]),Object(i["g"])("div",Qe,[Object(i["g"])("blockquote",{onClick:t[10]||(t[10]=function(){return c.copyToClipboard&&c.copyToClipboard.apply(c,arguments)}),onTouchend:t[11]||(t[11]=function(){return c.copyToClipboard&&c.copyToClipboard.apply(c,arguments)})},[Object(i["f"])(" Cagnotte de la période du "+Object(i["l"])(c.startOfNextPeriod)+" au "+Object(i["l"])(c.endOfNextPeriod)+" (cette semaine "+Object(i["l"])(n.winners.join(", "))+" ne sont pas éligibles aux gains mais rien ne vous empêche d'être dans le top 3 quand même ;))",1),Ke,Xe,Ye,Ze,(Object(i["h"])(!0),Object(i["c"])(i["a"],null,Object(i["i"])(e.autoParticipants,(function(e){return Object(i["h"])(),Object(i["c"])(i["a"],{key:e.name},[Object(i["f"])(Object(i["l"])(e.name)+" "+Object(i["l"])(e.value)+" (auto)",1),et],64)})),128)),tt,Object(i["f"])(" Total "+Object(i["l"])(e.sumAutoParticipants),1)],32)])])):Object(i["d"])("",!0)])}n("466d");var it={name:"MessageGenerator",data:function(){return{period:"",bucketValues:[],autoParticipants:[],sumAutoParticipants:0}},mounted:function(){var e,t=[],n=[],i=Object(A["a"])(this.buckets);try{for(i.s();!(e=i.n()).done;){var r=e.value;for(var s in r){var c=r[s];c.value>0&&(t[s]||(t[s]=[]),t[s].push(Object(u["a"])({},c)),c.isAuto&&n.push(c))}}}catch(a){i.e(a)}finally{i.f()}this.autoParticipants=n,this.sumAutoParticipants=n.reduce((function(e,t){return e+t.value}),0),this.bucketValues=t},props:{winners:Array,buckets:Array,splitters:Object},methods:{copyToClipboard:function(e){var t=e.target;if(document.body.createTextRange){var n=document.body.createTextRange();n.moveToElementText(t),n.select()}else if(window.getSelection){var i=window.getSelection(),r=document.createRange();r.selectNodeContents(t),i.removeAllRanges(),i.addRange(r)}document.execCommand("copy")}},computed:{startOfPeriod:function(){if("string"==typeof this.period){var e=this.period.match("([0-9]+)-([0-9]+)-([0-9]+)");return e[3]+"/"+e[2]}return this.period.getDate()+"/"+(this.period.getMonth()+1)},endOfPeriod:function(){var e="string"==typeof this.period?new Date(this.period):this.period;return e.setDate(e.getDate()+13),e.setHours(12),e.getDate()+"/"+(e.getMonth()+1)},startOfNextPeriod:function(){var e="string"==typeof this.period?new Date(this.period):this.period;return e.setDate(e.getDate()+14),e.setHours(12),e.getDate()+"/"+(e.getMonth()+1)},endOfNextPeriod:function(){var e="string"==typeof this.period?new Date(this.period):this.period;return e.setDate(e.getDate()+14+13),e.setHours(12),e.getDate()+"/"+(e.getMonth()+1)}}};it.render=nt;var rt=it,st={name:"App",data:function(){return{tabs:[new d("participants","Participants","mdi-account-multiple"),new d("winners","Gagnants","mdi-shield-account-outline"),new d("points","Répartitions","mdi-account-switch"),new d("messages","Messages","mdi-message-bookmark-outline")],currentTab:"participants",items:{},numberOfMember:3,total:0,repartition:new Array(this.numberOfMember).fill(0),winners:{},splitters:{}}},methods:{tabClicked:function(e){this.currentTab=e.id},hasItems:function(){return Object.keys(this.items).length>0},splittedValues:function(e){this.repartition=[.5*this.total,.3*this.total,.2*this.total],this.winners=Object(u["a"])({},e),this.currentTab="points"},pointValidated:function(e){this.currentTab="messages",this.splitters=e.splitter,this.winners.buckets=e.buckets}},components:{TabsHeader:h,Tab:w,Participants:B,Winners:ne,PointSplitter:we,MessageGenerator:rt}};st.render=o;var ct=st,at=Object(i["b"])(ct);at.mount("#app"),n("5363"),n("fc04")},fc04:function(e,t,n){}});
//# sourceMappingURL=app.58a3eba3.js.map