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

function startBar() {
    timerBar.classList.add('timer-before')
}

function timeEnd() {
    setTimeout(() => {gameArea.innerHTML = ''}, 60000)
}

function start() {
    gameArea.innerHTML = starText

    const gameBall1 = document.getElementById('ball1')
    const gameBall2 = document.getElementById('ball2')
    const gameBall3 = document.getElementById('ball3')
    const gameBallErro = document.getElementById('ballerro')
    const gameBallDp = document.getElementById('balldp')

    position(gameBall1)
    position(gameBall2)
    position(gameBall3)
    position(gameBallErro)
    position(gameBallDp)

    gameBall1.addEventListener('click', () => {position(gameBall1), addpoint()})
    gameBall2.addEventListener('click', () => {position(gameBall2), addpoint()})
    gameBall3.addEventListener('click', () => {position(gameBall3), addpoint()})
    gameBallErro.addEventListener('click', () => {position(gameBallErro), addpoint()})
    gameBallDp.addEventListener('click', () => {position(gameBallDp), addpoint()})
}

