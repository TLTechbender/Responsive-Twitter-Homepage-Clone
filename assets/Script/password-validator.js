/*This file serves the purpose of validating the inputed password*/

const password = document.getElementById("passwordDetail");
const loginDetail = document.getElementById('loginDetail');
const button = document.querySelector('.actionBtn');
const bar = document.querySelector('.bar')
button.disabled =true;
button.classList.add('hidden');
bar.classList.add('special');
const loginBarContainer = document.querySelector('.loginBarContainer');

loginDetail.value= localStorage.data; /*The value of localStorage is globally accessible*/
const passwordLabel= document.querySelector('.passwordLabel');
passwordLabel.classList.add('blind');
 


password.addEventListener('input',()=>{

if(password.value.length>=3){
button.disabled=false;
button.classList.remove('hidden');
bar.classList.remove('special');
}

else{
    button.disabled =true;
button.classList.add('hidden');
bar.classList.add('special');
}

});




 
