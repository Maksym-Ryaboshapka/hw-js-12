class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  start() {
    const finalDate = Date.parse(this.targetDate);
    let currDate = Date.now();

    const countDays = () => {
      const days = Math.floor((finalDate - currDate) / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        ((finalDate - currDate) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const mins = Math.floor(
        ((finalDate - currDate) % (1000 * 60 * 60)) / (1000 * 60)
      );
      const secs = Math.floor(((finalDate - currDate) % (1000 * 60)) / 1000);

      document.querySelector(
        `${this.selector} [data-value="days"]`
      ).textContent = days;
      document.querySelector(
        `${this.selector} [data-value="hours"]`
      ).textContent = hours.toString().padStart(2, "0");
      document.querySelector(
        `${this.selector} [data-value="mins"]`
      ).textContent = mins.toString().padStart(2, "0");
      document.querySelector(
        `${this.selector} [data-value="secs"]`
      ).textContent = secs.toString().padStart(2, "0");
    };

    countDays();

    const timer = setInterval(() => {
      currDate = Date.now();

      const days = Math.floor((finalDate - currDate) / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        ((finalDate - currDate) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const mins = Math.floor(
        ((finalDate - currDate) % (1000 * 60 * 60)) / (1000 * 60)
      );
      const secs = Math.floor(((finalDate - currDate) % (1000 * 60)) / 1000);

      countDays();

      if (days === 0 && hours === 0 && mins === 0 && secs === 0)
        clearInterval(timer);
    }, 1000);
  }
}

const infoBtn = document.querySelector(".info-btn");

class Animations {
  static timeAnimations(selector) {
    infoBtn.removeEventListener("click", infoBtnCallback);

    document.querySelectorAll(selector).forEach((elem) => {
      if (elem.textContent.toLowerCase() === "days") {
        setTimeout(() => (elem.style.top = "70px"), 500);
      } else if (elem.textContent.toLowerCase() === "hours") {
        setTimeout(() => (elem.style.top = "70px"), 1000);
      } else if (elem.textContent.toLowerCase() === "minutes") {
        setTimeout(() => (elem.style.top = "70px"), 1500);
      } else if (elem.textContent.toLowerCase() === "seconds") {
        setTimeout(() => (elem.style.top = "70px"), 2000);
      }
    });

    setTimeout(() => {
      document.querySelectorAll(selector).forEach((elem) => {
        if (elem.textContent.toLowerCase() === "days") {
          setTimeout(() => (elem.style.top = "120px"), 2000);
        } else if (elem.textContent.toLowerCase() === "hours") {
          setTimeout(() => (elem.style.top = "120px"), 1500);
        } else if (elem.textContent.toLowerCase() === "minutes") {
          setTimeout(() => (elem.style.top = "120px"), 1000);
        } else if (elem.textContent.toLowerCase() === "seconds") {
          setTimeout(() => (elem.style.top = "120px"), 500);
        }

        setTimeout(() => {
          infoBtn.addEventListener("click", infoBtnCallback);
        }, 2250);
      });
    }, 4000);
  }
}

const countdownTimer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2025"),
});

countdownTimer.start();

const infoBtnCallback = (e) => {
  Animations.timeAnimations(".label");
};

infoBtn.addEventListener("click", infoBtnCallback);
