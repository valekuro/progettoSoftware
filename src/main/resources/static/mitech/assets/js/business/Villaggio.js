/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*<![CDATA[*/
function Villaggio(livelloMunicipio, tipoVillaggio, datiCaselle) {
    this.livelloMunicipio = livelloMunicipio;
    this.tipoVillaggio = tipoVillaggio;
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


Villaggio.prototype.setCaselle = function (caselle) {
    this.caselle = caselle;
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

Villaggio.prototype.creaCaselle = function (datiCaselle) {
    var edifici = new Array();
    var i;
    for (i = 0; i < datiCaselle.length; i++) {
    
        edifici.push(new Array(datiCaselle[i].posizione, new Edificio(datiCaselle[i]['edificio'].nome, datiCaselle[i]['edificio'].tassoAggiornamentoColpi, datiCaselle[i]['edificio'].tassoAggiornamentoResistenza, datiCaselle[i]['edificio'].resistenzaLivelloIniziale, datiCaselle[i]['edificio'].colpiLivelloIniziale, this.livelloMunicipio)));
    
    }
    return edifici;
}

/*]]>*/