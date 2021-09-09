// //  write your code here:
// See all ramen images in the `div` with the id of `ramen-menu. 

// When the page loads, request the data from the server to get all the ramen objects. 

// Then, display the image for each of the ramen using an `img` tag inside the
// `#ramen-menu` div.



// - Click on an image from the `#ramen-menu` div and see all the info about that
//   ramen displayed inside the `#ramen-detail` div and where it says
//   `insert comment here` and `insert rating here`.




// - Create a new ramen after submitting the `new-ramen` form. 
//     The new ramen should be added to the`#ramen-menu` div. 
//     The new ramen does not need to persist; 
//     in other words, if you refresh the page, it's okay that the new ramen is no
//     longer on the page.


const RAMEN_URL = 'http://localhost:3000/ramens'

const ramenMenu = document.getElementById('ramen-menu');
const ramenDetails = document.getElementById('ramen-detail');
const ramenRating = document.getElementById('rating-display')
const ramenComment = document.getElementById('comment-display')
const ramenForm = document.getElementById('new-ramen')

const newRamenName = document.getElementById('new-name')
const newRamenRestaurant = document.getElementById('new-restaurant')
const newRamenImage = document.getElementById('new-image') //these constsÎ are to capture the 
const newRamenRating = document.getElementById('new-rating')
const newRamenComment = document.getElementById('new-comment')

//we need to cpature what the user types into the form
let captureFormData = (event) => {   
    event.preventDefault();
    let name = newRamenName.value
    let restuarant = newRamenRestaurant.value
    let image = newRamenImage.value
    let rating = newRamenRating.value
    let comment = newRamenComment.vlaue
    let newRamenObj = {
        "id": "sandbox",
      "name": name,
      "restaurant": restuarant,
      "image": image,
      "rating": rating,
      "comment": comment
    }  
    renderRamen(newRamenObj) ///We Can now just inject that new object we made into the render function by calling renderRamen()
}

let ramenFetch = (url) => {
    fetch(url) //this fetches data
    .then(response => response.json()) //this converts the data or response from url and turns it => into json data
    .then(json => renderRamensFactory(json)) //we now inject that into our factory function to render the json data
}

let renderRamensFactory = (jsonData) => {
    jsonData.map(ramen => renderRamen(ramen)) //we use .map to repeat an iteration over the array
    }


let renderRamen = (ramen) => {
    let ramenImg = document.createElement('img') //creat a variable by pulling the element
    ramenImg.src = ramen.image //injecting the src img into the .image child
    ramenImg.id = `ramen-${ramen.id}` //give it an id
    ramenImg.addEventListener('click', () => handleRamenClick(ramen)) //when the user clicks the img, start event function
    ramenMenu.appendChild(ramenImg)
}

let handleRamenClick = (ramen) => {
    ramenDetails.childNodes[1].src = ramen.image
    ramenDetails.childNodes[3].innerText = ramen.name
    ramenDetails.childNodes[5].innerText = ramen.restaurant
    ramenRating.innerText = ramen.rating //here I am just assigning 
    ramenComment.innerText = ramen.comment //here also

}

ramenForm.addEventListener('submit', captureFormData)
ramenFetch(RAMEN_URL);

