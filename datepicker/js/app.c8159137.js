(function(e){function t(t){for(var o,a,s=t[0],c=t[1],l=t[2],p=0,d=[];p<s.length;p++)a=s[p],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},i=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"intro"},[n("h1",[e._v("The datepicker re-invented")]),n("p",[e._v(" Enter a date in a way that feels natural to you. Don't worry about the format. Hit enter when you are finished or click, tap or move the focus to anywhere else on the screen. Try it out and see what happens. "),n("br"),e._v("If you see a "),n("span",{staticClass:"icon-inline",attrs:{"aria-hidden":"true"}},[n("svgicon",{attrs:{name:"speech",width:"24",height:"24",color:"#fff"}})],1),e._v("button next to the input field this means that your browser supports speech recognition. Hit this button and start talking instead of typing. ")]),n("p",[e._v("Want to take it a bit further? Try adding specific times or parts of the day, like: Morning, Evening or Afternoon for example.")])]),n("NlDatepicker"),e._m(0)],1)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("h1",[e._v("Why?")]),n("p",[e._v(" Because datepickers suck! Especially when you are forced to use a keyboard or screenreader. For ages we are being forced to enter dates in a way we think that a computer will understand it. Although computers have evolved we still act like they haven't. Nowadays computers are more capable of understanding the peculiar ways we express ourselves. Why do we still have to use these spartan interfaces for entering dates? Why all the clicking and touching when we can enter dates in a way that feels more natural to us? ")]),n("h3",[e._v("Credit where credit's due")]),n("p",[e._v(" This datepicker is developed with "),n("a",{attrs:{href:"https://github.com/wanasit/chrono"}},[e._v("Chrono.js")]),e._v(". An awesome lib that makes this new way of entering dates possible ")])])}],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"natural-speech-date-picker"},[n("div",{staticClass:"date-picker-form"},[n("div",{staticClass:"flex-row"},[n("input",{ref:"dateInputField",staticClass:"date-picker-form-input",attrs:{type:"text"},on:{blur:e.onBlur,keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onBlur(t)}}}),e.speechAvailable?n("button",{staticClass:"date-picker-form-button",class:{active:e.speechActive,talking:e.talking},attrs:{"aria-label":[e.speechActive?"speech recognition off":"speech recognition on"]},on:{click:e.toggleSpeech}},[n("svgicon",{attrs:{name:"speech",width:"24",height:"24",color:"#fff"}})],1):e._e()]),n("p",{staticClass:"date-picker-form-output",attrs:{"aria-live":"polite"}},[e._v(e._s(e.dateOutput))]),n("div",{staticClass:"fancy",attrs:{"aria-live":"polite","aria-atomic":"true"}},[""!=e.dayToStr?n("span",{staticClass:"fancy-day"},[e._v(e._s(e.dayToStr))]):e._e(),n("div",{staticClass:"flex-col"},[""!=e.dateToStr?n("span",{staticClass:"fancy-date"},[e._v(e._s(e.dateToStr))]):e._e(),""!=e.monthToStr?n("span",{staticClass:"fancy-month"},[e._v(e._s(e.monthToStr))]):e._e(),""!=e.yearToStr?n("span",{staticClass:"fancy-year"},[e._v(e._s(e.yearToStr))]):e._e()]),""!=e.timeToStr?n("span",{staticClass:"fancy-time"},[e._v(e._s(e.timeToStr))]):e._e()])])])},s=[],c=(n("c975"),n("ac1f"),n("1276"),n("498a"),n("96cf"),n("1da1")),l=n("68b4"),u=(n("fbad"),window.SpeechRecognition||window.webkitSpeechRecognition),p={weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1},d={name:"NlDatepicker",props:{msg:String},data:function(){return{chrono:new l["Chrono"],speechActive:!1,dateOutput:"",now:new Date,recognition:!!u&&new u,locale:"en-gb",talking:!1,dayToStr:"",dateToStr:"",monthToStr:"",yearToStr:"",timeToStr:"",speechAvailable:!!u}},mounted:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.chrono.parseDate("today"),e.dateOutput=" ",n.toLocaleTimeString(e.locale,p),e.splitDate(n),e.recognition.continuous=!0,e.recognition.interimResults=!1,e.recognition.onerror=function(e){console.error(e)},e.recognition.onstart=function(){console.log("Speech recognition service has started"),e.$refs.dateInputField.value=""},e.recognition.onend=function(){this.speechActive=!1,this.talking=!1,console.log("Speech recognition service disconnected")},e.recognition.onaudioend=function(){this.speechActive=!1,this.talking=!1,console.log("Audio capturing ended")},e.recognition.onresult=function(t){for(var n="...",o="",r=t.resultIndex;r<t.results.length;++r)t.results[r].isFinal?o+=t.results[r][0].transcript:n+=t.results[r][0].transcript;if(console.log("Interim: ",n),console.log("Final: ",o),o.indexOf("stop")>=0)return e.recognition.stop(),void(e.dateOutput="I'm no longer listening. Press the button if you want use your voice.");var i=e.chrono.parseDate(o,e.now,{forwardDate:!0});i?(e.dateOutput=" ",i.toLocaleTimeString(e.locale,p),e.splitDate(i)):e.dateOutput="Sorry, I did not understand. Could you please try again?"},e.recognition.onspeechstart=function(){console.log("Speech has started"),e.talking=!0},e.recognition.onspeechend=function(){console.log("Speech has stopped being detected"),e.speechActive=!1,e.talking=!1};case 13:case"end":return t.stop()}}),t)})))()},methods:{toggleSpeech:function(){this.speechActive=!this.speechActive,this.speechActive?(console.log("Ready to speak"),this.recognition.start()):(console.log("NOT ready to speak"),this.recognition.stop())},onBlur:function(e){var t=e.target,n="";t&&(n=this.chrono.parseDate(t.value,this.now,{forwardDate:!0}),n?(this.dateOutput=" ",n.toLocaleTimeString(this.locale,p),this.splitDate(n)):this.dateOutput="Sorry, I did not understand that. Could you please try again?")},splitDate:function(e){var t=e.toLocaleTimeString(this.locale,p),n=t.split(","),o=n[1].split(" ");this.dayToStr=n[0].trim(),this.dateToStr=o[1].trim(),this.monthToStr=o[2].trim(),this.yearToStr=o[3].trim(),this.timeToStr=n[2].trim()}}},h=d,f=(n("fc70"),n("2877")),g=Object(f["a"])(h,a,s,!1,null,"57e0d195",null),v=g.exports,y={name:"App",components:{NlDatepicker:v}},m=y,w=(n("034f"),Object(f["a"])(m,r,i,!1,null,null,null)),_=w.exports,b=n("038a"),k=n.n(b);o["a"].config.productionTip=!1,o["a"].use(k.a,{tagName:"svgicon"}),new o["a"]({render:function(e){return e(_)}}).$mount("#app")},"85ec":function(e,t,n){},"920f":function(e,t,n){},fbad:function(e,t,n){var o=n("038a");o.register({speech:{width:207,height:300,viewBox:"0 0 207 300",data:'<defs><path pid="0" id="svgicon_speech_a" d="M.06 0h206.12v299.94H.06z"/></defs><g _fill="none" fill-rule="evenodd"><mask id="svgicon_speech_b" _fill="#fff"><use xlink:href="#svgicon_speech_a"/></mask><path pid="1" d="M65.695 60.886c0-19.189 16.776-34.799 37.399-34.799 20.616 0 37.391 15.61 37.391 34.799v75.185c0 19.189-16.775 34.8-37.391 34.8-20.623 0-37.399-15.611-37.399-34.8V60.886zm37.399 136.072c35.003 0 63.478-27.316 63.478-60.887V60.886C166.572 27.316 138.097 0 103.094 0 68.09 0 39.609 27.316 39.609 60.886v75.185c0 33.571 28.481 60.887 63.485 60.887z" _fill="#0B0B09" mask="url(#svgicon_speech_b)"/><path pid="2" d="M206.18 151.178l-26.061-1.121c-1.726 40.315-35.557 71.892-77.025 71.892s-75.306-31.577-77.032-71.892L0 151.178c2.14 49.979 40.684 89.899 90.05 95.967v26.768H58.454V300h89.266v-26.087h-31.583v-26.768c49.361-6.07 87.905-45.988 90.043-95.967" _fill="#0B0B09" mask="url(#svgicon_speech_b)"/></g>'}})},fc70:function(e,t,n){"use strict";var o=n("920f"),r=n.n(o);r.a}});
//# sourceMappingURL=app.c8159137.js.map