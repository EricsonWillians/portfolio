(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,function(t,e,a){t.exports=a(17)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),s=a(7),r=a.n(s),c=(a(14),a(1)),i=a(2),l=a(4),u=a(3),h=a(5),m=(a(15),a(8)),p=a.n(m),_=(a(16),function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={naturalNotes:["C3","D3","E3","F3","G3","A3","B3","C4","D4","E4","F4","G4","A4","B4","C5"],sharpNotes:["C#3","D#3","F#3","G#3","A#3","C#4","D#4","F#4","G#4","A#4"],duration:.2,oscillator:(new p.a.Synth).toMaster()},a}return Object(h.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this,e=[];this.state.naturalNotes.map((function(a){e.push(o.a.createElement("div",{className:"synth__natural__note",onClick:function(){t.state.oscillator.triggerAttackRelease(a,t.state.duration)}}))}));var a=[];return this.state.sharpNotes.map((function(e){a.push(o.a.createElement("div",{className:"synth__sharp__note ".concat("D#3"===e||"A#3"===e||"D#4"===e||"A#4"===e?"synth__sharp__note--separator":""),onClick:function(){t.state.oscillator.triggerAttackRelease(e,t.state.duration)}}))})),o.a.createElement("div",{className:"synth"},o.a.createElement("div",{className:"synth__natural__notes"},e,o.a.createElement("div",{className:"synth__sharp__notes"},a)))}}]),e}(n.Component)),d=function(t){function e(t){return Object(c.a)(this,e),Object(l.a)(this,Object(u.a)(e).call(this,t))}return Object(h.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"main"},o.a.createElement("div",{className:"main-container"},o.a.createElement("p",{className:"app-title"},"Ericson's Fancy Synth"),o.a.createElement(_,null)))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.45f981e2.chunk.js.map