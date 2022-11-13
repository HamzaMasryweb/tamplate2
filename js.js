
            let span = document.querySelector(".up")
            let shadow = document.querySelector(".header")


            window.onscroll = function () {
                // console.log(this.screenY)
                if (this.scrollY >= 100 ){
                    span.classList.add("right");
                    shadow.classList.add("shadow");
                }else{
                        span.classList.remove("right");
                        shadow.classList.remove("shadow");
                    }
                }
            
                span.onclick = function(){
                    window.scrollTo({
                        top: 0 ,
                        behavior: "smooth" ,
                    });
                }







let toggle = document.querySelector(".nav-toggle")
let nav = document.querySelector(".content-nav")


toggle.addEventListener("click" , ()=>{
    nav.classList.toggle("active");
});