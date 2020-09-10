/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.application;

import it.univaq.game.business.CasellaService;
import it.univaq.game.business.GiocatoreService;
import it.univaq.game.business.exceptions.BusinessException;
import it.univaq.game.business.repository.GiocatoretruppeRepository;
import it.univaq.game.domain.Casella;
import it.univaq.game.domain.Giocatore;
import it.univaq.game.domain.giocatoretruppe;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.PathVariable;

/**
 *
 * @author Valentina
 */
@Controller
@RequestMapping("/villaggio_multigiocatore/")
public class CercaVillaggioController {

    @Autowired
    private CasellaService casellaservice;
    @Autowired
    private GiocatoreService giocatoreservice;
    @Autowired
    private GiocatoretruppeRepository giocatoretrupperepository;

    @GetMapping("")
    public String propostaVillaggioMultigiocatore(Model model) throws BusinessException {

        return "partitamultigiocatore";
    }

    @RequestMapping(
            value = "/{id}",
            produces = "application/json")
    @ResponseBody
    public ArrayList PosizioneEdificiCaselle(Model model, @PathVariable(value = "id") long id) throws BusinessException {
        ArrayList datiPartita = new ArrayList();

        Giocatore giocatore = giocatoreservice.findById((long) id);
        Giocatore giocatoreAvversario = giocatoreservice.findByLivelloGiocatore(giocatore.getLivelloGiocatore());

        // List<giocatoretruppe> listaTruppe = giocatoretrupperepository.findTruppeByIdgiocatore(id);
        // do {
        //       giocatoreAvversario = giocatoreservice.findByLivelloGiocatore(giocatore.getLivelloGiocatore());
        //  } while (giocatore.getNickname() == giocatoreAvversario.getNickname());
        List<Casella> caselleGiocatoreAvversario = casellaservice.findCaselleByIdGiocatore(giocatoreAvversario.getId());
        datiPartita.add(caselleGiocatoreAvversario);
        datiPartita.add(giocatoreAvversario);
        model.addAttribute("datiPartita", datiPartita);
        return datiPartita;

    }

    
   
}
