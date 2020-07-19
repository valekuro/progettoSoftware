/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class Truppa {
  constructor(nome) {
    this.nome = nome
    this.colpiAlSecondo = colpiAlSecondo
    this.guarigione = guarigione
    this.resistenzaTotale = resistenzaTotale

  }
  

  setColpiAlSecondo(colpiAlSecondo) {
    this.colpiAlSecondo = colpiAlSecondo
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
   
    return new Truppa(this.nome, this.colpiAlSecondo, this.guarigione, this.resistenzaTotale)
  }
}


  
