/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//import viewPartita from '/mitech/assets/js/application/ViewPartita.js'

function Partita(villaggio, nomeTruppa, viewPartita, truppeAddestrate) {

    this.villaggio = villaggio;
    this.nomeTruppa = nomeTruppa;
    this.viewPartita = viewPartita;
    this.truppeAddestrate = truppeAddestrate;

}

Partita.prototype.setVillaggio = function (villaggio) {
    this.villaggio = villaggio;
    return this;
};

Partita.prototype.setTruppeAddestrate = function (truppeAddestrate) {
    this.truppeAddestrate = truppeAddestrate;
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
    this.viewPartita.visualizzaVillaggioNemico(caselleVillaggioNemico);
}
Partita.prototype.avanzamentoTruppeInserite = function (oggettoTabelloneAux, oggettoTabellone) {

    var i;
    for (i = 0; i < oggettoTabellone.length; i++) {
        if (oggettoTabellone[i][1].nome === nomet && i < 35) {
            if (oggettoTabellone[i + 1][1].nome === 'erba') {
                oggettoTabelloneAux[i] = _.cloneDeep(oggettoTabellone[i + 1]);
                oggettoTabelloneAux[i + 1] = _.cloneDeep(oggettoTabellone[i]);
                this.viewPartita.camminoTruppa(i);
            } else if (oggettoTabelloneAux[i + 1][1].colpiLivelloIniziale !== 0) {
                console.log('ho incontrato una difesa! ');
                this.viewPartita.animazioneLotta(oggettoTabelloneAux[i + 1][1].nome, i);
                console.log('vita truppa prima dell attacco:    ' + JSON.stringify(oggettoTabelloneAux[i][1].vita));
                oggettoTabelloneAux[i][1].vita = oggettoTabelloneAux[i][1].vita - oggettoTabelloneAux[i + 1][1].calcoloColpiTotale(this.villaggio['livelloMunicipio']);
                console.log('vita truppa dopo l attacco:    ' + JSON.stringify(oggettoTabelloneAux[i][1].vita));
                if (oggettoTabelloneAux[i][1].vita <= 0) {
                    this.morteTruppaSuCasella(oggettoTabelloneAux, i);
                    nomet="";
                } else {
                    oggettoTabelloneAux[i + 1][1].vita = oggettoTabelloneAux[i + 1][1].vita - oggettoTabelloneAux[i][1].calcoloColpiTotale(this.villaggio['livelloMunicipio']);
                    if (oggettoTabelloneAux[i + 1][1].vita <= 0) {
                        this.morteOggettoSuCasella(oggettoTabelloneAux, i + 1);
                    }
                }
            } else if (oggettoTabelloneAux[i + 1][1].colpiLivelloIniziale === 0) {
                console.log('ho incontrato una costruzione! ');
                this.viewPartita.animazioneLotta(oggettoTabelloneAux[i + 1][1].nome, i);
                console.log('vita edificio prima dell attacco:    ' + JSON.stringify(oggettoTabelloneAux[i + 1][1].vita));
                oggettoTabelloneAux[i + 1][1].vita = oggettoTabelloneAux[i + 1][1].vita - oggettoTabelloneAux[i][1].calcoloColpiTotale(this.villaggio['livelloMunicipio']);
                console.log('vita edificio dopo l attacco:    ' + JSON.stringify(oggettoTabelloneAux[i + 1][1].vita));
                if (oggettoTabelloneAux[i + 1][1].vita <= 0) {
                    this.morteOggettoSuCasella(oggettoTabelloneAux, i + 1);
                }
            }
        }
    }

};

Partita.prototype.morteOggettoSuCasella = function (oggettoTabelloneAux, i) {
    oggettoTabelloneAux[i][1] = _.cloneDeep(oggettoTabelloneAux[i - 2][1])
    //this.viewPartita.edificioDistrutto(i - 1);
}

Partita.prototype.morteTruppaSuCasella = function (oggettoTabelloneAux, i) {
    oggettoTabelloneAux[i][1] = _.cloneDeep(oggettoTabelloneAux[i - 1][1]);
    //console.log(oggettoTabelloneAux[i + 1][1]);
    this.viewPartita.truppaDistrutta(i - 1, oggettoTabelloneAux[i + 1][1].nome);
}

Partita.prototype.checkCasellaErba = function (occupazione) {
    document.getElementById(occupazione).src = '/mitech/assets/images/truppe/thumbnails/' + nomet + '.png';
//    this.avanzamentoTruppeInserite(occupazione);
}

/*   function checkCasellaEdificio(occupazione) {
 //var oggetto = document.getElementById('edificioincasella' + occupazione).src;
 alert('ritenta!');
 }*/
