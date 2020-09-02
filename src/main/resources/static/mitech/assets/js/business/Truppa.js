/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
let Truppa = function(nome, quantita, tassoAggiornamentoColpi, guarigioneLivelloIniziale, tassoAggiornamentoResistenza, guarigioneLivelloIniziale, resistenzaLivelloIniziale, colpiLivelloIniziale, tassoAggiornamentoGuarigione, tipologia, vita, livelloGiocatore, colpi, potereGuarigione) {
  ProprietaOggettoSuCaselle.call(this, nome, tassoAggiornamentoResistenza, resistenzaLivelloIniziale, tipologia,livelloGiocatore,tassoAggiornamentoColpi,  colpiLivelloIniziale);
    this.quantita = quantita;
    this.guarigioneLivelloIniziale = guarigioneLivelloIniziale;
    this.tassoAggiornamentoGuarigione = tassoAggiornamentoGuarigione;
   // this.guarigione = guarigione;

   
}
Truppa.prototype = Object.create(ProprietaOggettoSuCaselle.prototype);
Object.defineProperty(Truppa.prototype, 'constructor', { 
    value: Truppa, 
    enumerable: true, // so that it does not appear in 'for in' loop
    writable: true });




