new class{constructor({selector:t,targetDate:e}){this.selector=t,this.targetDate=e}start(){let t=Date.parse(this.targetDate),e=Date.now();(()=>{let a=Math.floor((t-e)/864e5),r=Math.floor((t-e)%864e5/36e5),o=Math.floor((t-e)%36e5/6e4),s=Math.floor((t-e)%6e4/1e3);document.querySelector(`${this.selector} [data-value="days"]`).textContent=a,document.querySelector(`${this.selector} [data-value="hours"]`).textContent=r.toString().padStart(2,"0"),document.querySelector(`${this.selector} [data-value="mins"]`).textContent=o.toString().padStart(2,"0"),document.querySelector(`${this.selector} [data-value="secs"]`).textContent=s.toString().padStart(2,"0")})()}}({selector:"#timer-1",targetDate:new Date("Jul 17, 2025")}).start();
//# sourceMappingURL=index.c1ee37f4.js.map
