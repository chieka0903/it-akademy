(()=>{var e={37:()=>{const e=document.querySelector(".time"),t=document.querySelector(".date"),n=document.getElementsByName("language"),o=()=>{const t=(new Date).toLocaleTimeString("ru");e.textContent=t};o(),setInterval(o,1e3);const a=()=>{const e={month:"long",day:"numeric",weekday:"long"};let o;n[0].checked&&(o=(new Date).toLocaleDateString("en-US",e)),n[1].checked&&(o=(new Date).toLocaleDateString("ru",e)),t.textContent=o};a(),setInterval(a,1e3),window.addEventListener("load",a),n.forEach((e=>e.addEventListener("change",a)))},723:()=>{const e=document.querySelector(".todo-add"),t=document.querySelector(".todo__active-area"),n=document.querySelector(".todo__done-area"),o=document.querySelector(".todo__icon"),a=document.querySelector(".todo__icon-adaptive"),s=document.querySelector(".todo__form"),c=document.getElementsByName("language"),r=()=>{c[0].checked&&(o.textContent="TO DO List"),c[1].checked&&(o.textContent="Список дел")},d=({target:e})=>{const o=e.closest(".todo__item");o.parentNode===t?(n.appendChild(o),l(o)):(t.appendChild(o),u(o))},i=({target:e})=>{const t=e.closest(".todo__item");t.parentNode.removeChild(t)},l=e=>{const t=e.querySelector(".todo-item__done-button"),n=e.querySelector(".todo-item__input");t.classList.remove("fa-check"),t.classList.add("fa-rotate-left"),n.classList.add("todo-item__input--crossed")},u=e=>{const t=e.querySelector(".todo-item__done-button"),n=e.querySelector(".todo-item__input");t.classList.add("fa-check"),t.classList.remove("fa-rotate-left"),n.classList.remove("todo-item__input--crossed")},g=(e="")=>{const t=document.createElement("div");t.classList.add("todo__item");const n=document.createElement("span");n.role="textbox",n.innerHTML=e,n.contentEditable=!0,n.classList.add("todo-item__input");const o=document.createElement("button");o.classList.add("todo-item__done-button","fa","fa-check"),o.addEventListener("click",d);const a=document.createElement("button");return a.classList.add("todo-item__delete-button","fa","fa-trash"),a.addEventListener("click",i),t.append(n),t.append(o),t.append(a),t},m=()=>{s.classList.toggle("todo__form-open")};e.addEventListener("click",(()=>{const e=g();t.append(e)})),window.addEventListener("beforeunload",(()=>{const e=[];t.childNodes.forEach((t=>{const n=t.querySelector(".todo-item__input");n.textContent&&e.push({value:n.innerHTML,done:!1})})),n.childNodes.forEach((t=>{const n=t.querySelector(".todo-item__input");n.textContent&&e.push({value:n.innerHTML,done:!0})})),localStorage.setItem("toDoList",JSON.stringify(e))})),window.addEventListener("load",(()=>{JSON.parse(localStorage.getItem("toDoList")??"[]").forEach((e=>{const o=g(e.value);e.done?(l(o),n.append(o)):t.append(o)}))})),window.addEventListener("load",r),c.forEach((e=>e.addEventListener("change",r))),o.addEventListener("click",m),a.addEventListener("click",m)},891:()=>{const e=document.querySelector(".weather__city"),t=document.querySelector(".weather__icon"),n=document.querySelector(".weather_temperature"),o=document.querySelector(".weather_description"),a=document.querySelector(".weather__wind"),s=document.querySelector(".weather__humidity"),c=document.getElementsByName("language");let r,d=e.value;const i=async()=>{const c=`https://api.openweathermap.org/data/2.5/weather?q=${e.value}&lang=${r}&appid=a360fdb14879fae1bb0901e4b60dc4e1&units=metric`,i=await fetch(c),l=await i.json();200===l.cod?((e=>{t.className="weather-icon owf",t.classList.add(`owf-${e.weather[0].id}`),n.textContent=`${Math.trunc(e.main.temp)}°C`,o.textContent=e.weather[0].description,"en"===r&&(a.textContent=`Wind speed: ${Math.trunc(e.wind.speed)} m/s`,s.textContent=`Humidity: ${e.main.humidity} %`),"ru"===r&&(a.textContent=`Скорость ветра: ${Math.trunc(e.wind.speed)} м/с`,s.textContent=`Влажность: ${e.main.humidity} %`)})(l),d=e.value):(e=>{t.className="",n.textContent=e.message,o.textContent="",a.textContent="",s.textContent=""})(l),localStorage.setItem("city",d)};changeLanguageByWeather=()=>{c[0].checked&&(r="en",i()),c[1].checked&&(r="ru",i()),localStorage.getItem("city")||("en"===r&&(e.value="Minsk"),"ru"===r&&(e.value="Минск"))},e.addEventListener("change",i),window.addEventListener("load",(()=>{if(localStorage.getItem("settings")){const e=localStorage.getItem("settings"),t=JSON.parse(e);r="english"===t.language?"en":"russian"===t.language?"ru":"en"}})),window.addEventListener("load",(()=>{localStorage.getItem("city")?e.value=localStorage.getItem("city"):("en"===r&&(e.value="Minsk"),"ru"===r&&(e.value="Минск")),i()})),c.forEach((e=>e.addEventListener("change",changeLanguageByWeather)))}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,n),s.exports}(()=>{"use strict";class e extends EventTarget{changeSettings(e){this.dispatchEvent(new CustomEvent("settings",{detail:{settings:e}}))}}const t=new e;let o=document.querySelectorAll(".widget-btn");const a=document.querySelector(".settings__icon"),s=document.querySelector(".settings__form"),c=document.getElementsByName("background"),r=document.getElementsByName("language"),d=document.querySelector(".tag-unsplash"),i=document.querySelector(".tag-flickr"),l=document.querySelector(".language-name"),u=()=>{r[0].checked&&(l.textContent="Language:",document.querySelector(".english").textContent="English",document.querySelector(".russian").textContent="Russian",document.querySelector(".source-name").textContent="Image source:",document.querySelector(".widget-audio").textContent="Audio Player",document.querySelector(".widget-weather").textContent="Weather",document.querySelector(".widget-time").textContent="Time",document.querySelector(".widget-date").textContent="Date",document.querySelector(".widget-greeting").textContent="Greeting",document.querySelector(".widget-quotes").textContent="Quotes",document.querySelector(".widget-todo").textContent="To do list"),r[1].checked&&(l.textContent="Язык:",document.querySelector(".english").textContent="Английский",document.querySelector(".russian").textContent="Русский",document.querySelector(".source-name").textContent="Источник изображения:",document.querySelector(".widget-audio").textContent="Аудио Плеер",document.querySelector(".widget-weather").textContent="Погода",document.querySelector(".widget-time").textContent="Время",document.querySelector(".widget-date").textContent="Дата",document.querySelector(".widget-greeting").textContent="Приветствие",document.querySelector(".widget-quotes").textContent="Цитаты",document.querySelector(".widget-todo").textContent="Список дел")},g=e=>{for(let t in e)"boolean"==typeof e[t]&&e[t]&&(document.querySelector(`#${t}`).classList.add("widget-btn--on"),document.querySelector(`.${t}`).classList.add("visibility")),"russian"===e[t]&&(r[1].setAttribute("checked",!0),r[0].removeAttribute("checked")),"english"===e[t]&&(r[0].setAttribute("checked",!0),r[1].removeAttribute("checked")),"unsplash"===e[t]&&(c[1].setAttribute("checked",!0),c[0].removeAttribute("checked"),c[2].removeAttribute("checked"),d.removeAttribute("disabled"),d.classList.add("tag-active")),"github"===e[t]&&(c[0].setAttribute("checked",!0),c[1].removeAttribute("checked"),c[2].removeAttribute("checked")),"flickr"===e[t]&&(c[2].setAttribute("checked",!0),c[0].removeAttribute("checked"),c[1].removeAttribute("checked"),i.removeAttribute("disabled"),i.classList.add("tag-active"))},m=()=>{const e=localStorage.getItem("settings");if(e){const t=JSON.parse(e);g(t)}else{const e={player:!0,weather:!0,time:!0,date:!0,greeting:!0,quotes:!0,toDo:!0,language:"english",source:"github"};g(e),localStorage.setItem("settings",JSON.stringify(e))}},v=e=>{e.target.classList.toggle("widget-btn--on");const n=e.target.id;document.querySelector(`.${n}`).classList.toggle("visibility");const o=localStorage.getItem("settings"),a=JSON.parse(o);a[n]=!a[n],localStorage.setItem("settings",JSON.stringify(a)),t.changeSettings(a)},h=()=>{const e=localStorage.getItem("settings"),n=JSON.parse(e);r[0].checked&&(n.language="english"),r[1].checked&&(n.language="russian"),localStorage.setItem("settings",JSON.stringify(n)),t.changeSettings(n),u()},y=()=>{const e=localStorage.getItem("settings"),n=JSON.parse(e);c[0].checked&&(n.source="github"),c[1].checked&&(n.source="unsplash"),c[2].checked&&(n.source="flickr"),localStorage.setItem("settings",JSON.stringify(n)),t.changeSettings(n)};o.forEach((e=>e.addEventListener("click",v))),a.addEventListener("click",(()=>{s.classList.toggle("settings__open"),a.classList.toggle("settings__icon-active")})),window.addEventListener("beforeunload",m),window.addEventListener("load",m),window.addEventListener("load",u),r.forEach((e=>e.addEventListener("change",h))),c.forEach((e=>e.addEventListener("change",y))),n(37);const S=()=>{const e=(new Date).getHours();return["night","morning","afternoon","evening"][Math.trunc(e/6)]},p=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e),L=document.querySelector(".greeting__text"),w=document.getElementsByName("language"),b=document.querySelector(".greeting__name"),_=()=>{w[0].checked&&(L.textContent=`Good ${S()},`,b.placeholder="[Enter name]"),w[1].checked&&(L.textContent=`${(()=>{const e=(new Date).getHours();return["Доброй ночи","Доброе утро","Добрый день","Добрый вечер"][Math.trunc(e/6)]})()},`,b.placeholder="[Введите имя]")};setInterval(_,1e3),window.addEventListener("beforeunload",(()=>{localStorage.setItem("name",b.value)})),window.addEventListener("load",(()=>{localStorage.getItem("name")&&(b.value=localStorage.getItem("name"))})),window.addEventListener("load",_),w.forEach((e=>e.addEventListener("change",_)));const E=document.body,k=document.querySelector(".tag-unsplash"),q=document.querySelector(".tag-flickr"),f=document.getElementsByName("background"),x=document.getElementsByName("language"),C=document.querySelector(".not-found");let I=p(1,20);const N=()=>{x[0].checked&&(C.textContent="Error! Images by provided tag haven't been found"),x[1].checked&&(C.textContent="Ошибка! По указанному тегу изображения не найдены")},A=()=>{C.classList.remove("not-found--visible"),k.setAttribute("disabled",!0),k.classList.remove("tag-active"),q.setAttribute("disabled",!0),q.classList.remove("tag-active");const e=S(),t=I.toString().padStart(2,"0"),n=new Image;n.src=`https://raw.githubusercontent.com/chieka0903/momentum-backgrounds/main/images/${e}/${t}.webp`,n.addEventListener("load",(()=>{E.style.backgroundImage=`url(${n.src})`}))},$=async()=>{try{k.removeAttribute("disabled"),k.classList.add("tag-active"),q.setAttribute("disabled",!0),q.classList.remove("tag-active");const e=`https://api.unsplash.com/photos/random?query=${k.value}&client_id=4mDrkwLX7JqGLHf-20ymOFjrAQncuJ8QBdk-bsEBe0Q&sort=relevance`,t=await fetch(e);if(200!==t.status)throw new Error(t);C.classList.remove("not-found--visible");const n=await t.json(),o=new Image;o.src=n.urls.raw,o.addEventListener("load",(()=>{E.style.backgroundImage=`url(${o.src})`}))}catch(e){E.style.backgroundImage="",C.classList.add("not-found--visible"),k.value=""}localStorage.setItem("tagUnsplash",k.value)},O=async()=>{try{q.removeAttribute("disabled"),q.classList.add("tag-active"),k.setAttribute("disabled",!0),k.classList.remove("tag-active");const e=`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=0fdf8f725b6d102384e1a6d194828731&tags=${q.value}&tag_mode=all&extras=url_l&format=json&nojsoncallback=1&safe_search=1&sort=relevance`,t=await fetch(e);if(200!==t.status)throw new Error(t);C.classList.remove("not-found--visible");const n=await t.json(),o=new Image;o.src=n.photos.photo[p(0,n.photos.photo.length-1)].url_l,o.addEventListener("load",(()=>{E.style.backgroundImage=`url(${o.src})`}))}catch(e){E.style.backgroundImage="",C.classList.add("not-found--visible"),q.value=""}localStorage.setItem("tagFlickr",q.value)},M=()=>{f[0].checked&&A(),f[1].checked&&$(),f[2].checked&&O()},J=document.querySelector(".slider__prev"),B=document.querySelector(".slider__next");f.forEach((e=>e.addEventListener("change",M))),x.forEach((e=>e.addEventListener("change",N))),J.addEventListener("click",(()=>{f[0].checked&&(I>1?I-=1:I=20,A()),f[1].checked&&$(),f[2].checked&&O()})),B.addEventListener("click",(()=>{f[0].checked&&(I<20?I+=1:I=1,A()),f[1].checked&&$(),f[2].checked&&O()})),window.addEventListener("load",(()=>{if(localStorage.getItem("tagUnsplash")?k.value=localStorage.getItem("tagUnsplash"):k.value=`${S()}`,localStorage.getItem("tagFlickr")?q.value=localStorage.getItem("tagFlickr"):q.value=`${S()}`,localStorage.getItem("settings")){const e=localStorage.getItem("settings"),t=JSON.parse(e);"github"===t.source&&A(),"unsplash"===t.source&&$(),"flickr"===t.source&&O()}else M();N()})),k.addEventListener("change",$),q.addEventListener("change",O),n(891);const D=document.querySelector(".quote"),T=document.querySelector(".author"),j=document.querySelector(".quote-update"),H=document.getElementsByName("language");async function F(){let e;if(H[0].checked){const t=await fetch("./json/quotesEn.json"),n=await t.json();e=p(0,n.length-1),D.textContent=n[e].quote,T.textContent=n[e].author}if(H[1].checked){const t=await fetch("./json/quotesRu.json"),n=await t.json();e=p(0,n.length-1),D.textContent=n[e].quote,T.textContent=n[e].author}}window.addEventListener("load",F),j.addEventListener("click",F),H.forEach((e=>e.addEventListener("change",F)));const W=[{title:"Aqua Caelestis",src:"./assets/sounds/Aqua_Caelestis.mp3",duration:"39"},{title:"Ennio Morricone",src:"./assets/sounds/Ennio_Morricone.mp3",duration:"97"},{title:"River Flows In You",src:"./assets/sounds/River_Flows_In_You.mp3",duration:"97"},{title:"Summer Wind",src:"./assets/sounds/Summer_Wind.mp3",duration:"110"}],Q=document.querySelector(".player__songs");W.forEach(((e,t)=>{let n=document.createElement("li");n.setAttribute("data-number-of-song",t),n.classList.add("song"),n.textContent=W[t].title,Q.append(n)}));const R=document.querySelector("#volume"),U=document.querySelector(".button_play"),G=document.querySelector(".button_previous"),X=document.querySelector(".button_next");let Y=document.querySelectorAll(".song");const P=document.querySelector(".time-length"),z=document.querySelector(".time-current"),K=document.querySelector(".player__song-name"),V=document.querySelector(".progress-scale"),Z=document.querySelector(".player__progress"),ee=(document.querySelector(".volume-progress"),document.querySelector(".volume-button")),te=new Audio;let ne,oe=0,ae=!1;te.src=W[oe].src,te.currentTime=0,te.volume=.5;const se=()=>{ne||(ne=setInterval(ie,500))},ce=()=>{ne&&(ne=clearInterval(ne))},re=e=>{let t=parseInt(e),n=parseInt(t/60);return t-=60*n,`${String(n).padStart(2,0)}:${String(t%60).padStart(2,0)}`},de=()=>{z.textContent=re(te.currentTime),P.textContent=re(W[oe].duration),K.textContent=`${oe+1}. ${W[oe].title}`};de();const ie=()=>{z.textContent=re(te.currentTime),V.style.width=te.currentTime/te.duration*100+"%"},le=()=>{U.classList.toggle("button_pause"),ae=!ae,ae?te.play():te.pause(),ae?se():ce(),Y[oe].classList.add("song-active"),Y[oe].classList.toggle("song-active-icon")},ue=()=>{oe<W.length-1?oe+=1:oe=0,te.src=W[oe].src,ae?te.play():(U.classList.add("button_pause"),te.play(),ae=!ae),Y[oe].classList.add("song-active","song-active-icon"),0===oe?Y[W.length-1].classList.remove("song-active","song-active-icon"):Y[oe-1].classList.remove("song-active","song-active-icon"),de(),se()};U.addEventListener("click",le),Q.addEventListener("click",(e=>{const t=Number(e.target.dataset.numberOfSong);Y[oe].classList.remove("song-active","song-active-icon"),t!==oe&&(te.src=W[t].src),ae&&t===oe?(Y[t].classList.add("song-active"),U.classList.remove("button_pause"),ae=!1,te.pause(),ce()):(oe=Number(e.target.dataset.numberOfSong),U.classList.add("button_pause"),ae=!0,te.play(),se(),Y[oe].classList.add("song-active","song-active-icon")),oe=t,de()})),X.addEventListener("click",ue),G.addEventListener("click",(()=>{oe>0?oe-=1:oe=W.length-1,te.src=W[oe].src,ae?te.play():(U.classList.add("button_pause"),te.play(),ae=!ae),Y[oe].classList.add("song-active","song-active-icon"),oe===W.length-1?Y[0].classList.remove("song-active","song-active-icon"):Y[oe+1].classList.remove("song-active","song-active-icon"),de(),se()})),te.addEventListener("ended",ue),Z.addEventListener("click",(e=>{const t=window.getComputedStyle(Z).width,n=e.offsetX/parseInt(t)*te.duration;te.currentTime=n,ie()})),ee.addEventListener("click",(()=>{te.muted=!te.muted,te.muted?(ee.classList.add("volume-mute"),R.value=0):(ee.classList.remove("volume-mute"),R.value=100*te.volume)})),t.addEventListener("settings",(e=>{!e.detail.settings.player&&ae&&le()})),R.addEventListener("input",(({target:e})=>{te.volume=Number(e.value)/100,Number(e.value)&&ee.classList.contains("volume-mute")&&ee.classList.remove("volume-mute"),Number(e.value)||ee.classList.contains("volume-mute")||ee.classList.add("volume-mute")})),n(723)})()})();