(this["webpackJsonpstate-use"]=this["webpackJsonpstate-use"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(2),c=n.n(s),r=(n(13),n(3)),i=n(4),u=n(6),l=n(5),m=n(7),p=(n(14),n(15),function(e){return o.a.createElement("div",{className:"personComp"},o.a.createElement("p",{onClick:e.click},"I'm ",e.name," and my occupation is ",e.occupation))}),h=(n(16),function(e){return o.a.createElement("input",{className:"inputTextFieldStyle",type:"text",onChange:e.changed,value:e.name})}),d=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={persons:[{name:"Piotr",occupatoin:"teacher",age:30},{name:"tomasz",occupatoin:"researcher",age:45},{name:"Marta",occupatoin:"secretary",age:42}]},n.switchNameHandler=function(e){n.setState({persons:[{name:"Uotatozisc",occupatoin:"Professor",age:30},{name:e,occupatoin:"researcher",age:45},{name:"Marta",occupatoin:"secretary",age:42}]})},n.nameChangeHandler=function(e){n.setState({persons:[{name:"Uotatozisc",occupatoin:"Professor",age:30},{name:"Wanadoo",occupatoin:"researcher",age:45},{name:e.target.value,occupatoin:"secretary",age:42}]})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t={backgroundcolor:"white",font:"inherent",border:"1px solid bleu",padding:"8px",cursor:"pointer"};return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"This lesson is for state"),o.a.createElement("p",null,"The first person name is ",this.state.persons[0].name," and my occupatoin is ",this.state.persons[0].occupatoin),o.a.createElement("button",{style:t,onClick:function(){return e.switchNameHandler("Perirra")}},"Switch Name"),o.a.createElement(p,{name:this.state.persons[0].name,occupation:this.state.persons[0].occupatoin}),o.a.createElement("p",null,"The seconde person name is ",this.state.persons[1].name," and my occupatoin is ",this.state.persons[1].occupatoin),o.a.createElement("button",{style:t,onClick:this.switchNameHandler.bind(this,"Maximilian")},"Switch Name"),o.a.createElement(p,{name:this.state.persons[1].name,occupation:this.state.persons[1].occupatoin,click:function(){e.switchNameHandler("Switzerland")}}),o.a.createElement("p",null,"The third person name is ",this.state.persons[2].name," and my occupatoin is ",this.state.persons[2].occupatoin),o.a.createElement("button",{style:t,onClick:function(){return console.log("button 3rd person clicked")}},"Switch Name"),o.a.createElement(p,{name:this.state.persons[2].name,occupation:this.state.persons[2].occupatoin}),o.a.createElement(h,{changed:this.nameChangeHandler,name:this.state.persons[2].name}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.f406461c.chunk.js.map