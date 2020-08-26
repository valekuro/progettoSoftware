/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


jQuery(document).ready(function ($) {

    // $("button").click(function () {
    $.ajax({
        type: "GET",
        contentType: "application/json",
        dataType: "json",
        url: '/attacco_esercitazione/partitavillaggioesercitazione',
        success: function (data) {
            const nuovaPartita = new Partita(nomet, data);
            nuovaPartita.iniziaPartita();
            var indiceTruppa = 0;
            $('.casella').click(function () {
                var $this = $(this);
                var occupazione = $this.attr("id");
                nuovaPartita.selezionareCasella(indiceTruppa, occupazione);

            });
            $('.truppeDisponibiliAttacco').click(function () {
                var $this = $(this);
                var nomeTruppaScelta = $this.attr("name");
                nuovaPartita.selezionareTruppaDisponibile(nomeTruppaScelta);

            });
            
            $('.truppeInactiveAttacco').click(function () {    
                nuovaPartita.gestioneTruppeInattive();
            });
        },
        error: function () {
            alert('C’è stato un’errore');
        }
    });
    //});

});