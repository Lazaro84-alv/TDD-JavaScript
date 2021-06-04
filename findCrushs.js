const listaDeCrush = [
  "Ariene Rodrigues",
  "Tita Cachorra",
  "Elza Soares",
  "Xuxuzinha"
]

const somaCrushs = (n1, n2) => n1 + n2

const encontraCrush = nome => {
  try {
    validacao(nome)
    const crushEncontrada = listaDeCrush.find(crush => crush === nome)
    return crushEncontrada ? crushEncontrada : 'Crush não encontrada'
  }catch(erro){
    return erro
  }
} 

const validacao = nome => {
  if(!nome) throw 'Campo nome está vazio'
  if(typeof nome !== 'string') throw 'Tipo inválido'
}

module.exports = {
  somaCrushs,
  encontraCrush,
  validacao
}