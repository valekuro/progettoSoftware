/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Timer(durata) {
    this.durata = durata;
    this.distance;
    this.tempo;
    this.partita;
}

Timer.prototype.start = function (calMeth) {
   
    this.tempo = setInterval(()=>calMeth(), 1000);
}


Timer.prototype.calcolaDistanza = function(countDownDate){
        var now = new Date();
        // Find the distance between now an the count down date
        this.distance = countDownDate - now;
       // this.partita();
      // console.log(countDownDate);
      //  console.log(now);
        // Time calculations for days, hours, minutes and seconds
        //var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((parseInt(this.distance) % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((parseInt(this.distance) % (1000 * 60)) / 1000);
        
      //  console.log(this.distance);
        // Output the result in an element with id="demo"
        document.getElementById('demo').innerHTML = minutes + "m " + seconds + "s ";
        var viewPartita = new ViewPartita();
        viewPartita.aggiornaInformazioniStatoPartita('demo', minutes + "m " + seconds + "s ");
}
Timer.prototype.tempoRimanente = function (countDownDate) {
    var test = this;
    this.tempo = setInterval(function(){test.calcolaDistanza(countDownDate);}, 1000);

}
