let tracksObj = {
    track1 : {
        name: "Strictly for the Music",
        coverArt: "Strictly4theMusicLogo.jpg",
        price: 1.00,
        inCart: false,
    },
    track2 : {
        name: "I Got You",
        coverArt: "Strictly4theMusicLogo.jpg",
        price: 1.00,
        inCart: false,
    }
}

let shoppingCartObj = {
    items: 0,
    totalPrice: 0.00
}

const tracks = document.getElementsByClassName("beatContainer") 
console.log(tracks.length)

// For loop loads the titles and prices for every track

for(let i=1; i<=tracks.length; i++) {
    window[`track${i}`] =  document.getElementById(`track${i}`)
    window[`track${i}Title`] = window[`track${i}`].querySelector(".titleContainer").querySelector(".title").innerText = tracksObj[`track${i}`].name
    window[`track${i}Price`] = window[`track${i}`].querySelector(".priceContainer").querySelector(".price").innerText = `$${tracksObj[`track${i}`].price}.00`

}




// let track1Title = track1.querySelector(".titleContainer").querySelector(".title").innerText = tracksObj.track1.name
// let track1Price = track1.querySelector(".priceContainer").querySelector(".price").innerText = `$${tracksObj.track1.price}.00`

// let track2Title = track2.querySelector(".titleContainer").querySelector(".title").innerText = tracksObj.track2.name
// let track2Price = track2.querySelector(".priceContainer").querySelector(".price").innerText = `$${tracksObj.track2.price}.00`
let totalItems = document.getElementById("totalItems")
const addItemButton = document.getElementsByClassName("addToCartContainer") 

function printID() {

    let id = this.id

    id = id[id.length-1]
    if (tracksObj[`track${id}`].inCart === false) {
        window[`track${id}`].querySelector(".addToCartContainer").querySelector(".addToCartIcon").innerHTML= '<i class="fas fa-times fa-3x"></i>'
        window[`track${id}`].querySelector(".addToCartContainer").querySelector(".addToCartText").innerText = "Remove"
    shoppingCartObj.totalPrice += tracksObj[`track${id}`].price
    totalPrice.innerText=`$${shoppingCartObj.totalPrice}.00`
    shoppingCartObj.items++
    totalItems.innerText=shoppingCartObj.items 
    } else {
        window[`track${id}`].querySelector(".addToCartContainer").querySelector(".addToCartIcon").innerHTML= '<i class="fas fa-shopping-cart fa-3x"></i>'
        window[`track${id}`].querySelector(".addToCartContainer").querySelector(".addToCartText").innerText = "Add to Cart"
        shoppingCartObj.totalPrice -= tracksObj[`track${id}`].price 
        totalPrice.innerText=`$${shoppingCartObj.totalPrice}.00`
        shoppingCartObj.items--
        totalItems.innerText=shoppingCartObj.items 
    }
    tracksObj[`track${id}`].inCart = !tracksObj[`track${id}`].inCart

}

for (let i=0; i<addItemButton.length; i++) {
    addItemButton[i].addEventListener("click", printID)

}

totalItems.innerText=shoppingCartObj.items

let totalPrice = document.getElementById("totalPrice")
totalPrice.innerText=`$${shoppingCartObj.totalPrice}.00`



function addToCart() {
    shoppingCartObj.items++ 
    totalItems.innerText=shoppingCartObj.items
    totalPrice.innerText=`$${shoppingCartObj.totalPrice}.00`
}




