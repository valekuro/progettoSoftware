/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function Edificio(nome, tassoAggiornamentoColpi, tassoAggiornamentoResistenza, resistenzaLivelloIniziale, colpiLivelloIniziale, livelloGiocatore, percentualeDistruzionePunteggio, tipologia) {

   // this.posizione = posizione;

    this.nome = nome;
    this.tassoAggiornamentoColpi = tassoAggiornamentoColpi;
    this.tassoAggiornamentoResistenza = tassoAggiornamentoResistenza;
    this.resistenzaLivelloIniziale = resistenzaLivelloIniziale;
    this.colpiLivelloIniziale = colpiLivelloIniziale;
    this.vita = this.calcoloVitaTotale(livelloGiocatore);
    this.vitaRimanente = 1;
    this.percentualeDistruzionePunteggio = percentualeDistruzionePunteggio;
    this.tipologia = tipologia;
}

Edificio.prototype.setNome = function (nome) {
    this.nome = nome;
    return this;
};

Edificio.prototype.setTassoAggiornamentoColpi = function (tassoAggiornamentoColpi) {
    this.tassoAggiornamentoColpi = tassoAggiornamentoColpi;
    return this;
};

Edificio.prototype.setResistenzaLivelloIniziale = function (resistenzaLivelloIniziale) {
    this.resistenzaLivelloIniziale = resistenzaLivelloIniziale;
    return this;
};

Edificio.prototype.setColpiLivelloIniziale = function (colpiLivelloIniziale) {
    this.colpiLivelloIniziale = colpiLivelloIniziale;
    return this;
};

Edificio.prototype.setPercentualeDistruzionePunteggio = function (percentualeDistruzionePunteggio) {
    this.percentualeDistruzionePunteggio = percentualeDistruzionePunteggio;
    return this;
};

Edificio.prototype.setVitaRimanente = function (vitaRimanente) {
    this.vitaRimanente = vitaRimanente;
    return this;
};

Edificio.prototype.setTipologia = function (tipologia) {
    this.tipologia = tipologia;
    return this;
};

Edificio.prototype.calcoloVitaTotale = function (livelloGiocatore) {
    return this.resistenzaLivelloIniziale + (this.tassoAggiornamentoResistenza * livelloGiocatore);
};

Edificio.prototype.calcoloColpiTotale = function (livelloGiocatore) {
    return this.colpiLivelloIniziale + (this.tassoAggiornamentoColpi * livelloGiocatore);
};
