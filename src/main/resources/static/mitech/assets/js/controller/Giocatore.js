/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function Giocatore(id, nickname, livelloGiocatore, quantitaElisirDisponibile, coppe, truppeDisponibili){
    this.id = id;
    this.nickname = nickname;
    this.livelloGiocatore = livelloGiocatore;
    this.quantitaElisirDisponibile = quantitaElisirDisponibile;
    this.coppe = coppe;
    this.truppeDisponibili = truppeDisponibili;
}

Giocatore.prototype.recuperaTruppeAddestrate = function () {
    var truppe = new Array();
    for (var i = 0; i < this.truppeDisponibili.length; i++) {
        if (this.truppeDisponibili[i]['truppa'].tipologia === "truppaAttacco") {
            for (var j = 0; j < this.truppeDisponibili[i].quantita; j++) {
                var TruppaDisponibileAux = new BuilderTruppa()
                TruppaDisponibileAux.setNome(this.truppeDisponibili[i]['truppa'].nomeTruppa)
                TruppaDisponibileAux.setQuantita(this.truppeDisponibili[i]['truppa'].quantita)
                TruppaDisponibileAux.setTassoAggiornamentoColpi(this.truppeDisponibili[i]['truppa'].tassoAggiornamentoColpi)
                TruppaDisponibileAux.setTassoAggiornamentoResistenza(this.truppeDisponibili[i]['truppa'].tassoAggiornamentoResistenza)
                TruppaDisponibileAux.setResistenzaLivelloIniziale(this.truppeDisponibili[i]['truppa'].resistenzaLivelloIniziale)
                TruppaDisponibileAux.setColpiLivelloIniziale(this.truppeDisponibili[i]['truppa'].colpiLivelloIniziale)
                TruppaDisponibileAux.setLivelloGiocatore(this.livelloGiocatore)
                TruppaDisponibileAux.setVita()
                TruppaDisponibileAux.setColpi()
                TruppaDisponibileAux.setTipologia(this.truppeDisponibili[i]['truppa'].tipologia)
                TruppaDisponibileAux.setVitaMassima();
                TruppaDisponibileAux.build();
                truppe.push(TruppaDisponibileAux);
            }
        } else if (this.truppeDisponibili[i]['truppa'].tipologia === "truppaGuarigione") {
            for (var q = 0; q < this.truppeDisponibili[i].quantita; q++) {
                var TruppaDisponibileAux = new BuilderTruppa()
                TruppaDisponibileAux.setNome(this.truppeDisponibili[i]['truppa'].nomeTruppa)
                TruppaDisponibileAux.setQuantita(this.truppeDisponibili[i]['truppa'].quantita)
                TruppaDisponibileAux.setTassoAggiornamentoGuarigione(this.truppeDisponibili[i]['truppa'].tassoAggiornamentoGuarigione)
                TruppaDisponibileAux.setTassoAggiornamentoResistenza(this.truppeDisponibili[i]['truppa'].tassoAggiornamentoResistenza)
                TruppaDisponibileAux.setResistenzaLivelloIniziale(this.truppeDisponibili[i]['truppa'].resistenzaLivelloIniziale)
                TruppaDisponibileAux.setGuarigioneLivelloIniziale(this.truppeDisponibili[i]['truppa'].guarigioneLivelloIniziale)
                TruppaDisponibileAux.setLivelloGiocatore(this.livelloGiocatore)
                TruppaDisponibileAux.setVita()
                TruppaDisponibileAux.setPotereGuarigione()
                TruppaDisponibileAux.setTipologia(this.truppeDisponibili[i]['truppa'].tipologia)
                TruppaDisponibileAux.build();
                truppe.push(TruppaDisponibileAux);

            }
        }

    }
    return truppe;
};