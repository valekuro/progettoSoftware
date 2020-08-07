/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//import viewPartita from '/mitech/assets/js/application/ViewPartita.js'

function Partita(villaggio, nomeTruppa, viewPartita) {

    this.villaggio = villaggio;
    this.nomeTruppa = nomeTruppa;
    this.viewPartita = viewPartita;

}

Partita.prototype.setVillaggio = function (villaggio) {
    this.villaggio = villaggio;
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
    //viewPartita.visualizzaVillaggioNemico(caselleVillaggioNemico);
    this.viewPartita.visualizzaVillaggioNemico(caselleVillaggioNemico);
}
Partita.prototype.avanzamentoTruppeInserite = function (oggettoTabelloneAux, oggettoTabellone) {
    var i;
    for (i = 0; i < 36; i++) {
   // console.log(oggettoTabelloneAux[i]);

        //console.log("DOPO   " + JSON.stringify(oggettoTabelloneAux[i]));
        if (oggettoTabellone[i].oggettoOccupante.nome === 'truppa' && i < 35) {
            oggettoTabelloneAux[i + 1].oggettoOccupante.nome = 'truppa';
            oggettoTabelloneAux[i].oggettoOccupante.nome = 'erba';
            this.viewPartita.camminoTruppa(i);
        }
    }

    //console.log(oggettoTabelloneAux);
    oggettoTabellone = _.cloneDeep(oggettoTabelloneAux);
};



Partita.prototype.checkCasellaErba = function (occupazione) {
    document.getElementById(occupazione).src = '/mitech/assets/images/truppe/thumbnails/' + nomet + '.png';
//    this.avanzamentoTruppeInserite(occupazione);
}

/*   function checkCasellaEdificio(occupazione) {
 //var oggetto = document.getElementById('edificioincasella' + occupazione).src;
 alert('ritenta!');
 }*/
