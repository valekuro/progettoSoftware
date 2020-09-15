/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.application;

import it.univaq.game.business.CasellaService;
import it.univaq.game.business.GiocatoreService;
import it.univaq.game.business.repository.GiocatoreRepository;
import it.univaq.game.business.repository.GiocatoretruppeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import static org.springframework.http.ResponseEntity.ok;
import org.springframework.http.HttpStatus;

/**
 *
 * @author Valentina
 */
@Controller
@RequestMapping("/truppe")
public class TruppeController {

    @Autowired
    private GiocatoretruppeRepository giocatoretrupperepository;

    /*@DeleteMapping(value = "/{idgiocatore}/{idtruppa}")
    public ResponseEntity<Long> deletePost(@PathVariable Long idgiocatore, @PathVariable Long idtruppa) {
        giocatoretrupperepository.deleteTruppaByIdgiocatore((long)2, (long)4);


        return ResponseEntity.noContent().build();
    }*/
    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Long> deletePost(@PathVariable Long id) {
       // giocatoretrupperepository.deleteTruppaByIdgiocatore(id);
       giocatoretrupperepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
