/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function Casella(posizione, oggettoOccupante) {

    this.posizione = posizione;
    this.oggettoOccupante = oggettoOccupante;
}

Casella.prototype.setPosizione = function (posizione) {
    this.posizione = posizione;
    return this;
};
Casella.prototype.setOggettoOccupante = function (oggettoOccupante) {
    this.oggettoOccupante = oggettoOccupante;
    return this;
};

Casella.prototype.resetCasella = function (){
    this.oggettoOccupante = new BuilderEdificio()
                                        .setNome('erba')
                                        .setTassoAggiornamentoColpi(0)
                                        .setTassoAggiornamentoResistenza(0)
                                        .setResistenzaLivelloIniziale(0)
                                        .setColpiLivelloIniziale(0)
                                        .setPercentualeDistruzionePunteggio(0)
                                        .setTipologia('erba')
                                        .build();
}