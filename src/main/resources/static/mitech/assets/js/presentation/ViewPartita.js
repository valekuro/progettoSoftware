/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function ViewPartita() {
      if (typeof ViewPartita.single_instance === "undefined") {
        ViewPartita.single_instance = this;
    }
    return ViewPartita.single_instance;
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

    if (indice === 1) {
        document.getElementById(indice).src = "/mitech/assets/images/gif/" + nomeEdificio + ".gif";
    } else {

        document.getElementById(indice - 1).src = '/mitech/assets/images/villaggio/erba.png';
        document.getElementById(indice).src = "/mitech/assets/images/gif/" + nomeEdificio + ".gif";
    }
};

ViewPartita.prototype.animazioneLottaEdificio = function (nomeEdificio, indice) {
    document.getElementById(indice).src = "/mitech/assets/images/gif/" + nomeEdificio + ".gif";
};
ViewPartita.prototype.camminoTruppa = function (oggettoOccupante, indice) {
    if (indice === 0) {
        document.getElementById(36).src = '/mitech/assets/images/villaggio/erba.png';
        document.getElementById(indice + 1).src = '/mitech/assets/images/truppe/thumbnails/' + oggettoOccupante + '.png';
    } else {
        document.getElementById(indice).src = '/mitech/assets/images/villaggio/erba.png';
        document.getElementById(indice + 1).src = '/mitech/assets/images/truppe/thumbnails/' + oggettoOccupante + '.png';
    }
}

ViewPartita.prototype.ripristinoOggettoSopravvissuto = function (tipo, truppa, indice) {
    document.getElementById(indice + 1).src = '/mitech/assets/images/' + tipo + '/' + truppa + '.png';
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

ViewPartita.prototype.visualizzaRisultatiPartitaEsercitazione = function (ammontareDistruzioneParziale, elisirRubato) {
    var risultati;
    risultati = 'Percentuale raggiunta: ' + ammontareDistruzioneParziale + '%';
    if (ammontareDistruzioneParziale === 50) {
        risultati = risultati + '  Hai vinto, hai totalizzato: 1 stella ';
    } else if (ammontareDistruzioneParziale > 50 && ammontareDistruzioneParziale <= 99) {
        risultati = risultati + '  Hai vinto, hai totalizzato: 2 stelle ';
    } else if (ammontareDistruzioneParziale === 100) {
        risultati = risultati + '  Hai vinto, hai totalizzato: 3 stelle ';
    } else if (ammontareDistruzioneParziale < 50) {
        risultati = risultati + '  Hai perso, peccato! ';
    }
    risultati = risultati + 'Se fosse stata una partita vera avresti ottenuto ' + elisirRubato + ' Elisir';
    document.getElementById('warnings').style.display = 'none';
    document.getElementById('risultati').innerHTML = risultati;

}

ViewPartita.prototype.visualizzaRisultatiPartitaMultigiocatore = function (ammontareDistruzioneParziale, elisirRubato, coppeVinteGiocatore, coppePerseAvversario, nicknameAvversario) {
    var risultati;
    risultati = 'Percentuale raggiunta: ' + ammontareDistruzioneParziale + '%';
    if (ammontareDistruzioneParziale === 50) {
        risultati = risultati + '  Hai vinto ' + coppeVinteGiocatore + ' coppe! Hai totalizzato: 1 stella ';
    } else if (ammontareDistruzioneParziale > 50 && ammontareDistruzioneParziale <= 99) {
        risultati = risultati + '  Hai vinto ' + coppeVinteGiocatore + ' coppe! Hai totalizzato: 2 stella ';
    } else if (ammontareDistruzioneParziale === 100) {
        risultati = risultati + '  Hai vinto ' + coppeVinteGiocatore + ' coppe! Hai totalizzato: 3 stella ';
    } else if (ammontareDistruzioneParziale < 50) {
        risultati = risultati + '  Hai perso ' + coppeVinteGiocatore + ' peccato! ';
    }
    risultati = risultati + 'Hai ottenuto ' + parseInt(elisirRubato) + ' Elisir';

    risultati = risultati + '\n \n' + nicknameAvversario + ' ha perso ' + coppePerseAvversario + ' coppe e ha perso ' + parseInt(elisirRubato) + ' Elisir.';
    document.getElementById('warnings').style.display = 'none';
    document.getElementById('risultati').innerHTML = risultati;
}
ViewPartita.prototype.mantieniNumeroEdificiDistrutti = function (numeroEdificiDistrutti) {
    document.getElementById('edificiDistrutti').innerHTML = 'Edifici distrutti: ' + numeroEdificiDistrutti;
}

