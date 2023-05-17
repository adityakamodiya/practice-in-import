let mykey = 'd99062135fb11777abdedc129ba2b6c7'
let wrapper = document.querySelector("#wrapper")
let original_row = document.querySelector(".original-row")

let trending_row = document.querySelector(".trending-row")
let toprated_row = document.querySelector(".toprated-row")
let actionmovies_row = document.querySelector(".actionmovies-row")
let comadymovies_row = document.querySelector(".comadymovies-row")
let horrormovies_row = document.querySelector(".horrormovies-row")
let romanticmovies_row = document.querySelector(".romanticmovies-row")

let documantrymovies_row = document.querySelector(".documantrymovies-row")
let netflix_front = document.querySelector(".netflix-front")
let header = document.querySelector(".head")
let title_head = document.querySelector("h1")

let title_discp = document.querySelector("p")
let randomarr = []
let randomimage = ''
let randomheadArr = []
let randomDiscp = []


window.onscroll = () => {
    console.log(window.scrollY)
    if(window.scrollY > 400){
        header.style.cssText = "background-color: rgba(0,0,0,0.7)";
    }
    else{
        header.style.cssText = "background-color: transparent";
    }
}



fetch("https://api.themoviedb.org/3/discover/tv?api_key=" + mykey + "&with_networks=213")

    .then((Response) => { return Response.json() })
    .then((result) => {
        // console.log(result)
        console.log(result.results)
        showresult(result)
    })
function showresult(result) {
    for (let i = 0; i < result.results.length; i++) {
        let box = document.createElement("div")
        box.classList = "image-box"
        let box_image = document.createElement("img")
        box_image.src = "https://image.tmdb.org/t/p/original" + result.results[i].poster_path
        box.append(box_image)
        original_row.append(box)
        let arrimage = box_image.src
        randomarr.push(arrimage)
        randomheadArr.push(result.results[i].original_name)
        randomDiscp.push(result.results[i].overview)

        // console.log(randomheadArr[0])
        // console.log(randomDiscp[0])
    }
    // console.log(randomarr)
    // randomimage = randomarr[Math.floor(Math.random() * randomarr.length)]
    
    randomNumber = Math.floor(Math.random() * randomarr.length)
    // console.log(randomarr[randomNumber])
    setImage()
    setHeading()
    setDiscp()
}

function setImage() {
    console.log(randomimage)
    netflix_front.style.backgroundImage = "url(" + randomarr[randomNumber] + ")"
    // netflix_front.style.backgroundSize = "cover"
    // netflix_front.style.backgroundRepeat = "no-repeat"
    // netflix_front.style.backgroundPosition = "cover"
}

function setHeading()
{
    title_head.innerHTML = randomheadArr[randomNumber]
}
function setDiscp()
{
    title_discp.innerHTML = randomDiscp[randomNumber]
}









fetch("https://api.themoviedb.org/3/trending/all/week?api_key=" + mykey + "&language=en-US")
    .then((Response) => { return Response.json() })
    .then((trending) => {
        // console.log(trending)
        // console.log(trending.results)
        showtrending(trending)
    })

function showtrending(trending) {
    for (let i = 0; i < trending.results.length; i++) {
        let box = document.createElement("div")
        box.classList = "image-box"
        let box_image = document.createElement("img")
        box_image.src = "https://image.tmdb.org/t/p/original" + trending.results[i].poster_path
        box.append(box_image)
        trending_row.append(box)
    }

}




fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=" + mykey + "&language=en-US")
    .then((Response) => { return Response.json() })
    .then((toprated) => {
        // console.log(toprated)
        showtoprated(toprated)
    })

function showtoprated(toprated) {
    for (let i = 0; i < toprated.results.length; i++) {
        let box = document.createElement("div")
        box.classList = "image-box"
        let box_image = document.createElement("img")
        box_image.src = "https://image.tmdb.org/t/p/original" + toprated.results[i].poster_path
        box.append(box_image)
        toprated_row.append(box)
    }

}


fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + mykey + '&with_genres=28')
    .then((Response) => { return Response.json() })
    .then((action) => {
        console.log(action)
        showaction(action)
    })
function showaction(action) {
    for (let i = 0; i < action.results.length; i++) {
        let box = document.createElement("div")
        box.classList = "image-box"
        let box_image = document.createElement("img")
        box_image.src = "https://image.tmdb.org/t/p/original" + action.results[i].poster_path
        box.append(box_image)
        actionmovies_row.append(box)
    }

}






fetch("https://api.themoviedb.org/3/discover/movie?api_key=" + mykey + "&with_genres=35")
    .then((Response) => { return Response.json() })
    .then((comady) => {
        console.log(comady)
        showcomady(comady)
    })
function showcomady(comady) {
    for (let i = 0; i < comady.results.length; i++) {
        let box = document.createElement("div")
        box.classList = "image-box"
        let box_image = document.createElement("img")
        box_image.src = "https://image.tmdb.org/t/p/original" + comady.results[i].poster_path
        box.append(box_image)
        comadymovies_row.append(box)
    }

}



fetch("https://api.themoviedb.org/3/discover/movie?api_key=" + mykey + "&with_genres=27")
    .then((Response) => { return Response.json() })
    .then((horror) => {
        console.log(horror)
        showhorror(horror)
    })
function showhorror(horror) {
    for (let i = 0; i < horror.results.length; i++) {
        let box = document.createElement("div")
        box.classList = "image-box"
        let box_image = document.createElement("img")
        box_image.src = "https://image.tmdb.org/t/p/original" + horror.results[i].poster_path
        box.append(box_image)
        horrormovies_row.append(box)
    }

}


fetch("https://api.themoviedb.org/3/discover/movie?api_key=" + mykey + "&with_genres=10749")
    .then((Response) => { return Response.json() })
    .then((romantic) => {
        console.log(romantic)
        showromantic(romantic)
    })
function showromantic(romantic) {
    for (let i = 0; i < romantic.results.length; i++) {
        let box = document.createElement("div")
        box.classList = "image-box"
        let box_image = document.createElement("img")
        box_image.src = "https://image.tmdb.org/t/p/original" + romantic.results[i].poster_path
        box.append(box_image)
        romanticmovies_row.append(box)
    }

}



fetch("https://api.themoviedb.org/3/discover/movie?api_key=" + mykey + "&with_genres=99")
    .then((Response) => { return Response.json() })
    .then((documantry) => {
        console.log(documantry)
        showdocumantry(documantry)
    })
function showdocumantry(documantry) {
    for (let i = 0; i < documantry.results.length; i++) {
        let box = document.createElement("div")
        box.classList = "image-box"
        let box_image = document.createElement("img")
        box_image.src = "https://image.tmdb.org/t/p/original" + documantry.results[i].poster_path
        box.append(box_image)
        documantrymovies_row.append(box)
    }

}