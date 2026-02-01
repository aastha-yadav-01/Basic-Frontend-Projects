let isOpen = false;
    let btn = document.querySelector(".switch");
    let bulb = document.querySelectorAll(".light-bulb");
    btn.addEventListener("click",function(){
        if(isOpen){
            btn.classList.remove("on");
            bulb[0].classList.remove("bulbOn");
            bulb[1].classList.remove("bulbOn");
        }else{
            btn.classList.add("on");
            bulb[0].classList.add("bulbOn");
            bulb[1].classList.add("bulbOn");
        }
        isOpen = !isOpen;
    })
