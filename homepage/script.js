const wave = document.getElementById('wave')
const name = document.getElementById('george')
const linkSpace = document.getElementById('links')


wave.addEventListener('mouseover', () => {
    wave.style.position = 'relative'
    wave.style.height = ''
    george.style.paddingTop = '0'
    george.style.paddingBottom = '10rem'
    george.style.fontSize = '5rem'
    wave.style.left = '-5'
    wave.style.transform = 'scaleY(2)'
})

wave.addEventListener('mouseleave', () => {
    wave.style.height = ''
    george.style.paddingTop = '10rem'
    george.style.paddingBottom = '0'
    george.style.fontSize = '7rem'
    wave.style.transform = 'scaleY(1)'
})