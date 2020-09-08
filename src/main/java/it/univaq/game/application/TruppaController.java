/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.application;

import it.univaq.game.business.TruppeService;
import it.univaq.game.business.exceptions.BusinessException;
import it.univaq.game.domain.Truppe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.validation.Errors;
import javax.validation.Valid;


/**
 *
 * @author Valentina
 */
@Controller
@RequestMapping("/aggiungitruppa")
public class TruppaController {
    @Autowired
 private TruppeService truppeservice;
    
    
    @GetMapping("")
    public String aggiungiNuovaTruppa(Model model) throws BusinessException {
        model.addAttribute("truppe", new Truppe());
        return "aggiungitruppa";
    }
    
    @PostMapping("")
    public String addNews(@Valid @ModelAttribute("truppe") Truppe truppe, Errors errors) throws BusinessException {
       
        truppeservice.create(truppe);
        return "redirect:/";
    }
}
