/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var nomet;


function ViewPartita() {
}

ViewPartita.prototype.posizionaTruppaSuCasella = function (occupazione) {
    document.getElementById(occupazione).src = '/mitech/assets/images/truppe/thumbnails/' + nomet + '.png';
}

ViewPartita.prototype.aggiornareBannerAiutoMossa = function (frase) {
    document.getElementById('warnings').innerHTML = frase;
}

ViewPartita.prototype.visualizzaVillaggioNemico = function (caselleVillaggioNemico) {
    var i;
    for (i = 0; i < 36; i++) {
       document.getElementById(caselleVillaggioNemico[i].posizione).src = "/mitech/assets/images/villaggio/" + caselleVillaggioNemico[i].oggettoOccupante.nome + ".png";
    }
}
ViewPartita.prototype.animazioneLotta = function (nomeEdificio, i) {
    if(nomeEdificio === nomet){
            document.getElementById(i-1).src = '/mitech/assets/images/villaggio/erba.png';
            document.getElementById(i).src = "/mitech/assets/images/gif/" + nomeEdificio + ".gif";
    } else {
            document.getElementById(i).src = "/mitech/assets/images/gif/" + nomeEdificio + ".gif";
    }
}
ViewPartita.prototype.camminoTruppa = function (oggettoOccupante, i) {
    if(i===0){
    document.getElementById(36).src = '/mitech/assets/images/villaggio/erba.png';
    document.getElementById(1).src = '/mitech/assets/images/truppe/thumbnails/' + oggettoOccupante + '.png';
    }else{
   
    document.getElementById(i).src = '/mitech/assets/images/villaggio/erba.png';
    document.getElementById(i + 1).src = '/mitech/assets/images/truppe/thumbnails/' + oggettoOccupante + '.png';
    }
}

ViewPartita.prototype.ripristinoTruppaSopravvissutaStatica = function (truppa, i) {
    document.getElementById(i+1).src = '/mitech/assets/images/truppe/'+truppa+'.png';
}

ViewPartita.prototype.ripristinoEdificioSopravvissutoStatico = function (edificio, i) {
    document.getElementById(i+1).src = '/mitech/assets/images/villaggio/'+edificio+'.png';
}

ViewPartita.prototype.distruzioneOggettoMorto = function (i) {
    document.getElementById(i).src = "/mitech/assets/images/villaggio/erba.png";
}


ViewPartita.prototype.selezionaTruppa = function (indiceTruppa) {
    var truppaUtilizzata = document.getElementsByName(nomet);
    var truppaInattiva = document.getElementsByName(nomet + 'Inactive');
    if (truppaUtilizzata.length > 1) {
        truppaUtilizzata[indiceTruppa].style.display = 'none';
        truppaInattiva[indiceTruppa].style.display = 'block';
        indiceTruppa = indiceTruppa + 1;
    } else {
        truppaUtilizzata[0].style.display = 'none';
        truppaInattiva[0].style.display = 'block';

    }
    return indiceTruppa;
}

ViewPartita.prototype.vistaTimer = function(minutes, seconds){

        document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s "; 
}


/*ViewPartita.prototype.cambioPagina = function() {
 
 $.ajax({
 // definisco il tipo della chiamata
 type: "POST",
 // specifico la URL della risorsa da contattare
 url: "/attacco_esercitazione/partitavillaggioesercitazione",
 // passo dei dati alla risorsa remota
 data: "nome=giovanni&cognome=belelli",
 // definisco il formato della risposta
 dataType: "html",
 // imposto un'azione per il caso di successo
 success: function (risposta) {
 $("div#pluto").html(risposta);
 },
 // ed una per il caso di fallimento
 error: function () {
 alert("Chiamata fallita!!!");
 }
 });
 }*/

ViewPartita.prototype.visualizzaRisultatiPartita = function (ammontareDistruzioneParziale, elisirRubato) {
     var risultati;
       risultati = 'Percentuale raggiunta: ' + ammontareDistruzioneParziale + '%';
        if(ammontareDistruzioneParziale === 50){
          risultati = risultati + '  Hai vinto, hai totalizzato: 1 stella ';
        }else if(ammontareDistruzioneParziale > 50 && ammontareDistruzioneParziale <= 99){
          risultati = risultati + '  Hai vinto, hai totalizzato: 2 stelle ';
        }else if(ammontareDistruzioneParziale === 100){
          risultati = risultati + '  Hai vinto, hai totalizzato: 3 stelle ';
        }else if(ammontareDistruzioneParziale < 50){
          risultati = risultati + '  Hai perso, peccato! ';
        }
      risultati = risultati + 'Hai ottenuto '+elisirRubato+' Elisir';
    document.getElementById('villaggio').style.display = 'none';
    document.getElementById('risultatiEsercitazione').style.display = 'block';
    document.getElementById('risultatiEsercitazione').innerHTML = risultati;
    document.getElementById('truppaInactive').style.display = 'none';
    document.getElementById('warnings').style.display = 'none';
}

ViewPartita.prototype.mostraGuaritore = function (j, i, guaritore) {
    document.getElementById(j).src = '/mitech/assets/images/truppe/thumbnails/' + guaritore + '.png';
    document.getElementById(i).src = '/mitech/assets/images/truppe/thumbnails/' + nomet + '.png';
}
ViewPartita.prototype.mantieniNumeroEdificiDistrutti = function (numeroEdificiDistrutti) {
    document.getElementById('edificiDistrutti').innerHTML = 'Numero edifici distrutti: ' + numeroEdificiDistrutti;
}

