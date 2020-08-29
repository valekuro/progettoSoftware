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
                        .setVita()
                        .setTipologia(this.datiDiGioco[2][i].truppa.tipologia));
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
                        .setVita()
                        .setTipologia(this.datiDiGioco[2][i].truppa.tipologia));
            }
        }

    }
    return truppe;
};


Partita.prototype.iniziaPartita = function () {

    this.viewPartita.informazioniStatoPartita('Seleziona la truppa per l\'attacco tra le truppe disponibili');
    this.truppeAddestrate = this.recuperaTruppeAddestrate();

    this.posizionaVillaggioNemicoSuCaselle();

    this.avviaTimer();

    setInterval(() => this.gestionePartita(), 1000);
};
Partita.prototype.gestionePartita = function () {
    //console.log("Tic");
    this.avanzamentoTruppeInserite();
};
Partita.prototype.selezionareCasella = function (indiceTruppa, occupazione) {
    this.viewPartita.informazioniStatoPartita('Battaglia in corso...')
    if (nomet === "" || nomet === undefined) {
        this.viewPartita.informazioniStatoPartita("Non hai ancora selezionato la truppa!");
    } else {
        var y = 0;
        var trovato = false;
        if (this.truppeAddestrate.length > 0) {
            do {
                if (this.truppeAddestrate[y].nome === nomet) {
                    trovato = true;
                    this.viewPartita.posizionaTruppaSuCasella(occupazione);
                    this.villaggio.caselle[occupazione - 1].oggettoOccupante = this.truppeAddestrate[y];
                    var quantitaRimanenteTruppa = document.getElementById(nomet).textContent;
                    quantitaRimanenteTruppa = parseInt(quantitaRimanenteTruppa) - 1;
                    document.getElementById(nomet).innerHTML = quantitaRimanenteTruppa;
                    if (quantitaRimanenteTruppa === 0) {
                        indiceTruppa = this.viewPartita.selezionaTruppa(indiceTruppa);
                    }
                    this.truppeAddestrate.splice(y, 1);
                }
                y = y + 1;
            } while (y < this.truppeAddestrate.length && trovato === false);
        }
    }

    this.oggettoTabelloneAux = _.cloneDeep(this.villaggio.caselle);

};

Partita.prototype.posizionaVillaggioNemicoSuCaselle = function () {
    for (var i = 0; i < 36; i++) {
        this.viewPartita.visualizzaVillaggioNemico(this.villaggio.caselle[i].posizione, this.villaggio.caselle[i].oggettoOccupante.nome);
    }
}

Partita.prototype.selezionareTruppaDisponibile = function (nomeTruppaScelta) {
    nomet = nomeTruppaScelta;
    this.viewPartita.informazioniStatoPartita("Hai selezionato la truppa " + nomet + ", ora seleziona la casella su cui vuoi posizionare la truppa scelta.");
}

Partita.prototype.gestioneTruppeInattive = function () {
    nomet = "";
    this.viewPartita.informazioniStatoPartita("Hai già usato questa truppa e non è più disponibile, prova a selezionare una truppa diversa tra quelle disponibili!");
}

Partita.prototype.avanzamentoTruppeInserite = function () {
    var i;
    this.oggettoTabelloneAux = _.cloneDeep(this.villaggio.caselle);
    for (i = 0; i < this.villaggio.caselle.length; i++) {
        switch (this.villaggio.caselle[i].oggettoOccupante.tipologia) {
            case "erba":
                break;
            case "attacco":
                if (i < 35) {
                    if (this.oggettoTabelloneAux[i].oggettoOccupante.vita > 0) {

                        if (this.oggettoTabelloneAux[i + 1].oggettoOccupante.nome === 'erba') {
                            this.oggettoTabelloneAux[i + 1].oggettoOccupante = _.cloneDeep(this.villaggio.caselle[i].oggettoOccupante);
                            this.oggettoTabelloneAux[i].oggettoOccupante = _.cloneDeep(this.villaggio.caselle[i + 1].oggettoOccupante);
                            this.viewPartita.camminoTruppa(this.oggettoTabelloneAux[i + 1].oggettoOccupante.nome, i + 1);
                        } else if (this.oggettoTabelloneAux[i + 1].oggettoOccupante.nome !== 'erba') {
                            this.viewPartita.animazioneLotta(this.oggettoTabelloneAux[i].oggettoOccupante.nome, i + 1);
                            //   console.log('vita difesa prima dell attacco: '+JSON.stringify(this.oggettoTabelloneAux[i + 1].oggettoOccupante.vita));
                            this.oggettoTabelloneAux[i + 1].oggettoOccupante.vita = this.oggettoTabelloneAux[i + 1].oggettoOccupante.vita - this.oggettoTabelloneAux[i].oggettoOccupante.calcoloColpiTotale(this.villaggio['livelloMunicipio']);
                            //   console.log('vita difesa dopo attacco: '+JSON.stringify(this.oggettoTabelloneAux[i + 1].oggettoOccupante.vita));

                            if (this.oggettoTabelloneAux[i + 1].oggettoOccupante.nome === 'estrattore' || this.oggettoTabelloneAux[i + 1].oggettoOccupante.nome === 'deposito') {
                                this.elisirRubato = (parseInt(this.villaggio.elisirDisponibileAlGiocatore) * 25) / 100;
                            }
                        }
                    } else {
                        this.viewPartita.informazioniStatoPartita("Ops, una truppa è morta :( ")
                        this.viewPartita.ripristinoEdificioSopravvissutoStatico(this.villaggio.caselle[i + 1].oggettoOccupante.nome, i + 1);
                        this.viewPartita.distruzioneOggettoMorto(i + 1);

                        this.oggettoTabelloneAux[i].oggettoOccupante = null;
                        this.oggettoTabelloneAux[i].oggettoOccupante = new Edificio('erba', 0, 0, 0, 0, this.villaggio.livelloMunicipio, 0, 'erba');
                    }
                } else {
                    if (this.oggettoTabelloneAux[0].oggettoOccupante.nome === 'erba') {
                        this.oggettoTabelloneAux[0].oggettoOccupante = _.cloneDeep(this.villaggio.caselle[i].oggettoOccupante);
                        this.oggettoTabelloneAux[i].oggettoOccupante = _.cloneDeep(this.villaggio.caselle[0].oggettoOccupante);
                        this.viewPartita.camminoTruppa(this.oggettoTabelloneAux[0].oggettoOccupante.nome, 0);
                    }
                }
                break;
            case "difesa":
                if (this.oggettoTabelloneAux[i].oggettoOccupante.vita > 0) {
                    if (this.oggettoTabelloneAux[i - 1].oggettoOccupante.tipologia === 'attacco') {
                        this.viewPartita.animazioneLotta(this.oggettoTabelloneAux[i].oggettoOccupante.nome, i + 1);
                        this.oggettoTabelloneAux[i - 1].oggettoOccupante.vita = this.oggettoTabelloneAux[i - 1].oggettoOccupante.vita - this.oggettoTabelloneAux[i].oggettoOccupante.calcoloColpiTotale(this.villaggio['livelloMunicipio']);
                    }
                } else {
                    this.viewPartita.informazioniStatoPartita("Hai sconfitto una difesa! Ottimo Lavoro ;)");
                    this.viewPartita.ripristinoTruppaSopravvissutaStatica(this.oggettoTabelloneAux[i + 1].oggettoOccupante.nome, i);
                    this.viewPartita.distruzioneOggettoMorto(i + 1);
                    this.oggettoTabelloneAux[i].oggettoOccupante = null;
                    this.oggettoTabelloneAux[i].oggettoOccupante = new Edificio('erba', 0, 0, 0, 0, this.villaggio.livelloMunicipio, 0, 'erba');
                    this.edificiDistrutti = parseInt(this.edificiDistrutti) + 1;
                    this.viewPartita.mantieniNumeroEdificiDistrutti(this.edificiDistrutti);

                }
                break;

            case "costruzione":
            case "municipio":
                if (this.oggettoTabelloneAux[i].oggettoOccupante.vita <= 0) {
                    this.viewPartita.informazioniStatoPartita("Hai sconfitto una costruzione! Ottimo Lavoro ;)")

                    this.oggettoTabelloneAux[i].oggettoOccupante = null;
                    this.oggettoTabelloneAux[i].oggettoOccupante = new Edificio('erba', 0, 0, 0, 0, this.villaggio.livelloMunicipio, 0, 'erba');
                    this.viewPartita.ripristinoTruppaSopravvissutaStatica(this.oggettoTabelloneAux[i].oggettoOccupante.nome, i);
                    this.viewPartita.distruzioneOggettoMorto(i + 1);
                    this.edificiDistrutti = parseInt(this.edificiDistrutti) + 1;
                    this.viewPartita.mantieniNumeroEdificiDistrutti(this.edificiDistrutti);
                }
                break;
    }


}


this.villaggio.caselle = _.cloneDeep(this.oggettoTabelloneAux);

}

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



Partita.prototype.calcoloParzialePunteggio = function () {

    for (var pippo = 0; pippo < this.villaggio.caselle.length; pippo++) {
        if (this.oggettoTabelloneAux.nome === this.villaggio.caselle[pippo][1].nome) {
            this.ammontareDistruzioneParziale = parseInt(this.ammontareDistruzioneParziale) + parseInt(this.villaggio.caselle[pippo][1].percentualeDistruzionePunteggio);
            return this.ammontareDistruzioneParziale;
        }
    }

}



