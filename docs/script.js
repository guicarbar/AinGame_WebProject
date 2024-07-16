var life = 5
var lifeBar = document.getElementById('life')

const starText = `
    <div class="ballpoint" id="ball1"></div>
    <div class="ballpoint" id="ball2"></div>
    <div class="ballpoint" id="ball3"></div>
    <div class="ballerro" id="ballerro"></div>
    <div class="balldp" id="balldp"></div>
`

const timerBar = document.getElementById('timerBar')
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

function addpoint() {
    const pontos = document.getElementById('pontos')
    const valuePontos = parseInt(pontos.innerHTML)
    pontos.innerHTML = valuePontos + 100
}

function addDoublepoint() {
    const pontos = document.getElementById('pontos');
    const valuePontos = parseInt(pontos.innerHTML);
    pontos.innerHTML = valuePontos + 500
}

function startBar() {
    timerBar.classList.add('timer-before')
}

function timeEnd() {
    setTimeout(() => {
        gameArea.innerHTML = ''
    }, 60000)
}

function verificarLife() {
    if (life === 0) {
        gameArea.innerHTML = ''
    } else {
        console.log('continuar game')
    }
}

function errou() {
    life -= 1
    let lifeVar = lifeBar.offsetWidth
    lifeVar -= 40
    lifeBar.style.width = lifeVar + 'px'
}

function dbBall() {
    const gameBallDp = document.getElementById('balldp');
    position(gameBallDp)
    gameBallDp.style.display = 'none'

    setTimeout(() => {
        gameBallDp.style.display = 'block'
        gameBallDp.addEventListener('click', () => {
            addDoublepoint()
            dpBallReloading(gameBallDp);
        });
    }, 5000)
}

function timeToClick(ball) {
    function resetTimer() {
        clearTimeout(ball.timer)
        ball.timer = setTimeout(() => {
            position(ball)
            resetTimer()
        }, 4500)
    }
    resetTimer()
}

function dpBallReloading(gameBallDp) {
    position(gameBallDp)
    if (gameBallDp.style.display === 'block') {
        gameBallDp.style.display = 'none'
    } else {
        console.log('bolinha bala')
    }
    setTimeout(() => {
        gameBallDp.style.display = 'block'
    }, 7000)
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
        clearTimeout(ball.timer)
        ball.timer = setTimeout(() => {
            position(ball)
            resetTimer(ball)
        }, 4500)
    }

    gameBall1.addEventListener('click', () => {
        position(gameBall1)
        addpoint()
        resetTimer(gameBall1)
    });
    gameBall2.addEventListener('click', () => {
        position(gameBall2)
        addpoint()
        resetTimer(gameBall2)
    });
    gameBall3.addEventListener('click', () => {
        position(gameBall3)
        addpoint()
        resetTimer(gameBall3)
    });
    gameBallErro.addEventListener('click', () => {
        position(gameBallErro)
        errou()
        verificarLife()
        resetTimer(gameBallErro)
    });
}