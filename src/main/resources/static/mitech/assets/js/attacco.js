/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Pippo(durata) {
    this.durata = durata;
}

Timer.prototype.start = function () {
    var countDownDate = new Date();
    countDownDate.setMinutes(countDownDate.getMinutes() + this.durata); // timestamp
    countDownDate = new Date(countDownDate); // Date object
//document.getElementById("demo").innerHTML = countDownDate.getMinutes();

// Update the count down every 1 second
    var x = setInterval(function () {

        // Get todays date and time
        var now = new Date();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

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
        }
    }, 1000);

}
//var countDownDate = new Date("Sep 25, 2025 15:00:00").getTime();
/*var countDownDate = new Date();
 countDownDate.setMinutes(countDownDate.getMinutes() + 3); // timestamp
 countDownDate = new Date(countDownDate); // Date object
 //document.getElementById("demo").innerHTML = countDownDate.getMinutes();
 
 // Update the count down every 1 second
 var x = setInterval(function () {
 
 // Get todays date and time
 var now = new Date();
 
 // Find the distance between now an the count down date
 var distance = countDownDate - now;
 
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
 }
 }, 1000);
 */
