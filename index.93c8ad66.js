class t{static timeAnimations(t){document.querySelectorAll(t).forEach(t=>{"days"===t.textContent.toLowerCase()?setTimeout(()=>{t.style.top="70px",t.style.zIndex="0"},500):"hours"===t.textContent.toLowerCase()?setTimeout(()=>{t.style.top="70px",t.style.zIndex="0"},1e3):"minutes"===t.textContent.toLowerCase()?setTimeout(()=>{t.style.top="70px",t.style.zIndex="0"},1500):"seconds"===t.textContent.toLowerCase()&&setTimeout(()=>{t.style.top="70px",t.style.zIndex="0"},2e3)}),setTimeout(()=>{document.querySelectorAll(t).forEach(t=>{"days"===t.textContent.toLowerCase()?setTimeout(()=>{t.style.top="120px",t.style.zIndex="0"},2e3):"hours"===t.textContent.toLowerCase()?setTimeout(()=>{t.style.top="120px",t.style.zIndex="0"},1500):"minutes"===t.textContent.toLowerCase()?setTimeout(()=>{t.style.top="120px",t.style.zIndex="0"},1e3):"seconds"===t.textContent.toLowerCase()&&setTimeout(()=>{t.style.top="120px",t.style.zIndex="0"},500),setTimeout(()=>t.style.zIndex="-1",2250)})},4e3)}}const e=new class{constructor({selector:t,targetDate:e}){this.selector=t,this.targetDate=e}start(){let t=Date.parse(this.targetDate),e=Date.now(),o=()=>{let o=Math.floor((t-e)/864e5),s=Math.floor((t-e)%864e5/36e5),a=Math.floor((t-e)%36e5/6e4),n=Math.floor((t-e)%6e4/1e3);document.querySelector(`${this.selector} [data-value="days"]`).textContent=o,document.querySelector(`${this.selector} [data-value="hours"]`).textContent=s.toString().padStart(2,"0"),document.querySelector(`${this.selector} [data-value="mins"]`).textContent=a.toString().padStart(2,"0"),document.querySelector(`${this.selector} [data-value="secs"]`).textContent=n.toString().padStart(2,"0")};o();let s=setInterval(()=>{let a=Math.floor((t-(e=Date.now()))/864e5),n=Math.floor((t-e)%864e5/36e5),r=Math.floor((t-e)%36e5/6e4),l=Math.floor((t-e)%6e4/1e3);o(),0===a&&0===n&&0===r&&0===l&&clearInterval(s)},1e3)}}({selector:"#timer-1",targetDate:new Date("Jul 17, 2025")}),o=document.querySelector(".info-btn");e.start(),o.addEventListener("click",e=>{t.timeAnimations(".label")});
//# sourceMappingURL=index.93c8ad66.js.map
