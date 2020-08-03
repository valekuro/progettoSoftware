/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Partita(villaggio, truppe, edifici, nomeTruppa) {

    this.villaggio = villaggio;
    this.truppe = truppe;
    this.edifici = edifici;
    this.nomeTruppa = nomeTruppa;
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

Partita.prototype.setNomeTruppa = function (nomeTruppa) {
    this.nomeTruppa = nomeTruppa;
    return this;
};

Partita.prototype.avviaTimer = function () {
    console.log("avvia timer");
    return this;
};

Partita.prototype.avanzamentoTruppeInserite = function (casella) {
    //console.log(JSON.stringify(this.villaggio.informazioniEdifici[2]));
    var casellaNext = parseInt(casella) + 1;
   
    setTimeout(function(){  
        if (document.getElementById(casellaNext).className === 'erbaincasella') {
            
        document.getElementById(casellaNext).src = '/mitech/assets/images/truppe/thumbnails/' + nomet + '.png';
        document.getElementById(casella).src = "/mitech/assets/images/villaggio/erba.png";
            
    }}, 2000);
    
    return this;
};


Partita.prototype.checkCasellaErba = function (occupazione) {
    document.getElementById(occupazione).src = '/mitech/assets/images/truppe/thumbnails/' + nomet + '.png';
    this.avanzamentoTruppeInserite(occupazione);
}

/*   function checkCasellaEdificio(occupazione) {
 //var oggetto = document.getElementById('edificioincasella' + occupazione).src;
 alert('ritenta!');
 }*/
