/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


jQuery(document).ready(function ($) {
    // document.getElementsByClassName('truppa').onclick = function() { console.log('Click just happened'); };

  //  var elements = document.getElementsByClassName('truppa');
  //  console.log(elements);
    var myFunction = function () {
        console.log('Click just happened');
        //var attribute = this.getAttribute("data-myattribute");
        //alert(attribute);
    };

 //   Array.from(elements).forEach(function (element) {
  //      element.addEventListener('click', myFunction);
 ///   });

document.addEventListener("DOMContentLoaded", function(){document.querySelectorAll(".element");
                     var elements = document.getElementsByClassName('truppa'); 
             for(var i=0;i<elements.length;i++){ 
                elements[i].addEventListener("click", myFunction()); 
              }
})



    // $("button").click(function () {
    $.ajax({
        type: "GET",
        contentType: "application/json",
        dataType: "json",
        url: '/attacco_esercitazione/partitavillaggioesercitazione',
        success: function (data) {
            var truppe = new Array();
            var oggettoTabelloneAux = new Array();
            const villaggio = new Villaggio(data[1].livelloGiocatore, "esercitazione", data[0]);
            oggettoTabelloneAux = _.cloneDeep(villaggio.caselle);
            var e;

            //document.getElementById('truppa');
            //console.log(JSON.stringify(oggettoTabellone));
            for (var i = 0; i < data[2].length; i++) {

                if (data[2][i].truppa.tipologia === "attacco") {
                    for (var j = 0; j < data[2][i].quantita; j++) {
                        //console.log("attacco");
                        //console.log(data[2][j]);
                        $(".newdiv").append('<img id=\'' + data[2][j].truppa.nomeTruppa + '\' class="truppa" src = /mitech/assets/images/truppe/' + data[2][j].truppa.immagineTruppa + '>');
                        $(".newdiv").append('<div id=\'' + data[2][j].truppa.id + '\' class="idtruppeaddestrate" style="display: none">' + data[2][j].truppa.id + '</div>');
                        $(".newdiv").append('<div id=\'' + data[2][j].truppa.nomeTruppa + '\' class="nometruppeaddestrate" style="display: none">' + data[2][j].truppa.nomeTruppa + '</div>');

                        truppe.push(new TruppaBuilder()
                                .setNome(data[2][i].truppa.nomeTruppa)
                                .setTassoAggiornamentoColpi(data[2][i].truppa.tassoAggiornamentoColpi)
                                .setTassoAggiornamentoResistenza(data[2][i].truppa.tassoAggiornamentoResistenza)
                                .setResistenzaLivelloIniziale(data[2][i].truppa.resistenzaLivelloIniziale)
                                .setColpiLivelloIniziale(data[2][i].truppa.colpiLivelloIniziale)
                                .setLivelloGiocatore(data[1].livelloGiocatore)
                                .setVita());
                    }
                } else if (data[2][i].truppa.tipologia === "guarigione") {
                    for (var q = 0; q < data[2][i].quantita; q++) {
                        // console.log("guarigione");
                        //console.log(data[2][i]);
                        $(".newdiv").append('<img id=\'' + data[2][i].truppa.nomeTruppa + '\' class="truppa" src = /mitech/assets/images/truppe/' + data[2][i].truppa.immagineTruppa + '>');
                        $(".newdiv").append('<div id=\'' + data[2][i].truppa.id + '\' class="idtruppeaddestrate" style="display: none">' + data[2][i].truppa.id + '</div>');
                        $(".newdiv").append('<div id=\'' + data[2][i].truppa.nomeTruppa + '\' class="nometruppeaddestrate" style="display: none">' + data[2][i].truppa.nomeTruppa + '</div>');

                        truppe.push(new TruppaBuilder()

                                .setNome(data[2][i].truppa.nomeTruppa)
                                .setTassoAggiornamentoGuarigione(data[2][i].truppa.tassoAggiornamentoGuarigione)
                                .setTassoAggiornamentoResistenza(data[2][i].truppa.tassoAggiornamentoResistenza)
                                .setResistenzaLivelloIniziale(data[2][i].truppa.resistenzaLivelloIniziale)
                                .setGuarigioneLivelloIniziale(data[2][i].truppa.guarigioneLivelloIniziale)
                                .setLivelloGiocatore(data[1].livelloGiocatore)
                                .setVita());
                    }
                }

            }

            var viewPartita = new ViewPartita();

            /*
             //console.log(nomet.id);
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
             villaggio.caselle[occupazione][1] = truppe[y];
             }
             }
             oggettoTabelloneAux = _.cloneDeep(villaggio.caselle);
             });
             setInterval(function () {
             nuovaPartita.avanzamentoTruppeInserite(oggettoTabelloneAux, villaggio.caselle);
             villaggio.caselle = _.cloneDeep(oggettoTabelloneAux);
             for (y = 1; y < truppe.length; y++) {
             truppe.slice(y - 1, 1);
             }
             }, 1000);*/
        },
        error: function () {
            alert('C’è stato un’errore');
        }
    });
    //});
});