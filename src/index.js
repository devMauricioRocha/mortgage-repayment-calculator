const btn_clear = document.getElementById("btn-clear")
const input_amount = document.getElementById("input-amount")
const input_year = document.getElementById("input-year")
const input_porcentagem = document.getElementById("input-porcentagem")
const radio_repayment = document.getElementById("repayment")
const radio_interest = document.getElementById("interest")
const btn_calc = document.getElementById("btn-calc")
const resultados = document.getElementById("resultados")

function apagarTudo() {
    input_amount.value = ""
    input_year.value = ""
    input_porcentagem.value = ""
    radio_repayment.checked = true

    resultados.firstElementChild.classList.remove("hidden")
    resultados.lastElementChild.classList.add("hidden")
    
    ativar_radio1()

    input_amount.focus()
}
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

btn_clear.addEventListener("click", apagarTudo)

function ativar_radio1() {
    radio_repayment.parentNode.classList.add("ativar-type-div") // Adicionar cor de fundo na div
    radio_repayment.labels[0].classList.remove("border-slate-800") // Remover a cor da borda preta
    radio_repayment.labels[0].classList.add("ativar-type", "border-lime-600") // Marcar botão e add borda verde 

    radio_interest.labels[0].classList.remove("ativar-type", "border-lime-600") // Remover marcação do outro input radio
    radio_interest.parentNode.classList.remove("ativar-type-div") // Remover fundo verde da outra div
    radio_interest.labels[0].classList.add("border-slate-800") // Adicionar borda preta novamente na outra div
}
  
function ativar_radio2() {
    radio_interest.parentNode.classList.add("ativar-type-div") // Adicionar cor de fundo na div
    radio_interest.labels[0].classList.remove("border-slate-800") // Remover a cor da borda preta
    radio_interest.labels[0].classList.add("ativar-type", "border-lime-600") // Marcar botão e add borda verde 

    radio_repayment.labels[0].classList.remove("ativar-type", "border-lime-600") // Remover marcação do outro input radio
    radio_repayment.parentNode.classList.remove("ativar-type-div") // Remover fundo verde da outra div
    radio_repayment.labels[0].classList.add("border-slate-800") // Adicionar borda preta novamente na outra div
}

radio_repayment.addEventListener("change", ativar_radio1)
radio_interest.addEventListener("change", ativar_radio2)

function calculateMortgage(e) {
    e.preventDefault()
    // Obter os valores dos inputs
    const amount = parseFloat(input_amount.value);
    const term = parseInt(input_year.value);
    const rate = parseFloat(input_porcentagem.value) / 100;

    // Validar inputs
    if (isNaN(amount) || isNaN(term) || isNaN(rate) || amount <= 0 || term <= 0 || rate < 0) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    // Calcular a taxa de juros mensal e o número total de pagamentos
    const r = rate / 12;
    const n = term * 12;

    // Calcular o pagamento mensal
    const M = (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    const totalPago = M * n;
    const totalJuros = totalPago - amount;
    
    console.log(resultados.firstChild);
    // Exibir o resultado formatado
    resultados.firstElementChild.classList.add("hidden")
    resultados.lastElementChild.classList.remove("hidden")

    if (radio_interest.checked) {
        document.getElementById('pg-mensais').innerText = `R$ ${totalJuros.toLocaleString('pt-BR')}`;
    }else{
        document.getElementById('pg-mensais').innerText = `R$ ${M.toLocaleString('pt-BR')}`;
    }
    document.getElementById('pg-total').innerText = `R$ ${totalPago.toLocaleString('pt-BR')}`;

    scrollToSection('pg-mensais')
    
}

btn_calc.addEventListener("click", calculateMortgage)

radio_repayment.checked = true
ativar_radio1()