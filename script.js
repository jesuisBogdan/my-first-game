'use strict';
/*
console.log( document.querySelector('.message').textContent)
document.querySelector('.message').textContent = 'Numarul Corect!'

document.querySelector('.number').textContent = 15;
document.querySelector('.score').textContent = 17;

document.querySelector('.guess').value=23
console.log( document.querySelector('.guess').value);

*/

let numarSecret = Math.floor(Math.random() * 20) + 1
let scorul = 20;
let highscore = 0;
let trisat = 25;

const mesajul = mesaj => {
    document.querySelector('.message').textContent = mesaj
}
const numarul = numar => {
    document.querySelector('.number').textContent = numar
}
const highscoreFunc = scor => {
    document.querySelector('.highscore').textContent = scor
}
//daca vrei sa trisezi
// document.querySelector('.number').textContent = numarSecret;


document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess);

    //cand nu pui nimic
    if(!guess) {
        // document.querySelector('.message').textContent = 'Nu ai pus un numar...'
        mesajul('Nu ai pus un numar...')
        //cand trisezi
    }  else if(guess === trisat){
        // document.querySelector('.message').textContent = 'JackPooot!!!💦'
        mesajul('JackPooot!!!💦')
        if(scorul > highscore ){
            highscore = 100;
            // document.querySelector('.highscore').textContent = highscore
            highscoreFunc(highscore)
            // document.querySelector('.number').textContent = '🎩'
            numarul('🎩')
            }
            document.querySelector('body').style.backgroundColor = '#00bfff';
        //cand castigi
    } else if(guess === numarSecret){
        // document.querySelector('.message').textContent = 'Ai ghicit numarul Corect! Uraaaa 🥂'
        mesajul('Ai ghicit numarul Corect! Uraaaa 🥂')
        numarul(numarSecret)
        if(scorul > highscore ){
        highscore = scorul;
        // document.querySelector('.highscore').textContent = highscore
        highscoreFunc(highscore)
        }

        
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem';

        
        //facut mai curat
    } else if(guess !== numarSecret){
        if(scorul > 1){

            // document.querySelector('.message').textContent = guess > numarSecret ? 'Prea mare nr ales!👆' : 'Prea mic nr ales!👇'
            mesajul(guess > numarSecret ? 'Prea mare nr ales!👆' : 'Prea mic nr ales!👇')
            scorul--;
                document.querySelector('.score').textContent = scorul;
            } else{
                // document.querySelector('.message').textContent = 'Ai Pierdut!😭 Nu te descuraja. Data viitoare o sa reusesti!'
                mesajul('Ai Pierdut!😭 Nu te descuraja. Data viitoare o sa reusesti!')
                document.querySelector('.score').textContent = 0;
            }
    }
})
//     //cand nr e prea mare
//     else if(guess > numarSecret) {
//         if(scorul > 1){

//         document.querySelector('.message').textContent = 'Prea mare nr ales!👆'
//         scorul--;
//             document.querySelector('.score').textContent = scorul;
//         } else{
//             document.querySelector('.message').textContent = 'Ai Pierdut!😭 Nu te descuraja. Data viitoare o sa reusesti!'
//             document.querySelector('.score').textContent = 0;
//         }
//         //cand nr e prea mic
//     }  else if (guess < numarSecret) {
//         if(scorul > 1){

//             document.querySelector('.message').textContent = 'Prea mic nr ales!👇'
//             scorul--;
//                 document.querySelector('.score').textContent = scorul;
//             } else{
//                 document.querySelector('.message').textContent = 'Ai Pierdut!😭 Nu te descuraja. Data viitoare o sa reusesti!'
//                 document.querySelector('.score').textContent = 0;
//             }
//         document.querySelector('.score').textContent = scorul ;

//     } 
// })


document.querySelector('.again').addEventListener('click', function(){
    scorul = 20;
    numarSecret = Math.floor(Math.random() * 20) + 1

    // document.querySelector('.message').textContent = 'Incepe sa ghicesti...'
    mesajul('Incepe sa ghicesti...')
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = scorul;
    // document.querySelector('.number').textContent = '?';
    numarul('?');
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem';
})
