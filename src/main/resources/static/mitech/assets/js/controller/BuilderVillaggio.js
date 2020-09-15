/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function BuilderVillaggio() {
    let livelloMunicipio;
    let tipoVillaggio;
    let elisirDisponibileAlGiocatore;
    let datiCaselle = [];
  }


BuilderVillaggio.prototype.setLivelloMunicipio = function (livelloMunicipio) {
    this.livelloMunicipio = livelloMunicipio;
    return this;
};


BuilderVillaggio.prototype.setTipoVillaggio = function (tipoVillaggio) {
    this.tipoVillaggio = tipoVillaggio;
    return this;
};

BuilderVillaggio.prototype.setElisirDisponibileAlGiocatore = function (elisirDisponibileAlGiocatore) {
    this.elisirDisponibileAlGiocatore = elisirDisponibileAlGiocatore;
    return this;
};

BuilderVillaggio.prototype.setDatiCaselle = function (datiCaselle) {
    this.datiCaselle = datiCaselle;
    return this;
};

BuilderVillaggio.prototype.buildCaselle = function () {

    var caselle = new Array();
    var i;
    for (i = 0; i < this.datiCaselle.length; i++) {     
       caselle.push(new Casella(this.datiCaselle[i].posizione,  new BuilderEdificio() 
               .setNome(this.datiCaselle[i]['edificio'].nome)
               .setTassoAggiornamentoColpi(this.datiCaselle[i]['edificio'].tassoAggiornamentoColpi)
               .setTassoAggiornamentoResistenza(this.datiCaselle[i]['edificio'].tassoAggiornamentoResistenza)
               .setResistenzaLivelloIniziale(this.datiCaselle[i]['edificio'].resistenzaLivelloIniziale)
               .setColpiLivelloIniziale(this.datiCaselle[i]['edificio'].colpiLivelloIniziale)
               .setLivelloGiocatore(this.livelloMunicipio)
               .setVita()
               .setPercentualeDistruzionePunteggio(this.datiCaselle[i]['edificio']['percentualeDistruzionePunteggio'])
               .setTipologia(this.datiCaselle[i]['edificio']['tipologia'])));
    }

    return caselle;
};

BuilderVillaggio.prototype.build = function () {
    return new Villaggio(this.elisirDisponibileAlGiocatore, this.livelloMunicipio, this.tipoVillaggio, this.buildCaselle());
};