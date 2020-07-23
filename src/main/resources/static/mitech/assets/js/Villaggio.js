/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 /*<![CDATA[*/
function Villaggio(livelloMunicipio, tipoVillaggio, numeroCaselle, posizioneEdificio) {
    
        this.livelloMunicipio = livelloMunicipio;
        this.tipoVillaggio = tipoVillaggio;
        this.numeroCaselle = numeroCaselle;
        this.posizioneEdificio = posizioneEdificio;
}

Villaggio.prototype.prova = function(){
    return /*[[${posizioneEdificio[8]}]]*/;
};
Villaggio.prototype.setLivelloMunicipio = function(livelloMunicipio){
    this.livelloMunicipio = livelloMunicipio;
    return this;
};

Villaggio.prototype.setTipoVillaggio = function(tipoVillaggio){
    this.tipoVillaggio = tipoVillaggio;
    return this;
};

Villaggio.prototype.setNumeroCaselle = function(numeroCaselle){
    this.numeroCaselle = numeroCaselle;
    return this;
};

Villaggio.prototype.setPosizioneEdificio = function(posizioneEdificio){
    this.posizioneEdificio = posizioneEdificio;
    return this;
};

/*]]>*/