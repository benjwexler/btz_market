let tracksObj = {
    track1: {
        name: "Strictly for the Music",
        coverArt: "Strictly4theMusicLogo.jpg",
        price: 1.00,
        inCart: false,
    },
    track2: {
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

const shopContainer = document.getElementById("shopContainer")



// const tracks is an array of how many different songs I will be displaying on the screen
const tracks = document.getElementsByClassName("beatContainer")
console.log(tracks.length)

// For loop loads the cover Art, titles and prices for every track

for (let i = 0; i < tracks.length; i++) {
    window[`track${i + 1}`] = tracks[i]
    window[`track${i + 1}Title`] = window[`track${i + 1}`].querySelector(".titleContainer").querySelector(".title").innerText = tracksObj[`track${i + 1}`].name
    window[`track${i + 1}Price`] = window[`track${i + 1}`].querySelector(".priceContainer").querySelector(".price").innerText = `$${tracksObj[`track${i + 1}`].price}.00`
    window[`track${i + 1}CoverArt`] = window[`track${i + 1}`].querySelector(".coverArtContainer").querySelector(".coverArtPic").src = tracksObj[`track${i + 1}`].coverArt
}


let totalItems = document.getElementById("totalItems")
const addItemButton = document.getElementsByClassName("addToCartContainer")

function addAndRemoveFromCart(e) {
    let id = this.id

    id = id[id.length - 1]
    if (tracksObj[`track${id}`].inCart === false) {
        window[`track${id}`].querySelector(".addToCartContainer").querySelector(".addToCartIcon").innerHTML = '<i class="fas fa-times fa-3x"></i>'
        window[`track${id}`].querySelector(".addToCartContainer").querySelector(".addToCartText").innerText = "Remove"
        shoppingCartObj.totalPrice += tracksObj[`track${id}`].price
        totalPrice.innerText = `$${shoppingCartObj.totalPrice}.00`
        shoppingCartObj.items++
        totalItems.innerText = shoppingCartObj.items
    } else {
        window[`track${id}`].querySelector(".addToCartContainer").querySelector(".addToCartIcon").innerHTML = '<i class="fas fa-shopping-cart fa-3x"></i>'
        window[`track${id}`].querySelector(".addToCartContainer").querySelector(".addToCartText").innerText = "Add to Cart"
        shoppingCartObj.totalPrice -= tracksObj[`track${id}`].price
        totalPrice.innerText = `$${shoppingCartObj.totalPrice}.00`
        shoppingCartObj.items--
        totalItems.innerText = shoppingCartObj.items
    }
    tracksObj[`track${id}`].inCart = !tracksObj[`track${id}`].inCart

}

for (let i = 0; i < addItemButton.length; i++) {
    addItemButton[i].id = `addToCart${i + 1}`
    addItemButton[i].addEventListener("click", addAndRemoveFromCart)

}

totalItems.innerText = shoppingCartObj.items

let totalPrice = document.getElementById("totalPrice")
totalPrice.innerText = `$${shoppingCartObj.totalPrice}.00`





