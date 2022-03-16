
import BotaoConclui from "./assets/componentes/concluiTarefa.js" ;
import BotaoDeleta from "./assets/componentes/deletaTarefa.js";

  const criarTarefa = (evento) => {
    evento.preventDefault();

    const input = document.querySelector('[data-form-input]');
    const valor = input.value;
    const lista = document.querySelector('[data-list]');

    const tarefa = document.createElement('li');
    tarefa.classList.add('task');
    
    const conteudo = `<p class='content'>${valor.toUpperCase()}</p>`;

    tarefa.innerHTML = conteudo;
    
    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(BotaoDeleta());
    lista.appendChild(tarefa);
    input.value = " ";
  }

  const novaTarefa = document.querySelector('[data-form-button]');
  novaTarefa.addEventListener('click', criarTarefa)




  /*
  Utilizamos o método querySelector para percorrer a árvore do DOM e encontrar o elemento que queremos utilizando JavaScript. Porém existem outros métodos que podem ser utilizados para o mesmo fim.
  
  document.getElementById(‘id’) seleciona o elemento pelo id passado.
  document.getElementsByClassName(‘classe’) retorna um array dos elementos pelo nome da classe passada.
  document.getElementsByTagName(‘tag’) retorna um array dos elementos pelo nome da tag passada
  document.querySelectorAll(seletor) devolve todos os seletores com o mesmo nome
  
  Aula sobre data Attributes HTML5:
  https://cursos.alura.com.br/data-attributes-do-html5-c109
  
  TEMPLATE STRING:
  https://cursos.alura.com.br/template-string-c123
  
  */
