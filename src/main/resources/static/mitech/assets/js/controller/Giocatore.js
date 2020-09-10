/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function Giocatore(nickname, livelloGiocatore, quantitaElisirDisponibile, truppeDisponibili){
    this.nickname = nickname;
    this.livelloGiocatore = livelloGiocatore;
    this.quantitaElisirDisponibile = quantitaElisirDisponibile;
    this.truppeDisponibili = truppeDisponibili;
}

Giocatore.prototype.recuperaTruppeAddestrate = function () {
    var truppe = new Array();
    for (var i = 0; i < this.truppeDisponibili.length; i++) {
        if (this.truppeDisponibili[i].truppa.tipologia === "truppaAttacco") {
            for (var j = 0; j < this.truppeDisponibili[i].quantita; j++) {
                var TruppaDisponibileAux = new BuilderTruppa()
                TruppaDisponibileAux.setNome(this.truppeDisponibili[i].truppa.nomeTruppa)
                TruppaDisponibileAux.setQuantita(this.truppeDisponibili[i].quantita)
                TruppaDisponibileAux.setTassoAggiornamentoColpi(this.truppeDisponibili[i].tassoAggiornamentoColpi)
                TruppaDisponibileAux.setTassoAggiornamentoResistenza(this.truppeDisponibili[i].tassoAggiornamentoResistenza)
                TruppaDisponibileAux.setResistenzaLivelloIniziale(this.truppeDisponibili[i].resistenzaLivelloIniziale)
                TruppaDisponibileAux.setColpiLivelloIniziale(this.truppeDisponibili[i].colpiLivelloIniziale)
                TruppaDisponibileAux.setLivelloGiocatore(this.livelloGiocatore)
                TruppaDisponibileAux.setVita()
                TruppaDisponibileAux.setColpi()
                TruppaDisponibileAux.setTipologia(this.truppeDisponibili[i].tipologia)
                TruppaDisponibileAux.setVitaMassima();
                TruppaDisponibileAux.build();
                truppe.push(TruppaDisponibileAux);
            }
        } else if (this.truppeDisponibili[i].tipologia === "truppaGuarigione") {
            for (var q = 0; q < this.truppeDisponibili[i].quantita; q++) {
                var TruppaDisponibileAux = new BuilderTruppa()
                TruppaDisponibileAux.setNome(this.truppeDisponibili[i].nomeTruppa)
                TruppaDisponibileAux.setQuantita(this.truppeDisponibili[i].quantita)
                TruppaDisponibileAux.setTassoAggiornamentoGuarigione(this.truppeDisponibili[i].tassoAggiornamentoGuarigione)
                TruppaDisponibileAux.setTassoAggiornamentoResistenza(this.truppeDisponibili[i].tassoAggiornamentoResistenza)
                TruppaDisponibileAux.setResistenzaLivelloIniziale(this.truppeDisponibili[i].resistenzaLivelloIniziale)
                TruppaDisponibileAux.setGuarigioneLivelloIniziale(this.truppeDisponibili[i].guarigioneLivelloIniziale)
                TruppaDisponibileAux.setLivelloGiocatore(this.livelloGiocatore)
                TruppaDisponibileAux.setVita()
                TruppaDisponibileAux.setPotereGuarigione()
                TruppaDisponibileAux.setTipologia(this.truppeDisponibili[i].tipologia)
                TruppaDisponibileAux.build();
                truppe.push(TruppaDisponibileAux);

            }
        }

    }
    return truppe;
};