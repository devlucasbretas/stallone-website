// imagens id
let image1 = document.getElementById("img1")
let image2 = document.getElementById("img2")
let image3 = document.getElementById("img3")
let image4 = document.getElementById("img4")
let image5 = document.getElementById("img5")
let image6 = document.getElementById("img6")
let image7 = document.getElementById("img7")
let image8 = document.getElementById("img8")
let image9 = document.getElementById("img9")
let image10 = document.getElementById("img10")

let modalBackground = document.getElementById("modal-over")
let modal = document.getElementById("modal-img")
let contador = 0

// image1 open
image1.addEventListener("click", function(){
    contador = 1
    modalBackground.style.display = "flex"
    modal.innerHTML = `<img id="img1" src="assets/piscina01.jpeg" alt="Construção de Piscina">`
})

// image2 open
image2.addEventListener("click", function(){
    contador = 2
    modalBackground.style.display = "flex"
    modal.innerHTML = `<img id="img2" src="assets/piscina02.jpeg" alt="Construção de Piscina">`
})

// image3 open
image3.addEventListener("click", function(){
    contador = 3
    modalBackground.style.display = "flex"
    modal.innerHTML = `<img id="img3" src="assets/piscina03.jpeg" alt="Construção de Piscina">`
})

// image4 open
image4.addEventListener("click", function(){
    contador = 4
    modalBackground.style.display = "flex"
    modal.innerHTML = `<img id="img4" src="assets/piscina04.jpeg" alt="Construção de Piscina">`
})

// image5 open
image5.addEventListener("click", function(){
    contador = 5
    modalBackground.style.display = "flex"
    modal.innerHTML = `<img id="img5" src="assets/piscina05.jpeg" alt="Construção de Piscina">`
})

// image6 open
image6.addEventListener("click", function(){
    contador = 6
    modalBackground.style.display = "flex"
    modal.innerHTML = `<img id="img6" src="assets/piscina06.jpeg" alt="Construção de Piscina">`
})

// image7 open
image7.addEventListener("click", function(){
    contador = 7
    modalBackground.style.display = "flex"
    modal.innerHTML = `<img id="img7" src="assets/piscina07.jpeg" alt="Construção de Piscina">`
})

// image8 open
image8.addEventListener("click", function(){
    contador = 8
    modalBackground.style.display = "flex"
    modal.innerHTML = `<img id="img8" src="assets/piscina08.jpeg" alt="Construção de Piscina">`
})

// image9 open
image9.addEventListener("click", function(){
    contador = 9
    modalBackground.style.display = "flex"
    modal.innerHTML = `<img id="img9" src="assets/piscina09.jpeg" alt="Construção de Piscina">`
})

// image10 open
image10.addEventListener("click", function(){
    contador = 10
    modalBackground.style.display = "flex"
    modal.innerHTML = `<img id="img10" src="assets/piscina010.jpeg" alt="Construção de Piscina">`
})


function closeModal(){
    modalBackground.style.display = "none"
    modal.innerHTML = ""
}

function slideNext() {
    if(contador >= 10){
        closeModal()
    } else {
        contador++
        modal.innerHTML = `<img id="img${contador}" src="assets/piscina0${contador}.jpeg" alt="Construção de Piscina">`
    }
}


function slidePrev() {
    if(contador <= 1){
        closeModal()
    } else {
        contador--
        modal.innerHTML = `<img id="img${contador}" src="assets/piscina0${contador}.jpeg" alt="Construção de Piscina">`
    }
}