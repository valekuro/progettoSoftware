/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.application;

import it.univaq.game.business.exceptions.BusinessException;
import org.springframework.stereotype.Controller;
import it.univaq.game.business.TruppeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import it.univaq.game.domain.Truppe;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.List;

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
    
    
    @GetMapping("pippo")
    public String pippo(Model model, String nomeTruppa) throws BusinessException {
         List<Truppe> cercaDettagliTruppa = truppeservice.findBynomeTruppa(nomeTruppa);
        return "news";
    }
}
