// write your code here
/* instructions:
1) see all ramen images in the div#ramen-menu (display image)
2)click on image in #ramen-menu to see al the info about that ramen
    in the #ramen-detail div
3) create a new ramen using the new ramen-form, will diplay in #ramen-menu
duv but does not need to persist*/

fetch('http://localhost:3000/ramens')
    .then(resp => resp.json())
    .then(data => addRamen(data))

const ramenMenuDiv = document.querySelector('#ramen-menu')

function addRamen(ramenArr){
    ramenArr.forEach(ramen => {
        let ramenImg = document.createElement('img');
        ramenImg.src = ramen.image;
        ramenMenuDiv.appendChild(ramenImg);
    })
}
