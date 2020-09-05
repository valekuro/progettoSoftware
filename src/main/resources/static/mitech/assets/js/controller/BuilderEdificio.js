/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var js = document.createElement("script");
js.type = "text/javascript";
js.src = '/mitech/assets/js/controller/Edificio.js';

function BuilderEdificio() {
    var nome;
    var tassoAggiornamentoResistenza;
    var resistenzaLivelloIniziale;
    var tipologia;
    var livelloGiocatore;
    var tassoAggiornamentoColpi;
    var colpiLivelloIniziale;
    var vita;
    var colpi;
    var percentualeDistruzionePunteggio;
    var vitaRimanente = 1;

}


BuilderEdificio.prototype.setNome = function (nome) {
    this.nome = nome;
    return this;
}

BuilderEdificio.prototype.setTassoAggiornamentoResistenza = function (tassoAggiornamentoResistenza) {
    this.tassoAggiornamentoResistenza = tassoAggiornamentoResistenza;
    return this;
}

BuilderEdificio.prototype.setResistenzaLivelloIniziale = function (resistenzaLivelloIniziale) {
    this.resistenzaLivelloIniziale = resistenzaLivelloIniziale;
    return this;
}

BuilderEdificio.prototype.setTipologia = function (tipologia) {
    this.tipologia = tipologia;
    return this;
}

BuilderEdificio.prototype.setLivelloGiocatore = function (livelloGiocatore) {
    this.livelloGiocatore = livelloGiocatore;
    return this;
}

BuilderEdificio.prototype.setVita = function () {
    this.vita = this.calcoloVitaTotale();
    return this;
}
BuilderEdificio.prototype.setColpi = function () {
    this.colpi = this.calcoloColpiTotale();
    return this;
}

BuilderEdificio.prototype.setTassoAggiornamentoColpi = function (tassoAggiornamentoColpi) {
    this.tassoAggiornamentoColpi = tassoAggiornamentoColpi;
    return this;
}

BuilderEdificio.prototype.setColpiLivelloIniziale = function (colpiLivelloIniziale) {
    this.colpiLivelloIniziale = colpiLivelloIniziale;
    return this;
}

BuilderEdificio.prototype.calcoloColpiTotale = function (livelloGiocatore) {
    return this.colpiLivelloIniziale + (this.tassoAggiornamentoColpi * livelloGiocatore);
}

 BuilderEdificio.prototype.calcoloVitaTotale = function () {
    return this.resistenzaLivelloIniziale + (this.tassoAggiornamentoResistenza * this.livelloGiocatore);
}

BuilderEdificio.prototype.setPercentualeDistruzionePunteggio = function (percentualeDistruzionePunteggio) {
    this.percentualeDistruzionePunteggio = percentualeDistruzionePunteggio;
    return this;
}


BuilderEdificio.prototype.setVitaRimanente = function (vitaRimanente) {
    this.vitaRimanente = vitaRimanente;
    return this;
};


BuilderEdificio.prototype.build = function () {
    return new Edificio(this.nome, this.tassoAggiornamentoColpi, this.tassoAggiornamentoResistenza, this.resistenzaLivelloIniziale, this.colpiLivelloIniziale, this.tipologia, this.livelloGiocatore, this.percentualeDistruzionePunteggio);
}