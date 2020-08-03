/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.application;

import it.univaq.game.business.exceptions.BusinessException;
import org.springframework.stereotype.Controller;
import it.univaq.game.business.CasellaService;
import it.univaq.game.business.EdificioService;
import it.univaq.game.business.GiocatoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import it.univaq.game.domain.Casella;
import java.util.List;
import java.util.ArrayList;
import java.util.HashMap;
import it.univaq.game.domain.Edificio;
import it.univaq.game.domain.Giocatore;
import java.util.Map;
import java.util.Iterator;
import java.util.Set;
import org.springframework.ui.ModelMap;

/**
 *
 * @author Valentina
 */
@Controller
@RequestMapping("/attacco_esercitazione")
public class VillaggioController {

    @Autowired
    private CasellaService casellaservice;
     @Autowired
    private GiocatoreService giocatoreservice;

    @GetMapping("")
    public String VillaggioPage(Model model) throws BusinessException {
        List<Casella> d = casellaservice.findAll();
        HashMap<Integer,String> posizioneEdificio = new HashMap<>(25);
        Giocatore giocatoreAutenticato = giocatoreservice.findById((long) 2);
        int livelloGiocatore = giocatoreAutenticato.getLivelloGiocatore();
        System.out.println(giocatoreAutenticato);
        //pos.set(0, d.get(i).getPosizione());
        for (int i = 0; i < d.size(); i++) {
            if (d.get(i).getEdificio().getLivelloDisponibilita()<=livelloGiocatore){
                posizioneEdificio.put(d.get(i).getPosizione(), d.get(i).getEdificio().getImmagine());
            }
        }
        model.addAttribute("posizioneEdificio", posizioneEdificio);
        return "villaggioesercitazione";
    }

  
}
