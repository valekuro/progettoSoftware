/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function automobile(a, g) {
    this.a = a;
    this.g = g;
        this.d = this.chiamaD();

	// questo è il metodo costruttore

}

  automobile.prototype.mettiInMoto = function() {
  	alert("Motore partito "+this.a+' '+this.g);
  }
  
  automobile.prototype.chiamaD = function(){
    console.log(this.a + ' chiamaD');
}