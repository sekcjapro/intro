document.addEventListener('DOMContentLoaded', function(){
    let img = document.querySelector('img');
    let menuLinks = document.querySelectorAll('nav a');
    img.addEventListener('click',function(){
        let random = Math.floor(Math.random() * 360 + 1);
        this.style.filter= `hue-rotate(${random}deg)`;
        menuLinks.forEach(link=>{
            link.style.filter= `hue-rotate(${random}deg)`;
        })
    })
}   
)
