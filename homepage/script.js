const wave = document.getElementById('wave')
const name = document.getElementById('george')
const linkSpace = document.getElementById('wave-section')
let about = document.getElementById('about')
let projects = document.getElementById('projects');


wave.addEventListener('mouseover', () => {
    wave.style.position = 'relative'
    wave.style.height = ''
    george.style.paddingTop = '0'
    george.style.paddingBottom = '10rem'
    george.style.fontSize = '5rem'
    wave.style.left = '-5'
    wave.style.transform = 'scaleY(2)'
    showLinks();
})

wave.addEventListener('mouseleave', () => {
    wave.style.height = ''
    george.style.paddingTop = '10rem'
    george.style.paddingBottom = '0'
    george.style.fontSize = '7rem'
    wave.style.transform = 'scaleY(1)'
    hideLinks();
})

const showLinks = () => {
    projects.style.display = 'inline-block'
    about.style.display = 'inline-block'
    projects.style.transform = 'scaleX(1.6)';
    about.style.transform = 'scaleX(1.6)';
}

const hideLinks = () => {
    projects.style.display = 'none'
    about.style.display = 'none'
}