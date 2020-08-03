/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function Casella(posizione, oggettoOccupante, statoCasella) {

    this.posizione = posizione;
    this.oggettoOccupante = oggettoOccupante;
    this.statoCasella = statoCasella;
}

Casella.prototype.setPosizione = function (posizione) {
    this.posizione = posizione;
    return this;
};
Casella.prototype.setOggettoOccupante = function (oggettoOccupante) {
    this.oggettoOccupante = oggettoOccupante;
    return this;
};
Casella.prototype.setStatoCasella = function (statoCasella) {
    this.statoCasella = statoCasella;
    return this;
};