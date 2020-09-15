/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Partita(giocatore, avversario) {
    this.nomeTruppa;
    this.viewPartita = new ViewPartita();
    //this.datiDiGioco = datiDiGioco;
    this.giocatore = giocatore;
    // this.datiCaselle = datiCaselle;
    this.avversario = avversario;
    this.oggettoTabelloneAux = new Array();
    this.truppeAddestrate = new Array();
    this.ammontareDistruzioneParziale = 0;
    this.elisirRubato = 0;
    this.edificiDistrutti = 0;
    this.timer = new Timer(1);
    this.countDownDate;
    let truppeInCampo;
    this.edificiAttaccabiliPresentiInVillaggioNemico = 0;
}
Partita.prototype.numeroEdificiAttaccabiliPresentiInVillaggioNemico = function () {
    for (var u = 0; u < this.avversario.villaggioGiocatore['datiCaselle'].length; u++) {
        if (this.avversario.villaggioGiocatore['datiCaselle'][u].oggettoOccupante.tipologia !== 'erba') {
            this.edificiAttaccabiliPresentiInVillaggioNemico = this.edificiAttaccabiliPresentiInVillaggioNemico + 1;
        }
    }
};

/*Partita.prototype.recuperaDatiDiGioco = function (datiDiGioco) {
 this.datiDiGioco = datiDiGioco;
 return this;
 };*/

Partita.prototype.setGiocatore = function (giocatore) {
    this.giocatore = giocatore;
    return this;
};

Partita.prototype.setAvversario = function (avversario) {
    this.avversario = avversario;
    return this;
};

Partita.prototype.setDatiCaselle = function (datiCaselle) {
    this.datiCaselle = datiCaselle;
    return this;
};

/*Partita.prototype.creaVillaggioAvversario = function () {
 var villaggioAvversario = new BuilderVillaggio();
 villaggioAvversario.setElisirDisponibileAlGiocatore(this.avversario.quantitaElisirDisponibile);
 villaggioAvversario.setLivelloMunicipio(this.avversario.livelloGiocatore);
 villaggioAvversario.setTipoVillaggio('esercitazione');
 villaggioAvversario.setDatiCaselle(this.datiCaselle);
 villaggioAvversario.buildCaselle();
 return villaggioAvversario.build();
 };*/


Partita.prototype.iniziaPartita = function () {
    this.numeroEdificiAttaccabiliPresentiInVillaggioNemico();
    this.viewPartita.aggiornaInformazioniStatoPartita('warnings', 'Seleziona la truppa per l\'attacco tra le truppe disponibili');
    this.truppeAddestrate = this.giocatore.recuperaTruppeAddestrate();
    this.truppeInCampo = this.giocatore.truppeDisponibili.length;
    var countDownDate = new Date();
    countDownDate.setMinutes(countDownDate.getMinutes() + this.timer.durata); // timestamp
    this.countDownDate = new Date(countDownDate); // Date object
    this.timer.start(() => this.attacco());
};

Partita.prototype.selezionareCasella = function (indiceTruppa, occupazione) {
    this.viewPartita.aggiornaInformazioniStatoPartita('warnings', 'Battaglia in corso...')
    if (this.avversario.villaggioGiocatore['datiCaselle'][occupazione - 1].oggettoOccupante.tipologia === 'edificioDifesa' || this.avversario.villaggioGiocatore['datiCaselle'][occupazione - 1].oggettoOccupante.tipologia === 'edificioCostruzione'
            || this.avversario.villaggioGiocatore['datiCaselle'][occupazione - 1].oggettoOccupante.tipologia === 'municipio') {
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
                    console.log(this.truppeAddestrate[y].id)
                    this.viewPartita.posizionaTruppaSuCasella(occupazione, this.nomeTruppa);
                    this.avversario.villaggioGiocatore['datiCaselle'][occupazione - 1].oggettoOccupante = this.truppeAddestrate[y];
                    var quantitaRimanenteTruppa = document.getElementById(this.nomeTruppa).textContent;
                    quantitaRimanenteTruppa = parseInt(quantitaRimanenteTruppa) - 1;
                    this.viewPartita.aggiornaInformazioniStatoPartita(this.nomeTruppa, quantitaRimanenteTruppa)
                    //document.getElementById(this.nomeTruppa).innerHTML = quantitaRimanenteTruppa;
                    if (quantitaRimanenteTruppa === 0) {
                        this.cancellaTruppaUtilizzata(this.truppeAddestrate[y].id);
                        indiceTruppa = this.viewPartita.selezionaTruppa(indiceTruppa, this.nomeTruppa);
                    }
                    this.truppeAddestrate.splice(y, 1);
                }
                y = y + 1;
            } while (y < this.truppeAddestrate.length && trovato === false);
        }
    }
    this.oggettoTabelloneAux = _.cloneDeep(this.avversario.villaggioGiocatore['datiCaselle']);
};

Partita.prototype.cancellaTruppaUtilizzata = function (id) {
    $.ajax({
        type: "DELETE",
        url: "/truppe/"+id,
        success: function (data) {
            console.log('ho cancellato');
        },
        error: function () {
            alert("Chiamata fallita!!!");
        }
    });
}

Partita.prototype.selezionareTruppaDisponibile = function (nomeTruppaScelta) {
    this.nomeTruppa = nomeTruppaScelta;
    this.viewPartita.aggiornaInformazioniStatoPartita('warnings', "Hai selezionato la truppa " + this.nomeTruppa + ", ora seleziona la casella su cui vuoi posizionare la truppa scelta.");
}


Partita.prototype.attacco = function () {
    var i;

    this.timer.calcolaDistanza(this.countDownDate)

    this.oggettoTabelloneAux = _.cloneDeep(this.avversario.villaggioGiocatore['datiCaselle']);
    for (i = 0; i < this.avversario.villaggioGiocatore['datiCaselle'].length; i++) {
        switch (this.avversario.villaggioGiocatore['datiCaselle'][i].oggettoOccupante.constructor.name) {
            case 'BuilderTruppa':
                switch (this.avversario.villaggioGiocatore['datiCaselle'][i].oggettoOccupante.tipologia) {
                    case 'truppaAttacco':
                        if (i < this.avversario.villaggioGiocatore['datiCaselle'].length - 1) {
                            //se la vita della truppa è maggiore di zero
                            if (this.oggettoTabelloneAux[i].oggettoOccupante.vita > 0) {
                                //i = truppa e i+1 = erba
                                if (this.oggettoTabelloneAux[i + 1].oggettoOccupante.nome === 'erba') {
                                    this.oggettoTabelloneAux[i + 1].oggettoOccupante = _.cloneDeep(this.avversario.villaggioGiocatore['datiCaselle'][i].oggettoOccupante);
                                    this.oggettoTabelloneAux[i].oggettoOccupante = _.cloneDeep(this.avversario.villaggioGiocatore['datiCaselle'][i + 1].oggettoOccupante);
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
                                this.viewPartita.ripristinoOggettoSopravvissuto('villaggio', this.avversario.villaggioGiocatore['datiCaselle'][i + 1].oggettoOccupante.nome, i + 1);
                                this.viewPartita.distruzioneOggettoMorto(i + 1);
                                this.nomeTruppa = "";
                                //this.viewPartita.aggiornaInformazioniStatoPartita('warnings', "Hai già usato questa truppa e non è più disponibile, prova a selezionare una truppa diversa tra quelle disponibili!");
                                this.oggettoTabelloneAux[i].oggettoOccupante = null;
                                var erba = new BuilderEdificio()
                                        .setNome('erba')
                                        .setTassoAggiornamentoColpi(0)
                                        .setTassoAggiornamentoResistenza(0)
                                        .setResistenzaLivelloIniziale(0)
                                        .setColpiLivelloIniziale(0)
                                        .setLivelloGiocatore(this.avversario.villaggioGiocatore.livelloMunicipio)
                                        .setPercentualeDistruzionePunteggio(0)
                                        .setTipologia('erba')
                                        .build();
                                this.oggettoTabelloneAux[i].oggettoOccupante = erba;
                            }
                        } else if (this.oggettoTabelloneAux[0].oggettoOccupante.nome === 'erba') {
                            this.oggettoTabelloneAux[0].oggettoOccupante = _.cloneDeep(this.avversario.villaggioGiocatore['datiCaselle'][i].oggettoOccupante);
                            this.oggettoTabelloneAux[i].oggettoOccupante = _.cloneDeep(this.avversario.villaggioGiocatore['datiCaselle'][0].oggettoOccupante);
                            this.viewPartita.camminoTruppa(this.oggettoTabelloneAux[0].oggettoOccupante.nome, 0);
                        }
                        break;
                    case 'truppaGuarigione':
                        if (i < this.avversario.villaggioGiocatore['datiCaselle'].length - 1) {
                            if (this.oggettoTabelloneAux[i].oggettoOccupante.vita > 0) {
                                if (this.oggettoTabelloneAux[i + 1].oggettoOccupante.nome === 'erba') {
                                    this.oggettoTabelloneAux[i + 1].oggettoOccupante = _.cloneDeep(this.avversario.villaggioGiocatore['datiCaselle'][i].oggettoOccupante);
                                    this.oggettoTabelloneAux[i].oggettoOccupante = _.cloneDeep(this.avversario.villaggioGiocatore['datiCaselle'][i + 1].oggettoOccupante);
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
                                this.viewPartita.ripristinoOggettoSopravvissuto('villaggio', this.avversario.villaggioGiocatore['datiCaselle'][i + 1].oggettoOccupante.nome, i + 1);
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
                                        .setLivelloGiocatore(this.avversario.villaggioGiocatore.livelloMunicipio)
                                        .setPercentualeDistruzionePunteggio(0)
                                        .setTipologia('erba')
                                        .build();
                                this.oggettoTabelloneAux[i].oggettoOccupante = erba;
                            }
                        } else if (this.oggettoTabelloneAux[0].oggettoOccupante.nome === 'erba') {
                            this.oggettoTabelloneAux[0].oggettoOccupante = _.cloneDeep(this.avversario.villaggioGiocatore['datiCaselle'][i].oggettoOccupante);
                            this.oggettoTabelloneAux[i].oggettoOccupante = _.cloneDeep(this.avversario.villaggioGiocatore['datiCaselle'][0].oggettoOccupante);
                            this.viewPartita.camminoTruppa(this.oggettoTabelloneAux[0].oggettoOccupante.nome, 0);
                        }
                        break;
                }
                break;
            case 'BuilderEdificio':
            switch (this.avversario.villaggioGiocatore['datiCaselle'][i].oggettoOccupante.tipologia) {
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
                            this.oggettoTabelloneAux[i - 1].oggettoOccupante.vita = this.oggettoTabelloneAux[i - 1].oggettoOccupante.vita - this.oggettoTabelloneAux[i].oggettoOccupante.calcoloColpiTotale(this.avversario.villaggioGiocatore['livelloMunicipio']);
                            //console.log('vita truppa dopo dell attacco: '+JSON.stringify(this.oggettoTabelloneAux[i - 1].oggettoOccupante.vita));
                        }
                        //se la vita dell'edificio è minore di zero
                    } else if (this.oggettoTabelloneAux[i].oggettoOccupante.vita <= 0) {
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
                                .setLivelloGiocatore(this.avversario.villaggioGiocatore.livelloMunicipio)
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
                        var erba = new BuilderEdificio()
                                .setNome('erba')
                                .setTassoAggiornamentoColpi(0)
                                .setTassoAggiornamentoResistenza(0)
                                .setResistenzaLivelloIniziale(0)
                                .setColpiLivelloIniziale(0)
                                .setLivelloGiocatore(this.avversario.villaggioGiocatore.livelloMunicipio)
                                .setPercentualeDistruzionePunteggio(0)
                                .setTipologia('erba')
                                .build();
                        this.oggettoTabelloneAux[i].oggettoOccupante = erba;
                        this.viewPartita.ripristinoOggettoSopravvissuto('truppe', this.oggettoTabelloneAux[i].oggettoOccupante.nome, i);
                        this.viewPartita.distruzioneOggettoMorto(i + 1);
                        this.edificiDistrutti = parseInt(this.edificiDistrutti) + 1;
                        this.viewPartita.mantieniNumeroEdificiDistrutti(this.edificiDistrutti);
                    }
                    break;

            }
        }
        this.finePartita();
    }
    this.avversario.villaggioGiocatore['datiCaselle'] = _.cloneDeep(this.oggettoTabelloneAux);
};

Partita.prototype.finePartita = function () {
    var fineGioco = new Risultati(this.elisirRubato, this.ammontareDistruzioneParziale, this.giocatore, this.avversario);

    if (this.avversario.nickname === 'esercitazione') {
        if ((this.truppeAddestrate.length === 0 && this.truppeInCampo === 0) || this.edificiDistrutti === this.edificiAttaccabiliPresentiInVillaggioNemico || this.timer.distance < 0) {
            clearInterval(this.timer.tempo);
            fineGioco.finePartitaEsercitazione();
        }
    } else {
        if ((this.truppeAddestrate.length === 0 && this.truppeInCampo === 0) || this.edificiDistrutti === this.edificiAttaccabiliPresentiInVillaggioNemico || this.timer.distance < 0) {
            clearInterval(this.timer.tempo);
            fineGioco.finePartitaMultigiocatore(this.avversario.quantitaElisirDisponibile, this.giocatore.quantitaElisirDisponibile, this.giocatore.coppe, this.avversario.coppe);
            fineGioco.inviaDatiPartita()

        }

    }
}



Partita.prototype.calcoloRisultatoParziale = function (i) {
    this.ammontareDistruzioneParziale = parseInt(this.ammontareDistruzioneParziale) + parseInt(this.oggettoTabelloneAux[i].oggettoOccupante.percentualeDistruzionePunteggio);
}


Partita.prototype.rubaElisir = function () {
    this.elisirRubato = (parseInt(this.avversario.villaggioGiocatore.elisirDisponibileAlGiocatore) * 25) / 100;
}

