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
    this.datiCaselle = this.buildCaselle(datiCaselle);
    return this;
};


BuilderVillaggio.prototype.buildCaselle = function (datiCaselle) {

    var caselle = new Array();
    var i;
    for (i = 0; i < datiCaselle.length; i++) {
        let edificio = new BuilderEdificio()
        edificio.setNome(datiCaselle[i]['edificio'].nome)
        edificio.setTassoAggiornamentoColpi(datiCaselle[i]['edificio'].tassoAggiornamentoColpi)
        edificio.setTassoAggiornamentoResistenza(datiCaselle[i]['edificio'].tassoAggiornamentoResistenza)
        edificio.setResistenzaLivelloIniziale(datiCaselle[i]['edificio'].resistenzaLivelloIniziale)
        edificio.setColpiLivelloIniziale(datiCaselle[i]['edificio'].colpiLivelloIniziale)
        edificio.setLivelloGiocatore(this.livelloMunicipio)
        edificio.setVita()
        edificio.setPercentualeDistruzionePunteggio(datiCaselle[i]['edificio']['percentualeDistruzionePunteggio'])
        edificio.setTipologia(datiCaselle[i]['edificio']['tipologia'])
        edificio.build()
        caselle.push(new Casella(datiCaselle[i].posizione, edificio));
    }

    return caselle;
};


BuilderVillaggio.prototype.build = function () {
    return new Villaggio(this.elisirDisponibileAlGiocatore, this.livelloMunicipio, this.tipoVillaggio);
};