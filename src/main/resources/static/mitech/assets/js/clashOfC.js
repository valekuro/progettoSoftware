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

            var oggettoTabellone = new Array();
            var truppe = new Array();
            var oggettoTabelloneAux = new Array();


            const villaggio = new Villaggio(data[1].livelloGiocatore, "esercitazione", data[0]);

            oggettoTabelloneAux = _.cloneDeep(villaggio.caselle);


            //console.log(JSON.stringify(oggettoTabellone));
            for (var i = 0; i < data[2].length; i++) {
                if (data[2][i].truppa.tipologia === "attacco") {
                    for (var j = 0; j < data[2][i].quantita; j++) {
                        pippo = new TruppaBuilder()
                                .setNome(data[2][i].truppa.nomeTruppa)
                                .setTassoAggiornamentoColpi(data[2][i].truppa.tassoAggiornamentoColpi)
                                .setTassoAggiornamentoResistenza(data[2][i].truppa.tassoAggiornamentoResistenza)
                                .setResistenzaLivelloIniziale(data[2][i].truppa.resistenzaLivelloIniziale)
                                .setColpiLivelloIniziale(data[2][i].truppa.colpiLivelloIniziale);
                        //pippo.stocazzo();
                        truppe.push(pippo);
                    }
                } else if (data[2][i].truppa.tipologia === "guarigione") {
                    for (var j = 0; j < data[2][i].quantita; j++) {
                        truppe.push(new TruppaBuilder()

                                .setNome(data[2][i].truppa.nomeTruppa)
                                .setTassoAggiornamentoGuarigione(data[2][i].truppa.tassoAggiornamentoGuarigione)
                                .setTassoAggiornamentoResistenza(data[2][i].truppa.tassoAggiornamentoResistenza)
                                .setResistenzaLivelloIniziale(data[2][i].truppa.resistenzaLivelloIniziale)
                                .setGuarigioneLivelloIniziale(data[2][i].truppa.guarigioneLivelloIniziale));
                    }
                }

            }

            var viewPartita = new ViewPartita();

            const nuovaPartita = new Partita(villaggio, nomet, viewPartita, truppe);
            nuovaPartita.costruisciVillaggioNemico();
            $('.casella').click(function () {
                var $this = $(this);
                var occupazione = $this.attr("id");
                nuovaPartita.checkCasellaErba(occupazione);
                var y;
                var truppeAggiornate = new Array();
                for (y = 1; y < truppe.length; y++) {
                    if (truppe[y].nome == nomet) {
                        //console.log("prima      " + JSON.stringify(truppe));
                        // console.log("dopo      " + JSON.stringify(truppe));
                        villaggio.caselle[occupazione][1] = truppe[y];

                    }
                }
                oggettoTabelloneAux = _.cloneDeep(villaggio.caselle);
            });
            setInterval(function () {
                nuovaPartita.avanzamentoTruppeInserite(oggettoTabelloneAux, villaggio.caselle);
                villaggio.caselle = _.cloneDeep(oggettoTabelloneAux);
            }, 20000);
        },
        error: function () {
            alert('C’è stato un’errore');
        }
    });
    //});
});