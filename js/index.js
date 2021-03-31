$(document).ready(function(){
    const today = new Date().toLocaleDateString();
    const date = new Date().getHours();
    if(date >= 22 || date >= 0){
        say = "🌃 Good Night Popo"
    }else if( date >= 6){
        say="🌅 Good Morning"
    }else if( date >= 10){
        say="🌅 Good Afternoon"
    }else{
        say="🌉 Good Evening"
    }
    // $(".date").html(today);
    $(".greeting").html(say);
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    let birthday = "May 19, 2021 02:38:00",
        countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          let now = new Date().getTime(),
              distance = countDown - now;
            $(".days").html(Math.floor(distance / (day)));
            $(".hours").html(Math.floor((distance % (day)) / (hour)));
            $(".minutes").html(Math.floor((distance % (hour)) / (minute)));
            $(".seconds").html(Math.floor((distance % (minute)) / second));
  
          //do something later when date is reached
          if (distance < 0) {
            let headline = document.getElementById("headline"),
                countdown = document.getElementById("countdown"),
                content = document.getElementById("content");
            
            headline.innerText = "Happy birthday! 🥳 🎉 🎂";
            countdown.style.display = "none";
            content.style.display = "none";
  
            clearInterval(x);
          }
          //seconds
        }, 0)
  });
