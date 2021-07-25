
    var zmogausPasirinkimas;
    var zaidimoPabaiga;
    var zmogausPergales = 0;
    var kompiuterioPergales = 0;
    var lygiosios = 0;
    var akmuo = 0;
    var popierius = 0;
    var zirkles = 0;

    document.querySelector('.player-score').textContent = `Your Score: 0`;
    document.querySelector('.pc-score').textContent = `Computer Score: 0`;

// CLOSE GAME WINDOW
    function close_window() {
        close();
    }

// CLOSE GAME
    document.querySelector('.close').addEventListener('click', function(){
        document.querySelector('#zmogus-laimejo').textContent = `Your wins: ${zmogausPergales}`;
        document.querySelector('#kompiuteris-laimejo').textContent = `Computer wins: ${kompiuterioPergales}`;
        document.querySelector('#lygiosios').textContent = `Draws: ${lygiosios}`;
        document.querySelector('#akmuo-pasirinktas').textContent = `Stone total: ${akmuo}`;
        document.querySelector('#popierius-pasirinktas').textContent = `Paper total: ${popierius}`;
        document.querySelector('#zirkles-pasirinktos').textContent = `Scisors total: ${zirkles}`;
        document.querySelector('.navigation').style = 'display: none;';
        document.querySelector('.results').style = 'display: inline-block;'
    
        if (zmogausPergales > kompiuterioPergales) {
            document.querySelector('#finalinis-laimetojas').textContent = `You Win!!!`;
        } else if (kompiuterioPergales > zmogausPergales) {
            document.querySelector('#finalinis-laimetojas').textContent = `You Lose!!!`;
        } else { 
            document.querySelector('#finalinis-laimetojas').textContent = `Draw!!!`;
        }
    });

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
        document.querySelector('.player-pick').innerHTML = '<img src="./img/stone3-min.jpg">';
        zmogausPasirinkimas = 'A';
        blinkReset();
        checkWinner();
    });

//RESET SCORE BLINK
    function blinkReset () {
        document.querySelector('.player-score').style = '';
        document.querySelector('.pc-score').style = '';
        
    }

// SCORE BLINK
function blink(x) {
    document.querySelector(x).style = 'background-color: #92ed14; transition: background-color 0.3s;';
}
        
// LAIMETOJO NUSTATYMAS
function checkWinner() {

    // KOMPIUTERIO PASIRINKIMAS
    var kompiuterioPasirinkimas = Math.trunc(Math.random() * 3 + 1);

    if (kompiuterioPasirinkimas === 1) {
        kompiuterioPasirinkimas = 'A';
        document.querySelector('.pc-pick').innerHTML = '<img src="./img/stone3-min.jpg">';
    } else if (kompiuterioPasirinkimas === 2) {
        kompiuterioPasirinkimas = 'P';
        document.querySelector('.pc-pick').innerHTML = '<img src="./img/paper2-min.jpg">';
    } else {
        kompiuterioPasirinkimas = 'Z';
        document.querySelector('.pc-pick').innerHTML = '<img src="./img/scisors-min.jpg">';
    }

    if (zmogausPasirinkimas === 'A' && kompiuterioPasirinkimas === 'Z') {
        blink('.player-score');
        zmogausPergales += 1;
        akmuo += 1;
        zirkles += 1;
    } else if (kompiuterioPasirinkimas === 'A' && zmogausPasirinkimas === 'Z') {
        blink('.pc-score');
        kompiuterioPergales += 1;
        akmuo += 1;
        zirkles += 1;
    } else if (zmogausPasirinkimas === 'P' && kompiuterioPasirinkimas === 'A') {
        blink('.player-score');
        zmogausPergales += 1;
        popierius += 1;
        akmuo += 1;
    } else if (kompiuterioPasirinkimas === 'P' && zmogausPasirinkimas === 'A') {
        blink('.pc-score');
        kompiuterioPergales += 1;
        popierius += 1;
        akmuo += 1;
    } else if (zmogausPasirinkimas === 'Z' && kompiuterioPasirinkimas === 'P') {
        blink('.player-score');
        zmogausPergales += 1;
        zirkles += 1;
        popierius += 1;
    } else if (kompiuterioPasirinkimas === 'Z' && zmogausPasirinkimas === 'P') {
        blink('.pc-score');
        kompiuterioPergales += 1;
        zirkles += 1;
        popierius += 1;
    } else if (zmogausPasirinkimas === kompiuterioPasirinkimas) {
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

    document.querySelector('.player-score').textContent = `Your Score: ${zmogausPergales}`;
    document.querySelector('.pc-score').textContent = `Computer Score: ${kompiuterioPergales}`;

    if (zmogausPasirinkimas === kompiuterioPasirinkimas) {
        document.querySelector('.player-score').textContent = `Draw!!!`;
        document.querySelector('.pc-score').textContent = `Draw!!!`;
    }

}
