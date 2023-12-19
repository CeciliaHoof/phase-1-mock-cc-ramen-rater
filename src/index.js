// write your code here
/* instructions:
1) 
2) 
3) create a new ramen using the new ramen-form, will diplay in #ramen-menu
duv but does not need to persist*/

fetch('http://localhost:3000/ramens')
    .then(resp => resp.json())
    .then(data => addRamen(data))

const ramenMenuDiv = document.querySelector('#ramen-menu')
const detailImg = document.querySelector('.detail-image')
const detailName = document.querySelector('.name')
const detailRestaurant = document.querySelector('.restaurant')

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