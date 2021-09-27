
import { createApi } from '/unsplash-js'

const generator = document.getElementById('generator')
const randomURL = 'https://api.unsplash.com/photos'


const unsplash = createApi({
    accessKey: "3OOIocMsyGJHlyPQuL8HyPBGYgglRp6g976uDjVqzdw"
});

// function randomImage() {
//     unsplash.photos.getRandom
//     .then(result => {
//         if(result.errors) {
//             console.log('error: ', result.errors[0]);
//         } else {
//             const photo = result.response;
//         }
//     })
// };

function generateMotivator() {
    document.body.style.backgroundImage = `url('${data.results[Math.floor(Math.random() * 10)].urls.raw}')`;
}

function randomImage(){
    try{
        const url = 'https://api.unsplash.com/photos/random'
        fetch(url)
        .then(response =>response.json())
        .then(data => generateMotivator(data));
    } catch (err) {
        console.log(err);
    }
    };


generator.addEventListener('click', () => {
    console.log('You found the button!')
    randomImage()
})
