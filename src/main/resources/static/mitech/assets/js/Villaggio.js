/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*<![CDATA[*/
function Villaggio(livelloMunicipio, tipoVillaggio, numeroCaselle, informazioniEdifici) {

    this.livelloMunicipio = livelloMunicipio;
    this.tipoVillaggio = tipoVillaggio;
    this.numeroCaselle = numeroCaselle;
    this.informazioniEdifici = informazioniEdifici;
}

Villaggio.prototype.prova = function () {
    return /*[[${posizioneEdificio[8]}]]*/;
};
Villaggio.prototype.setLivelloMunicipio = function (livelloMunicipio) {
    this.livelloMunicipio = livelloMunicipio;
    return this;
};

Villaggio.prototype.setTipoVillaggio = function (tipoVillaggio) {
    this.tipoVillaggio = tipoVillaggio;
    return this;
};

Villaggio.prototype.setNumeroCaselle = function (numeroCaselle) {
    this.numeroCaselle = numeroCaselle;
    return this;
};

Villaggio.prototype.setInformazioniEdifici = function (informazioniEdifici) {
    this.informazioniEdifici = informazioniEdifici;
    return this;
};

Villaggio.prototype.calcoloLivelloEdifici = function (informazioniEdifici) {
    var infoEdificiBattaglia = new Array();
    for (var i = 0; i < informazioniEdifici.length; i++) {
        if ((informazioniEdifici[i][0].livelloDisponibilita) <= (this.livelloMunicipio)) {
            var calcoloResistenzaLivello = 0;
            var calcoloVitaLivello = 0;
            calcoloResistenzaLivello = informazioniEdifici[i][0].resistenzaLivelloIniziale + (informazioniEdifici[i][0].tassoAggiornamentoResistenza * this.livelloMunicipio);
            calcoloVitaLivello = informazioniEdifici[i][0].colpiLivelloIniziale + (informazioniEdifici[i][0].tassoAggiornamentoColpi * this.livelloMunicipio);
            infoEdificiBattaglia.push([informazioniEdifici[i][0].nome, calcoloResistenzaLivello, calcoloVitaLivello, informazioniEdifici[i][0].tipologia]);
        }
    }
    return infoEdificiBattaglia;
};
/*]]>*/