class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  start() {
    const finalDate = Date.parse(this.targetDate);
    
    const timer = setInterval(() => {
      const currDate = Date.now();

      const days = Math.floor((finalDate - currDate) / (1000 * 60 * 60 * 24));
      const hours = Math.floor(((finalDate - currDate) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor(((finalDate - currDate) % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor(((finalDate - currDate) % (1000 * 60)) / 1000);
      
      document.querySelector(`${this.selector} [data-value="days"]`).textContent = days;
      document.querySelector(`${this.selector} [data-value="hours"]`).textContent = hours.toString().padStart(2, "0");
      document.querySelector(`${this.selector} [data-value="mins"]`).textContent = mins.toString().padStart(2, "0");
      document.querySelector(`${this.selector} [data-value="secs"]`).textContent = secs.toString().padStart(2, "0");

      if (days === 0 && hours === 0 && mins === 0 && secs === 0) clearInterval(timer);
    }, 1000);
  }
}

const countdownTimer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2025"),
});

countdownTimer.start();