// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// async function skaiciausIvedimas(msg) {
//     return new Promise((resolve, reject) => {
//         rl.question(msg, data => {
//             resolve(parseInt(data));
//         });
//     });
// }

// async function tekstoIvedimas(msg) {
//     return new Promise((resolve, reject) => {
//         rl.question(msg, data => {
//             resolve(data);
//         });
//     });
// }

// async function main() {
    var zmogausPasirinkimas;
    var zaidimoPabaiga;
    var zmogausPergales = 0;
    var kompiuterioPergales = 0;
    var lygiosios = 0;
    var akmuo = 0;
    var popierius = 0;
    var zirkles = 0;

    console.log('--------------------- ZAIDIMO PRADZIA --------------------------')

        // var zmogausPasirinkimas = await tekstoIvedimas("Ivesk A/P/Z/X:");
        // zmogausPasirinkimas = 'A';

    document.querySelector('.player-score').textContent = `Your Score: 0`;
    document.querySelector('.pc-score').textContent = `Computer Score: 0`;

// ZAIDEJO PASIRINKIMAS
        document.querySelector('#paper').addEventListener('click', function () {
            document.querySelector('.player-pick').innerHTML = '<img src="./img/paper2-min.jpg">';
            zmogausPasirinkimas = 'P';
            blinkReset();
            checkWinner();
        });
        document.querySelector('#scisors').addEventListener('click', function () {
            document.querySelector('.player-pick').innerHTML = '<img src="./img/scisors-min.jpg">';
            zmogausPasirinkimas = 'Z';
            blinkReset();
            checkWinner();
        });
        document.querySelector('#stone').addEventListener('click', function () {
            document.querySelector('.player-pick').innerHTML = '<img src="./img/stone-min.jpg">';
            zmogausPasirinkimas = 'A';
            blinkReset();
            checkWinner();
        });
       

        setTimeout(function(){
        }, 300); 

        //RESET SCORE BLINK
        function blinkReset () {
            document.querySelector('.player-score').style = '';
            document.querySelector('.pc-score').style = '';
           
        }

// SCORE BLINK
function blink(x) {
    
    // document.querySelector(x).style = 'animation: blink 0.3s;';
    document.querySelector(x).style = 'background-color: #92ed14; transition: background-color 0.3s;';
  
    // document.querySelector(x).style = 'background-color: white; transition: background-color 1s;';
   

}
        
// LAIMETOJO NUSTATYMAS
function checkWinner() {


    // KOMPIUTERIO PASIRINKIMAS
    // var kompiuterioPasirinkimas = Math.trunc(Math.random() * 3 + 1);
    var kompiuterioPasirinkimas = 2;

    if (kompiuterioPasirinkimas === 1) {
        kompiuterioPasirinkimas = 'A';
        document.querySelector('.pc-pick').innerHTML = '<img src="./img/stone-min.jpg">';
    } else if (kompiuterioPasirinkimas === 2) {
        kompiuterioPasirinkimas = 'P';
        document.querySelector('.pc-pick').innerHTML = '<img src="./img/paper2-min.jpg">';
    } else {
        kompiuterioPasirinkimas = 'Z';
        document.querySelector('.pc-pick').innerHTML = '<img src="./img/scisors-min.jpg">';
    }



    console.log('Zmogaus pasirinkimas: ', zmogausPasirinkimas);
    // if (zmogausPasirinkimas != 'X') {
    //     console.log('Kompiuterio pasirinkimas: ', kompiuterioPasirinkimas);
    // }

    if (zmogausPasirinkimas === 'A' && kompiuterioPasirinkimas === 'Z') {
        console.log('Laimejo zmogus');
        blink('.player-score');
        zmogausPergales += 1;
        akmuo += 1;
        zirkles += 1;
    } else if (kompiuterioPasirinkimas === 'A' && zmogausPasirinkimas === 'Z') {
        console.log('Laimejo kompiuteris');
        blink('.pc-score');
        kompiuterioPergales += 1;
        akmuo += 1;
        zirkles += 1;
    } else if (zmogausPasirinkimas === 'P' && kompiuterioPasirinkimas === 'A') {
        console.log('Laimejo zmogus');
        blink('.player-score');
        zmogausPergales += 1;
        popierius += 1;
        akmuo += 1;
    } else if (kompiuterioPasirinkimas === 'P' && zmogausPasirinkimas === 'A') {
        console.log('Laimejo kompiuteris');
        blink('.pc-score');
        kompiuterioPergales += 1;
        popierius += 1;
        akmuo += 1;
    } else if (zmogausPasirinkimas === 'Z' && kompiuterioPasirinkimas === 'P') {
        console.log('Laimejo zmogus');
        blink('.player-score');
        zmogausPergales += 1;
        zirkles += 1;
        popierius += 1;
    } else if (kompiuterioPasirinkimas === 'Z' && zmogausPasirinkimas === 'P') {
        console.log('Laimejo kompiuteris');
        blink('.pc-score');
        kompiuterioPergales += 1;
        zirkles += 1;
        popierius += 1;
    } else if (zmogausPasirinkimas === kompiuterioPasirinkimas) {
        console.log('Lygiosios!');
        blink('.player-score');
        blink('.pc-score');
        lygiosios += 1;
        if (zmogausPasirinkimas === 'A') {
            akmuo += 2;
        } else if (zmogausPasirinkimas === 'P') {
            popierius += 2;
        } else if (zmogausPasirinkimas === 'Z') {
            zirkles += 2;
        }
    } 
    // else if (zmogausPasirinkimas === 'X') {
    //     console.log('Zaidimo pabaiga!');
    //     zaidimoPabaiga = 'X'
    // } else {
    //     console.log('Tokio pasirinkimo nera, prasom ivesti teisinga pasirinkima');
    // }
    // console.log('\n');
    

    document.querySelector('.player-score').textContent = `Your Score: ${zmogausPergales}`;
    // document.querySelector('.player-score').style = 'background-color: yellowgreen; transition: background-color 1s;';
    document.querySelector('.pc-score').textContent = `Computer Score: ${kompiuterioPergales}`;

    if (zmogausPasirinkimas === kompiuterioPasirinkimas) {
        document.querySelector('.player-score').textContent = `Draw!!!`;
        document.querySelector('.pc-score').textContent = `Draw!!!`;
    }
console.log('Zmogus laimejo: ', zmogausPergales);
console.log('Kompiuteris laimejo: ', kompiuterioPergales);
console.log('Lygiosios: ', lygiosios);
console.log('Akmuo pasirinktas: ', akmuo);
console.log('Popierius pasirinktas: ', popierius);
console.log('Zirkles pasirinktos: ', zirkles);
if (zmogausPergales > kompiuterioPergales) {
    console.log('Finalinis laimetojas: zmogus');
} else if (kompiuterioPergales > zmogausPergales) {
    console.log('Finalinis laimetojas: kompiuteris');
} else { console.log('Lygioios'); }
console.log('--------------------- ZAIDIMO PABAIGA --------------------------\n');

}


 // rl.close();
// }
// main();
