let slider = document.querySelector('.slider-contenedor');
let sliderInd = document.querySelectorAll('.slider-test');
let contador = 1;
let tamanioWidth = sliderInd[0].clientWidth;
let intervalo = 3000;

window.addEventListener("resize", function(){
    tamanioWidth = sliderInd[0].clientWidth;
})

setInterval(function tiempo(){
    slides();
}, intervalo);

function slides(){
    slider.style.transform = 'translate('+ (- tamanioWidth * contador)+'px)';
    slider.style.transition = 'transition 1s';
    contador++;
    if(contador == sliderInd.length){
        contador=0;
        setTimeout(function(){
            slider.style.transform = 'translate(0px)';
    slider.style.transition = 'transition 0s';
        })
    }
}