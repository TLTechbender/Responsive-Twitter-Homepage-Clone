
window.addEventListener('load', ()=>{
    setTimeout(
        function show(event){
            document.getElementById('popup1').classList.add('show-popup1');   /*I was running into errors so I had to declare it like this*/
        },2000
    );
    
});


const showPage =document.querySelector('.signup-container');

document.querySelector('#actionBtn').addEventListener("click", function(){
    const hidepopup = document.getElementById('popup1')
    hidepopup.style.display='none';
   
    showPage.style.visibility="visible";
});


const showPoppers = document.querySelector('.popup2');
function pop(){
showPoppers.classList.add('show-popup2');
showPage.style.visibility="hidden";
}
 
document.querySelector('#cancel').addEventListener("click", function() {
 showPoppers.classList.remove('show-popup2');
showPage.style.visibility="visible";
//It seems onClick doesn't work for popup buttons;
});
