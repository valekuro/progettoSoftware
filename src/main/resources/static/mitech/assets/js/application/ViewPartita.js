/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function ViewPartita() {
}

ViewPartita.prototype.posizionaTruppaSuCasella = function (occupazione, truppa) {
    document.getElementById(occupazione).src = '/mitech/assets/images/truppe/thumbnails/' + truppa + '.png';
}

ViewPartita.prototype.aggiornaInformazioniStatoPartita = function (id, frase) {
    //ricorda:         document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s "; 
    document.getElementById(id).innerHTML = frase;
}

ViewPartita.prototype.visualizzaVillaggioNemico = function (posizione, nome) {
       document.getElementById(posizione).src = "/mitech/assets/images/villaggio/" + nome + ".png";
}


ViewPartita.prototype.animazioneLottaTruppa = function (nomeEdificio, indice) {
            document.getElementById(indice-1).src = '/mitech/assets/images/villaggio/erba.png';
            document.getElementById(indice).src = "/mitech/assets/images/gif/" + nomeEdificio + ".gif";
};

ViewPartita.prototype.animazioneLottaEdificio = function (nomeEdificio, indice) {
            document.getElementById(indice).src = "/mitech/assets/images/gif/" + nomeEdificio + ".gif";
};
ViewPartita.prototype.camminoTruppa = function (oggettoOccupante, indice) {
    if(indice===0){
    document.getElementById(36).src = '/mitech/assets/images/villaggio/erba.png';
    document.getElementById(indice+1).src = '/mitech/assets/images/truppe/thumbnails/' + oggettoOccupante + '.png';
    }else{
    document.getElementById(indice).src = '/mitech/assets/images/villaggio/erba.png';
    document.getElementById(indice + 1).src = '/mitech/assets/images/truppe/thumbnails/' + oggettoOccupante + '.png';
    }
}

ViewPartita.prototype.ripristinoOggettoSopravvissuto = function (tipo, truppa, indice) {
    document.getElementById(indice+1).src = '/mitech/assets/images/'+tipo+'/'+truppa+'.png';
}

ViewPartita.prototype.distruzioneOggettoMorto = function (i) {
    document.getElementById(i).src = "/mitech/assets/images/villaggio/erba.png";
}


ViewPartita.prototype.selezionaTruppa = function (indiceTruppa, nomeTruppa) {
    var truppaUtilizzata = document.getElementsByName(nomeTruppa);
    var truppaInattiva = document.getElementsByName(nomeTruppa + 'Inactive');
    if (truppaUtilizzata.length > 1) {
        truppaUtilizzata[indiceTruppa].style.display = 'none';
       // document.getElementsByName('quantitaTruppaDisponibile').style.display = 'none';
        truppaInattiva[indiceTruppa].style.display = 'inline';
        indiceTruppa = indiceTruppa + 1;
    } else {
        truppaUtilizzata[0].style.display = 'none';
        truppaInattiva[0].style.display = 'inline';

    }
    return indiceTruppa;
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
      risultati = risultati + 'Se fosse stata una partita vera avresti ottenuto '+elisirRubato+' Elisir';
    document.getElementById('villaggio').style.display = 'none';
    document.getElementById('risultatiEsercitazione').style.display = 'block';
    document.getElementById('risultatiEsercitazione').innerHTML = risultati;
    document.getElementById('truppaInactive').style.display = 'none';
    document.getElementById('warnings').style.display = 'none';
}


ViewPartita.prototype.mantieniNumeroEdificiDistrutti = function (numeroEdificiDistrutti) {
    document.getElementById('edificiDistrutti').innerHTML = 'Numero edifici distrutti: ' + numeroEdificiDistrutti;
}

