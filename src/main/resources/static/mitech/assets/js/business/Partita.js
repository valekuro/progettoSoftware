/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//import viewPartita from '/mitech/assets/js/application/ViewPartita.js'

function Partita(villaggio, nomeTruppa, viewPartita, datiDiGioco) {

    this.villaggio = villaggio;
    this.nomeTruppa = nomeTruppa;
    this.viewPartita = viewPartita;
    this.datiDiGioco = datiDiGioco;
    this.ammontareDistruzioneParziale = 0;
    this.elisirRubato = 0;
    this.edificiDistrutti = 0;
    this.timer = new Timer(1);
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
    this.timer.start();
    return this;
};


Partita.prototype.recuperaTruppeAddestrate = function () {
      var truppe = new Array();
      for (var i = 0; i <  this.datiDiGioco[2].length; i++) {

                if ( this.datiDiGioco[2][i].truppa.tipologia === "attacco") {
                    for (var j = 0; j <  this.datiDiGioco[2][i].quantita; j++) {

                        truppe.push(new TruppaBuilder()
                                .setNome( this.datiDiGioco[2][i].truppa.nomeTruppa)
                                .setQuantita( this.datiDiGioco[2][i].quantita)
                                .setTassoAggiornamentoColpi( this.datiDiGioco[2][i].truppa.tassoAggiornamentoColpi)
                                .setTassoAggiornamentoResistenza( this.datiDiGioco[2][i].truppa.tassoAggiornamentoResistenza)
                                .setResistenzaLivelloIniziale( this.datiDiGioco[2][i].truppa.resistenzaLivelloIniziale)
                                .setColpiLivelloIniziale( this.datiDiGioco[2][i].truppa.colpiLivelloIniziale)
                                .setLivelloGiocatore( this.datiDiGioco[1].livelloGiocatore)
                                .setVita());
                    }
                } else if (data[2][i].truppa.tipologia === "guarigione") {
                    for (var q = 0; q <  this.datiDiGioco[2][i].quantita; q++) {

                        truppe.push(new TruppaBuilder()

                                .setNome( this.datiDiGioco[2][i].truppa.nomeTruppa)
                                .setQuantita( this.datiDiGioco[2][i].quantita)
                                .setTassoAggiornamentoGuarigione( this.datiDiGioco[2][i].truppa.tassoAggiornamentoGuarigione)
                                .setTassoAggiornamentoResistenza( this.datiDiGioco[2][i].truppa.tassoAggiornamentoResistenza)
                                .setResistenzaLivelloIniziale( this.datiDiGioco[2][i].truppa.resistenzaLivelloIniziale)
                                .setGuarigioneLivelloIniziale( this.datiDiGioco[2][i].truppa.guarigioneLivelloIniziale)
                                .setLivelloGiocatore( this.datiDiGioco[1].livelloGiocatore)
                                .setVita());
                    }
                }

            }
            return truppe;
};


Partita.prototype.iniziaPartita = function () {
   
};


Partita.prototype.costruisciVillaggioNemico = function () {
    var caselleVillaggioNemico = this.getVillaggio()['caselle'];
    this.viewPartita.visualizzaVillaggioNemico(caselleVillaggioNemico);
    this.avviaTimer();
}

Partita.prototype.avanzamentoTruppeInserite = function (oggettoTabelloneAux, oggettoTabellone, quantitaTruppa) {
    var i;
    for (i = 0; i < oggettoTabellone.length; i++) {
        if (oggettoTabellone[i][1].nome === nomet && oggettoTabellone[i][1].nome !== 'guaritore' && i < 35) {

            if (oggettoTabellone[i + 1][1].nome === 'erba') {
                oggettoTabelloneAux[i] = _.cloneDeep(oggettoTabellone[i + 1]);
                oggettoTabelloneAux[i + 1] = _.cloneDeep(oggettoTabellone[i]);
                this.viewPartita.camminoTruppa(i);
                //oggettoTabelloneAux = _.cloneDeep(this.checkGuaritoreSuVillaggio(oggettoTabellone, i));
                //this.checkGuaritoreSuVillaggio(oggettoTabellone, i);
            } else if (oggettoTabelloneAux[i + 1][1].colpiLivelloIniziale !== 0) {
                console.log('ho incontrato una difesa! ');
                this.viewPartita.animazioneLotta(oggettoTabelloneAux[i + 1][1].nome, i);
                console.log('vita truppa prima dell attacco:    ' + JSON.stringify(oggettoTabelloneAux[i][1].vita));
                oggettoTabelloneAux[i][1].vita = oggettoTabelloneAux[i][1].vita - oggettoTabelloneAux[i + 1][1].calcoloColpiTotale(this.villaggio['livelloMunicipio']);
                console.log('vita truppa dopo l attacco:    ' + JSON.stringify(oggettoTabelloneAux[i][1].vita));
                if (oggettoTabelloneAux[i][1].vita <= 0) {
                    this.morteTruppaSuCasella(oggettoTabelloneAux, i);
                    nomet = "";
                } else {
                    console.log('vita difesa prima dell attacco:    ' + JSON.stringify(oggettoTabelloneAux[i + 1][1].vita));
                    oggettoTabelloneAux[i + 1][1].vita = oggettoTabelloneAux[i + 1][1].vita - oggettoTabelloneAux[i][1].calcoloColpiTotale(this.villaggio['livelloMunicipio']);
                    console.log('vita difesa dopo dell attacco:    ' + JSON.stringify(oggettoTabelloneAux[i + 1][1].vita));
                    if (oggettoTabelloneAux[i + 1][1].vita <= 0) {
                        console.log(this.calcoloParzialePunteggio(oggettoTabelloneAux[i + 1][1]));
                        this.morteOggettoSuCasella(oggettoTabelloneAux, i + 1); 
                        this.edificiDistrutti = parseInt(this.edificiDistrutti) + 1;
                        this.viewPartita.mantieniNumeroEdificiDistrutti(this.edificiDistrutti);
                    }
                }
            } else if (oggettoTabelloneAux[i + 1][1].colpiLivelloIniziale === 0) {
                console.log('ho incontrato una costruzione! ');
                this.viewPartita.animazioneLotta(oggettoTabelloneAux[i + 1][1].nome, i);
                console.log('vita edificio prima dell attacco:    ' + JSON.stringify(oggettoTabelloneAux[i + 1][1].vita));
                oggettoTabelloneAux[i + 1][1].vita = oggettoTabelloneAux[i + 1][1].vita - oggettoTabelloneAux[i][1].calcoloColpiTotale(this.villaggio['livelloMunicipio']);
                console.log('vita edificio dopo l attacco:    ' + JSON.stringify(oggettoTabelloneAux[i + 1][1].vita));
                if (oggettoTabelloneAux[i + 1][1].vita <= 0) {
                        if(oggettoTabelloneAux[i + 1][1].nome ==='estrattore' || oggettoTabelloneAux[i + 1][1].nome ==='deposito'){
                             this.elisirRubato = (parseInt(this.villaggio.elisirDisponibileAlGiocatore) * 25) / 100;
                             console.log(this.villaggio.elisirDisponibileAlGiocatore);
                        }

                    this.morteOggettoSuCasella(oggettoTabelloneAux, i + 1);
                    this.edificiDistrutti = parseInt(this.edificiDistrutti) + 1;
                    this.viewPartita.mantieniNumeroEdificiDistrutti(this.edificiDistrutti);
                }
            }
        }
    }
 console.log(this.timer);
  if(this.timer.distance < 0){
        console.log('tempo scaduto');   
        console.log(this.x);
        clearInterval(this.timer.x);
        document.getElementById("demo").innerHTML = "Fine partita!";
        this.viewPartita.visualizzaRisultatiPartita(this.ammontareDistruzioneParziale, this.elisirRubato);

  }
  if (this.truppeAddestrate.length === quantitaTruppa.length) { 
        for (i = 0; i < oggettoTabellone.length; i++) {
          if (oggettoTabellone[i][1].nome !== nomet && i < 35) {
          this.viewPartita.visualizzaRisultatiPartita(this.ammontareDistruzioneParziale, this.elisirRubato);

          }
        }

  } 


};


Partita.prototype.checkGuaritoreSuVillaggio = function (oggettoTabellone, j) {
 var o;
 var guaritore;
    for (o = 0; o < oggettoTabellone.length; o++) {
        if (oggettoTabellone[o][1].guarigioneLivelloIniziale > 0 && o < 35) {
                guaritore = oggettoTabellone[o][1].nome;
                oggettoTabellone[j-1][1] = _.cloneDeep(oggettoTabellone[o][1]);
                oggettoTabellone[o][1] = _.cloneDeep(oggettoTabellone[j][1]);
                this.viewPartita.mostraGuaritore(j-1, o, guaritore);
               // return oggettoTabellone;
        }

    }

}


Partita.prototype.morteOggettoSuCasella = function (oggettoTabelloneAux, i) {
    oggettoTabelloneAux[i][1] = _.cloneDeep(oggettoTabelloneAux[i - 2][1])
    //this.viewPartita.edificioDistrutto(i - 1);
}
Partita.prototype.calcoloParzialePunteggio = function (oggettoTabelloneAux) {
   
 for(var pippo=0; pippo<this.villaggio.caselle.length; pippo++){
if(oggettoTabelloneAux.nome === this.villaggio.caselle[pippo][1].nome){   
   this.ammontareDistruzioneParziale = parseInt(this.ammontareDistruzioneParziale) + parseInt(this.villaggio.caselle[pippo][1].percentualeDistruzionePunteggio);   
 return this.ammontareDistruzioneParziale;
}
                        }

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
