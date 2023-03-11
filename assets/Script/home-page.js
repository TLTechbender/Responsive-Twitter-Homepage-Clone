
/* 
This is to keep the bar under the links in the headers active when it's clicked upon

*/

window.addEventListener('load', ()=>{
    button2.classList.remove('active-bottom');
    button1.classList.add('active-bottom');

});

/*The logic above shows the first header in an active state */



const button1= document.querySelector('.clicked-1')
const button2= document.querySelector('.clicked-2')

button1.addEventListener('click', ()=>{
    button2.classList.remove('active-bottom');
    button1.classList.add('active-bottom');
    
});


button2.addEventListener('click', ()=>{
    button1.classList.remove('active-bottom');
    button2.classList.add('active-bottom');
 });



/*I'm trying twitter's sticky navbar*/

const topbar = document.querySelector('.top-navbar');
const lowbar = document.querySelector('.bottom-navbar');
const lowbarText1 = document.querySelector('.clicked-1')
const lowbarText2 = document.querySelector('.clicked-2')

window.addEventListener('scroll', ()=>{
    topbar.classList.toggle('dissapear', window.scrollY >20);
    lowbar.classList.toggle('sticky', window.scrollY > 20.2);
    lowbarText1.classList.toggle('push-down', window.scrollY > 20.2);
    lowbarText2.classList.toggle('push-down', window.scrollY > 20.2);
});





 /*The logic below is for the accordion*/
/*I believe that there should be a more efficient way of doing this, 
it's just that I don't have the skills yet */


 const container1 =document.querySelector('.one') ;
 
 const container2 = document.querySelector('.two');
 
 const container3 = document.querySelector('.three');


 const hidden1 = document.querySelector('.hid-1');
 const hidden2 = document.querySelector('.hid-2');
 const hidden3 = document.querySelector('.hid-3');


/*The idea behind this is one div is clicked the others should immediately become
hidden*/

 container1.addEventListener('click',()=>{
/*Shows this*/
    container1.classList.toggle('reveal');
    hidden1.classList.toggle('show');

    /*hides the others*/
    container2.classList.remove('reveal');
    hidden2.classList.remove('show');
    container3.classList.remove('reveal');
    hidden3.classList.remove('show');


 });

 container2.addEventListener('click',()=>{
    /*Shows this*/
    container2.classList.toggle('reveal');
    hidden2.classList.toggle('show');
    /*hides the others*/
    container1.classList.remove('reveal');
    hidden1.classList.remove('show');
    container3.classList.remove('reveal');
    hidden3.classList.remove('show');

 });

 container3.addEventListener('click',()=>{
    /*Shows this*/
    container3.classList.toggle('reveal');
    hidden3.classList.toggle('show');

    /*hides the others*/
    container1.classList.remove('reveal');
    hidden1.classList.remove('show');
    container2.classList.remove('reveal');
    hidden2.classList.remove('show');
 });
 

 /*The logic below is to open and close the menu, the reason I'm implementing it this way is cos there's no animation
 involved on the real website */
  
 const menu = document.querySelector('.menu');
 function showMenu(){
menu.style.visibility='visible';
/*Disables scrolling when the menu is opened*/
scrollTop =
window.pageYOffset || document.documentElement.scrollTop;
scrollLeft =
window.pageXOffset || document.documentElement.scrollLeft,

    // if any scroll is attempted,
    // set this to the previous value
    window.onscroll = function() {
        window.scrollTo(scrollLeft, scrollTop);
    };
}
 

 function closeMenu(){
    menu.style.visibility='hidden';
    /*Enables scrolling when menu is closed*/
    window.onscroll = function() {};
/*This is another band aid solution to fix a bug I encountered, when I close the menu, I see that if any
of the accordion's menu was opened it would remain on the screen even after the menu is closed */
hidden1.classList.remove('show');
hidden2.classList.remove('show');
hidden3.classList.remove('show');
/*Added this line in case of any further bugs*/window.location.reload();
}



/*Takes me back to the top of the page */
function upTown(){
    document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  /*Different browsers and their wildings 😂 
*/
}


/*Another band aid solution to things a lil bit responsive*/
const leftSection = document.querySelector('.left-section');
const rightSection =document.querySelector('.right-section')
window.addEventListener('scroll', ()=>{
    leftSection.classList.toggle('bandAid-stick', window.scrollY >115);
     rightSection.classList.toggle('bandAid-stick', window.scrollY>105);
    /* 😂 😂 😂 */
 
});
    

