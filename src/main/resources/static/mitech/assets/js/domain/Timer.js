/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Timer(durata) {
    this.durata = durata;
    this.distance;
    this.tempo;
}

Timer.prototype.start = function (calMeth) {
   
    this.tempo = setInterval(()=>calMeth(), 1000);
}


Timer.prototype.calcolaDistanza = function(countDownDate){
        var now = new Date();
        this.distance = countDownDate - now;
        var minutes = Math.floor((parseInt(this.distance) % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((parseInt(this.distance) % (1000 * 60)) / 1000);
        var viewPartita = new ViewPartita();
        viewPartita.aggiornaInformazioniStatoPartita('demo', minutes + "m " + seconds + "s ");
}



