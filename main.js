 window.onload = init;
function init() {
    document.querySelector('#input')
        .addEventListener('keyup', handleTyping);
}

function handleTyping(event) {
    let userInput = event.target.value.toString();
    let answer = userInput;
            // myString will make sure we start every word starts of lowercase
    let myString = userInput.toLowerCase().split(' ');

            // we're using a loop to find the first letter in the word
            // i =0 means were we start
            // i < myString.length means where we end
            // i = i + 1 means how were incrementing 
    for(let i = 0; i < myString.length; i = i+1){
        myString[i] = myString[i].charAt(0).toUpperCase() + myString[i].slice(1);
    }

    document.querySelector('#changeme').innerText = myString.join(' ');


// if statement
// let i = 0;
   
//     if(userInput === ' ' ){
//         userInput[i].toUpperCase();

//     }
//     else {
        
//     }

//     document.querySelector('#changeme').innerText = answer;
// 
}

