/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function Edificio(posizione, nome, tassoAggiornamentoColpi, tassoAggiornamentoResistenza, resistenzaLivelloIniziale, colpiLivelloIniziale, livelloGiocatore) {

    this.posizione = posizione;

    this.nome = nome;
    this.tassoAggiornamentoColpi = tassoAggiornamentoColpi;
    this.tassoAggiornamentoResistenza = tassoAggiornamentoResistenza;
    this.resistenzaLivelloIniziale = resistenzaLivelloIniziale;
    this.colpiLivelloIniziale = colpiLivelloIniziale;
    this.vita = this.calcoloVitaTotale(livelloGiocatore);

}


Edificio.prototype.calcoloVitaTotale = function (livelloGiocatore) {
    return this.resistenzaLivelloIniziale + (this.tassoAggiornamentoResistenza * livelloGiocatore);
};

