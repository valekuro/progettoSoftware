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
            var truppe = new Array();
            var oggettoTabelloneAux = new Array();
            const villaggio = new Villaggio(data[3].elisirDisponibileAlGiocatore, data[1].livelloGiocatore, "esercitazione", data[0]);
            oggettoTabelloneAux = _.cloneDeep(villaggio.caselle);
            var e;

            //document.getElementById('truppa');
            //console.log(JSON.stringify(oggettoTabellone));
          

            document.getElementById('warnings').innerHTML = "seleziona la truppa";

            var viewPartita = new ViewPartita();
            var indiceTruppa = 0;

            $('.truppeDisponibiliAttacco').click(function () {
                var $this = $(this);
                var nomeTruppaScelta = $this.attr("name");
                console.log(nomeTruppaScelta);
                nomet = nomeTruppaScelta;
                console.log($this);
                document.getElementById('warnings').innerHTML = "seleziona la casella";

                //    $this.style.border = "1px solid";
                //   $this.style.padding = "10px";
                // $this.style.boxShadow = "5px 10px";
            });

            $('.truppeInactiveAttacco').click(function () {
                nomet = "";
                document.getElementById('warnings').innerHTML = "hai già usato questa truppa!";
            });
              
            const nuovaPartita = new Partita(villaggio, nomet, viewPartita, truppe);
            nuovaPartita.costruisciVillaggioNemico();
            
            var quantitaTruppa = new Array();

            $('.casella').click(function () {
                if (nomet === "") {
                    document.getElementById('warnings').innerHTML = "devi ancora selezionare la truppa";
                } else {
                    var $this = $(this);
                    var occupazione = $this.attr("id");
                    nuovaPartita.checkCasellaErba(occupazione);
                    quantitaTruppa.push(nomet);
                    var y;
                    for (y = 1; y < truppe.length; y++) {
                        if (truppe[y].nome == nomet) {
                            villaggio.caselle[occupazione][1] = truppe[y];
                        }
                    }
                    indiceTruppa = viewPartita.selezionaTruppa(indiceTruppa);
                    oggettoTabelloneAux = _.cloneDeep(villaggio.caselle);
                }
            });
          
            setInterval(function () {
              
                nuovaPartita.avanzamentoTruppeInserite(oggettoTabelloneAux, villaggio.caselle, quantitaTruppa);
                villaggio.caselle = _.cloneDeep(oggettoTabelloneAux);
            }, 4000);
        },
        error: function () {
            alert('C’è stato un’errore');
        }
    });
    //});

});