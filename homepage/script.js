const wave = document.getElementById('wave')
const name = document.getElementById('george')

wave.addEventListener('mouseover', () => {
    wave.style.height = '80%'
    george.style.paddingTop = '0'
    george.style.fontSize = '5rem'
})

wave.addEventListener('mouseleave', () => {
    wave.style.height = ''
    george.style.paddingTop = '10rem'
    george.style.fontSize = '7rem'
})