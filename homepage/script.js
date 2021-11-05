const wave = document.getElementById('wave')
const name = document.getElementById('george')

wave.addEventListener('mouseenter', () => {
    wave.style.height = '80%'
    george.style.paddingTop = '0'
})

wave.addEventListener('mouseleave', () => {
    wave.style.height = ''
    george.style.paddingTop = '10rem'
})