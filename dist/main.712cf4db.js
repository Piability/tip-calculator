parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"d6sW":[function(require,module,exports) {
var e=document.querySelector(".card__result--tip"),t=document.querySelector(".card__result--total"),n=document.querySelector("#bill"),u=document.querySelector("#people"),c=document.querySelector(".card__input--tip"),l=document.querySelector(".btn__reset"),r=document.querySelectorAll(".btn__tip"),d=document.querySelector(".card__error--bill"),a=document.querySelector(".card__error--people"),o=0,i=function(){if(n.value>0&&u.value>0){var c=n.value,r=u.value,i=(o*c/r).toFixed(2),v=(+i+ +c/r).toFixed(2);e.textContent="$".concat(i),t.textContent="$".concat(v),l.disabled=!1,d.classList.add("hide"),a.classList.add("hide")}else""===n.value?d.classList.remove("hide"):d.classList.add("hide"),""===u.value?a.classList.remove("hide"):a.classList.add("hide"),s(0)};function s(r){r&&(n.value="",c.value="",u.value="",o=0),e.textContent="$0.00",t.textContent="$0.00",l.disabled=!0}var v=function(e){e.value>=0||(e.value="")};r.forEach(function(e){e.addEventListener("click",function(){o=e.value,i()})}),l.addEventListener("click",function(){return s(1)}),c.addEventListener("input",function(){v(c),c.value>=0&&(o=c.value/100,i())}),n.addEventListener("input",function(){v(n),i()}),u.addEventListener("input",function(){v(u),i()});
},{}]},{},["d6sW"], null)
//# sourceMappingURL=main.712cf4db.js.map