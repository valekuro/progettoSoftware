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
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import it.univaq.game.domain.Truppe;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.List;
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

    @GetMapping("")
    public String inizioPartitaVillaggioEsercitazione(Model model) throws BusinessException {
        villaggiocontroller.VillaggioPage(model);
        List<Truppe> truppeDisponbili = truppeservice.findAll();
        model.addAttribute("truppeDisponbili", truppeDisponbili);
        return "partitavillaggioesercitazione";
    }
    

    @RequestMapping(
            value="pippo", 
            produces="application/json")
    @ResponseBody
    public List<Truppe> pippo(Model model) throws BusinessException {
         List<Truppe> cercaDettagliTruppa = truppeservice.findAll();
         model.addAttribute("cercaDettagliTruppa", cercaDettagliTruppa);
        return cercaDettagliTruppa;
    }
    /*
    @RequestMapping("pippo")
    public @ResponseBody
    ResponseGrid<Truppe> findAllTruppe(@RequestBody RequestGrid requestGrid, Model model) throws BusinessException {
        return truppeservice.findAllTruppePaginated(requestGrid);
    }
    */
    
}
