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
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 *
 * @author Valentina
 */
@Controller
@RequestMapping("/clash_of_clans")
public class GameController {

    @Autowired
    private CasellaService casellaservice;
    @Autowired
    private GiocatoreService giocatoreservice;
    @Autowired
    private GiocatoreRepository giocatorerepository;
    @Autowired
    private GiocatoretruppeRepository giocatoretrupperepository;

    @GetMapping("")
    String homeGiocatore(Model model) throws BusinessException {
        return "homegiocatore";
    }

    @GetMapping("/menu_villaggio_esercitazione")
    String menuVillaggioEsercitazione(Model model) throws BusinessException {
        return "menuvillaggioesercitazione";
    }

    @RequestMapping(
            value = "/start_partita_esercitazione/{id}",
            produces = "application/json")
    @ResponseBody
    public ArrayList IniziaPartitaEsercitazione(Model model, @PathVariable(value = "id") long id) throws BusinessException {
        Giocatore giocatore = giocatoreservice.findById((long) id);
        List<Casella> caselleGiocatoreAvversario = casellaservice.findCaselleByIdGiocatore(id);
        ArrayList datiPartita = new ArrayList();
        datiPartita.add(giocatore);
        datiPartita.add(caselleGiocatoreAvversario);
        return datiPartita;
    }

    @GetMapping("/menu_villaggio_multigiocatore")
    String menuVillaggioMultigiocatore(Model model) throws BusinessException {
        return "menuvillaggiomultigiocatore";
    }

    @GetMapping("/intestazione_partita")
    String visualizzaIntestazionepartita(Model model) throws BusinessException {
        return "intestazionepartita";
    }

    @GetMapping("/recupera_truppe_giocatore")
    public String inizioPartitaVillaggioEsercitazione(Model model) throws BusinessException {
        List<giocatoretruppe> truppeDisponbili = giocatoretrupperepository.findTruppeByIdgiocatore((long) 2);
        model.addAttribute("truppeDisponbili", truppeDisponbili);
        return "truppegiocatore";
    }

}
