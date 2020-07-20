/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
class Truppa {
  constructor(name, contatoreVita, colpiAlSecondo, guarigione, resistenzaTotale) {
    this.name = name
    this.contatoreVita = contatoreVita
    this.colpiAlSecondo = colpiAlSecondo
    this.guarigione = guarigione
    this.resistenzaTotale = resistenzaTotale
  }
  eat(target) {
    console.log(`Eating target: ${target.name}`)
  }
}

class TruppaBuilder {
  constructor(nome) {
    this.nome = nome

  }
  
  setContatoreVita(contatoreVita){
      this.contatoreVita = contatoreVita 
      return this
  }
  setColpiAlSecondo(colpiAlSecondo) {
    this.colpiAlSecondo 
            //= colpiAlSecondo + (liv_mun - 1 ) * tasso
    return this
  }
  setGuarigione(guarigione) {
    this.guarigione = guarigione
    return this
  }
   setResistenzaTotale(resistenzaTotale) {
    this.resistenzaTotale = resistenzaTotale
    return this
  }
  build() {
    if (!('resistenzaTotale' in this)) {
      throw new Error('manca la resistenza')
    }
   
    return new Truppa(this.nome, this.colpiAlSecondo, this.guarigione, this.resistenzaTotale, this.contatoreVita)
  }
  
}

