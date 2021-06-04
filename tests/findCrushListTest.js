const should = require('should')
const findCrushs = require('../findCrushs')

describe('find crushs', () => {
  it('soma crushs', () => {
    findCrushs.somaCrushs(2,3).should.be.equal(5)
  })
  it('deve somar dois números e retornar 30', () => {
    findCrushs.somaCrushs(10, 20).should.be.equal(30)
  })
  it('Passar um nome e deve retornar mensagem de pessoa não encontrada', () => {
    findCrushs.encontraCrush('Ariene').should.be.equal('Crush não encontrada')
  })
  it('retorna a mensagem Campo nome está vazio', () => {
    findCrushs.encontraCrush().should.be.equal('Campo nome está vazio')
  })
  it('Retornar mensagem de tipo inválido', () => {
    findCrushs.encontraCrush(123).should.be.equal('Tipo inválido')
  })
  it('Deve retornar um nome da lista', () => {
    findCrushs.encontraCrush('Tita Cachorra').should.be.equal('Tita Cachorra')
  })
})