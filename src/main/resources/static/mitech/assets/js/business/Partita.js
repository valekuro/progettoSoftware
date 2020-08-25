/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//import viewPartita from '/mitech/assets/js/application/ViewPartita.js'

function Partita(nomeTruppa, datiDiGioco) {
    this.nomeTruppa = nomeTruppa;
    this.viewPartita = new ViewPartita();
    this.datiDiGioco = datiDiGioco;
    this.villaggio = this.creaVillaggioAvversario();
    this.oggettoTabelloneAux = new Array();
    this.truppeAddestrate = new Array();
    this.conteggioTruppeUtilizzate = new Array();
    this.ammontareDistruzioneParziale = 0;
    this.elisirRubato = 0;
    this.edificiDistrutti = 0;
    this.timer = new Timer(1);
    this.countDownDate;
}



Partita.prototype.setNomeTruppa = function (nomeTruppa) {
    this.nomeTruppa = nomeTruppa;
    return this;
};

Partita.prototype.setDatiDiGioco = function (datiDiGioco) {
    this.datiDiGioco = datiDiGioco;
    return this;
};

Partita.prototype.avviaTimer = function () {
    var countDownDate = new Date();
    countDownDate.setMinutes(countDownDate.getMinutes() + this.timer.durata); // timestamp
    this.countDownDate = new Date(countDownDate); // Date object
    this.timer.start(() => this.gestionePartita());
    return this;
};

Partita.prototype.creaVillaggioAvversario = function () {
    return new Villaggio(this.datiDiGioco[3].elisirDisponibileAlGiocatore, this.datiDiGioco[1].livelloGiocatore, "esercitazione", this.datiDiGioco[0]);
};

Partita.prototype.recuperaTruppeAddestrate = function () {
    var truppe = new Array();
    for (var i = 0; i < this.datiDiGioco[2].length; i++) {

        if (this.datiDiGioco[2][i].truppa.tipologia === "attacco") {
            for (var j = 0; j < this.datiDiGioco[2][i].quantita; j++) {

                truppe.push(new TruppaBuilder()
                        .setNome(this.datiDiGioco[2][i].truppa.nomeTruppa)
                        .setQuantita(this.datiDiGioco[2][i].quantita)
                        .setTassoAggiornamentoColpi(this.datiDiGioco[2][i].truppa.tassoAggiornamentoColpi)
                        .setTassoAggiornamentoResistenza(this.datiDiGioco[2][i].truppa.tassoAggiornamentoResistenza)
                        .setResistenzaLivelloIniziale(this.datiDiGioco[2][i].truppa.resistenzaLivelloIniziale)
                        .setColpiLivelloIniziale(this.datiDiGioco[2][i].truppa.colpiLivelloIniziale)
                        .setLivelloGiocatore(this.datiDiGioco[1].livelloGiocatore)
                        .setVita());
            }
        } else if (this.datiDiGioco[2][i].truppa.tipologia === "guarigione") {
            for (var q = 0; q < this.datiDiGioco[2][i].quantita; q++) {

                truppe.push(new TruppaBuilder()

                        .setNome(this.datiDiGioco[2][i].truppa.nomeTruppa)
                        .setQuantita(this.datiDiGioco[2][i].quantita)
                        .setTassoAggiornamentoGuarigione(this.datiDiGioco[2][i].truppa.tassoAggiornamentoGuarigione)
                        .setTassoAggiornamentoResistenza(this.datiDiGioco[2][i].truppa.tassoAggiornamentoResistenza)
                        .setResistenzaLivelloIniziale(this.datiDiGioco[2][i].truppa.resistenzaLivelloIniziale)
                        .setGuarigioneLivelloIniziale(this.datiDiGioco[2][i].truppa.guarigioneLivelloIniziale)
                        .setLivelloGiocatore(this.datiDiGioco[1].livelloGiocatore)
                        .setVita());
            }
        }

    }
    return truppe;
};


Partita.prototype.iniziaPartita = function () {

    this.viewPartita.aggiornareBannerAiutoMossa('Seleziona la truppa per l\'attacco tra le truppe disponibili');
    this.truppeAddestrate = this.recuperaTruppeAddestrate();
    this.posizionaVillaggioNemicoSuCaselle();

    this.avviaTimer();

    // this.selezionareCasella();
    //   this.selezionareTruppaDisponibile();
    // this.gestioneTruppeInattive();
    //test = this;
    //setInterval(()=>this.gestionePartita(), 1000);
},
        Partita.prototype.gestionePartita = function () {
            console.log("Tic");
            this.avanzamentoTruppeInserite();


        },
        Partita.prototype.selezionareCasella = function (indiceTruppa, occupazione) {
            if (nomet === "" || nomet === undefined) {
                this.viewPartita.aggiornareBannerAiutoMossa("Non hai ancora selezionato la truppa!");
            } else {
                this.viewPartita.posizionaTruppaSuCasella(occupazione);
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
        };

Partita.prototype.posizionaVillaggioNemicoSuCaselle = function () {
    var caselleVillaggioNemico = this.villaggio.caselle;
    this.viewPartita.visualizzaVillaggioNemico(caselleVillaggioNemico);
}

Partita.prototype.selezionareTruppaDisponibile = function (nomeTruppaScelta) {
    nomet = nomeTruppaScelta;
    this.viewPartita.aggiornareBannerAiutoMossa("Hai selezionato la truppa " + nomet + ", ora seleziona la casella su cui vuoi posizionare la truppa scelta.");
}

Partita.prototype.gestioneTruppeInattive = function () {
    $('.truppeInactiveAttacco').click(function () {
        nomet = "";
        this.viewPartita.aggiornareBannerAiutoMossa("Hai già usato questa truppa e non è più disponibile, prova a selezionare una truppa diversa tra quelle disponibili!");
    });


}

Partita.prototype.avanzamentoTruppeInserite = function () {
    this.oggettoTabelloneAux = _.cloneDeep(this.villaggio.caselle);
    var i;
    for (i = 0; i < this.villaggio.caselle.length; i++) {
        console.log("Start for");
        switch case ()
            truppa:
            edificio:
            difese:
            
        if (this.villaggio.caselle[i][1].nome === nomet && this.villaggio.caselle[i][1].nome !== 'guaritore' && i < 35) {

            if (this.villaggio.caselle[i + 1][1].nome === 'erba') {
                this.oggettoTabelloneAux[i] = _.cloneDeep(this.villaggio.caselle[i + 1]);
                this.oggettoTabelloneAux[i + 1] = _.cloneDeep(this.villaggio.caselle[i]);
                this.viewPartita.camminoTruppa(i);
                //oggettoTabelloneAux = _.cloneDeep(this.checkGuaritoreSuVillaggio(oggettoTabellone, i));
                //this.checkGuaritoreSuVillaggio(oggettoTabellone, i);
            } else if (this.oggettoTabelloneAux[i + 1][1].colpiLivelloIniziale !== 0) {
                console.log('ho incontrato una difesa! ');
                this.viewPartita.animazioneLotta(this.oggettoTabelloneAux[i + 1][1].nome, i);
                console.log('vita truppa prima dell attacco:    ' + JSON.stringify(this.oggettoTabelloneAux[i][1].vita));
                this.oggettoTabelloneAux[i][1].vita = this.oggettoTabelloneAux[i][1].vita - this.oggettoTabelloneAux[i + 1][1].calcoloColpiTotale(this.villaggio['livelloMunicipio']);
                console.log('vita truppa dopo l attacco:    ' + JSON.stringify(this.oggettoTabelloneAux[i][1].vita));
                if (this.oggettoTabelloneAux[i][1].vita <= 0) {
                    this.morteTruppaSuCasella(this.oggettoTabelloneAux, i);
                    nomet = "";
                }/* else {
                 console.log('vita difesa prima dell attacco:    ' + JSON.stringify(this.oggettoTabelloneAux[i + 1][1].vita));
                 this.oggettoTabelloneAux[i + 1][1].vita = this.oggettoTabelloneAux[i + 1][1].vita - this.oggettoTabelloneAux[i][1].calcoloColpiTotale(this.villaggio['livelloMunicipio']);
                 console.log('vita difesa dopo dell attacco:    ' + JSON.stringify(this.oggettoTabelloneAux[i + 1][1].vita));
                 if (this.oggettoTabelloneAux[i + 1][1].vita <= 0) {
                 console.log(this.calcoloParzialePunteggio(this.oggettoTabelloneAux[i + 1][1]));
                 this.morteOggettoSuCasella(this.oggettoTabelloneAux, i + 1);
                 this.edificiDistrutti = parseInt(this.edificiDistrutti) + 1;
                 this.viewPartita.mantieniNumeroEdificiDistrutti(this.edificiDistrutti);
                 }
                 }*/
            } else if (this.oggettoTabelloneAux[i + 1][1].colpiLivelloIniziale === 0) {
                console.log('ho incontrato una costruzione! ');
                this.viewPartita.animazioneLotta(this.oggettoTabelloneAux[i + 1][1].nome, i);
                console.log('vita edificio prima dell attacco:    ' + JSON.stringify(this.oggettoTabelloneAux[i + 1][1].vita));
                this.oggettoTabelloneAux[i + 1][1].vita = this.oggettoTabelloneAux[i + 1][1].vita - this.oggettoTabelloneAux[i][1].calcoloColpiTotale(this.villaggio['livelloMunicipio']);
                console.log('vita edificio dopo l attacco:    ' + JSON.stringify(this.oggettoTabelloneAux[i + 1][1].vita));
                if (this.oggettoTabelloneAux[i + 1][1].vita <= 0) {
                    if (this.oggettoTabelloneAux[i + 1][1].nome === 'estrattore' || this.oggettoTabelloneAux[i + 1][1].nome === 'deposito') {
                        this.elisirRubato = (parseInt(this.villaggio.elisirDisponibileAlGiocatore) * 25) / 100;
                        console.log(this.villaggio.elisirDisponibileAlGiocatore);
                    }

                    this.morteOggettoSuCasella(this.oggettoTabelloneAux, i + 1);
                    this.edificiDistrutti = parseInt(this.edificiDistrutti) + 1;
                    this.viewPartita.mantieniNumeroEdificiDistrutti(this.edificiDistrutti);
                }
            }
        }
        console.log(this.oggettoTabelloneAux[i]);
        console.log("End For: " + i.toString())
    }
    this.villaggio.caselle = _.cloneDeep(this.oggettoTabelloneAux);
    if (this.timer.distance < 0) {
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

    var now = new Date();
    // Find the distance between now an the count down date
    this.distance = this.countDownDate - now;
    var minutes = Math.floor((parseInt(this.distance) % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((parseInt(this.distance) % (1000 * 60)) / 1000);

    this.viewPartita.vistaTimer(minutes, seconds);
};


Partita.prototype.checkGuaritoreSuVillaggio = function (j) {
    var o;
    var guaritore;
    for (o = 0; o < this.villaggio.caselle.length; o++) {
        if (this.villaggio.caselle[o][1].guarigioneLivelloIniziale > 0 && o < 35) {
            guaritore = this.villaggio.caselle[o][1].nome;
            this.villaggio.caselle[j - 1][1] = _.cloneDeep(this.villaggio.caselle[o][1]);
            this.villaggio.caselle[o][1] = _.cloneDeep(this.villaggio.caselle[j][1]);
            this.viewPartita.mostraGuaritore(j - 1, o, guaritore);
        }

    }

}


Partita.prototype.morteOggettoSuCasella = function (i) {
    this.oggettoTabelloneAux[i][1] = _.cloneDeep(this.oggettoTabelloneAux[i - 2][1])
    //this.viewPartita.edificioDistrutto(i - 1);
}
Partita.prototype.calcoloParzialePunteggio = function () {

    for (var pippo = 0; pippo < this.villaggio.caselle.length; pippo++) {
        if (this.oggettoTabelloneAux.nome === this.villaggio.caselle[pippo][1].nome) {
            this.ammontareDistruzioneParziale = parseInt(this.ammontareDistruzioneParziale) + parseInt(this.villaggio.caselle[pippo][1].percentualeDistruzionePunteggio);
            return this.ammontareDistruzioneParziale;
        }
    }

}
Partita.prototype.morteTruppaSuCasella = function (oggettoTabelloneAux, i) {
    this.oggettoTabelloneAux[i][1] = _.cloneDeep(this.oggettoTabelloneAux[i - 1][1]);
    //console.log(oggettoTabelloneAux[i + 1][1]);
    this.viewPartita.truppaDistrutta(i - 1, this.oggettoTabelloneAux[i + 1][1].nome);
}


