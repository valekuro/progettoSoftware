/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Partita(villaggio, truppe, nomeTruppa) {

    this.villaggio = villaggio;
    this.truppe = truppe;
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


Partita.prototype.setNomeTruppa = function (nomeTruppa) {
    this.nomeTruppa = nomeTruppa;
    return this;
};

Partita.prototype.getVillaggio = function () {
    return this.villaggio;
};

Partita.prototype.avviaTimer = function () {
    console.log("avvia timer");
    return this;
};

Partita.prototype.costruisciVillaggioNemico = function () {
    var caselleVillaggioNemico = this.getVillaggio()['caselle'];
   var viewPartita = new ViewPartita();
   viewPartita.visualizzaVillaggioNemico(caselleVillaggioNemico);
}
Partita.prototype.avanzamentoTruppeInserite = function (casellaInizialeTruppa) {
    //console.log(JSON.stringify(this.villaggio.informazioniEdifici[2]));
    var casellaNext = parseInt(casellaInizialeTruppa) + 1;
    var caselleVillaggioNemico = this.getVillaggio()['caselle'];
    var j;
    for(j=0; j<caselleVillaggioNemico.length; j++){
       /* if (document.getElementById(casellaNext).className === 'erba') {
            document.getElementById(casellaNext).src = '/mitech/assets/images/truppe/thumbnails/' + nomet + '.png';
            document.getElementById(casellaInizialeTruppa).src = "/mitech/assets/images/villaggio/erba.png";
            console.log(casellaNext);
        }else{
            console.log(casellaNext);
        }
   
    
    return this;*/
};



Partita.prototype.checkCasellaErba = function (occupazione) {
    document.getElementById(occupazione).src = '/mitech/assets/images/truppe/thumbnails/' + nomet + '.png';
    this.avanzamentoTruppeInserite(occupazione);
}

/*   function checkCasellaEdificio(occupazione) {
 //var oggetto = document.getElementById('edificioincasella' + occupazione).src;
 alert('ritenta!');
 }*/
