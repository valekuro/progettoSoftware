/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function Giocatore(nickname, villaggio, esercito) {
        this.nickname = nickname;
        this.villaggio = villaggio;
        this.esercito = esercito;
        
}

Giocatore.prototype.setNickname = function(nickname){
    this.nickname = nickname;
    return this;
};

Giocatore.prototype.setVillaggio = function(villaggio){
    this.villaggio = villaggio;
    return this;
};

Giocatore.prototype.setEsercito = function(esercito){
    this.esercito = esercito;
    return this;
};