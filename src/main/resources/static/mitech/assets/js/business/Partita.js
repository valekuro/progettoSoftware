/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//import viewPartita from '/mitech/assets/js/application/ViewPartita.js'

function Partita(nomeTruppa, viewPartita, datiDiGioco) {
    this.nomeTruppa = nomeTruppa;
    this.viewPartita = viewPartita;
    this.datiDiGioco = datiDiGioco;   
    this.villaggio = new Villaggio(this.datiDiGioco[3].elisirDisponibileAlGiocatore, this.datiDiGioco[1].livelloGiocatore, "esercitazione", this.datiDiGioco[0]);
    this.oggettoTabelloneAux = new Array();
    this.truppeAddestrate = new Array();            
    this.conteggioTruppeUtilizzate = new Array();
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
                } else if (this.datiDiGioco[2][i].truppa.tipologia === "guarigione") {
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
   
   this.truppeAddestrate = this.recuperaTruppeAddestrate();
   this.costruisciVillaggioNemico();
   this.oggettoTabelloneAux = _.cloneDeep(this.villaggio.caselle);   
   this.selezionareCasella();   
   this.selezionareTruppaDisponibile();   
   this.gestioneTruppeInattive();    
   setInterval(function () {
                this.avanzamentoTruppeInserite();
                this.villaggio.caselle = _.cloneDeep(this.oggettoTabelloneAux);
            }, 4000);
   };

Partita.prototype.selezionareCasella = function () {
            var indiceTruppa = 0;

    $('.casella').click(function () {
                if (nomet === "") {
                    document.getElementById('warnings').innerHTML = "devi ancora selezionare la truppa";
                } else {
                    var $this = $(this);
                    var occupazione = $this.attr("id");
                    this.checkCasellaErba(occupazione);
                    this.conteggioTruppeUtilizzate.push(nomet);
                    var y;
                    for (y = 1; y < this.truppeAddestrate.length; y++) {
                        if (this.truppeAddestrate[y].nome === nomet) {
                            this.villaggio.caselle[occupazione][1] = this.truppeAddestrate[y];
                        }
                    }
                    indiceTruppa = this.viewPartita.selezionaTruppa(indiceTruppa);
                    this.oggettoTabelloneAux = _.cloneDeep(this.villaggio.caselle);
                }
            });
};

Partita.prototype.costruisciVillaggioNemico = function () {
    var caselleVillaggioNemico = this.getVillaggio()['caselle'];
    this.viewPartita.visualizzaVillaggioNemico(caselleVillaggioNemico);
    this.avviaTimer();
}

Partita.prototype.selezionareTruppaDisponibile = function () {
    $('.truppeDisponibiliAttacco').click(function () {
                var $this = $(this);
                var nomeTruppaScelta = $this.attr("name");
                console.log(nomeTruppaScelta);
                nomet = nomeTruppaScelta;
                document.getElementById('warnings').innerHTML = "seleziona la casella";

                //    $this.style.border = "1px solid";
                //   $this.style.padding = "10px";
                // $this.style.boxShadow = "5px 10px";
            });

}

Partita.prototype.gestioneTruppeInattive = function () {
   $('.truppeInactiveAttacco').click(function () {
                nomet = "";
                document.getElementById('warnings').innerHTML = "hai già usato questa truppa!";
            });


}

Partita.prototype.avanzamentoTruppeInserite = function () {
    var i;
    for (i = 0; i < this.villaggio.caselle.length; i++) {
        if (this.villaggio.caselle[i][1].nome === nomet && this.villaggio.caselle[i][1].nome !== 'guaritore' && i < 35) {

            if (this.villaggio.caselle[i + 1][1].nome === 'erba') {
                this.oggettoTabelloneAux[i] = _.cloneDeep(this.villaggio.caselle[i + 1]);
                this.oggettoTabelloneAux[i + 1] = _.cloneDeep(this.villaggio.caselle[i]);
                this.viewPartita.camminoTruppa(i);
                //oggettoTabelloneAux = _.cloneDeep(this.checkGuaritoreSuVillaggio(oggettoTabellone, i));
                //this.checkGuaritoreSuVillaggio(oggettoTabellone, i);
            } else if (this.oggettoTabelloneAux[i + 1][1].colpiLivelloIniziale !== 0) {
                console.log('ho incontrato una difesa! ');
                this.viewPartita.animazioneLotta(oggettoTabelloneAux[i + 1][1].nome, i);
                console.log('vita truppa prima dell attacco:    ' + JSON.stringify(oggettoTabelloneAux[i][1].vita));
                this.oggettoTabelloneAux[i][1].vita = this.oggettoTabelloneAux[i][1].vita - this.oggettoTabelloneAux[i + 1][1].calcoloColpiTotale(this.villaggio['livelloMunicipio']);
                console.log('vita truppa dopo l attacco:    ' + JSON.stringify(this.oggettoTabelloneAux[i][1].vita));
                if (this.oggettoTabelloneAux[i][1].vita <= 0) {
                    this.morteTruppaSuCasella(this.oggettoTabelloneAux, i);
                    nomet = "";
                } else {
                    console.log('vita difesa prima dell attacco:    ' + JSON.stringify(this.oggettoTabelloneAux[i + 1][1].vita));
                    this.oggettoTabelloneAux[i + 1][1].vita = this.oggettoTabelloneAux[i + 1][1].vita - this.oggettoTabelloneAux[i][1].calcoloColpiTotale(this.villaggio['livelloMunicipio']);
                    console.log('vita difesa dopo dell attacco:    ' + JSON.stringify(oggettoTabelloneAux[i + 1][1].vita));
                    if (this.oggettoTabelloneAux[i + 1][1].vita <= 0) {
                        console.log(this.calcoloParzialePunteggio(this.oggettoTabelloneAux[i + 1][1]));
                        this.morteOggettoSuCasella(this.oggettoTabelloneAux, i + 1); 
                        this.edificiDistrutti = parseInt(this.edificiDistrutti) + 1;
                        this.viewPartita.mantieniNumeroEdificiDistrutti(this.edificiDistrutti);
                    }
                }
            } else if (this.oggettoTabelloneAux[i + 1][1].colpiLivelloIniziale === 0) {
                console.log('ho incontrato una costruzione! ');
                this.viewPartita.animazioneLotta(this.oggettoTabelloneAux[i + 1][1].nome, i);
                console.log('vita edificio prima dell attacco:    ' + JSON.stringify(this.oggettoTabelloneAux[i + 1][1].vita));
                this.oggettoTabelloneAux[i + 1][1].vita = this.oggettoTabelloneAux[i + 1][1].vita - this.oggettoTabelloneAux[i][1].calcoloColpiTotale(this.villaggio['livelloMunicipio']);
                console.log('vita edificio dopo l attacco:    ' + JSON.stringify(this.oggettoTabelloneAux[i + 1][1].vita));
                if (this.oggettoTabelloneAux[i + 1][1].vita <= 0) {
                        if(this.oggettoTabelloneAux[i + 1][1].nome ==='estrattore' || this.oggettoTabelloneAux[i + 1][1].nome ==='deposito'){
                             this.elisirRubato = (parseInt(this.villaggio.elisirDisponibileAlGiocatore) * 25) / 100;
                             console.log(this.villaggio.elisirDisponibileAlGiocatore);
                        }

                    this.morteOggettoSuCasella(this.oggettoTabelloneAux, i + 1);
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
  if (this.truppeAddestrate.length === this.conteggioTruppeUtilizzate.length) { 
        for (i = 0; i < this.villaggio.caselle.length; i++) {
          if (this.villaggio.caselle[i][1].nome !== nomet && i < 35) {
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
