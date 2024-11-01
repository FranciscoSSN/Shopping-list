const input = document.querySelector("input");
const ul = document.querySelector("ul");
const li = document.querySelector("li");
const radioInner = document.querySelector(".radio-inner");
const radioImage = document.querySelector(".radio-image");
const inputs = document.querySelector("input");
const span = document.querySelector("li span");
const link =  document.querySelector("li a");
const img = document.querySelector("li a img");
const form = document.querySelector("form");
const button = document.querySelector("button");

// Capturar input do usuario
input.addEventListener("input", (event) => {
    event.preventDefault();

    input.value;
    const isInputUser = /\d+/g;

    input.value = input.value.replace(isInputUser, "");
    // console.log(input.value);

})

// Capturar evento de submit do usuario
form.addEventListener("submit", (event) => {
    event.preventDefault();

    // console.log(event);
})


// Adicionar item à lista ao clicar no botão
button.addEventListener("click", (event) => {
    event.preventDefault();

    const itemText = input.value.trim();
    if (itemText) {
        const li = document.createElement("li");

        li.innerHTML = `
            <div class="radio-inner">
                <div class="radio-image"></div>
                <input type="radio" name="study-shift" id="radio" value="radio">
            </div>
            <span>${itemText}</span>
            <a href="#" class="remove-item">
                <img src="assets/icons/trash.svg" alt="">
            </a>
        `;

        ul.appendChild(li);
        input.value = ""; // Limpar o input após adicionar
    } else {
        alert("Por favor, insira um item válido.");
    }
});

// Remover item da lista ao clicar no ícone de lixo
ul.addEventListener("click", (event) => {
   
    if (event.target.closest(".remove-item")) {
        const li = event.target.closest("li");

        // Criar um novo item com a mensagem de remoção
        const removedLi = document.createElement("li");
        removedLi.id = "exit"
        removedLi.innerHTML = `
            <div class="radio-inner">
                <div class="radio-image"></div>
                <input type="radio" name="study-shift" id="radio" value="radio">
            </div>
            <span>O item foi removido da lista</span>
            <a href="#">
                <img class="remove-item" src="assets/icons/delete-small.svg" alt="">
            </a>
        `;

        // Adicionar a mensagem de remoção à lista
        ul.appendChild(removedLi);
        
        // Remover o item original
        li.remove();
    }
});
