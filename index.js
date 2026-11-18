const form = document.getElementById('form-imc');
const alturaInput = document.getElementById('altura');
const pesoInput = document.getElementById('peso');
const resultadoDiv = document.getElementById('resultado');
const valorImcSpan = document.getElementById('valor-imc');

form.addEventListener('submit', async (event) => {
    event.preventDefault(); 

    const num1 = alturaInput.value;
    const num2 = pesoInput.value;

    const resposta = await fetch(`/IMC?Altura=${num1}&Peso=${num2}`);
    const dados = await resposta.json();

    valorImcSpan.textContent = dados.CalculoFeito;
    resultadoDiv.classList.remove('escondido'); 
});s