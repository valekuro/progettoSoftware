/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var js = document.createElement("script");
js.type = "text/javascript";
js.src = '/mitech/assets/js/business/Edificio.js';
document.body.appendChild(js);
let EdificioBuilder = function () {

    let nome;
    let tassoAggiornamentoColpi;
    let tassoAggiornamentoResistenza;
    let resistenzaLivelloIniziale;
    let colpiLivelloIniziale;

    return {
        setNome: function (nome) {
            this.nome = nome;
            return this;
        },
        setTassoAggiornamentoColpi: function (tassoAggiornamentoColpi) {
            this.tassoAggiornamentoColpi = tassoAggiornamentoColpi;
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
        
        build: function () {
            return new Truppa(nome, tassoAggiornamentoColpi,tassoAggiornamentoResistenza, resistenzaLivelloIniziale, colpiLivelloIniziale);
        }
    };
};

