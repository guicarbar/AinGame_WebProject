const starText = `
    <div class="ballpoint" id="ball1" onclick="position(gameBall1)"></div>
    <div class="ballpoint" id="ball2" onclick="position(gameBall2)"></div>
    <div class="ballpoint" id="ball3" onclick="position(gameBall3)"></div>
`

const redBall = `<div class="ballerro" id="ballerro" onclick="position(gameBallerro)"></div>`
const especialBall = `<div class="balldp" id="balldp" onclick="position(gameballdp)"></div>`

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

function start() {
    gameArea.innerHTML = starText
    
    const gameBall1 = document.getElementById('ball1')
    const gameBall2 = document.getElementById('ball2')
    const gameBall3 = document.getElementById('ball3')
    const gameBallErro = document.getElementById('ballerro')
    const gameballDp = document.getElementById('balldp')
    
    gameBall1.addEventListener('click', () => position(gameBall1))
    gameBall2.addEventListener('click', () => position(gameBall2))
    gameBall3.addEventListener('click', () => position(gameBall3))
    gameBallErro.addEventListener('click', () => position(gameBallErro))
    gameballDp.addEventListener('click', () => position(gameballDp))

    position(gameBall1)
    position(gameBall2)
    position(gameBall3)
    timerRedBall()
}

function redBallInput() {
    var html = gameArea.innerHTML

    gameArea.innerHTML = html + redBall
}

function timerRedBall() {
    setTimeout(redBallInput(), 8000)
}