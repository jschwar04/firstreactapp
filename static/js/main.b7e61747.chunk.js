(this.webpackJsonpfirstreactapp=this.webpackJsonpfirstreactapp||[]).push([[0],{12:function(t,e,n){},26:function(t,e,n){t.exports=n(69)},31:function(t,e,n){},33:function(t,e,n){t.exports=n.p+"static/media/logo.5d5d9eef.svg"},69:function(t,e,n){"use strict";n.r(e);var a=n(1),o=n.n(a),r=n(20),i=n.n(r),c=(n(31),n(21)),s=n(10),u=n.n(s),m=n(16),l=n(5),p=n(6),h=n(8),d=n(7),f=(n(33),n(12),function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var t=this.props.automation.id;return o.a.createElement("div",{className:"automationSingle"},o.a.createElement("p",null," ",this.props.automation.title," "),o.a.createElement("button",{className:"myButton",onClick:this.props.runAutomation.bind(this,t)},"Run!"))}}]),n}(o.a.Component)),v=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var t=this;return this.props.automations.map((function(e){return o.a.createElement(f,{className:"AutomationLine",automation:e,runAutomation:t.props.runAutomation})}))}}]),n}(o.a.Component),b=n(11),E=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={automations:[]},t.runAutomation=function(t){Object(m.a)(u.a.mark((function e(){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.UiPathRobot.getProcesses();case 2:n=e.sent,(a=n.find((function(e){return e.id===t}))).name.includes("Bescheinigung")?a.start({argEmployeeID:"123456"}):a.start();case 5:case"end":return e.stop()}}),e)})))()},t}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var t=this;Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.UiPathRobot.getProcesses();case 2:e.sent.forEach((function(e){var n={id:e.id,title:e.name,status:"idle"};t.setState({automations:[].concat(Object(c.a)(t.state.automations),[n])})}));case 4:case"end":return e.stop()}}),e)})))()}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"Content"},o.a.createElement("header",{className:"App-header"},o.a.createElement("h1",null,"nD Automation Dashboard")),o.a.createElement("body",null,o.a.createElement("div",{className:"Container"},o.a.createElement(v,{className:"AutomationList",automations:this.state.automations,runAutomation:this.runAutomation})))))}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.b7e61747.chunk.js.map