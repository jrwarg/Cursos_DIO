const openModalButton = document.getElementById("openModal")
// adicionando evento onclick ao botão
openModalButton.onclick = function(){ 
    // selecionando a classe da div e removendo-a
    modalWrapper
    .classList
    .remove('invisible')
}

const modalWrapper = document.querySelector('.modal-wrapper')

// lendo a tela inteira

document.addEventListener('keydown', function(event){
    // aqui o event servirá para verificar se a tecla digitada é a ESC
    // para saber o nome da tecla: console.log(event).Neste caso ESCAPE
    // então armazenar o evento numa variável:
    const isEscKey = event.key == 'Escape'
    if(isEscKey){
        modalWrapper.classList.add('invisible')

    }
})
