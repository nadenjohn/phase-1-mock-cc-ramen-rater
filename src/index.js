// write your code here
const ramenMenu = document.querySelector("#ramen-menu");


const ramenForm = document.querySelector("#new-ramen")



ramenForm.addEventListener("submit", function(e) {
    e.preventDefualt(e);

    const name = document.querySelector('#name-input').value
    const restaurant= document.querySelector('#restaurant-input').value
    const image= document.querySelector('#image-input').value
    const rating= document.querySelector('#rating-input').value
    const comment= document.querySelector('#comment-input').value

    const newRamen = {
        id: ??,
        name:
    }
})










function getRamen (){
    fetch('http://localhost:3000/ramens')
    .then(function(resp) {
        return resp.json()
    })
    .then(function(ramen){
        ramen.forEach(function(ramen){
            renderRamen(ramen)
        })
    })
}

getRamen()

function renderRamen(soup) {
    const ramenCard = document.createElement("div");
        ramenCard.id = `ramen-${soup.id}`
        ramenCard.className = "ramen-card"
    
    const ramenImg = document.createElement("image")
        ramenImg.src = soup.image
        ramenImg.alt = `${soup.name} image`
    
    const ramenName = document.createElement("h2")
        ramenName.textContent = soup.name
    
    const ramenRest = document.createElement("h3")
        ramenRest.textContent = soup.restaurant
    
    const ramenRating = document.createElement("span")
        ramenRating.textContent = soup.rating
    
    const ramenComment = document.createElement("h3")
        ramenComment.textContent = soup.comment

ramenMenu.append(ramenCard, ramenRating, ramenComment)
ramenCard.append(ramenImg, ramenName, ramenRest)
}