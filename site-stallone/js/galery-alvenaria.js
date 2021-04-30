// imagens id
let image1 = document.getElementById("img1")
let image2 = document.getElementById("img2")
let image3 = document.getElementById("img3")
let image4 = document.getElementById("img4")
let image5 = document.getElementById("img5")

let modalBackground = document.getElementById("modal-over")
let modal = document.getElementById("modal-img")
let contador = 0

// image1 open
image1.addEventListener("click", function(){
    contador = 1
    modalBackground.style.display = "flex"
    modal.innerHTML = `<img id="img1" src="assets/alve01.jpeg" alt="">`
})

// image2 open
image2.addEventListener("click", function(){
    contador = 2
    modalBackground.style.display = "flex"
    modal.innerHTML = `<img id="img2" src="assets/alve02.jpeg" alt="">`
})

// image3 open
image3.addEventListener("click", function(){
    contador = 3
    modalBackground.style.display = "flex"
    modal.innerHTML = `<img id="img3" src="assets/alve03.jpeg" alt="">`
})

// image4 open
image4.addEventListener("click", function(){
    contador = 4
    modalBackground.style.display = "flex"
    modal.innerHTML = `<img id="img4" src="assets/alve04.jpeg" alt="">`
})

// image5 open
image5.addEventListener("click", function(){
    contador = 5
    modalBackground.style.display = "flex"
    modal.innerHTML = `<img id="img5" src="assets/alve05.jpeg" alt="">`
})



function closeModal(){
    modalBackground.style.display = "none"
    modal.innerHTML = ""
}

function slideNext() {
    if(contador >= 5){
        closeModal()
    } else {
        contador++
        modal.innerHTML = `<img id="img${contador}" src="assets/alve0${contador}.jpeg" alt="">`
    }
}


function slidePrev() {
    if(contador <= 1){
        closeModal()
    } else {
        contador--
        modal.innerHTML = `<img id="img${contador}" src="assets/alve0${contador}.jpeg" alt="">`
    }
}