/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function ViewPartita() {
}

ViewPartita.prototype.visualizzaVillaggioNemico = function (caselleVillaggioNemico) {
    var i;
    for (i = 0; i < 36; i++) {
        document.getElementById(caselleVillaggioNemico[i].posizione).src = "/mitech/assets/images/villaggio/" + caselleVillaggioNemico[i].oggettoOccupante.nome + ".png";
    }

}


ViewPartita.prototype.camminoTruppa = function (i) {
    document.getElementById(i + 2).src = '/mitech/assets/images/truppe/thumbnails/' + nomet + '.png';
    document.getElementById(i + 1).src = "/mitech/assets/images/villaggio/erba.png";

}

