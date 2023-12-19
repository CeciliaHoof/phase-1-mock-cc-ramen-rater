// write your code here
/* instructions:
1) 
2) 
3) create a new ramen using the new ramen-form, will diplay in #ramen-menu
duv but does not need to persist*/

fetch('http://localhost:3000/ramens')
    .then(resp => resp.json())
    .then(data => {addRamen(data)
        addFirstRamen(data)})

const ramenMenuDiv = document.querySelector('#ramen-menu')
const detailImg = document.querySelector('.detail-image')
const detailName = document.querySelector('.name')
const detailRestaurant = document.querySelector('.restaurant')
const ramenForm = document.querySelector('#new-ramen')
//console.log(ramenForm)

function addFirstRamen(ramenArr){
    let ramenObj = ramenArr[0];
    detailImg.src = ramenObj.image;
    detailName.textContent = ramenObj.name;
    detailRestaurant.textContent = ramenObj.restaurant;
}

function addRamen(ramenArr){
    ramenArr.forEach(ramen => {
        let ramenImg = document.createElement('img');
        ramenImg.src = ramen.image;
        ramenMenuDiv.appendChild(ramenImg);
        ramenImg.addEventListener('click', () => {
            detailImg.src = ramen.image;
            detailName.textContent = ramen.name;
            detailRestaurant.textContent = ramen.restaurant;
        })
    })
}

ramenForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const newName = event.target.name.value;
    const newRestaurent = event.target.restaurant.value;
    const newImg = event.target.image.value;
    const newRamenObj = {
        name : newName,
        restaurant : newRestaurent,
        image : newImg,
    }
    let newRamenImg = document.createElement('img');
    newRamenImg.src = newRamenObj.image;
    ramenMenuDiv.appendChild(newRamenImg);
    newRamenImg.addEventListener('click', () => {
        detailImg.src = newRamenObj.image;
        detailName.textContent = newRamenObj.name;
        detailRestaurant.textContent = newRamenObj.restaurant;
    })
})