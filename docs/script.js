var life = 5
var lifeBar = document.getElementById('life')
var lifeVar = lifeBar.offsetWidth

let gameTimer

const timerBar = document.getElementById('timerBar')

const pontos = document.getElementById('pontos')
const pontosFinal = document.getElementById('finalPontos')

const starText = `
    <div class="ballpoint" id="ball1"></div>
    <div class="ballpoint" id="ball2"></div>
    <div class="ballpoint" id="ball3"></div>
    <div class="ballerro" id="ballerro"></div>
    <div class="balldp" id="balldp"></div>
`

const restart = `
    <div class="restart">
        <div class="pontusfinais">
            <h3>Sua pontuação na ultima rodado foi:</h3>
            <p id="finalPontos"></p>
        </div>
        <button onclick="start(), startBarTimer(), timeGame(), dbBall(), zerarPontuaçao(), encherVida()">Restart</button>
    </div>
`

const gameArea = document.getElementById('game')
const largura = gameArea.offsetWidth
const altura = gameArea.offsetHeight

function randoMedidas(value) {
    return Math.floor(Math.random() * (value - 100 + 1))
}

function position(ballClick) {
    ballClick.style.top = randoMedidas(altura) + 'px'
    ballClick.style.left = randoMedidas(largura) + 'px'
}

function zerarPontuaçao() {
    pontos.innerHTML = "0"
}

function addpoint() {
    let valuePontos = parseInt(pontos.innerHTML)
    pontos.innerHTML = valuePontos + 100
}

function addDoublepoint() {
    let valuePontos = parseInt(pontos.innerHTML)
    pontos.innerHTML = valuePontos + 500
}


function startBarTimer() {
    timerBar.classList.add('timer-before')
}

function stopBarTimer() {
    timerBar.classList.remove('timer-before')
}

function viewPontos() {
    pontosFinal.innerHTML = pontos
}

function timeGame() {
    gameTimer = setTimeout(() => {
        gameArea.innerHTML = restart,
        stopBarTimer()
        viewPontos()
    }, 60000)
}

function stopGameTimer() {
    clearTimeout(gameTimer);
}

function encherVida() {
    lifeBar.style.width = 200 + 'px'
}

function verificarLife() {
    if (life === 0) {
        gameArea.innerHTML = restart,
        stopGameTimer(),
        stopBarTimer()
        viewPontos()
    } else {
        console.log('continuar game')
    }
}

function errou() {
    life -= 1
    lifeVar -= 40
    lifeBar.style.width = lifeVar + 'px'
}

function timeToClickDp(gameBallDp) {
    setTimeout(() => {gameBallDp.style.display = 'none', position(gameBallDp), dpBallReloading(gameBallDp)}, 4500)

}

function dbBall() {
    const gameBallDp = document.getElementById('balldp')
    position(gameBallDp)
    gameBallDp.style.display = 'none'

    setTimeout(() => {
        gameBallDp.style.display = 'block'
        timeToClickDp(gameBallDp)
        gameBallDp.addEventListener('click', () => {
            addDoublepoint()
            dpBallReloading(gameBallDp)
        })
    }, 6000)
}

function dpBallReloading(gameBallDp) {
    position(gameBallDp)
    if (gameBallDp.style.display === 'block') {
        gameBallDp.style.display = 'none'
    } else {
        console.log('bolinha bala')
    }
    setTimeout(() => {
        gameBallDp.style.display = 'block',
        timeToClickDp(gameBallDp)
    }, 8000)
}

function start() {
    gameArea.innerHTML = starText;

    const gameBall1 = document.getElementById('ball1')
    const gameBall2 = document.getElementById('ball2')
    const gameBall3 = document.getElementById('ball3')
    const gameBallErro = document.getElementById('ballerro')

    position(gameBall1)
    position(gameBall2)
    position(gameBall3)
    position(gameBallErro)

    function resetTimer(ball) {
        clearTimeout(ball.timer);
        ball.timer = setTimeout(() => {
            position(ball);
            resetTimer(ball);
        }, 4500);
    }

    resetTimer(gameBall1)
    resetTimer(gameBall2)
    resetTimer(gameBall3)
    resetTimer(gameBallErro)

    gameBall1.addEventListener('click', () => {
        position(gameBall1)
        addpoint()
        resetTimer(gameBall1)
    })
    gameBall2.addEventListener('click', () => {
        position(gameBall2)
        addpoint()
        resetTimer(gameBall2)
    })
    gameBall3.addEventListener('click', () => {
        position(gameBall3)
        addpoint()
        resetTimer(gameBall3)
    })
    gameBallErro.addEventListener('click', () => {
        position(gameBallErro)
        errou()
        verificarLife()
        resetTimer(gameBallErro)
    })
}

