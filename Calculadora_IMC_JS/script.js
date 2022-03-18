import BotaoDeleta from './deletaimc.js'

function dados() {
  const form = document.querySelector('.form')

  const pessoas = []

  function recebeEventoForm(evento) {
    evento.preventDefault()

    const lista = document.querySelector('[data-list]')
    const tarefa = document.createElement('li')
    tarefa.classList.add('resultadoimc')

    const nome = form.querySelector('.nome')
    const idade = form.querySelector('.idade')
    const peso = form.querySelector('.peso')
    const altura = form.querySelector('.altura')

    const imc = calculaIMC(peso.value, altura.value).toFixed(2)

    pessoas.push({
      nome: nome.nodeValue,
      idade: idade.nodeValue,
      peso: peso.nodeValue,
      altura: altura.nodeValue,
      imc: imc
    })

    const verificaIMC = verificarIMC(imc)

    const conteudo = `<p class='content'>Nome: ${nome.value}</p>
    <p class='content'>Idade: ${idade.value}</p>
    <p class='content'>Peso: ${peso.value}</p>
    <p class='content'>Altura: ${altura.value}</p>
    <p class='content'>IMC:${imc}</p>
    <p class='content'>${verificaIMC}</p>`
    tarefa.innerHTML = conteudo
    tarefa.appendChild(BotaoDeleta())
    lista.appendChild(tarefa)

    nome.value = ' '
  }
  const novaTarefa = document.querySelector('[data-form-button]')
  form.addEventListener('submit', recebeEventoForm)

  function calculaIMC(peso, altura) {
    return ((peso * 100) / (altura * altura)) * 100
  }
  function verificarIMC(imc) {
    if (imc < 17) {
      return 'Muito abaixo do peso'
    } else if (imc > 17 && imc <= 18.49) {
      return 'Abaixo do peso'
    } else if (imc >= 18.5 && imc <= 24.99) {
      return 'Peso normal'
    } else if (imc >= 25 && imc <= 29.99) {
      return 'Acima do peso'
    } else if (imc >= 30 && imc <= 34.99) {
      return 'Obesidade I'
    } else {
      return 'Obesidade II'
    }
  }
}

dados()
