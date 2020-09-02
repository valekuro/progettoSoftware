/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function Edificio(nome, tassoAggiornamentoColpi, tassoAggiornamentoResistenza, resistenzaLivelloIniziale, colpiLivelloIniziale, tipologia, livelloGiocatore, percentualeDistruzionePunteggio) {

   // this.posizione = posizione;
    this.percentualeDistruzionePunteggio = percentualeDistruzionePunteggio;
    ProprietaOggettoSuCaselle.call(this, nome, tassoAggiornamentoResistenza, resistenzaLivelloIniziale, tipologia,livelloGiocatore,tassoAggiornamentoColpi,  colpiLivelloIniziale);

   
}
Edificio.prototype = Object.create(ProprietaOggettoSuCaselle.prototype);
Object.defineProperty(Edificio.prototype, 'constructor', { 
    value: Edificio, 
    enumerable: true, // so that it does not appear in 'for in' loop
    writable: true });

