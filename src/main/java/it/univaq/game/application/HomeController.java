/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.application;

import it.univaq.game.business.CasellaService;
import it.univaq.game.business.GiocatoreService;
import it.univaq.game.business.TruppeService;
import it.univaq.game.domain.Truppe;
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
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 *
 * @author Valentina
 */
@Controller
@RequestMapping("")
public class HomeController {

    @Autowired
    private CasellaService casellaservice;
    @Autowired
    private GiocatoreService giocatoreservice;
    @Autowired
    private GiocatoretruppeRepository giocatoretrupperepository;

    @GetMapping("")
    public String homePage(Model model) throws BusinessException {
        //  model.addAttribute("mySessionAttribute", avversarioservice.findAvversarioByPosizione((Integer) 5));
        return "home";
    }

    @GetMapping("/menugames")
    String menugames(Model model) throws BusinessException {
        return "menugames";
    }
    
     @GetMapping("/menugames/villaggioesercitazione")
    String visualizzaVillaggioEsercitazione(Model model) throws BusinessException {
        return "villaggioesercitazione";
    }
    
     @GetMapping("/menugames/intestazionepartita")
    String visualizzaIntestazionepartita(Model model) throws BusinessException {
        return "intestazionepartita";
    }
    
     @GetMapping("/menugames/iniziapartitaesercitazione")
    public String inizioPartitaVillaggioEsercitazione(Model model) throws BusinessException {
        List<giocatoretruppe> truppeDisponbili = giocatoretrupperepository.findTruppeByIdgiocatore((long) 2);
        model.addAttribute("truppeDisponbili", truppeDisponbili);
        return "truppegiocatore";
    }

    @RequestMapping(
            value = "/menugames/caricamento_dati_partita/{id}",
            produces = "application/json")
    @ResponseBody
    public ArrayList caricamentoDatiDiGioco(Model model, @PathVariable(value = "id") long id) throws BusinessException {
        Giocatore giocatore = giocatoreservice.findById((long) id);
        Giocatore giocatoreAvversario = giocatoreservice.findByLivelloGiocatore(giocatore.getLivelloGiocatore());
        // List<giocatoretruppe> listaTruppe = giocatoretrupperepository.findTruppeByIdgiocatore(id);
        List<Casella> caselleGiocatoreAvversario = casellaservice.findCaselleByIdGiocatore(giocatoreAvversario.getId());

        ArrayList datiPartita = new ArrayList();

        // datiPartita.add(listaTruppe);
        datiPartita.add(caselleGiocatoreAvversario);
        datiPartita.add(giocatoreAvversario);
        //    model.addAttribute("cercaPosizioneEdificiInCasella", cercaPosizioneEdificiInCasella);
        //model.addAttribute("datiPartita", datiPartita);
        return datiPartita;
    }

    @RequestMapping(
            value = "/menugames/homegiocatore{id}",
            produces = "application/json")
    @ResponseBody
    public ArrayList homeGiocatore(Model model, @PathVariable(value = "id") long id) throws BusinessException {
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

    @RequestMapping(
            value = "/menugames/partitaesercitazione{id}",
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
}
