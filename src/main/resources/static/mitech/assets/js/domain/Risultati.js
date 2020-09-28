/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function Risultati(elisirRubato, ammontareDistruzioneParziale, Giocatore, Avversario) {
    this.Giocatore=Giocatore;
    this.Avversario = Avversario;
    this.ammontareDistruzioneParziale = ammontareDistruzioneParziale;
    this.elisirRubato = elisirRubato;
    this.risultati = new Array();
    this.coppeTotaliGiocatore = 0;
    this.coppeTotaliAvversario;
    this.elisirTotaleGiocatore = 0;
    this.elisirTotaleAvversario = 0;
    this.coppeVinteGiocatore = 0;
    this.viewPartita = new ViewPartita();

}

Risultati.prototype.finePartitaEsercitazione = function(){
    this.viewPartita.aggiornaInformazioniStatoPartita('demo', 'Fine partita!')
    this.viewPartita.visualizzaRisultatiPartitaEsercitazione(parseInt(this.ammontareDistruzioneParziale), this.elisirRubato);
}
Risultati.prototype.finePartitaMultigiocatore = function (elisirAvversario, giocatoreElisir, giocatoreCoppe, avversarioCoppe) {
    let quantitaCoppePerStella = 7;

    if (this.ammontareDistruzioneParziale === 50) {
        this.calcolaBottino(1, quantitaCoppePerStella, giocatoreCoppe, avversarioCoppe, giocatoreElisir, elisirAvversario);
    } else if (this.ammontareDistruzioneParziale > 50 && this.ammontareDistruzioneParziale <= 99) {
        this.calcolaBottino(2, quantitaCoppePerStella, giocatoreCoppe, avversarioCoppe, giocatoreElisir, elisirAvversario);
    } else if (this.ammontareDistruzioneParziale === 100) {
        this.calcolaBottino(3, quantitaCoppePerStella, giocatoreCoppe, avversarioCoppe, giocatoreElisir, elisirAvversario);


    } else if (this.ammontareDistruzioneParziale < 50) {
        this.aumentaCoppeAvversario(avversarioCoppe);
        this.diminuisciCoppeGiocatore(giocatoreCoppe);
    }
    
   this.viewPartita.aggiornaInformazioniStatoPartita('demo', 'Fine partita!')
   this.viewPartita.visualizzaRisultatiPartitaMultigiocatore(parseInt(this.ammontareDistruzioneParziale), this.elisirRubato, this.coppeVinteGiocatore, this.coppePerseAvversario, this.Avversario.nickname);
   this.inviaDatiPartita();
}


Risultati.prototype.calcolaBottino = function (n, quantitaCoppePerStella, giocatoreCoppe, avversarioCoppe, giocatoreElisir, elisirAvversario) {

    this.coppeVinteGiocatore = quantitaCoppePerStella * n;
    this.coppePerseAvversario = quantitaCoppePerStella * n;
    this.aumentaCoppeGiocatore(giocatoreCoppe);
    this.diminuisciCoppeAvversario(avversarioCoppe);
    this.aumentaElisirGiocatore(giocatoreElisir);
    this.diminuisciElisirAvversario(elisirAvversario);
}

Risultati.prototype.aumentaCoppeGiocatore = function (giocatoreCoppe) {
    this.coppeTotaliGiocatore = this.coppeVinteGiocatore + giocatoreCoppe;
}


Risultati.prototype.diminuisciCoppeGiocatore = function (giocatoreCoppe) {
    this.coppeTotaliGiocatore = giocatoreCoppe - 10;
}

Risultati.prototype.aumentaElisirGiocatore = function (giocatoreElisir) {
    this.elisirTotaleGiocatore = this.elisirRubato + giocatoreElisir;
}

Risultati.prototype.diminuisciCoppeAvversario = function (avversarioCoppe) {
    this.coppeTotaliAvversario = parseInt(avversarioCoppe) - parseInt(this.coppePerseAvversario);
}

Risultati.prototype.aumentaCoppeAvversario = function (avversarioCoppe) {
    this.coppeTotaliAvversario = avversarioCoppe + 10;
}

Risultati.prototype.diminuisciElisirAvversario = function (elisirAvversario) {
    this.elisirTotaleAvversario = elisirAvversario - this.elisirRubato;
}

Risultati.prototype.inviaDatiPartita = function () {
    $.ajax({
        type: "PUT",
        url: '/giocatore/'+this.Giocatore.id,
        contentType: "application/json",
        data: JSON.stringify({"nickname": this.Giocatore.nickname, 
            "livelloGiocatore": this.Giocatore.livelloGiocatore, 
            "elisirDisponibileAlGiocatore": this.elisirTotaleGiocatore, 
            "coppe": this.coppeTotaliGiocatore}),
        success: function (risposta) {
            $("div#warnings").html(risposta);
        },
        error: function () {
            alert("Chiamata fallita!!!");
        }
    });
    
     $.ajax({
        type: "PUT",
        url: '/giocatore/'+this.Avversario.id,
        contentType: "application/json",
        data: JSON.stringify({"nickname": this.Avversario.nickname, 
            "livelloGiocatore": this.Avversario.livelloGiocatore, 
            "elisirDisponibileAlGiocatore": this.elisirTotaleAvversario, 
            "coppe": this.coppeTotaliAvversario}),
        success: function (risposta) {
            $("div#warnings").html(risposta);
        },
        error: function () {
            alert("Chiamata fallita!!!");
        }
    });
}


