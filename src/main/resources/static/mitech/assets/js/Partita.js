/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Partita(villaggio, truppe, edifici) {

    this.villaggio = villaggio;
    this.truppe = truppe;
    this.edifici = edifici;
}

Partita.prototype.setVillaggio = function (villaggio) {
    this.villaggio = villaggio;
    return this;
};

Partita.prototype.setTruppe = function (truppe) {
    this.truppe = truppe;
    return this;
};

Partita.prototype.setEdifici = function (edifici) {
    this.edifici = edifici;
    return this;
};

Partita.prototype.AvviaTimer = function () {
    console.log("avvia timer");
    return this;
};



