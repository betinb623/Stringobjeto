//Essa função extrai somente as strings do objeto

const filme = {
  titulo: 'Starwars',
  ano: 1999,
  diretor: 'JorgeLucas',
  personagem : 'Starwars'
}

exibirPropriedades (filme);

function exibirPropriedades(obj) {
  for (prop in obj)
    if (typeof obj[prop] === 'string')
      console.log(prop,obj[prop])
}