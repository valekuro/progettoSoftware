/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.

 var js = document.createElement("script");
 js.type = "text/javascript";
 js.src = '/mitech/assets/js/business/Villaggio.js';
 document.body.appendChild(js);
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
    for (i = 0; i < 36; i++) {
       //console.log(this.datiCaselle[i]['edificio']);
     
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
        //caselle.push(new Casella(this.datiCaselle[i].posizione, new Edificio(this.datiCaselle[i]['edificio'].nome, this.datiCaselle[i]['edificio'].tassoAggiornamentoColpi, this.datiCaselle[i]['edificio'].tassoAggiornamentoResistenza, this.datiCaselle[i]['edificio'].resistenzaLivelloIniziale, this.datiCaselle[i]['edificio'].colpiLivelloIniziale, this.livelloMunicipio, this.datiCaselle[i]['edificio']['percentualeDistruzionePunteggio'], this.datiCaselle[i]['edificio']['tipologia']), 'ok'));
        
    }
    return caselle;
};

BuilderVillaggio.prototype.build = function () {
    return new Villaggio(this.elisirDisponibileAlGiocatore, this.livelloMunicipio, this.tipoVillaggio, this.buildCaselle());
};