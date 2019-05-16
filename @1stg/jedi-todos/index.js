define(function(){return function(t){var o={};function e(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=o,e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,o){if(1&o&&(t=e(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var r in t)e.d(n,r,function(o){return t[o]}.bind(null,r));return n},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},e.p="",e(e.s=1)}([function(t,o,e){"use strict";function n(){return(n=Object.assign||function(t){for(var o,e=1;e<arguments.length;e++)for(var n in o=arguments[e])Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);return t}).apply(this,arguments)}var r=["attrs","props","domProps"],i=["class","style","directives"],u=["on","nativeOn"],s=function(t,o){return function(){t&&t.apply(this,arguments),o&&o.apply(this,arguments)}};t.exports=function(t){return t.reduce(function(t,o){for(var e in o)if(t[e])if(-1!==r.indexOf(e))t[e]=n({},t[e],o[e]);else if(-1!==i.indexOf(e)){var d=t[e]instanceof Array?t[e]:[t[e]],a=o[e]instanceof Array?o[e]:[o[e]];t[e]=d.concat(a)}else if(-1!==u.indexOf(e))for(var c in o[e])if(t[e][c]){var f=t[e][c]instanceof Array?t[e][c]:[t[e][c]],l=o[e][c]instanceof Array?o[e][c]:[o[e][c]];t[e][c]=f.concat(l)}else t[e][c]=o[e][c];else if("hook"==e)for(var p in o[e])t[e][p]=t[e][p]?s(t[e][p],o[e][p]):o[e][p];else t[e]=o[e];else t[e]=o[e];return t},{})}},function(t,o,e){"use strict";e.r(o),e.d(o,"store",function(){return i});var n=e(0),r=e.n(n),i={path:"todos",state:{todos:[]},mutations:{addTodo:function(t,o){t.todos.push(o)},removeTodo:function(t,o){t.todos.splice(o,1)}}};o.default={data:function(){return{todo:""}},computed:{todos:function(){return this.$store.state.todos.todos}},methods:{onAddTodo:function(){var t=this.todo.trim();t&&(this.$store.commit("addTodo",t),this.todo="")}},render:function(){var t=this,o=arguments[0];return o("div",[o("h1",["My Todos: ",this.todos.length]),o("div",[o("input",r()([{on:{input:function(o){o.target.composing||(t.todo=o.target.value)}},domProps:{value:t.todo}},{directives:[{name:"model",value:t.todo,modifiers:{}}]}])),o("button",{on:{click:this.onAddTodo}},["Add Todo"])]),o("ul",[this.todos.map(function(e,n){return o("li",[e,o("button",{on:{click:t.$store.commit("removeTodo",n)}},["x"])])})])])}}}])});
