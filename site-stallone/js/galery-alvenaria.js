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
    modal.innerHTML = `<img id="img1" src="assets/alve01.jpeg" alt="Serviço de Alvenária">`
})

// image2 open
image2.addEventListener("click", function(){
    contador = 2
    modalBackground.style.display = "flex"
    modal.innerHTML = `<img id="img2" src="assets/alve02.jpeg" alt="Serviço de Alvenária">`
})

// image3 open
image3.addEventListener("click", function(){
    contador = 3
    modalBackground.style.display = "flex"
    modal.innerHTML = `<img id="img3" src="assets/alve03.jpeg" alt="Serviço de Alvenária">`
})

// image4 open
image4.addEventListener("click", function(){
    contador = 4
    modalBackground.style.display = "flex"
    modal.innerHTML = `<img id="img4" src="assets/alve04.jpeg" alt="Serviço de Alvenária">`
})

// image5 open
image5.addEventListener("click", function(){
    contador = 5
    modalBackground.style.display = "flex"
    modal.innerHTML = `<img id="img5" src="assets/alve05.jpeg" alt="Serviço de Alvenária">`
})

// image6 open
image6.addEventListener("click", function(){
    contador = 6
    modalBackground.style.display = "flex"
    modal.innerHTML = `<img id="img6" src="assets/alve06.jpeg" alt="Serviço de Alvenária">`
})

// image7 open
image7.addEventListener("click", function(){
    contador = 7
    modalBackground.style.display = "flex"
    modal.innerHTML = `<img id="img7" src="assets/alve07.jpeg" alt="Serviço de Alvenária">`
})

// image8 open
image8.addEventListener("click", function(){
    contador = 8
    modalBackground.style.display = "flex"
    modal.innerHTML = `<img id="img8" src="assets/alve08.jpeg" alt="Serviço de Alvenária">`
})

// image9 open
image9.addEventListener("click", function(){
    contador = 9
    modalBackground.style.display = "flex"
    modal.innerHTML = `<img id="img9" src="assets/alve09.jpeg" alt="Serviço de Alvenária">`
})

// image10 open
image10.addEventListener("click", function(){
    contador = 10
    modalBackground.style.display = "flex"
    modal.innerHTML = `<img id="img10" src="assets/alve010.jpeg" alt="Serviço de Alvenária">`
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