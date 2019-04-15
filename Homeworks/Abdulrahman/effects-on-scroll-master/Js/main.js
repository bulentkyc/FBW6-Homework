// ----- Header Style -----
let header = document.getElementById('header');
let logo = document.querySelector('.logo');
let y;

function headerStyle(){

    y = window.pageYOffset;
    if(y > 220){
        header.style.height = '70px';
        logo.style.left ='10%';
        logo.style.fontSize = '30px';
    } else{
        header.style.height = '120px';
        logo.style.left ='50%';
        logo.style.fontSize = '40px';
    }
}
window.addEventListener('scroll', headerStyle);
// window.onscroll = headerStyle();
// ----------------------------------------------

// ----- Intro Style -----
let h1 = document.getElementById('intro-h1');
let p = document.getElementById('intro-p');

function introStyle(){

    h1.style.left ='10%';
    p.style.left ='10%';
}
window.onload = introStyle();
// ---------------------------------------------------

// ----- Services Style -----
let figure = document.querySelectorAll('figure');

/* function servicesStyle(){

    y = window.pageYOffset;
    if(y > 320){
        for(i = 0; i < figure.length; i++){
            figure[i].style.transform = 'translateY(0px)';
            figure[i].style.transition = `transform .5s ${i*1/2}s`
        }
    }else{
        for(i = 0; i < figure.length; i++){
            figure[i].style.transform = 'translateY(400px)';
            figure[i].style.transition = `transform .5s`
        }
    }
}
window.addEventListener('scroll', servicesStyle); */

//  Ahmad a way

function servicesStyle(){

    const services = document.getElementById('services').getBoundingClientRect().top;
    if(services < window.innerHeight/2){
        for(i = 0; i < figure.length; i++){
            figure[i].style.transform = 'translateY(0px)';
            figure[i].style.transition = `transform .25s ${i*1/4}s`
        }
    }else{
        for(i = 0; i < figure.length; i++){
            figure[i].style.transform = 'translateY(400px)';
            figure[i].style.transition = `transform .25s`
        }
    }
}
window.addEventListener('scroll', servicesStyle);

// ----------------------------------------------------------------

// ----- About Style -----
let img = document.getElementById('img');
let text = document.getElementById('text');

function aboutUsStyle(){
    const aboutUs = document.getElementById('about-us').getBoundingClientRect().top;
    if(aboutUs < window.innerHeight/2){
        img.style.transform = 'translateX(0)';
        text.style.transform = 'translateX(0)';
    }else{
        img.style.transform = 'translateX(-1000px)';
        text.style.transform = 'translateX(1000px)';
    }
}
window.addEventListener('scroll', aboutUsStyle);

// -------------------------------------------------------------------------

// ----- Footer Style -----
let aTop = document.getElementById('top');

function topStyle(){
    y = window.pageYOffset;
    if(y > 300){
        aTop.style.display = 'block';
    } else{
        aTop.style.display = 'none';
    }
}
window.addEventListener('scroll', topStyle);