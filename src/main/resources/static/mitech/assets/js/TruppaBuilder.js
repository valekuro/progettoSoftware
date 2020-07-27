/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function TruppaBuilder() {
    this.construct = function(builder) {
        builder.nome();
        builder.contatoreVita();
        builder.colpiAlSecondo();
        builder.guarigione();
        builder.resistenzaTotale();
        return builder.get();
    }
}

