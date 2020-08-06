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
    let tassoAggiornamentoColpi;
    let guarigione;
    let tassoAggiornamentoResistenza;
    let resistenzaLivelloIniziale;
    let colpiLivelloIniziale;
    let tassoAggiornamentoGuarigione;
    let tipologia;

    return {
        setNome: function (nome) {
            this.nome = nome;
            return this;
        },
        setTassoAggiornamentoColpi: function (tassoAggiornamentoColpi) {
            this.tassoAggiornamentoColpi = tassoAggiornamentoColpi;
            return this;
        },
        setGuarigione: function (guarigione) {
            this.guarigione = guarigione;
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
        build: function () {
            return new Truppa(nome, tassoAggiornamentoColpi,tassoAggiornamentoResistenza, guarigione, resistenzaLivelloIniziale, colpiLivelloIniziale, tassoAggiornamentoGuarigione, tipologia);
        }
    };
};

