/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Timer(durata) {
    this.durata = durata;
    this.distance;
    this.x;
}

Timer.prototype.start = function () {
   var countDownDate = new Date();
    countDownDate.setMinutes(countDownDate.getMinutes() + this.durata); // timestamp

    countDownDate = new Date(countDownDate); // Date object

    this.tempoRimanente(countDownDate);
//document.getElementById("demo").innerHTML = countDownDate.getMinutes();

// Update the count down every 1 second
    //var x = setInterval(function () {
     /* setInterval(function () {
        // Get todays date and time
        var now = new Date();

        // Find the distance between now an the count down date
        this.distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        //var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";
        
        // If the count down is over, write some text 
            if (distance < 0) {
         clearInterval(x);
         document.getElementById("demo").innerHTML = "Fine partita!";
         this.scaduto=true;
         var viewPartita = new ViewPartita();
         var risultati;
         
         risultati = 'scaduto il tempo';
         viewPartita.cambioPagina(risultati);
         }
    }, 1000);*/

}


Timer.prototype.calcDistance = function(countDownDate){
        var now = new Date();
        // Find the distance between now an the count down date
        this.distance = countDownDate - now;
       
        console.log(countDownDate);
        console.log(now);
        // Time calculations for days, hours, minutes and seconds
        //var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((parseInt(this.distance) % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((parseInt(this.distance) % (1000 * 60)) / 1000);
        
        console.log(this.distance);
        // Output the result in an element with id="demo"
        document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s "; 
}
Timer.prototype.tempoRimanente = function (countDownDate) {
    var test = this;
    this.x = setInterval(function(){test.calcDistance(countDownDate);}, 1000);

}

