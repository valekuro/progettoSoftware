/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var js = document.createElement("script");
js.type = "text/javascript";
js.src = '/mitech/assets/js/business/Truppa.js';
document.body.appendChild(js);

let TruppaBuilder = function () {

    let nome;
    let quantita;
    let tassoAggiornamentoColpi;
    let guarigioneLivelloIniziale;
    let tassoAggiornamentoResistenza;
    let resistenzaLivelloIniziale;
    let colpiLivelloIniziale;
    let tassoAggiornamentoGuarigione;
    let tipologia;
    let livelloGiocatore;
    let vita;
    return {
        setNome: function (nome) {
            this.nome = nome;
            return this;
        },
        setQuantita: function (quantita) {
            this.quantita = quantita;
            return this;
        },
        setTassoAggiornamentoColpi: function (tassoAggiornamentoColpi) {
            this.tassoAggiornamentoColpi = tassoAggiornamentoColpi;
            return this;
        },
        setGuarigioneLivelloIniziale: function (guarigioneLivelloIniziale) {
            this.guarigioneLivelloIniziale = guarigioneLivelloIniziale;
            return this;
        },
        setTassoAggiornamentoResistenza: function (tassoAggiornamentoResistenza) {
            this.tassoAggiornamentoResistenza = tassoAggiornamentoResistenza;
            return this;
        },
        setResistenzaLivelloIniziale: function (resistenzaLivelloIniziale) {
            this.resistenzaLivelloIniziale = resistenzaLivelloIniziale;
            return this;
        },
        setColpiLivelloIniziale: function (colpiLivelloIniziale) {
            this.colpiLivelloIniziale = colpiLivelloIniziale;
            return this;
        },
        setTassoAggiornamentoGuarigione: function (tassoAggiornamentoGuarigione) {
            this.tassoAggiornamentoGuarigione = tassoAggiornamentoGuarigione;
            return this;
        },
        setTipologia: function (tipologia) {
            this.tipologia = tipologia;
            return this;
        },
        setLivelloGiocatore: function (livelloGiocatore) {
            this.livelloGiocatore = livelloGiocatore;
            return this;
        },
        setVita: function () {
            this.vita = this.calcoloVitaTotale(this.livelloGiocatore);
            // console.log(this.vita);
            return this;
        },

        build: function () {
            return new Truppa(nome, quantita, tassoAggiornamentoColpi, guarigioneLivelloIniziale, tassoAggiornamentoResistenza, guarigioneLivelloIniziale, resistenzaLivelloIniziale, colpiLivelloIniziale, tassoAggiornamentoGuarigione, tipologia, vita, livelloGiocatore);
        },
        calcoloVitaTotale: function (livelloGiocatore) {
            return this.resistenzaLivelloIniziale + (this.tassoAggiornamentoResistenza * livelloGiocatore);
        },
        calcoloColpiTotale: function (livelloGiocatore) {
            return this.colpiLivelloIniziale + (this.tassoAggiornamentoColpi * livelloGiocatore);
        }
    };
};

