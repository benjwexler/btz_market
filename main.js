let tracksObj = {
    track1: {
        name: "Strictly for the Music",
        coverArt: "Strictly4theMusicLogo.jpg",
        price: 207.57,
        inCart: false,
        soundfile: "Strictly for the Music.wav",
        isPlaying: false,
    },
    track2: {
        name: "I Got You",
        coverArt: "Strictly4theMusicLogo.jpg",
        price: 1.01,
        inCart: false,
        soundfile: "MKHL - I Got You (Prod. by Wex).mp3",
        isPlaying: false,
    },
    track3: {
        name: "I Got You",
        coverArt: "Strictly4theMusicLogo.jpg",
        price: 1.00,
        inCart: false,
        soundfile: "MKHL - I Got You (Prod. by Wex).mp3",
        isPlaying: false,
    },
    track4: {
        name: "I Got You",
        coverArt: "Strictly4theMusicLogo.jpg",
        price: 1.00,
        inCart: false,
        soundfile: "MKHL - I Got You (Prod. by Wex).mp3",
        isPlaying: false,
    },
    track5: {
        name: "I Got You",
        coverArt: "Strictly4theMusicLogo.jpg",
        price: 1.00,
        inCart: false,
        soundfile: "MKHL - I Got You (Prod. by Wex).mp3",
        isPlaying: false,
    }
}

let shoppingCartObj = {
    items: 0,
    totalPrice: 0.00
}

let currentTrack;

let tracksObjLength = Object.keys(tracksObj).length

for (let i = 0; i < tracksObjLength; i++) {

    const shopContainer = document.getElementById("shopContainer")
    var beatContainer = document.createElement("div");
    beatContainer.classList.add("beatContainer");
    shopContainer.appendChild(beatContainer);

    var coverArtContainer = document.createElement("div");
    coverArtContainer.classList.add("coverArtContainer");
    beatContainer.appendChild(coverArtContainer);
    var coverArtPic = document.createElement("img");
    coverArtPic.classList.add("coverArtPic");
    coverArtContainer.appendChild(coverArtPic);

    var titleContainer = document.createElement("div");
    titleContainer.classList.add("titleContainer");
    beatContainer.appendChild(titleContainer);
    var title = document.createElement("div");
    title.classList.add("title");
    titleContainer.appendChild(title);

    var priceContainer = document.createElement("div");
    priceContainer.classList.add("priceContainer");
    beatContainer.appendChild(priceContainer);
    var price = document.createElement("div");
    price.classList.add("price");
    priceContainer.appendChild(price);

    var addToCartContainer = document.createElement("div");
    addToCartContainer.classList.add("addToCartContainer");
    beatContainer.appendChild(addToCartContainer);
    var addToCartText = document.createElement("div");
    addToCartText.classList.add("addToCartText");
    var addToCartTextNode = document.createTextNode("Add to Cart");
    addToCartText.appendChild(addToCartTextNode);
    addToCartContainer.appendChild(addToCartText);
    var addToCartIcon = document.createElement("div");
    addToCartIcon.classList.add("addToCartIcon");
    addToCartContainer.appendChild(addToCartIcon);
    var fontAwesomeIcon = document.createElement("i");
    fontAwesomeIcon.classList.add("fas", "fa-shopping-cart", "fa-3x");
    addToCartIcon.appendChild(fontAwesomeIcon);

    var playTrackContainer = document.createElement("div");
    playTrackContainer.classList.add("playTrackContainer");
    beatContainer.appendChild(playTrackContainer);
    var fontAwesomePlayTrackIcon = document.createElement("i");
    fontAwesomePlayTrackIcon.classList.add("fas", "fa-play", "fa-2x", "fontAwesomePlayTrackIcon");
    playTrackContainer.appendChild(fontAwesomePlayTrackIcon);
}

// const tracks is an array of how many different songs I will be displaying on the screen
const tracks = document.getElementsByClassName("beatContainer")
console.log(tracks.length)

// For loop loads the cover Art, titles and prices for every track

for (let i = 0; i < tracks.length; i++) {
    window[`track${i + 1}`] = tracks[i]
    window[`track${i + 1}Title`] = window[`track${i + 1}`].querySelector(".titleContainer").querySelector(".title").innerText = tracksObj[`track${i + 1}`].name
    window[`track${i + 1}Price`] = window[`track${i + 1}`].querySelector(".priceContainer").querySelector(".price").innerText = `$${tracksObj[`track${i + 1}`].price}`
    window[`track${i + 1}CoverArt`] = window[`track${i + 1}`].querySelector(".coverArtContainer").querySelector(".coverArtPic").src = tracksObj[`track${i + 1}`].coverArt
}


let totalItems = document.getElementById("totalItems")

// AddItemButton nodeList is used to ascertain the ID of which track to add to/remove from cart 
const addItemButton = document.getElementsByClassName("addToCartContainer")
// Same as above, but for which track to play
const playButton = document.getElementsByClassName("playTrackContainer")

function addAndRemoveFromCart() {
    let id = this.id
    // setting ID to be the last character of this.id enables me access the different tracks when a click happens
    id = id[id.length - 1]
    if (tracksObj[`track${id}`].inCart === false) {
        window[`track${id}`].querySelector(".addToCartContainer").querySelector(".addToCartIcon").innerHTML = '<i class="fas fa-times fa-3x"></i>'
        window[`track${id}`].querySelector(".addToCartContainer").querySelector(".addToCartText").innerText = "Remove"
        shoppingCartObj.totalPrice += tracksObj[`track${id}`].price
        totalPrice.innerText = `$${shoppingCartObj.totalPrice}`
        shoppingCartObj.items++
        totalItems.innerText = shoppingCartObj.items
    } else {
        window[`track${id}`].querySelector(".addToCartContainer").querySelector(".addToCartIcon").innerHTML = '<i class="fas fa-shopping-cart fa-3x"></i>'
        window[`track${id}`].querySelector(".addToCartContainer").querySelector(".addToCartText").innerText = "Add to Cart"
        shoppingCartObj.totalPrice -= tracksObj[`track${id}`].price
        totalPrice.innerText = `$${shoppingCartObj.totalPrice}`
        shoppingCartObj.items--
        totalItems.innerText = shoppingCartObj.items
    }
    // Changes the inCart boolean to the opposite on every click
    tracksObj[`track${id}`].inCart = !tracksObj[`track${id}`].inCart

}


function playAndPauseTrack() {
    let id = this.id
    id = id[id.length - 1]

    if (currentTrack === undefined) {
        currentTrack = id
    }

    console.log(currentTrack);

    // If statement to determine if track should have play or pause icon
    if (tracksObj[`track${id}`].isPlaying === false) {
        window[`track${id}`].querySelector(".playTrackContainer").innerHTML = '<i class="fas fa-pause fa-2x fontAwesomePlayTrackIcon"></i>'
        if (currentTrack != id) {
            window[`track${currentTrack}`].querySelector(".playTrackContainer").innerHTML = '<i class="fas fa-play fa-2x fontAwesomePlayTrackIcon"></i>'
            tracksObj[`track${currentTrack}`].isPlaying = false
        }
    } else {
        window[`track${id}`].querySelector(".playTrackContainer").innerHTML = '<i class="fas fa-play fa-2x fontAwesomePlayTrackIcon"></i>'
    }

    currentTrack = id;

    tracksObj[`track${id}`].isPlaying = !tracksObj[`track${id}`].isPlaying

}

for (let i = 0; i < addItemButton.length; i++) {
    addItemButton[i].id = `addToCart${i + 1}`
    playButton[i].id = `playButton${i + 1}`
    playButton[i].addEventListener("click", playAndPauseTrack)
    addItemButton[i].addEventListener("click", addAndRemoveFromCart)

}

totalItems.innerText = shoppingCartObj.items

let totalPrice = document.getElementById("totalPrice")
totalPrice.innerText = `$${shoppingCartObj.totalPrice}.00`





