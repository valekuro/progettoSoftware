/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


class Truppa {
  constructor(name, colpiAlSecondo, guarigione, resistenzaTotale, contatoreVita) {
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