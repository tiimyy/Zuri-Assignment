'use strict'
const slide = document.querySelector('.slide')
const images= document.querySelectorAll('.slide img');
///Buttons
const prevBtn= document.querySelector('#prevBtn');
const nextBtn=document.getElementById('nextBtn');


let counter=1;
const size=images[0].clientWidth;


slide.style.transform='translateX(' + (-size * counter) +'px)';

//Btn events
nextBtn.addEventListener("click",function(){
    if (counter>=images.length-1)return
    slide.style.transition='transform .2s ease-in-out';
    counter++;
    slide.style.transform='translateX(' + (-size * counter) +'px)';
    console.log('hi')
       }
    );
prevBtn.addEventListener("click",function(){
    if (counter<=0)return
counter--;
slide.style.transition='transform .4s ease-in-out';
slide.style.transform='translateX(' + (-size * counter) +'px)';
console.log('hi')
});
console.log(images)

slide.addEventListener('transitionend',function(){
    console.log(images[counter])
    if(images[counter].id ==='lastClone'){
        slide.style.transition='none';
        counter=images.length-2;
        slide.style.transform='translateX(' + (-size * counter) +'px)';
    }
    if(images[counter].id ==='firstClone'){
        slide.style.transition='none';
        counter=images.length-counter;
        slide.style.transform='translateX(' + (-size * counter) +'px)';
    }
})
   