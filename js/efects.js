$(document).ready(function(){
    $('.modal').modal();
    $(".button-collapse").sideNav();
});


const myNav = document.querySelector("nav");
const mobileMenu = document.querySelector(".mobile-menu");
const hamburguerMenu = document.querySelector(".toggle-menu");
const body = document.querySelector("body");

const btnMobileMenu = document.querySelector(".button-collapse");
const btnAdvise = document.querySelector("#avisoprivacidadlink");
const btnCloseAdvise = document.querySelector("#closeAdvise");
const btnTop = document.querySelector(".btnTop");
const btnsLinkMobile = document.querySelectorAll('.linkMobile');
const btnCloseModalCot = document.querySelector('.closeModalCot');

initMobile();

window.addEventListener("scroll",() =>{
    if(window.scrollY <= 80){
        myNav.classList.remove("active");
        $(".myLogo").attr("src","img/logo.png");
    }else{
        myNav.classList.add("active");
        $(".myLogo").attr("src","img/logo_cyan.png");
    }
});

window.addEventListener("load",() =>{
    if(window.scrollY <= 80){
        myNav.classList.remove("active");
        $(".myLogo").attr("src","img/logo.png");
    }else{
        myNav.classList.add("active");
        $(".myLogo").attr("src","img/logo_cyan.png");
    }
});

window.addEventListener("scroll",() =>{
    const windowWidht = window.innerWidth;
    const windowHeight = window.innerHeight;
    if(windowWidht > 600){
        if(window.scrollY > windowHeight){
            btnTop.classList.add("active");
        } else{
            btnTop.classList.remove("active");
        }
    } 
});

btnMobileMenu.addEventListener("click",() =>{
    mobileMenu.classList.toggle("active");
    hamburguerMenu.classList.toggle("active");
    body.classList.toggle("active");
    if(!myNav.classList.contains("active")){
        myNav.classList.add("active");
    }
});

btnAdvise.addEventListener("click",() =>{
    $('#avisoprivacidad').modal('open');
});
btnCloseAdvise.addEventListener("click",() =>{
    $('#avisoprivacidad').modal('close');
});

btnTop.addEventListener("click", ()=>{
    window.scrollTo(0,0);
});

btnsLinkMobile.forEach((btnLinkMobile) => {
    btnLinkMobile.addEventListener("click", ()=>{
        mobileMenu.classList.toggle("active");
        hamburguerMenu.classList.toggle("active");
        body.classList.toggle("active");
    });
});

btnCloseModalCot.addEventListener("click",function(){
    $('#cotizacionside').sideNav('hide');
});

if(document.querySelector(".sectionExperience") != undefined && document.querySelector(".sectionExperience") != null){
    let project = 23;
    let factories = 10;
    let bussiness = 7;
    let i = 1;
    let j = 1;
    let k = 1;
    const txtProjects = document.querySelector(".projects");
    const txtFactories = document.querySelector(".factories");
    const txtBussiness = document.querySelector(".bussiness");
    let clockProjects = setInterval(function(){
        if(i <= project){
            txtProjects.innerHTML = i;
            i++;
        } else{
           clearInterval(clockProjects);
        }
    },100);
    let clockFactories = setInterval(function(){
        if(j <= factories){
            txtFactories.innerHTML = j;
            j++;
        } else{
           clearInterval(clockFactories);
        }
    },100);
    let clockBussiness = setInterval(function(){
        if(k <= bussiness){
            txtBussiness.innerHTML = k;
            k++;
        } else{
           clearInterval(clockBussiness);
        }
    },100);
}

function initMobile(){
    if(window.innerWidth < 992){
        const itemsEfectLeft = document.querySelectorAll(".fadeInRight");
        itemsEfectLeft.forEach((item) => {
            item.classList.remove("fadeInRight");
            item.classList.add("fadeInLeft");
        });
    }
    
}


new WOW().init();