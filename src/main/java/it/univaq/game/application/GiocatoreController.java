/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.application;

import it.univaq.game.business.CasellaService;
import it.univaq.game.business.GiocatoreService;
import it.univaq.game.business.exceptions.BusinessException;
import it.univaq.game.business.repository.GiocatoreRepository;
import it.univaq.game.business.repository.GiocatoretruppeRepository;
import it.univaq.game.domain.Casella;
import it.univaq.game.domain.Giocatore;
import it.univaq.game.domain.giocatoretruppe;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 *
 * @author Valentina
 */
@Controller
@RequestMapping("/giocatore")

public class GiocatoreController {

    @Autowired
    private GiocatoreRepository giocatorerepository;
    @Autowired
    private CasellaService casellaservice;
    @Autowired
    private GiocatoreService giocatoreservice;
    @Autowired
    private GiocatoretruppeRepository giocatoretrupperepository;

    @PutMapping("/{id}")
    public ResponseEntity<Giocatore> aggiornaDatiGiocatoriPostPartita(@RequestBody Giocatore giocatore, @PathVariable(value = "id") long id) throws BusinessException {
        Optional<Giocatore> g = giocatorerepository.findById((long) id);
        if (!g.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        giocatore.setId(id);
        giocatorerepository.save(giocatore);
        return ResponseEntity.noContent().build();
    }

    @RequestMapping(
            value = "/caricamento_dati_giocatore_multigiocatore/{id}",
            produces = "application/json")
    @ResponseBody
    public ArrayList caricamentoDatiGiocatoreMultigiocatore(Model model, @PathVariable(value = "id") long id) throws BusinessException {
        Giocatore giocatore = giocatoreservice.findById((long) id);
        Giocatore giocatoreAvversario = giocatoreservice.findByLivelloGiocatore(giocatore.getLivelloGiocatore(), id);
        List<Casella> caselleGiocatoreAvversario = casellaservice.findCaselleByIdGiocatore(giocatoreAvversario.getId());
        ArrayList datiPartita = new ArrayList();
        datiPartita.add(caselleGiocatoreAvversario);
        datiPartita.add(giocatoreAvversario);
        return datiPartita;
    }

    @RequestMapping(
            value = "/caricamento_dati_utente_loggato/{id}",
            produces = "application/json")
    @ResponseBody
    public ArrayList datiGiocatoreLoggato(Model model, @PathVariable(value = "id") long id) throws BusinessException {
        ArrayList datiGiocatore = new ArrayList();
        Giocatore giocatore = giocatoreservice.findById((long) id);
        List<Casella> caselleGiocatore = casellaservice.findCaselleByIdGiocatore((long) id);
        List<giocatoretruppe> truppeDisponbili = giocatoretrupperepository.findTruppeByIdgiocatore((long) id);
        datiGiocatore.add(caselleGiocatore);
        datiGiocatore.add(giocatore);
        datiGiocatore.add(truppeDisponbili);
        model.addAttribute("datiGiocatore", datiGiocatore);
        return datiGiocatore;

    }
    
}
