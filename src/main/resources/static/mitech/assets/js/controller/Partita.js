/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Partita(datiDiGioco) {
    this.nomeTruppa;
    this.viewPartita = new ViewPartita();
    this.datiDiGioco = datiDiGioco;
    this.villaggio = this.creaVillaggioAvversario();
    this.oggettoTabelloneAux = new Array();
    this.truppeAddestrate = new Array();
    this.ammontareDistruzioneParziale = 0;
    this.elisirRubato = 0;
    this.edificiDistrutti = 0;
    this.timer = new Timer(2);
    this.countDownDate;
    let truppeInCampo;
    this.edificiAttaccabiliPresentiInVillaggioNemico = 0;
}
Partita.prototype.numeroEdificiAttaccabiliPresentiInVillaggioNemico = function () {
   for (var u = 0; u < this.villaggio['datiCaselle'].length; u++) {
        if (this.villaggio['datiCaselle'][u].oggettoOccupante.tipologia !== 'erba') {
            this.edificiAttaccabiliPresentiInVillaggioNemico = this.edificiAttaccabiliPresentiInVillaggioNemico + 1;
        }
    }
};

Partita.prototype.recuperaDatiDiGioco = function (datiDiGioco) {
    this.datiDiGioco = datiDiGioco;
    return this;
};

Partita.prototype.setDatiDiGioco = function (datiDiGioco) {
    this.datiDiGioco = datiDiGioco;
    return this;
};


Partita.prototype.creaVillaggioAvversario = function () {
    var villaggioAvversario = new BuilderVillaggio();
    villaggioAvversario.setElisirDisponibileAlGiocatore(this.datiDiGioco[3].elisirDisponibileAlGiocatore);
    villaggioAvversario.setLivelloMunicipio(this.datiDiGioco[1].livelloGiocatore);
    villaggioAvversario.setTipoVillaggio('esercitazione');
    // console.log(this.datiDiGioco[0]);
    villaggioAvversario.setDatiCaselle(this.datiDiGioco[0]);
    villaggioAvversario.buildCaselle();
    return villaggioAvversario.build();
};

Partita.prototype.recuperaTruppeAddestrate = function () {
    var truppe = new Array();
    for (var i = 0; i < this.datiDiGioco[2].length; i++) {
        if (this.datiDiGioco[2][i].truppa.tipologia === "truppaAttacco") {
            for (var j = 0; j < this.datiDiGioco[2][i].quantita; j++) {
                var TruppaDisponibileAux = new BuilderTruppa()
                TruppaDisponibileAux.setNome(this.datiDiGioco[2][i].truppa.nomeTruppa)
                TruppaDisponibileAux.setQuantita(this.datiDiGioco[2][i].quantita)
                TruppaDisponibileAux.setTassoAggiornamentoColpi(this.datiDiGioco[2][i].truppa.tassoAggiornamentoColpi)
                TruppaDisponibileAux.setTassoAggiornamentoResistenza(this.datiDiGioco[2][i].truppa.tassoAggiornamentoResistenza)
                TruppaDisponibileAux.setResistenzaLivelloIniziale(this.datiDiGioco[2][i].truppa.resistenzaLivelloIniziale)
                TruppaDisponibileAux.setColpiLivelloIniziale(this.datiDiGioco[2][i].truppa.colpiLivelloIniziale)
                TruppaDisponibileAux.setLivelloGiocatore(this.datiDiGioco[1].livelloGiocatore)
                TruppaDisponibileAux.setVita()
                TruppaDisponibileAux.setColpi()
                TruppaDisponibileAux.setTipologia(this.datiDiGioco[2][i].truppa.tipologia)
                TruppaDisponibileAux.setVitaMassima();
                TruppaDisponibileAux.build();
                truppe.push(TruppaDisponibileAux);
            }
        } else if (this.datiDiGioco[2][i].truppa.tipologia === "truppaGuarigione") {
            for (var q = 0; q < this.datiDiGioco[2][i].quantita; q++) {
                var TruppaDisponibileAux = new BuilderTruppa()
                TruppaDisponibileAux.setNome(this.datiDiGioco[2][i].truppa.nomeTruppa)
                TruppaDisponibileAux.setQuantita(this.datiDiGioco[2][i].quantita)
                TruppaDisponibileAux.setTassoAggiornamentoGuarigione(this.datiDiGioco[2][i].truppa.tassoAggiornamentoGuarigione)
                TruppaDisponibileAux.setTassoAggiornamentoResistenza(this.datiDiGioco[2][i].truppa.tassoAggiornamentoResistenza)
                TruppaDisponibileAux.setResistenzaLivelloIniziale(this.datiDiGioco[2][i].truppa.resistenzaLivelloIniziale)
                TruppaDisponibileAux.setGuarigioneLivelloIniziale(this.datiDiGioco[2][i].truppa.guarigioneLivelloIniziale)
                TruppaDisponibileAux.setLivelloGiocatore(this.datiDiGioco[1].livelloGiocatore)
                TruppaDisponibileAux.setVita()
                TruppaDisponibileAux.setPotereGuarigione()
                TruppaDisponibileAux.setTipologia(this.datiDiGioco[2][i].truppa.tipologia)
                TruppaDisponibileAux.build();
                truppe.push(TruppaDisponibileAux);

            }
        }

    }
    return truppe;
};


Partita.prototype.iniziaPartita = function () {
    for (var i = 0; i < this.villaggio['datiCaselle'].length; i++) {
        this.viewPartita.visualizzaVillaggioNemico(this.villaggio['datiCaselle'][i].posizione, this.villaggio['datiCaselle'][i].oggettoOccupante.nome);
    }
    this.numeroEdificiAttaccabiliPresentiInVillaggioNemico();
    this.viewPartita.aggiornaInformazioniStatoPartita('warnings', 'Seleziona la truppa per l\'attacco tra le truppe disponibili');
    this.truppeAddestrate = this.recuperaTruppeAddestrate();
    this.truppeInCampo = this.truppeAddestrate.length;

    var countDownDate = new Date();
    countDownDate.setMinutes(countDownDate.getMinutes() + this.timer.durata); // timestamp
    this.countDownDate = new Date(countDownDate); // Date object
    this.timer.start(() => this.attacco());
    this.timer.tempoRimanente(countDownDate);
   
};

Partita.prototype.selezionareCasella = function (indiceTruppa, occupazione) {
    this.viewPartita.aggiornaInformazioniStatoPartita('warnings', 'Battaglia in corso...')
    if (this.villaggio['datiCaselle'][occupazione - 1].oggettoOccupante.tipologia === 'edificioDifesa' || this.villaggio['datiCaselle'][occupazione - 1].oggettoOccupante.tipologia === 'edificioCostruzione'
            || this.villaggio['datiCaselle'][occupazione - 1].oggettoOccupante.tipologia === 'municipio') {
        this.viewPartita.aggiornaInformazioniStatoPartita('warnings', "Non puoi posizionare la truppa su un edificio! Prova a posizionare la truppa sull'erba!");
    } else if (this.nomeTruppa === "" || this.nomeTruppa === undefined) {
        this.viewPartita.aggiornaInformazioniStatoPartita('warnings', "Non hai ancora selezionato la truppa!");
    } else {
        var y = 0;
        var trovato = false;
        if (this.truppeAddestrate.length > 0) {
            do {
                if (this.truppeAddestrate[y].nome === this.nomeTruppa) {
                    trovato = true;
                    this.viewPartita.posizionaTruppaSuCasella(occupazione, this.nomeTruppa);
                    this.villaggio['datiCaselle'][occupazione - 1].oggettoOccupante = this.truppeAddestrate[y];
                    var quantitaRimanenteTruppa = document.getElementById(this.nomeTruppa).textContent;
                    quantitaRimanenteTruppa = parseInt(quantitaRimanenteTruppa) - 1;
                    document.getElementById(this.nomeTruppa).innerHTML = quantitaRimanenteTruppa;
                    if (quantitaRimanenteTruppa === 0) {
                        indiceTruppa = this.viewPartita.selezionaTruppa(indiceTruppa, this.nomeTruppa);
                    }
                    this.truppeAddestrate.splice(y, 1);
                }
                y = y + 1;
            } while (y < this.truppeAddestrate.length && trovato === false);
        }
    }
    this.oggettoTabelloneAux = _.cloneDeep(this.villaggio['datiCaselle']);
};


Partita.prototype.selezionareTruppaDisponibile = function (nomeTruppaScelta) {
    this.nomeTruppa = nomeTruppaScelta;
    this.viewPartita.aggiornaInformazioniStatoPartita('warnings', "Hai selezionato la truppa " + this.nomeTruppa + ", ora seleziona la casella su cui vuoi posizionare la truppa scelta.");
}


Partita.prototype.attacco = function () {
    var i;
    this.oggettoTabelloneAux = _.cloneDeep(this.villaggio['datiCaselle']);
    for (i = 0; i < this.villaggio['datiCaselle'].length; i++) {
        switch (this.villaggio['datiCaselle'][i].oggettoOccupante.constructor.name) {
            case 'BuilderTruppa':
                switch (this.villaggio['datiCaselle'][i].oggettoOccupante.tipologia) {
                    case 'truppaAttacco':
                        if (i < 35) {
                            //se la vita della truppa è maggiore di zero
                            if (this.oggettoTabelloneAux[i].oggettoOccupante.vita > 0) {
                                //i = truppa e i+1 = erba
                                if (this.oggettoTabelloneAux[i + 1].oggettoOccupante.nome === 'erba') {
                                    this.oggettoTabelloneAux[i + 1].oggettoOccupante = _.cloneDeep(this.villaggio['datiCaselle'][i].oggettoOccupante);
                                    this.oggettoTabelloneAux[i].oggettoOccupante = _.cloneDeep(this.villaggio['datiCaselle'][i + 1].oggettoOccupante);
                                    this.viewPartita.camminoTruppa(this.oggettoTabelloneAux[i + 1].oggettoOccupante.nome, i + 1);
                                    //i = truppa e i+1 != erba
                                } else if (this.oggettoTabelloneAux[i + 1].oggettoOccupante.constructor.name !== 'BuilderTruppa') {
                                    if (this.oggettoTabelloneAux[i].oggettoOccupante.nome === this.nomeTruppa) {
                                        this.viewPartita.animazioneLottaTruppa(this.oggettoTabelloneAux[i].oggettoOccupante.nome, i + 1);
                                    } else {
                                        this.viewPartita.animazioneLottaEdificio(this.oggettoTabelloneAux[i].oggettoOccupante.nome, i + 1);
                                    }
                                    //diminuisco vita edificio
                                    // console.log('vita difesa prima dell attacco: '+JSON.stringify(this.oggettoTabelloneAux[i + 1].oggettoOccupante.vita));
                                    this.oggettoTabelloneAux[i + 1].oggettoOccupante.vita = this.oggettoTabelloneAux[i + 1].oggettoOccupante.vita - this.oggettoTabelloneAux[i].oggettoOccupante.colpi;
                                    // console.log('vita difesa dopo attacco: '+JSON.stringify(this.oggettoTabelloneAux[i + 1].oggettoOccupante.vita));
                                    //truppa ruba Elisir
                                    if (this.oggettoTabelloneAux[i + 1].oggettoOccupante.nome === 'estrattore' || this.oggettoTabelloneAux[i + 1].oggettoOccupante.nome === 'deposito') {
                                        this.rubaElisir();
                                    }
                                }
                                //se la vita della truppa è minore di zero
                            } else {
                                this.truppeInCampo = parseInt(this.truppeInCampo) - 1;
                                this.viewPartita.aggiornaInformazioniStatoPartita('warnings', "Ops, una truppa è morta :( ")
                                this.viewPartita.ripristinoOggettoSopravvissuto('villaggio', this.villaggio['datiCaselle'][i + 1].oggettoOccupante.nome, i + 1);
                                this.viewPartita.distruzioneOggettoMorto(i + 1);
                                this.nomeTruppa = "";
                                this.viewPartita.aggiornaInformazioniStatoPartita('warnings', "Hai già usato questa truppa e non è più disponibile, prova a selezionare una truppa diversa tra quelle disponibili!");
                                this.oggettoTabelloneAux[i].oggettoOccupante = null;
                                var erba = new BuilderEdificio()
                                        .setNome('erba')
                                        .setTassoAggiornamentoColpi(0)
                                        .setTassoAggiornamentoResistenza(0)
                                        .setResistenzaLivelloIniziale(0)
                                        .setColpiLivelloIniziale(0)
                                        .setLivelloGiocatore(this.villaggio.livelloMunicipio)
                                        .setPercentualeDistruzionePunteggio(0)
                                        .setTipologia('erba')
                                        .build();
                                this.oggettoTabelloneAux[i].oggettoOccupante = erba;

                            }
                        } else if (this.oggettoTabelloneAux[0].oggettoOccupante.nome === 'erba') {
                            this.oggettoTabelloneAux[0].oggettoOccupante = _.cloneDeep(this.villaggio['datiCaselle'][i].oggettoOccupante);
                            this.oggettoTabelloneAux[i].oggettoOccupante = _.cloneDeep(this.villaggio['datiCaselle'][0].oggettoOccupante);
                            this.viewPartita.camminoTruppa(this.oggettoTabelloneAux[0].oggettoOccupante.nome, 0);
                        }
                        break;
                    case 'truppaGuarigione':
                        if (i < 35) {
                            if (this.oggettoTabelloneAux[i].oggettoOccupante.vita > 0) {
                                if (this.oggettoTabelloneAux[i + 1].oggettoOccupante.nome === 'erba') {
                                    this.oggettoTabelloneAux[i + 1].oggettoOccupante = _.cloneDeep(this.villaggio['datiCaselle'][i].oggettoOccupante);
                                    this.oggettoTabelloneAux[i].oggettoOccupante = _.cloneDeep(this.villaggio['datiCaselle'][i + 1].oggettoOccupante);
                                    this.viewPartita.camminoTruppa(this.oggettoTabelloneAux[i + 1].oggettoOccupante.nome, i + 1);
                                } else if (this.oggettoTabelloneAux[i + 1].oggettoOccupante.tipologia === 'edificioDifesa') {
                                    this.oggettoTabelloneAux[i].oggettoOccupante.vita = this.oggettoTabelloneAux[i].oggettoOccupante.vita - this.oggettoTabelloneAux[i + 1].oggettoOccupante.colpi;
                                } else if (this.oggettoTabelloneAux[i + 1].oggettoOccupante.tipologia === 'truppaAttacco') {

                                    if (this.oggettoTabelloneAux[i + 1].oggettoOccupante.vita < this.oggettoTabelloneAux[i + 1].oggettoOccupante.vitaMassima) {
                                        this.oggettoTabelloneAux[i + 1].oggettoOccupante.vita = this.oggettoTabelloneAux[i + 1].oggettoOccupante.vita + this.oggettoTabelloneAux[i].oggettoOccupante.potereGuarigione;
                                    }
                                }
                            } else {
                                this.truppeInCampo = parseInt(this.truppeInCampo) - 1;

                                this.viewPartita.aggiornaInformazioniStatoPartita('warnings', "Ops, una truppa è morta :( ")
                                this.viewPartita.ripristinoOggettoSopravvissuto('villaggio', this.villaggio['datiCaselle'][i + 1].oggettoOccupante.nome, i + 1);
                                this.viewPartita.distruzioneOggettoMorto(i + 1);
                                this.nomeTruppa = "";
                                this.viewPartita.aggiornaInformazioniStatoPartita('warnings', "Hai già usato questa truppa e non è più disponibile, prova a selezionare una truppa diversa tra quelle disponibili!");
                                this.oggettoTabelloneAux[i].oggettoOccupante = null;
                                var erba = new BuilderEdificio()
                                        .setNome('erba')
                                        .setTassoAggiornamentoColpi(0)
                                        .setTassoAggiornamentoResistenza(0)
                                        .setResistenzaLivelloIniziale(0)
                                        .setColpiLivelloIniziale(0)
                                        .setLivelloGiocatore(this.villaggio.livelloMunicipio)
                                        .setPercentualeDistruzionePunteggio(0)
                                        .setTipologia('erba')
                                        .build();
                                this.oggettoTabelloneAux[i].oggettoOccupante = erba;
                            }
                        } else if (this.oggettoTabelloneAux[0].oggettoOccupante.nome === 'erba') {
                            this.oggettoTabelloneAux[0].oggettoOccupante = _.cloneDeep(this.villaggio['datiCaselle'][i].oggettoOccupante);
                            this.oggettoTabelloneAux[i].oggettoOccupante = _.cloneDeep(this.villaggio['datiCaselle'][0].oggettoOccupante);
                            this.viewPartita.camminoTruppa(this.oggettoTabelloneAux[0].oggettoOccupante.nome, 0);
                        }
                        break;
                }
                break;
            case 'BuilderEdificio':
            switch (this.villaggio['datiCaselle'][i].oggettoOccupante.tipologia) {
                case 'edificioDifesa':
                    //vita edificio maggiore di zero
                    if (this.oggettoTabelloneAux[i].oggettoOccupante.vita > 0) {
                        if (this.oggettoTabelloneAux[i - 1].oggettoOccupante.tipologia === 'truppaAttacco') {
                            if (this.oggettoTabelloneAux[i].oggettoOccupante.nome === this.nomeTruppa) {
                                this.viewPartita.animazioneLottaTruppa(this.oggettoTabelloneAux[i].oggettoOccupante.nome, i + 1);
                            } else {
                                this.viewPartita.animazioneLottaEdificio(this.oggettoTabelloneAux[i].oggettoOccupante.nome, i + 1);
                            }
                            //diminuisco la vita della truppa
                            //console.log('vita truppa prima dell attacco: '+JSON.stringify(this.oggettoTabelloneAux[i - 1].oggettoOccupante.vita));
                            this.oggettoTabelloneAux[i - 1].oggettoOccupante.vita = this.oggettoTabelloneAux[i - 1].oggettoOccupante.vita - this.oggettoTabelloneAux[i].oggettoOccupante.calcoloColpiTotale(this.villaggio['livelloMunicipio']);
                            //console.log('vita truppa dopo dell attacco: '+JSON.stringify(this.oggettoTabelloneAux[i - 1].oggettoOccupante.vita));
                        }
                        //se la vita dell'edificio è minore di zero
                    } else {
                        this.calcoloRisultatoParziale(i);
                        this.viewPartita.aggiornaInformazioniStatoPartita('warnings', "Hai sconfitto una difesa! Ottimo Lavoro ;)");
                        this.viewPartita.ripristinoOggettoSopravvissuto('truppe', this.oggettoTabelloneAux[i + 1].oggettoOccupante.nome, i);
                        this.viewPartita.distruzioneOggettoMorto(i + 1);
                        this.oggettoTabelloneAux[i].oggettoOccupante = null;
                        var erba = new BuilderEdificio()
                                .setNome('erba')
                                .setTassoAggiornamentoColpi(0)
                                .setTassoAggiornamentoResistenza(0)
                                .setResistenzaLivelloIniziale(0)
                                .setColpiLivelloIniziale(0)
                                .setLivelloGiocatore(this.villaggio.livelloMunicipio)
                                .setPercentualeDistruzionePunteggio(0)
                                .setTipologia('erba')
                                .build();
                        this.oggettoTabelloneAux[i].oggettoOccupante = erba;
                        this.edificiDistrutti = parseInt(this.edificiDistrutti) + 1;
                        this.viewPartita.mantieniNumeroEdificiDistrutti(this.edificiDistrutti);
                    }
                    break;
                case "edificioCostruzione":
                case "municipio":
                    if (this.oggettoTabelloneAux[i].oggettoOccupante.vita <= 0) {
                        this.viewPartita.aggiornaInformazioniStatoPartita('warnings', "Hai sconfitto una costruzione! Ottimo Lavoro ;)")
                        this.calcoloRisultatoParziale(i);
                        this.oggettoTabelloneAux[i].oggettoOccupante = null;
                        this.oggettoTabelloneAux[i].oggettoOccupante = new Edificio('erba', 0, 0, 0, 0, this.villaggio.livelloMunicipio, 0, 'erba');
                        this.viewPartita.ripristinoOggettoSopravvissuto('truppe', this.oggettoTabelloneAux[i].oggettoOccupante.nome, i);
                        this.viewPartita.distruzioneOggettoMorto(i + 1);
                        this.edificiDistrutti = parseInt(this.edificiDistrutti) + 1;
                        this.viewPartita.mantieniNumeroEdificiDistrutti(this.edificiDistrutti);
                    }
                    break;
                    break;
            }
        }
        this.finePartita(i);
    }
    this.villaggio['datiCaselle'] = _.cloneDeep(this.oggettoTabelloneAux);
};

Partita.prototype.finePartita = function (i) {
    if (this.truppeAddestrate.length === 0 && this.truppeInCampo === 0) {
        clearInterval(this.timer.tempo);
        this.viewPartita.aggiornaInformazioniStatoPartita('demo', 'Fine partita!')
        this.viewPartita.visualizzaRisultatiPartita(parseInt(this.ammontareDistruzioneParziale), this.elisirRubato);
    }
    if (this.edificiDistrutti === this.edificiAttaccabiliPresentiInVillaggioNemico) {
        clearInterval(this.timer.tempo);
        this.viewPartita.aggiornaInformazioniStatoPartita('demo', 'Fine partita!')
        this.viewPartita.visualizzaRisultatiPartita(parseInt(this.ammontareDistruzioneParziale), this.elisirRubato);
    }
    if (this.timer.distance < 0) {
        clearInterval(this.timer.tempo);
        this.viewPartita.aggiornaInformazioniStatoPartita('demo', 'Tempo scaduto!')
        this.viewPartita.visualizzaRisultatiPartita(parseInt(this.ammontareDistruzioneParziale), this.elisirRubato);
    }
}

Partita.prototype.calcoloRisultatoParziale = function (i) {
    this.ammontareDistruzioneParziale = parseInt(this.ammontareDistruzioneParziale) + parseInt(this.oggettoTabelloneAux[i].oggettoOccupante.percentualeDistruzionePunteggio);
}


Partita.prototype.rubaElisir = function () {
    this.elisirRubato = (parseInt(this.villaggio.elisirDisponibileAlGiocatore) * 25) / 100;
}

Partita.prototype.calcoloRisultatoTotale = function () {
    if (this.timer.distance < 0) {
        clearInterval(this.timer.tempo);
        document.getElementById("demo").innerHTML = "Fine partita!";
        this.viewPartita.visualizzaRisultatiPartita(parseInt(this.ammontareDistruzioneParziale), this.elisirRubato);

    }
}