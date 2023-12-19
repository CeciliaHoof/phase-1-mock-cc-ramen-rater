// write your code here
/* advanced:
1)
3) Delete a ramen (you can add a "delete" button if you'd like,
or use an existing element to handle the delete action).
The ramen should be removed from the ramen-menu div, and 
should not be displayed in the ramen-detail div. No need to persist.*/

fetch('http://localhost:3000/ramens')
    .then(resp => resp.json())
    .then(data => {
        addRamen(data)
        addFirstRamen(data)})

const ramenMenuDiv = document.querySelector('#ramen-menu')
const ramenDetail = document.querySelector('#ramen-detail')
const detailImg = document.querySelector('.detail-image')
const detailName = document.querySelector('.name')
const detailRestaurant = document.querySelector('.restaurant')
const detailRating = document.querySelector('#rating-display')
const detailComment = document.querySelector('#comment-display')
const ramenForm = document.querySelector('#new-ramen')
const editForm = document.querySelector('#edit-ramen')
const deleteBtn = document.createElement('button')
deleteBtn.textContent = "DELETE THIS RAMEN"
ramenDetail.appendChild(deleteBtn)


function addFirstRamen(ramenArr){
    let ramenObj = ramenArr[0];
    detailImg.src = ramenObj.image;
    detailName.textContent = ramenObj.name;
    detailRestaurant.textContent = ramenObj.restaurant;
    detailRating.textContent = ramenObj.rating;
    detailComment.textContent = ramenObj.comment;
}

function addRamen(ramenArr){
    ramenArr.forEach(ramen => {
        const ramenImg = document.createElement('img');
        ramenImg.src = ramen.image;
        ramenImg.id = ramen.id
        ramenMenuDiv.appendChild(ramenImg);
        ramenImg.addEventListener('click', () => {
            detailImg.src = ramen.image;
            detailName.textContent = ramen.name;
            detailRestaurant.textContent = ramen.restaurant;
            detailRating.textContent = ramen.rating;
            detailComment.textContent = ramen.comment;
        })
    })
}

ramenForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const newRamenObj = {
        name : event.target.name.value,
        restaurant : event.target.restaurant.value,
        image : event.target.image.value,
        rating : event.target.rating.value,
        comment : event.target['new-comment'].value
    }
    addRamen([newRamenObj]); //change newRamenObj to array to avoid coding the following:
    // let newRamenImg = document.createElement('img');
    // newRamenImg.src = newRamenObj.image;
    // ramenMenuDiv.appendChild(newRamenImg);
    // newRamenImg.addEventListener('click', () => {
    //     detailImg.src = newRamenObj.image;
    //     detailName.textContent = newRamenObj.name;
    //     detailRestaurant.textContent = newRamenObj.restaurant;
    //     detailRating.textContent = newRamenObj.rating;
    //     detailComment.textContent = newRamenObj.comment;
    // })
})

editForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const editRating = e.target.rating.value;
    const editComment = e.target['edit-comment'].value;
    detailRating.textContent = editRating;
    detailComment.textContent = editComment;
})