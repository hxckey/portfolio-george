
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

function randomImage(){
    try{
        const url = 'https://api.unsplash.com/photos/random'
        fetch(url)
        .then(response =>response.json())
        .then(data => );
    } catch (err) {
        console.log(err);
    }
    };
}

generator.addEventListener('click', () => {
    console.log('You found the button!')
    randomImage()
})
