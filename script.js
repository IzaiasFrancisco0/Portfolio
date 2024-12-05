const navBar = document.querySelector('.nav_bar');
const links = document.querySelector('.links');
const container = document.getElementById('Home');

navBar.addEventListener('click', function(event) {
    if (links.style.display === 'block') {
        links.style.display = 'none';
    } else {
        links.style.display = 'block';
    }
});

container.addEventListener('click', function(){
    links.style.display = 'none';
})

document.getElementById("seta").addEventListener('click', function(){
    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
    })
})

document.getElementById('Home-link').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('Home').scrollIntoView({behavior: 'smooth'})
})

document.getElementById('Sobre-link').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('Sobre').scrollIntoView({behavior: 'smooth'})
})

document.getElementById('Projetos-link').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('Projetos').scrollIntoView({behavior: 'smooth'})
})
document.getElementById('Tecnologias-link').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('Tecnologias').scrollIntoView({behavior: 'smooth'})
})
document.getElementById('Contato-link').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('Contato').scrollIntoView({behavior: 'smooth'})
})

function mostrarMensagem(){
    alert("Em construção..")
}

const email = document.getElementById('email')
const telefone = document.getElementById('telefone')
const mensagem = document.getElementById('mensagem')
const botao = document.getElementById('botao')

botao.addEventListener('click', function(){ 
    const emailValue = localStorage.setItem("email", email.value);
    const telefoneValue = localStorage.setItem("telefone", telefone.value)
    const mensagemValue = localStorage.setItem("mensagem", mensagem.value)
    
    const emailItem = localStorage.getItem("email");
    const telefoneItem = localStorage.getItem("telefone")
    const mensagemItem = localStorage.getItem("mensagem")

    email.value = '';
    telefone.value = ''
    mensagem.value = ''

    alert("Enviado com sucesso!!")
})

document.addEventListener("DOMContentLoaded", function() {
    const projetoSection = document.querySelector(".projeto");

    function checkScroll() {
        const sectionTop = projetoSection.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight / 1.3;

        if (sectionTop < triggerPoint) {
            projetoSection.classList.add("visible");
        }
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});

document.addEventListener("DOMContentLoaded", function() {
    const projetoSection = document.querySelector(".tecnologia");

    function checkScroll() {
        const sectionTop = projetoSection.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight / 1.3;

        if (sectionTop < triggerPoint) {
            projetoSection.classList.add("visible");
        }
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); 
});

document.addEventListener("DOMContentLoaded", function() {
    const projetoSection = document.querySelector(".contato");

    function checkScroll() {
        const sectionTop = projetoSection.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight / 1.3;

        if (sectionTop < triggerPoint) {
            projetoSection.classList.add("visible");
        }
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); 
});




