/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.application;

import it.univaq.game.business.exceptions.BusinessException;
import org.springframework.stereotype.Controller;
import it.univaq.game.business.CasellaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import it.univaq.game.business.RequestGrid;
import it.univaq.game.business.ResponseGrid;
import org.springframework.web.bind.annotation.ModelAttribute;
import it.univaq.game.domain.Casella;
import java.util.List;
import java.util.ArrayList;
import java.util.HashMap;
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

    @GetMapping("")
    public String VillaggioPage(Model model) throws BusinessException {
        List<Casella> d = casellaservice.findAll();
        //ArrayList<Integer> pos = new ArrayList<>(25);
        //ArrayList<String> edi = new ArrayList<>(25);
        HashMap<Integer,String> posizioneEdificio = new HashMap<>(25);
        //pos.set(0, d.get(i).getPosizione());
        //System.out.print();
        for (int i = 0; i < d.size(); i++) {
            posizioneEdificio.put(d.get(i).getPosizione(), d.get(i).getIDEdificio().getNome());
            //pos.add(d.get(i).getPosizione());
            //edi.add(d.get(i).getIDEdificio().getNome());
        }
        model.addAttribute("posizioneEdificio", posizioneEdificio);
        //modelMap.put("posizioneEdificio", posizioneEdificio);
        return "villaggioesercitazione";
    }
    /* @PostMapping("/findAllFaq")
    public @ResponseBody
    ResponseGrid<Casella> findAllCasella(@RequestBody RequestGrid requestGrid, Model model) throws BusinessException {
        return casellaservice.findAllCasellaPaginated(requestGrid);
    }*/

}
