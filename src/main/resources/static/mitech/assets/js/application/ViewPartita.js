/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var nomet;


function ViewPartita() {
}

ViewPartita.prototype.visualizzaVillaggioNemico = function (caselleVillaggioNemico) {
    var i;
    for (i = 0; i < 36; i++) {
        document.getElementById(caselleVillaggioNemico[i][0]).src = "/mitech/assets/images/villaggio/" + caselleVillaggioNemico[i][1].nome + ".png";
    }
}
ViewPartita.prototype.animazioneLotta = function (nomeEdificio, i) {
    document.getElementById(i).src = "/mitech/assets/images/villaggio/erba.png";
    document.getElementById(i + 1).src = "/mitech/assets/images/truppe/" + nomet + ".gif";
    document.getElementById(i + 2).src = "/mitech/assets/images/villaggio/" + nomeEdificio + ".gif";
}
ViewPartita.prototype.camminoTruppa = function (i) {
    document.getElementById(i + 1).src = '/mitech/assets/images/truppe/thumbnails/' + nomet + '.png';
    document.getElementById(i).src = "/mitech/assets/images/villaggio/erba.png";
}

ViewPartita.prototype.edificioDistrutto = function (i) {
    this.camminoTruppa(i);
    document.getElementById(i + 2).src = "/mitech/assets/images/villaggio/erba.png";
}
ViewPartita.prototype.truppaDistrutta = function (i, nomeEdificioSopravvissuto) {
    document.getElementById(i+1).src = "/mitech/assets/images/villaggio/erba.png";
    document.getElementById(i + 2).src = "/mitech/assets/images/villaggio/erba.png";
    document.getElementById(i + 3).src = '/mitech/assets/images/villaggio/'+nomeEdificioSopravvissuto+'.png';
    
   /* document.getElementById(i + 2).src = "/mitech/assets/images/villaggio/erba.png";
    document.getElementById(i + 1).src = "/mitech/assets/images/villaggio/erba.png";
    document.getElementById(i).src = '/mitech/assets/images/villaggio/'+nomeEdificioSopravvissuto+'.png';*/
}

ViewPartita.prototype.selezionaTruppa = function (indiceTruppa) {
    var truppaUtilizzata = document.getElementsByName(nomet);
    var truppaInattiva = document.getElementsByName(nomet + 'Inactive');
    if (truppaUtilizzata.length > 1) {
        truppaUtilizzata[indiceTruppa].style.display = 'none';
        truppaInattiva[indiceTruppa].style.display = 'block';
        indiceTruppa = indiceTruppa + 1;
    } else {
        truppaUtilizzata[0].style.display = 'none';
        truppaInattiva[0].style.display = 'block';

    }
    return indiceTruppa;
}