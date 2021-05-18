$(document).ready(function(){
    const today = new Date().toLocaleDateString();
    const date = new Date().getHours();
    if(date >= 22 && date <= 23){
        say = "🌃 Good Night"
    }else if(date >= 0 && date <= 5){
        say = "🌃 Good Night"
    }else if( date >= 6 && date < 10){
        say="🌅 Good Morning"
    }else if( date >= 10 && date < 15){
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
  
    let birthday = "May 19, 2021 00:00:00",
        countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          let now = new Date().getTime(),
              distance = countDown - now;
            $(".days").html(Math.floor(distance / (day)));
            $(".hours").html(Math.floor((distance % (day)) / (hour)));
            $(".minutes").html(Math.floor((distance % (hour)) / (minute)));
            $(".seconds").html(Math.floor((distance % (minute)) / second));

            console.log(distance);
  
          //do something later when date is reached
          if (distance < 0) {
            let headline = document.getElementById("headline"),
                countdown = document.getElementById("countdown"),
                content = document.getElementById("content");
            
            headline.innerHTML = 'Happy birthday! 🥳 🎉 🎂 <br> ';
            countdown.style.display = "none";
            content.innerHTML = "Selamat ulang tahun, semoga popo panjang umur, selalu bahagia, selalu diberkahi dan dilindungi oleh Allah SWT. Jangan lupa perbanyak ibadah. Jadi anak yang shalehah. Semoga kita selalu bisa sama-sama. Love popo 💖. Makan-makan jangan lupa :D";
  
            clearInterval(x);
          }
          //seconds
        }, 0)
  });
