/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function Villaggio(livelloMunicipio, tipoVillaggio, numeroCaselle, posizioneDifese, posizioneCostruzioni) {
        this.livelloMunicipio = livelloMunicipio;
        this.tipoVillaggio = tipoVillaggio;
        this.numeroCaselle = numeroCaselle;
        this.posizioneDifese = posizioneDifese;
        this.posizioneCostruzioni = posizioneCostruzioni;
}

Villaggio.prototype.prova = function(){
    return "livelloMunicipio";
}
Villaggio.prototype.setLivelloMunicipio = function(livelloMunicipio){
    this.livelloMunicipio = livelloMunicipio;
    return this;
}

Villaggio.prototype.setTipoVillaggio = function(tipoVillaggio){
    this.tipoVillaggio = tipoVillaggio;
    return this;
}

Villaggio.prototype.setNumeroCaselle = function(numeroCaselle){
    this.numeroCaselle = numeroCaselle;
    return this;
}

Villaggio.prototype.setPosizioneDifese = function(posizioneDifese){
    this.posizioneDifese = posizioneDifese;
    return this;
}

Villaggio.prototype.setPosizioneCostruzioni = function(posizioneCostruzioni){
    this.posizioneCostruzioni = posizioneCostruzioni;
    return this;
}

