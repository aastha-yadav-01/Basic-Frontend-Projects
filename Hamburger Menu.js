let hamburger = document.querySelector(".hamburger");
    let isClicked = false;
    hamburger.addEventListener('click',function(){
        if(isClicked)
            hamburger.classList.remove("active");
        else   
            hamburger.classList.add('active');
        isClicked = !isClicked
    })
