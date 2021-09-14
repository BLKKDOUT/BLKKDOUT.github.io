(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  let birthday = "Feb 25, 2022 16:00:00",
      countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        let now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day))+" d",
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour))+" h",
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute))+" m",
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second)+" s";

        //do something later when date is reached
        if (distance < 0) {
          let headline = document.getElementById("headline"),
              countdown = document.getElementById("countdown"),
              content = document.getElementById("content");

          headline.innerText = "EVENT ENDED";
          countdown.style.display = "none";
          content.style.display = "block";

          clearInterval(x);
        }
        //seconds
      }, 0)
  }());