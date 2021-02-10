
const Menu = {

    home: document.getElementById("it1").innerHTML,
    sobre: document.getElementById("it2").innerHTML,
    proje: document.getElementById("it3").innerHTML,
    contac: document.getElementById("it4").innerHTML,

    open() {

        let newMenu = document.getElementById("menuOpened")
        let closeButt = document.getElementById("btnClose")

        closeButt.style.display = "inline-block"
        newMenu.style.display = "flex"
        newMenu.style.flexDirection = "column"
        newMenu.style.alignContent = "center"
        newMenu.style.height = "140px"
        newMenu.innerHTML = `
            <a id="it1" href="index.html"><i class="fas fa-home"></i> Home</a>
            <a id="it2" href="#sobre"><i class="fas fa-address-card"></i> Sobre</a>
            <a id="it3" href="#projetos"><i class="fas fa-images"></i> Projetos</a>
            <a id="it4" href="#contato"><i class="fas fa-address-book"></i> Contato</a>`
    },

    close() {
        let newMenu = document.getElementById("menuOpened")
        let closeButt = document.getElementById("btnClose")

        closeButt.style.display = ""
        newMenu.style.display = ""
        newMenu.style.flexDirection = ""
        newMenu.style.alignContent = ""
        newMenu.style.height = ""
        newMenu.innerHTML = ""
    },
}