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
                oggettoTabelloneAux.splice(i + 1, 1, oggettoTabellone[i]);
                oggettoTabelloneAux.splice(i, 1, oggettoTabellone[i + 1]);
                document.getElementById(i + 1).src = '/mitech/assets/images/truppe/thumbnails/' + nomet + '.png';
                document.getElementById(i).src = "/mitech/assets/images/villaggio/erba.png";
            } else {
                let resistenzaEdificioTotale = this.villaggio['caselle'][i+1][1].calcoloVitaTotale(this.villaggio['livelloMunicipio']);
                let resistenzaTruppaOccupanteTotale = oggettoTabellone[i][1].calcoloVitaTotale(this.villaggio['livelloMunicipio']);
                console.log(this.villaggio['caselle'][i+1][1].calcoloVitaTotale(this.villaggio['livelloMunicipio']));
                console.log(oggettoTabellone[i][1].calcoloVitaTotale(this.villaggio['livelloMunicipio']));
                let colpiEdificioTotale = this.villaggio['caselle'][i+1][1].calcoloColpiTotale(this.villaggio['livelloMunicipio']);
                let colpiTruppaTotale = oggettoTabellone[i][1].calcoloColpiTotale(this.villaggio['livelloMunicipio']);
                this.villaggio['caselle'][i+1][1].vitaRimanente = resistenzaEdificioTotale - colpiTruppaTotale;
               /* let colpiEdificioTotale = this.getVillaggio()['caselle'][i + 1].colpiLivelloIniziale + (this.getVillaggio()['caselle'][i + 1].tassoAggiornamentoColpi * this.getVillaggio()['livelloMunicipio']);
                resistenzaEdificioTotale = resistenzaEdificioTotale - colpiTruppaOccupanteTotale;
                resistenzaTruppaOccupanteTotale = resistenzaTruppaOccupanteTotale - colpiEdificioTotale;
*/
                //document.getElementById(i + 1).className = "casellaInAttacco";
                                document.getElementById(i).src = "/mitech/assets/images/villaggio/erba.png"

                document.getElementById(i + 1).src = "/mitech/assets/images/truppe/arciere.gif"
                                document.getElementById(i + 2).src = "/mitech/assets/images/villaggio/arcox.gif"

            }
        }
    }

    //console.log(oggettoTabelloneAux); 

};

Partita.prototype.recuperaTruppeAddestrate = function () {

}


Partita.prototype.checkCasellaErba = function (occupazione) {
    document.getElementById(occupazione).src = '/mitech/assets/images/truppe/thumbnails/' + nomet + '.png';
//    this.avanzamentoTruppeInserite(occupazione);
}

/*   function checkCasellaEdificio(occupazione) {
 //var oggetto = document.getElementById('edificioincasella' + occupazione).src;
 alert('ritenta!');
 }*/
