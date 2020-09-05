/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function ProprietaOggettoSuCaselle(nome,tassoAggiornamentoResistenza, resistenzaLivelloIniziale, tipologia, livelloGiocatore, tassoAggiornamentoColpi, colpiLivelloIniziale) {
    this.nome=nome;
    this.tassoAggiornamentoResistenza = tassoAggiornamentoResistenza;
    this.resistenzaLivelloIniziale = resistenzaLivelloIniziale;
    this.tipologia = tipologia;
    this.livelloGiocatore = livelloGiocatore;
    this.tassoAggiornamentoColpi = tassoAggiornamentoColpi;
    this.colpiLivelloIniziale = colpiLivelloIniziale;
    this.vita = this.calcoloVitaTotale();
}
ProprietaOggettoSuCaselle.prototype.setNome = function (nome) {
    this.nome = nome;
    return this;
}

ProprietaOggettoSuCaselle.prototype.setTassoAggiornamentoResistenza = function (tassoAggiornamentoResistenza) {
    this.tassoAggiornamentoResistenza = tassoAggiornamentoResistenza;
    return this;
}

ProprietaOggettoSuCaselle.prototype.setResistenzaLivelloIniziale = function (resistenzaLivelloIniziale) {
    this.resistenzaLivelloIniziale = resistenzaLivelloIniziale;
    return this;
}

ProprietaOggettoSuCaselle.prototype.setTipologia = function (tipologia) {
    this.tipologia = tipologia;
    return this;
}

ProprietaOggettoSuCaselle.prototype.setVita = function () {
   this.vita = this.calcoloVitaTotale();
    return this;
}

ProprietaOggettoSuCaselle.prototype.setLivelloGiocatore = function (livelloGiocatore) {
    this.livelloGiocatore = livelloGiocatore;
    return this;
}


ProprietaOggettoSuCaselle.prototype.setTassoAggiornamentoColpi = function (tassoAggiornamentoColpi) {
    this.tassoAggiornamentoColpi = tassoAggiornamentoColpi;
    return this;
}

ProprietaOggettoSuCaselle.prototype.setColpiLivelloIniziale = function (colpiLivelloIniziale) {
    this.colpiLivelloIniziale = colpiLivelloIniziale;
    return this;
}

ProprietaOggettoSuCaselle.prototype.calcoloColpiTotale = function (livelloGiocatore) {
    return this.colpiLivelloIniziale + (this.tassoAggiornamentoColpi * livelloGiocatore);
}

ProprietaOggettoSuCaselle.prototype.calcoloVitaTotale = function () {

    return this.resistenzaLivelloIniziale + (this.tassoAggiornamentoResistenza * this.livelloGiocatore);

}