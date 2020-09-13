/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function Risultati(elisirRubato, ammontareDistruzioneParziale) {
    this.ammontareDistruzioneParziale = ammontareDistruzioneParziale;
    this.elisirRubato = elisirRubato;
    this.risultati = new Array();
}

Risultati.prototype.finePartitaMultigiocatore = function (elisirAvversario, giocatoreElisir, giocatoreCoppe, avversarioCoppe) {
    clearInterval(this.timer.tempo);
    let coppeVinteGiocatore = 0;
    let coppePerseGiocatoreSconfitta = 0;
    let coppeVinteAvversarioSconfitta = 0;
    let quantitaCoppePerStella = 7;
    let coppePerseAvversario = 0;
    if (this.ammontareDistruzioneParziale === 50) {
        coppeVinteGiocatore = coppeVinteGiocatore + quantitaCoppePerStella;
        coppePerseAvversario = coppePerseAvversario + quantitaCoppePerStella;
    } else if (this.ammontareDistruzioneParziale > 50 && this.ammontareDistruzioneParziale <= 99) {
        coppeVinteGiocatore = coppeVinteGiocatore + (quantitaCoppePerStella * 2);
        coppePerseAvversario = coppePerseAvversario + (quantitaCoppePerStella * 2);
    } else if (this.ammontareDistruzioneParziale === 100) {
        coppeVinteGiocatore = coppeVinteGiocatore + (quantitaCoppePerStella * 3);
        coppePerseAvversario = coppePerseAvversario + (quantitaCoppePerStella * 3);

    } else if (this.ammontareDistruzioneParziale < 50) {
        coppePerseGiocatoreSconfitta = quantitaCoppePerStella;
        coppeVinteAvversarioSconfitta = quantitaCoppePerStella;
    }
    this.viewPartita.aggiornaInformazioniStatoPartita('demo', 'Fine partita!')
    this.viewPartita.visualizzaRisultatiPartitaMultigiocatore(parseInt(this.ammontareDistruzioneParziale), this.elisirRubato, coppeVinteGiocatore, coppePerseAvversario);
}



/*Risultati.prototype.inviaDatiPartita = function () {
 $.ajax({
 type: "POST",
 url: "",
 contentType: "application/json",
 dataType: "json",
 data: 
 success: function (data) {
 
 },
 error: function () {
 alert("Chiamata fallita!!!");
 }
 });
 }*/

