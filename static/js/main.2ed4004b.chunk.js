(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),o=a.n(s),c=(a(15),a(8)),u=a(1),l=a(2),i=a(4),p=a(3),m=a(5),h=(a(17),function(e){return r.a.createElement("header",null,r.a.createElement("h1",null,e.titulo))}),b=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).nombregastoRef=r.a.createRef(),a.cantidadGastoRef=r.a.createRef(),a.crearGasto=function(e){e.preventDefault();var t={nombreGasto:a.nombregastoRef.current.value,cantidadGasto:a.cantidadGastoRef.current.value};a.props.agregarGasto2(t)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.crearGasto},r.a.createElement("h2",null,"Agrega tus gastos aqui"),r.a.createElement("div",{className:"campo"},r.a.createElement("label",null,"Nombre Gasto"),r.a.createElement("input",{ref:this.nombregastoRef,className:"u-full-width",type:"text",placeholder:"Ej. Transporte"})),r.a.createElement("div",{className:"campo"},r.a.createElement("label",null,"Cantidad"),r.a.createElement("input",{ref:this.cantidadGastoRef,className:"u-full-width",type:"number",step:"any",placeholder:"Ej. 300"})),r.a.createElement("input",{className:"button-primary u-full-width",type:"submit",value:"Agregar"}))}}]),t}(n.Component),f=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.gasto,t=e.cantidadGasto,a=e.nombreGasto;return r.a.createElement("li",{className:"gastos"},r.a.createElement("p",null,a,r.a.createElement("span",{className:"gasto"},"$ ",t)))}}]),t}(n.Component),d=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"gastos-realizados"},r.a.createElement("h2",null,"Listado"),Object.keys(this.props.gastos).map(function(t){return r.a.createElement(f,{key:t,gasto:e.props.gastos[t]})}))}}]),t}(n.Component),j=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"alert alert-primary"},"Presupuesto : $ ",this.props.presupuesto)}}]),t}(n.Component),v=function(e){var t=parseInt(e);return t>0&&t},g=function(e,t){return e/4>t?"alert alert-danger":e/2>t?"alert alert-warning":"alert alert alert-success"},O=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.presupuesto,t=this.props.restante;return r.a.createElement("div",{className:g(e,t)},"Restante: $",this.props.restante)}}]),t}(n.Component),E=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{presupuesto:this.props.presupuesto}),r.a.createElement(O,{presupuesto:this.props.presupuesto,restante:this.props.restante}))}}]),t}(n.Component),y=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={gastos:{},presupuesto:"",restante:""},a.agregarGasto=function(e){var t=Object(c.a)({},a.state.gastos);t["gasto".concat(Date.now())]=e,a.restarPresupuesto(e.cantidadGasto),a.setState({gastos:t})},a.obtenerPresupuesto=function(){var e=prompt("cual es el presupuesto?");v(e)?a.setState({presupuesto:e,restante:e}):a.obtenerPresupuesto()},a.restarPresupuesto=function(e){var t=Number(e),n=a.state.restante;n-=t,a.setState({restante:n})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.obtenerPresupuesto()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App container"},r.a.createElement(h,{titulo:"Gasto semanal"}),r.a.createElement("div",{className:"contenido-principal contenido"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"one-half column"},r.a.createElement(b,{agregarGasto2:this.agregarGasto})),r.a.createElement("div",{className:"one-half column"},r.a.createElement(d,{gastos:this.state.gastos}),r.a.createElement(E,{presupuesto:this.state.presupuesto,restante:this.state.restante})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(22)}},[[9,2,1]]]);
//# sourceMappingURL=main.2ed4004b.chunk.js.map