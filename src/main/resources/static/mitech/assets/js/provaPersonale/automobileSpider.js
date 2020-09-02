/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function automobileSpider(a, g, f) {
    this.f=f;
  //Questo chiama il costruttore di Automobile
	automobile.call(this, a, g);
}

automobileSpider.prototype = Object.create(automobile.prototype);
//automobileSpider.prototype.constructor = automobile;

Object.defineProperty(automobileSpider.prototype, 'constructor', { 
    value: automobileSpider, 
    enumerable: true, // so that it does not appear in 'for in' loop
    writable: true });

automobileSpider.prototype.mettiInMoto = function(){
    console.log(this.a);
}

