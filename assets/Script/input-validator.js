
/*This file serves the purpose of validating the user's login details */ 





const inputs = document.getElementById("inputText");

const button = document.querySelector('.one');
const needs = document.querySelector('.needs');
/*The block of code above allows me to select the elements in my html that I want to perform the validation action on*/ 



button.disabled = true;
button.classList.add('hidden');
needs.classList.add('special');
/*The block above sets the default styles for the selected elements*/






inputs.addEventListener('input',()=> {
    const inputBox=document.querySelector('.inputBox')
    const inputChecker = document.querySelector('.inputChecker');
 
    const typicalEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const typicalNumber =   /^\d{11}$/;
       /*I don't  really understand regex that much, so most of the regex here is copied*/

 
 
 
       /*The block of code below is the logic that powers the entire validation process*/
    if(inputs.value.match(typicalEmail)){
        inputBox.classList.add('valid');
        inputBox.classList.remove('invalid');
        button.disabled=false;
        button.classList.remove('hidden');
        needs.classList.remove('special');
        inputs.style.border='1px solid green';
        inputChecker.innerHTML="Your Email Address is valid";
        let getInput = inputs.value;
        /*Hallelujah, it works
        I initially tried to export out the value of inputs, but it was laid in my mind to try use localStorage and it worked */
        localStorage.setItem('data', getInput);
        
        
        
        
    }
    else if(inputs.value.match(typicalNumber)){
        inputBox.classList.add('valid');
        inputBox.classList.remove('invalid');
        button.disabled=false;
        button.classList.remove('hidden');
        needs.classList.remove('special');
        inputs.style.border='1px solid green';
        inputChecker.innerHTML="Your Number is valid";
        let getInput = inputs.value;
        

    }

    
    
   else{
    
        inputBox.classList.add('invalid');
        inputBox.classList.remove('valid');
        inputs.style.border='1px solid red';
        inputChecker.innerHTML="Enter a worthy credential";
        button.disabled = true;
        button.classList.add('hidden');
        needs.classList.add('special');
    }


    console.log(localStorage.data);
});




