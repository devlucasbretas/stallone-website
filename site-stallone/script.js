
const Pages = {
    
    page1:document.getElementById("home"),
    page2:document.getElementById("services"),
    page3:document.getElementById("clientes"),
    page4:document.getElementById("trabalhos"),
    page5:document.getElementById("contato"),
    Home(){
        this.page1.style.borderBottom = "6px solid #353434";
        this.page2.style.borderBottom = "none";
        this.page3.style.borderBottom = "none";
        this.page4.style.borderBottom = "none";
        this.page5.style.borderBottom = "none";
        
    },
    Services(){
        this.page2.style.borderBottom = "6px solid #353434";
        this.page1.style.borderBottom = "none";
        this.page3.style.borderBottom = "none";
        this.page4.style.borderBottom = "none";
        this.page5.style.borderBottom = "none";
    },
    Clientes(){
        this.page3.style.borderBottom = "6px solid #353434";
        this.page1.style.borderBottom = "none";
        this.page2.style.borderBottom = "none";
        this.page4.style.borderBottom = "none";
        this.page5.style.borderBottom = "none";
    },
    Trabalhos(){
        this.page4.style.borderBottom = "6px solid #353434";
        this.page1.style.borderBottom = "none";
        this.page2.style.borderBottom = "none";
        this.page3.style.borderBottom = "none";
        this.page5.style.borderBottom = "none";
    },
    Contato(){
        this.page5.style.borderBottom = "6px solid #353434";
        this.page1.style.borderBottom = "none";
        this.page2.style.borderBottom = "none";
        this.page3.style.borderBottom = "none";
        this.page4.style.borderBottom = "none";
    },
}


const Modal = {
    modalContainer:document.getElementById("container"),
    modalImg:document.getElementById("modal-img"),
    OpenModal(){
        this.modalContainer.style.display = "flex"
        this.modalImg.innerHTML = `<img src="assets/prime-demo.jpeg" alt="Restaurante Prime Grill">`
    },
    CloseModal(){

    },
}

