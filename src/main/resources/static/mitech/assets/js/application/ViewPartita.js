/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function ViewPartita() {

}

ViewPartita.prototype.visualizzaVillaggioNemico = function (caselle) {
    var i;
    for (i = 0; i < 36; i++) {
        document.getElementById(caselle[i].posizione).src = "/mitech/assets/images/villaggio/" + caselle[i].oggettoOccupante + ".png";
    }

}


ViewPartita.prototype.camminoTruppa = function (i) {
    document.getElementById(i + 2).src = '/mitech/assets/images/truppe/thumbnails/' + nomet + '.png';
    document.getElementById(i + 1).src = "/mitech/assets/images/villaggio/erba.png";

}

