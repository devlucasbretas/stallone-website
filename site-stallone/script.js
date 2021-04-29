
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


const Menu = {

    open() {
        let menu = document.getElementById("menu")
        let button = document.getElementById("btn")

        if(menu.style.display == "flex") {
            Menu.close()
        } else {
            menu.style.display = "flex"
            menu.style.flexDirection = "column"
            menu.innerHTML = `  
                <div class="menu-container">
                    <div class="menu-links">
                        <a id="home" href="https://stallone-website.vercel.app" onclick="Menu.close()">HOME</a>
                        <a id="services" href="javascript:void(window.scroll(0,390))" onclick="Menu.close()">SERVIÇOS</a>
                        <a id="clientes" href="javascript:void(window.scroll(0,1520))" onclick="Menu.close()">QUEM SOMOS</a>
                        <a id="trabalhos" href="javascript:void(window.scroll(0,2140))" onclick="Menu.close()">TRABALHOS EXECUTADOS</a>
                        <a id="contato" href="javascript:void(window.scroll(0,3125))" onclick="Menu.close()">CONTATO</a>
                    </div>
                    <div>
                        <button id="btn" class="menu-btn" onclick="Menu.open()" id="menu-btn"><i class="fas fa-times"></i></button>
                    </div>
                </div> 
            `
        }   
    },

    close() {
        let menu = document.getElementById("menu")
        let button = document.getElementById("btn")

        button.innerHTML = `<i class="fas fa-bars"></i>`
        menu.style.display = "none"
    },
}
