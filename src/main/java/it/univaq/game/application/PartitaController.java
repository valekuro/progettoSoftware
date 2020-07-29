/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.application;

import it.univaq.game.business.RequestGrid;
import it.univaq.game.business.ResponseGrid;
import it.univaq.game.business.exceptions.BusinessException;
import org.springframework.stereotype.Controller;
import it.univaq.game.business.TruppeService;
import it.univaq.game.business.CasellaService;
//import it.univaq.game.business.repository.GiocatoretruppeRepository;
import it.univaq.game.business.GiocatoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import it.univaq.game.domain.Giocatore;
import it.univaq.game.domain.Casella;
import it.univaq.game.domain.Truppe;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.List;
import java.util.ArrayList;
import java.util.HashMap;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 *
 * @author Valentina
 */
@Controller
@RequestMapping("/attacco_esercitazione/partitavillaggioesercitazione")
public class PartitaController {

    @Autowired
    private VillaggioController villaggiocontroller;
    @Autowired
    private TruppeService truppeservice;
    @Autowired
    private CasellaService casellaservice;
    @Autowired
    private GiocatoreService giocatoreservice;
    //@Autowired
    //private GiocatoretruppeRepository giocatoretrupperepository;

    @GetMapping("")
    public String inizioPartitaVillaggioEsercitazione(Model model) throws BusinessException {
        villaggiocontroller.VillaggioPage(model);
        List<Truppe> truppeDisponbili = truppeservice.findAll();
        model.addAttribute("truppeDisponbili", truppeDisponbili);
        return "partitavillaggioesercitazione";
    }

    @RequestMapping(
            value = "",
            produces = "application/json")
    @ResponseBody
    public ArrayList PosizioneEdificiCaselle(Model model) throws BusinessException {
        List<Casella> cercaPosizioneEdificiInCasella = casellaservice.findAll();
        Giocatore giocatoreAutenticato = giocatoreservice.findById((long) 2);
        //HashMap<Long, Truppe> listaTruppe = giocatoretrupperepository.findTruppeByIdgiocatore((long) 2);
        ArrayList datiPartita = new ArrayList();
        datiPartita.add(cercaPosizioneEdificiInCasella);
        datiPartita.add(giocatoreAutenticato);
        model.addAttribute("cercaPosizioneEdificiInCasella", cercaPosizioneEdificiInCasella);
        //model.addAttribute("listaTruppe", listaTruppe);
        return datiPartita;
    }

    @RequestMapping(
            value = "avversario",
            produces = "application/json")
    @ResponseBody
    public Giocatore AvversarioEsercitazione(Model model) throws BusinessException {
        Giocatore avversarioEsercitazione = giocatoreservice.findById((long) 1);
        model.addAttribute("avversarioEsercitazione", avversarioEsercitazione);
        return avversarioEsercitazione;
    }

}
