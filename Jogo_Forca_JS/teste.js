function palavraAleatoria() {
  fetch('palavras.txt')
    .then(response => response.text())
    .then(text => {
      const array = text.split('\r\n')
      let tamanho = array.length

      var aleatorio = ~~(Math.random() * tamanho)
      console.log(array)
      let index = array[aleatorio].indexOf(',')

      document.getElementById('palavra').innerHTML =
        '<div id="palavra">Palavra em BR: ' +
        array[aleatorio].split(',', 1) +
        '</div>'

      palavraIngles = array[aleatorio].substring(index + 1)
      palavra = array[aleatorio].substring(index)
      count = palavraIngles.length
      parray = palavraIngles.split('')
      console.log(
        'palavra:' +
          palavra +
          'palavra ingles:' +
          palavraIngles +
          ' - length:' +
          palavraIngles.length +
          ' - parray:' +
          parray
      )
    })
}
