(function(e){function t(t){for(var i,a,c=t[0],l=t[1],u=t[2],b=0,d=[];b<c.length;b++)a=c[b],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);o&&o(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,c=1;c<n.length;c++){var l=n[c];0!==s[l]&&(i=!1)}i&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},s={app:0},r=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var o=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23"),s={class:"block"},r=Object(i["f"])("h1",{class:"title"},"Point splitter for top champions!",-1),a={key:1,class:"notification is-warning is-light"},c={key:1,class:"notification is-warning is-light"};function l(e,t,n,l,u,o){var b=Object(i["j"])("TabsHeader"),d=Object(i["j"])("Participants"),p=Object(i["j"])("Tab"),f=Object(i["j"])("Winners"),O=Object(i["j"])("PointSplitter"),m=Object(i["j"])("MessageGenerator");return Object(i["g"])(),Object(i["c"])("div",s,[r,Object(i["f"])(b,{current:e.currentTab,onTabClicked:o.tabClicked,tabs:e.tabs},null,8,["current","onTabClicked","tabs"]),Object(i["f"])(p,{active:"participants"==e.currentTab},{default:Object(i["n"])((function(){return[Object(i["f"])(d,{items:e.items,"onUpdate:items":t[1]||(t[1]=function(t){return e.items=t}),onExtracted:t[2]||(t[2]=function(t){return e.currentTab="winners"})},null,8,["items"])]})),_:1},8,["active"]),Object(i["f"])(p,{active:"winners"==e.currentTab},{default:Object(i["n"])((function(){return[o.hasItems()?(Object(i["g"])(),Object(i["c"])(f,{key:0,items:e.items,numberOfMember:e.numberOfMember,total:e.total,"onUpdate:total":t[3]||(t[3]=function(t){return e.total=t}),onSplitted:o.splittedValues},null,8,["items","numberOfMember","total","onSplitted"])):(Object(i["g"])(),Object(i["c"])("div",a," Merci de choisir les participants d'abord. "))]})),_:1},8,["active"]),Object(i["f"])(p,{active:"points"==e.currentTab},{default:Object(i["n"])((function(){return[e.repartition[e.numberOfMember-1]>0?(Object(i["g"])(),Object(i["c"])(O,{key:0,numberOfMember:e.numberOfMember,winners:e.winners.winners,repartition:e.repartition,buckets:e.winners.buckets,splitter:e.winners.splitter,splitterValue:e.winners.splitterValue,onValidated:o.pointValidated},null,8,["numberOfMember","winners","repartition","buckets","splitter","splitterValue","onValidated"])):(Object(i["g"])(),Object(i["c"])("div",c," Merci de choisir les gagnants et le répartiteur. "))]})),_:1},8,["active"]),Object(i["f"])(p,{active:"messages"==e.currentTab},{default:Object(i["n"])((function(){return[Object(i["f"])(m,{buckets:e.winners.buckets,splitters:e.splitters,winners:e.winners.winners},null,8,["buckets","splitters","winners"])]})),_:1},8,["active"])])}var u=n("5530"),o=(n("cb29"),n("b64b"),n("d4ec")),b=function e(t,n,i){Object(o["a"])(this,e),this.id=t,this.title=n,this.icon=i},d={class:"tabs is-centered is-boxed is-medium"},p={class:"icon is-large"};function f(e,t,n,s,r,a){return Object(i["g"])(),Object(i["c"])("div",d,[Object(i["f"])("ul",null,[(Object(i["g"])(!0),Object(i["c"])(i["a"],null,Object(i["h"])(n.tabs,(function(e){return Object(i["g"])(),Object(i["c"])("li",{key:e.id,class:{"is-active":e.id==n.current},onClick:function(t){return a.clickedTab(e)}},[Object(i["f"])("a",null,[Object(i["f"])("span",p,[Object(i["f"])("span",{class:["mdi",e.icon],"aria-hidden":"true"},null,2)]),Object(i["e"])(" "+Object(i["k"])(e.title),1)])],10,["onClick"])})),128))])])}var O={name:"TabsHeader",emits:["tab-clicked"],props:{tabs:{type:Array,validator:function(e){return e.length>0&&e.reduce((function(e,t){return e&&t instanceof b}),!0)}},current:String},methods:{clickedTab:function(e){this.$emit("tab-clicked",e)}}};O.render=f;var m=O,j={key:0,class:"tab-content"},h={class:"box"};function v(e,t,n,s,r,a){return n.active?(Object(i["g"])(),Object(i["c"])("section",j,[Object(i["f"])("div",h,[Object(i["i"])(e.$slots,"default")])])):Object(i["d"])("",!0)}var g={name:"Tab",props:{active:Boolean}};g.render=v;var k=g,y=(n("d3b7"),n("ddb0"),Object(i["f"])("h3",{class:"title is-3"},"Participants",-1)),w={class:"field"},V=Object(i["f"])("label",{class:"label"}," Valeurs a répartir : ",-1),M={class:"control"},P={class:"field"},T={class:"control"};function x(e,t,n,s,r,a){return Object(i["g"])(),Object(i["c"])("div",null,[y,Object(i["f"])("div",w,[V,Object(i["f"])("div",M,[Object(i["o"])(Object(i["f"])("textarea",{class:"textarea","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.values=t}),style:{height:"100%"}},null,512),[[i["m"],e.values]])])]),Object(i["f"])("div",P,[Object(i["f"])("div",T,[Object(i["f"])("button",{class:"button is-info",onClick:t[2]||(t[2]=function(){return a.splitValues&&a.splitValues.apply(a,arguments)})},"Extraire")])])])}var C=n("b85c"),S=(n("498a"),n("ac1f"),n("1276"),n("4d63"),n("25f0"),n("4e82"),n("c1f9"),n("d81d"),n("b0c0"),{name:"Participants",data:function(){return{values:"Quietus 100\nHonorius   40\nD.Willy 40\nLilliann 100\nCirius 40\nJijy 80\n\nLaure 50\nElemental 100\nKarelcote 40\n"}},props:{items:Object},emits:["update:items","extracted"],methods:{splitValues:function(){if(!(this.values.trim().length<=0)){var e,t=this.values.trim().split("\n"),n=new RegExp("^(.+)\\s+([0-9]+)$"),i=[],s=Object(C["a"])(t);try{for(s.s();!(e=s.n()).done;){var r=e.value;if(!(r.trim().length<=0)){var a=n.exec(r.trim());a[1]&&a[2]&&i.push({name:a[1].trim(),value:parseInt(a[2])})}}}catch(c){s.e(c)}finally{s.f()}i=i.sort((function(e,t){return t.value-e.value})),this.$emit("update:items",Object.fromEntries(i.map((function(e){return[e.name,e]})))),this.$emit("extracted")}}}});S.render=x;var R=S,D={class:"table-container"},q=Object(i["f"])("h3",{class:"title is-3"},"Gagants",-1),A=Object(i["f"])("h5",{class:"subtitle is-5"},"Choix des gagnants et du répartiteur",-1),N={class:"table is-stripped is-fullwidth"},B=Object(i["f"])("tr",null,[Object(i["f"])("th",null,"Nom"),Object(i["f"])("th",null,"Point"),Object(i["f"])("th",null,[Object(i["e"])("Gagnant"),Object(i["f"])("br"),Object(i["e"])("(1"),Object(i["f"])("sup",null,"er"),Object(i["e"])(", 2"),Object(i["f"])("sup",null,"ième"),Object(i["e"])(", ...)")]),Object(i["f"])("th",null,"Répartiteur")],-1),E={class:"control"},L={class:"control"},U={class:"box"},_=Object(i["e"])(" Total : "),I={class:"tag is-info is-medium"},G=Object(i["f"])("span",{class:"icon"},[Object(i["f"])("i",{class:"mid mid-summit"})],-1),$={class:"field"},W={class:"control"},F=Object(i["f"])("span",{class:"icon"},[Object(i["f"])("i",{class:"mid mid-call-split"})],-1),J=Object(i["e"])(" Répartir ");function z(e,t,n,s,r,a){return Object(i["g"])(),Object(i["c"])("div",D,[q,A,Object(i["f"])("table",N,[B,(Object(i["g"])(!0),Object(i["c"])(i["a"],null,Object(i["h"])(n.items,(function(s){return Object(i["g"])(),Object(i["c"])("tr",{key:s.name},[Object(i["f"])("td",null,Object(i["k"])(s.name),1),Object(i["f"])("td",null,Object(i["k"])(s.value),1),Object(i["f"])("td",null,[Object(i["f"])("div",E,[(Object(i["g"])(!0),Object(i["c"])(i["a"],null,Object(i["h"])(n.numberOfMember,(function(t){return Object(i["o"])((Object(i["g"])(),Object(i["c"])("input",{key:t,type:"radio",class:"radio",name:"winners["+(t-1)+"]",value:s.name,"onUpdate:modelValue":function(n){return e.winners[t-1]=n},disabled:!a.isPossibleWinner(t-1,s.name)},null,8,["name","value","onUpdate:modelValue","disabled"])),[[i["l"],e.winners[t-1]]])})),128))])]),Object(i["f"])("td",null,[Object(i["f"])("div",L,[Object(i["o"])(Object(i["f"])("input",{class:"radio",type:"radio",name:"splitter",value:s.name,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.splitter=t}),disabled:a.isPossibleSplitter(s.name)},null,8,["value","disabled"]),[[i["l"],e.splitter]])])])])})),128))]),Object(i["f"])("div",U,[_,Object(i["f"])("span",I,[G,Object(i["e"])(" "+Object(i["k"])(a.totalToSplit),1)])]),Object(i["f"])("div",$,[Object(i["f"])("div",W,[Object(i["f"])("button",{class:"button is-info",onClick:t[2]||(t[2]=function(){return a.splitIntoBuckets&&a.splitIntoBuckets.apply(a,arguments)})},[F,J])])])])}var H=n("3835"),Q=(n("a9e3"),n("7db0"),n("4fad"),n("07ac"),{name:"Winners",data:function(){return{splitter:"",winners:new Array(this.numberOfMember).fill(""),splitterValue:0}},props:{numberOfMember:Number,items:Object,total:Number},emmits:["splitted","update:total"],methods:{isPossibleSplitter:function(e){return void 0!=this.winners.find((function(t){return t==e}))},isPossibleWinner:function(e,t){if(this.splitter==t)return!1;var n,i=Object(C["a"])(this.winners.entries());try{for(i.s();!(n=i.n()).done;){var s=Object(H["a"])(n.value,2),r=s[0],a=s[1];if(r!=e&&t==a)return!1}}catch(c){i.e(c)}finally{i.f()}return!0},splitIntoBuckets:function(){for(var e=[],t=0;t<this.numberOfMember;t++){var n=0==t?this.numberOfMember-1:t-1;e.push([this.items[this.winners[n]]])}var i=Object(u["a"])({},this.items);delete i[this.winners[0]],delete i[this.winners[1]],delete i[this.winners[2]],this.splitterValue=i[this.splitter].value,delete i[this.splitter];for(var s=Object.entries(i),r=[],a=this.numberOfMember;a>0;a--)r.push(a);r.forEach((function(t,n){while(t>0){var i=s.shift();i&&e[n].push(i[1]),t--}}));var c=0,l=null;while(void 0!=(l=s.shift()))e[c%this.numberOfMember].push(l[1]),c++;for(var o=[],b=0;b<this.numberOfMember;b++)for(var d in e[b])void 0==o[d]&&(o[d]=new Array(this.numberOfMember).fill({name:"",value:0})),o[d][b]=e[b][d];this.$emit("update:total",this.totalToSplit),this.$emit("splitted",{splitter:this.splitter,winners:this.winners,buckets:o,splitterValue:this.splitterValue})}},computed:{totalToSplit:function(){return Object.keys(this.items).length<=0?0:Object.values(this.items).reduce((function(e,t){return parseInt(e)+t.value}),0)}}});Q.render=z;var K=Q,X={class:"table-container"},Y=Object(i["f"])("h3",{class:"title is-3"},"Répartitions",-1),Z=Object(i["f"])("h5",{class:"subtitle is-5"},"Répartition des gains entre les gagnants",-1),ee={class:"table is-stripped is-fullwidth"},te=Object(i["f"])("th",null,null,-1),ne=Object(i["f"])("th",null,null,-1),ie=Object(i["f"])("th",null,"Nom",-1),se=Object(i["f"])("th",null,"PF",-1),re=Object(i["f"])("td",null,null,-1),ae=Object(i["f"])("span",{class:"icon is-large"},[Object(i["f"])("span",{class:"mdi mdi-arrow-left-thick","aria-hidden":"true"})],-1),ce=Object(i["f"])("span",{class:"icon is-large"},[Object(i["f"])("span",{class:"mdi mdi-arrow-right-thick","aria-hidden":"true"})],-1),le=Object(i["f"])("th",null,null,-1),ue={class:"field"},oe={class:"control"},be=Object(i["f"])("span",{class:"icon"},[Object(i["f"])("i",{class:"mid mid-mark-check"})],-1),de=Object(i["e"])(" Valider la répartition ");function pe(e,t,n,s,r,a){return Object(i["g"])(),Object(i["c"])("div",X,[Y,Z,Object(i["f"])("table",ee,[Object(i["f"])("thead",null,[Object(i["f"])("tr",null,[te,(Object(i["g"])(!0),Object(i["c"])(i["a"],null,Object(i["h"])(n.numberOfMember,(function(e){return Object(i["g"])(),Object(i["c"])("th",{key:e,colspan:"2"},Object(i["k"])(n.winners[e-1])+" ("+Object(i["k"])(n.repartition[e-1])+") ",1)})),128))]),Object(i["f"])("tr",null,[ne,(Object(i["g"])(!0),Object(i["c"])(i["a"],null,Object(i["h"])(n.numberOfMember,(function(e){return Object(i["g"])(),Object(i["c"])(i["a"],{key:e},[ie,se],64)})),128))])]),Object(i["f"])("tbody",null,[(Object(i["g"])(!0),Object(i["c"])(i["a"],null,Object(i["h"])(e.bucketValues,(function(e,t){return Object(i["g"])(),Object(i["c"])("tr",{key:t},[re,(Object(i["g"])(!0),Object(i["c"])(i["a"],null,Object(i["h"])(e,(function(e,s){return Object(i["g"])(),Object(i["c"])(i["a"],{key:s},[Object(i["f"])("td",null,[e.value>0?(Object(i["g"])(),Object(i["c"])(i["a"],{key:0},[0!=s&&0!=t?(Object(i["g"])(),Object(i["c"])("button",{key:0,class:"button","aria-label":"move to left",onClick:function(n){return a.moveToLeft(s,t,e)}},[ae],8,["onClick"])):Object(i["d"])("",!0),Object(i["e"])(" "+Object(i["k"])(e.name),1)],64)):Object(i["d"])("",!0)]),Object(i["f"])("td",null,[e.value>0?(Object(i["g"])(),Object(i["c"])(i["a"],{key:0},[Object(i["e"])(Object(i["k"])(e.value)+" ",1),s!=n.numberOfMember-1&&0!=t?(Object(i["g"])(),Object(i["c"])("button",{key:0,class:"button is-pulled-right","aria-label":"move to right",onClick:function(n){return a.moveToRight(s,t,e)}},[ce],8,["onClick"])):Object(i["d"])("",!0)],64)):Object(i["d"])("",!0)])],64)})),128))])})),128)),Object(i["f"])("tr",null,[Object(i["f"])("td",{class:{"is-danger":a.sumOfSPlittedValues>n.splitterValue,"is-success":a.sumOfSPlittedValues==n.splitterValue}},Object(i["k"])(n.splitter)+" (reste "+Object(i["k"])(n.splitterValue-a.sumOfSPlittedValues)+" sur "+Object(i["k"])(n.splitterValue)+") ",3),(Object(i["g"])(!0),Object(i["c"])(i["a"],null,Object(i["h"])(n.numberOfMember,(function(t){return Object(i["g"])(),Object(i["c"])("td",{key:t,colspan:"2"},[Object(i["o"])(Object(i["f"])("input",{type:"number",min:"0",max:n.splitterValue-a.sumOfSPlittedValues+e.splitValues[t-1],"onUpdate:modelValue":function(n){return e.splitValues[t-1]=n}},null,8,["max","onUpdate:modelValue"]),[[i["m"],e.splitValues[t-1],void 0,{number:!0}]])])})),128))])]),Object(i["f"])("tfoot",null,[Object(i["f"])("tr",null,[le,(Object(i["g"])(!0),Object(i["c"])(i["a"],null,Object(i["h"])(n.numberOfMember,(function(t){return Object(i["g"])(),Object(i["c"])("th",{key:t,colspan:"2",class:a.classOfRepartitionBlance(t-1)},Object(i["k"])(a.sumOfRepartition[t-1]+e.splitValues[t-1])+" / "+Object(i["k"])(n.repartition[t-1])+" ("+Object(i["k"])(a.sumOfRepartition[t-1]+e.splitValues[t-1]-n.repartition[t-1])+") ",3)})),128))])])]),Object(i["f"])("div",ue,[Object(i["f"])("div",oe,[Object(i["f"])("button",{class:"button is-info",onClick:t[1]||(t[1]=function(){return a.validatePoints&&a.validatePoints.apply(a,arguments)})},[be,de])])])])}n("a434"),n("c740");var fe={name:"PointSplitter",data:function(){return{splitValues:new Array(this.numberOfMember).fill(0),bucketValues:this.buckets}},props:{numberOfMember:Number,winners:Array,repartition:Array,buckets:Array,splitter:String,splitterValue:Number},emmits:["validated"],methods:{repartitionBalance:function(e){return this.sumOfRepartition[e]+this.splitValues[e]<this.repartition[e]?-1:this.sumOfRepartition[e]+this.splitValues[e]>this.repartition[e]?1:0},classOfRepartitionBlance:function(e){switch(this.repartitionBalance(e)){case-1:return"is-warning";case 0:return"is-success";case 1:return"is-danger"}},moveToRight:function(e,t,n){e+1>=this.numberOfMember||this.moveToDirection(e,t,n,1)},moveToLeft:function(e,t,n){e-1<0||this.moveToDirection(e,t,n,-1)},moveToDirection:function(e,t,n,i){var s={name:"",value:0};if(this.bucketValues[t].splice(e,1,s),this.bucketValues[t+1]&&0!=this.bucketValues[t+1][e].value){for(var r=this.bucketValues.length,a=t;a<r&&this.bucketValues[a+1];a++)this.bucketValues[a][e]=this.bucketValues[a+1][e];this.bucketValues[r-1][e]=s}var c=this.bucketValues.findIndex((function(t){return 0===t[e+i].value}));-1==c&&(c=this.bucketValues.length,this.bucketValues.push(new Array(this.numberOfMember).fill(s))),this.bucketValues[c][e+i]=n},validatePoints:function(){this.$emit("validated",{buckets:this.bucketValues,splitter:[{values:this.splitValues,splitter:this.splitter}]})}},computed:{sumOfRepartition:function(){var e=new Array(this.numberOfMember).fill(0);if(this.repartition[this.numberOfMember-1]<=0)return e;var t=this.numberOfMember;return this.bucketValues.reduce((function(e,n){for(var i=0;i<t;i++)e[i]+=n[i]?n[i].value:0;return e}),e),e},sumOfSPlittedValues:function(){return this.splitValues.reduce((function(e,t){return e+t}),0)}}};fe.render=pe;var Oe=fe,me=(n("a15b"),Object(i["f"])("h3",{class:"title is-3"},"Messages",-1)),je={class:"field"},he=Object(i["f"])("label",{for:"period",class:"label"},"Début de période",-1),ve={class:"control"},ge={key:0},ke=Object(i["f"])("h5",{class:"subtitle is-5"},"Récompenses",-1),ye=Object(i["e"])("\n\nMerci à tous trois de lier votre GM dans ce fil (⚠ pas un gm 1.9 ⚠, pour la facilité le suivit) afin que les promesses de dons vous soient déposées. Les gens vont quitter le fil comme on fait pour les bb gm.\n\n"),we=Object(i["e"])("\n\nPs: comme c’est un don, merci de reverser le bénéfice sur le même gm au cas où vous prenez une place à pf sur le gm. Je compte sur votre honnêteté!\n      "),Ve=Object(i["f"])("h5",{class:"subtitle is-5"},"Nouveau sujet top message",-1);function Me(e,t,n,s,r,a){return Object(i["g"])(),Object(i["c"])("div",null,[me,Object(i["f"])("div",je,[he,Object(i["f"])("div",ve,[Object(i["o"])(Object(i["f"])("input",{type:"date",id:"period","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.period=t})},null,512),[[i["m"],e.period]])])]),""!=e.period?(Object(i["g"])(),Object(i["c"])("div",ge,[ke,Object(i["f"])("pre",{class:"content",onClick:t[2]||(t[2]=function(){return a.copyToClipboard&&a.copyToClipboard.apply(a,arguments)})},[Object(i["e"])("Bonsoir à tous, \nLes attributions des dons pour les meilleurs progressions en points, sur la semaine du "+Object(i["k"])(a.startOfPeriod)+" au "+Object(i["k"])(a.endOfPeriod)+", sont les suivants :\n",1),(Object(i["g"])(!0),Object(i["c"])(i["a"],null,Object(i["h"])(n.winners,(function(e){return Object(i["g"])(),Object(i["c"])(i["a"],{key:e},[Object(i["e"])("\n  * "+Object(i["k"])(e)+"\n",1)],64)})),128)),ye,(Object(i["g"])(!0),Object(i["c"])(i["a"],null,Object(i["h"])(n.winners,(function(t,s){return Object(i["g"])(),Object(i["c"])(i["a"],{key:s},[Object(i["e"])("\n  "+Object(i["k"])(s)+". Doivent déposer sur le gm de "+Object(i["k"])(t)+" :\n  ",1),(Object(i["g"])(!0),Object(i["c"])(i["a"],null,Object(i["h"])(e.bucketValues[s],(function(e){return Object(i["g"])(),Object(i["c"])(i["a"],{key:e.name},[Object(i["e"])("\n    "+Object(i["k"])(e.name)+" "+Object(i["k"])(e.value)+"\n  ",1)],64)})),128)),Object(i["e"])("\n    "+Object(i["k"])(n.splitters[0].splitter)+" "+Object(i["k"])(n.splitters[0].values[s])+"\n",1)],64)})),128)),we]),Ve,Object(i["f"])("pre",{class:"content",onClick:t[3]||(t[3]=function(){return a.copyToClipboard&&a.copyToClipboard.apply(a,arguments)})},"Suite au classement de la meilleure progression, nous récompensons le top 3 de la meilleure progression ***toutes les 2 semaines***\nComment ?\nSur ce fil, chaque 2 semaines, les promesses aux dons seront ouvertes et chaque joueur pourra écrire son nom et le nombre de PF qu’il souhaite donner.  Ce don n’est absolument pas obligatoire et seuls ceux qui le souhaitent participent 😊 Mais ne sauront pris en compte comme participants que ceux participants à la cagnotte.\nUne promesse de don = une inscription à la cagnotte    \n\nLe total de ces promesses constituera la cagnotte qui sera répartie entre les trois vainqueurs de la façon suivante :  \nP1 : 50% des dons 🎁🎁🎁   \nP2 : 30% des dons🎁🎁   \nP3 : 20% des dons🎁      \n\nLes gagnants pourront alors indiquer dans le fil sur quel GM ils souhaitent que la récompense soit déposée. Pas d’inquiétude ! pas de calcul de répartition ou de pourcentage à faire ! J’indiquerai à chacun le lundi à qui il doit donner ses PF pour que chaque gagnant touche le bon montant de la récompense 😊       \n\nMais il est donc important d’attendre mes indications avant de déposer les PF, sinon il nous sera impossible d’obtenir la répartition 50, 30, 20 !      \n\nIl sera impossible de gagner deux fois d’affiliées :     \nExemple:\nsi vous êtes 3ième la periode 1\nEt 3ième la période 2.\nVous ne toucherez pas de récompense. Celle ci sera attribuée au 4ième.\n\nAutre exemple:   \nVous êtes 3ième la période 1   \nPremier la période 2   \nVous ne toucherez pas de récompenses   \n\nTout redevient normal en période 3, vous pouvez de nouveau gagner la récompense\n\nLes membres du conseil de Calaadan renoncent à leur droit de gagner la cagnotte, merci à eux 😉. Les membres du conseil sont Bobbie joe, Elemental, Chokkobons, Christophe, Quiétus et Fred.\n      "),Object(i["f"])("pre",{class:"content",onClick:t[4]||(t[4]=function(){return a.copyToClipboard&&a.copyToClipboard.apply(a,arguments)})},"Cagnotte de la période du "+Object(i["k"])(a.startOfNextPeriod)+" au "+Object(i["k"])(a.endOfNextPeriod)+" (cette semaine "+Object(i["k"])(n.winners.join(", "))+" ne sont pas éligibles aux gains mais rien ne vous empêche d'être dans le top 3 quand même ;))\n\nPromesses de dons (Nom suivi de pf):\nTotal 0\n      ",1)])):Object(i["d"])("",!0)])}n("466d");var Pe={name:"MessageGenerator",data:function(){return{period:"",bucketValues:[]}},mounted:function(){var e,t=[],n=Object(C["a"])(this.buckets);try{for(n.s();!(e=n.n()).done;){var i=e.value;for(var s in i){var r=i[s];r.value>0&&(t[s]||(t[s]=[]),t[s].push(Object(u["a"])({},r)))}}}catch(a){n.e(a)}finally{n.f()}this.bucketValues=t},props:{winners:Array,buckets:Array,splitters:Object},methods:{copyToClipboard:function(e){var t=e.target;if(document.body.createTextRange){var n=document.body.createTextRange();n.moveToElementText(t),n.select()}else if(window.getSelection){var i=window.getSelection(),s=document.createRange();s.selectNodeContents(t),i.removeAllRanges(),i.addRange(s)}document.execCommand("copy")}},computed:{startOfPeriod:function(){if("string"==typeof this.period){var e=this.period.match("([0-9]+)-([0-9]+)-([0-9]+)");return e[3]+"/"+e[2]}return this.period.getDay()+"/"+(this.period.getMonth()+1)},endOfPeriod:function(){var e="string"==typeof this.period?new Date(this.period):this.period;return e.setDate(e.getDate()+13),e.getDay()+"/"+(e.getMonth()+1)},startOfNextPeriod:function(){var e="string"==typeof this.period?new Date(this.period):this.period;return e.setDate(e.getDate()+14),e.getDay()+"/"+(e.getMonth()+1)},endOfNextPeriod:function(){var e="string"==typeof this.period?new Date(this.period):this.period;return e.setDate(e.getDate()+14+13),e.getDay()+"/"+(e.getMonth()+1)}}};Pe.render=Me;var Te=Pe,xe={name:"App",data:function(){return{tabs:[new b("participants","Participants","mdi-account-multiple"),new b("winners","Gagnants","mdi-shield-account-outline"),new b("points","Répartitions","mdi-account-switch"),new b("messages","Messages","mdi-message-bookmark-outline")],currentTab:"participants",items:{},numberOfMember:3,total:0,repartition:new Array(this.numberOfMember).fill(0),winners:{},splitters:{}}},methods:{tabClicked:function(e){this.currentTab=e.id},hasItems:function(){return Object.keys(this.items).length>0},splittedValues:function(e){this.repartition=[.5*this.total,.3*this.total,.2*this.total],this.winners=Object(u["a"])({},e),this.currentTab="points"},pointValidated:function(e){this.currentTab="messages",this.splitters=e.splitter,this.winners.buckets=e.buckets}},components:{TabsHeader:m,Tab:k,Participants:R,Winners:K,PointSplitter:Oe,MessageGenerator:Te}};xe.render=l;var Ce=xe,Se=Object(i["b"])(Ce);Se.config.configureWebpack={devtool:"source-map"},Se.mount("#app"),n("5363"),n("fc04")},fc04:function(e,t,n){}});
//# sourceMappingURL=app.dd672201.js.map