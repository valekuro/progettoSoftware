/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*<![CDATA[*/
function Villaggio(elisirDisponibileAlGiocatore, livelloMunicipio, tipoVillaggio, datiCaselle) {
    this.elisirDisponibileAlGiocatore = elisirDisponibileAlGiocatore;
    this.livelloMunicipio = livelloMunicipio;
    this.tipoVillaggio = tipoVillaggio;
    this.datiCaselle = datiCaselle;
    this.caselle = this.creaCaselle(datiCaselle);
  }


Villaggio.prototype.setLivelloMunicipio = function (livelloMunicipio) {
    this.livelloMunicipio = livelloMunicipio;
    return this;
};

Villaggio.prototype.setTipoVillaggio = function (tipoVillaggio) {
    this.tipoVillaggio = tipoVillaggio;
    return this;
};

Villaggio.prototype.setElisirDisponibileAlGiocatore = function (caselle) {
    this.elisirDisponibileAlGiocatore = elisirDisponibileAlGiocatore;
    return this;
};

Villaggio.prototype.getLivelloMunicipio = function () {
    return this.livelloMunicipio;
};

Villaggio.prototype.getTipoVillaggio = function () {
    return this.tipoVillaggio;
};

Villaggio.prototype.getCaselle = function () {
    return this.caselle;
};

Villaggio.prototype.creaCaselle = function () {
    var caselle = new Array();
    var i;
    for (i = 0; i < this.datiCaselle.length; i++) {
        caselle.push(new Casella(this.datiCaselle[i].posizione, new Edificio(this.datiCaselle[i]['edificio'].nome, this.datiCaselle[i]['edificio'].tassoAggiornamentoColpi, this.datiCaselle[i]['edificio'].tassoAggiornamentoResistenza, this.datiCaselle[i]['edificio'].resistenzaLivelloIniziale, this.datiCaselle[i]['edificio'].colpiLivelloIniziale, this.livelloMunicipio, this.datiCaselle[i]['edificio']['percentualeDistruzionePunteggio'], this.datiCaselle[i]['edificio']['tipologia']), 'ok'));
    
    }
    return caselle;
}

/*]]>*/