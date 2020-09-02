/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function BuilderTruppa() {
    let nome;
    let quantita;
    let tassoAggiornamentoColpi;
    let guarigioneLivelloIniziale;
    let tassoAggiornamentoResistenza;
    let resistenzaLivelloIniziale;
    let colpiLivelloIniziale;
    let tassoAggiornamentoGuarigione;
    let tipologia;
    let livelloGiocatore;
    let vita;
    let colpi;
}

BuilderTruppa.prototype.setNome = function (nome) {
    this.nome = nome;
    return this;
}

BuilderTruppa.prototype.setQuantita = function (quantita) {
    this.quantita = quantita;
    return this;
}

BuilderTruppa.prototype.setTassoAggiornamentoColpi = function (tassoAggiornamentoColpi) {
    this.tassoAggiornamentoColpi = tassoAggiornamentoColpi;
    return this;
}

BuilderTruppa.prototype.setGuarigioneLivelloIniziale = function (guarigioneLivelloIniziale) {
    this.guarigioneLivelloIniziale = guarigioneLivelloIniziale;
    return this;
}

BuilderTruppa.prototype.setTassoAggiornamentoResistenza = function (tassoAggiornamentoResistenza) {
    this.tassoAggiornamentoResistenza = tassoAggiornamentoResistenza;
    return this;
}

BuilderTruppa.prototype.setResistenzaLivelloIniziale = function (resistenzaLivelloIniziale) {
    this.resistenzaLivelloIniziale = resistenzaLivelloIniziale;
    return this;
}

BuilderTruppa.prototype.setColpiLivelloIniziale = function (colpiLivelloIniziale) {
    this.colpiLivelloIniziale = colpiLivelloIniziale;
    return this;
}

BuilderTruppa.prototype.setTassoAggiornamentoGuarigione = function (tassoAggiornamentoGuarigione) {
    this.tassoAggiornamentoGuarigione = tassoAggiornamentoGuarigione;
    return this;
}

BuilderTruppa.prototype.setTipologia = function (tipologia) {
    this.tipologia = tipologia;
    return this;
}

BuilderTruppa.prototype.setLivelloGiocatore = function (livelloGiocatore) {
    this.livelloGiocatore = livelloGiocatore;
    return this;
}

BuilderTruppa.prototype.setVita = function () {
    this.vita = this.calcoloVitaTotale();
    return this;
}

BuilderTruppa.prototype.setColpi = function () {
    this.colpi = this.calcoloColpiTotale();
    return this;
}

BuilderTruppa.prototype.calcoloColpiTotale = function () {
    return this.colpiLivelloIniziale + (this.tassoAggiornamentoColpi * this.livelloGiocatore);
}

BuilderTruppa.prototype.calcoloVitaTotale = function () {
    return this.resistenzaLivelloIniziale + (this.tassoAggiornamentoResistenza * this.livelloGiocatore);

}

BuilderTruppa.prototype.build = function () {
    return new Truppa(this.nome, this.quantita, this.tassoAggiornamentoColpi, this.guarigioneLivelloIniziale, this.tassoAggiornamentoResistenza, this.guarigioneLivelloIniziale, this.resistenzaLivelloIniziale, this.colpiLivelloIniziale, this.tassoAggiornamentoGuarigione, this.tipologia, this.vita, this.livelloGiocatore, this.colpi);
}

