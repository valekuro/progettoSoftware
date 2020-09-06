/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.application;

import it.univaq.game.business.AvversarioService;
import it.univaq.game.business.CasellaService;
import it.univaq.game.business.EdificioService;
import it.univaq.game.business.repository.CasellaRepository;
import it.univaq.game.business.exceptions.BusinessException;
import it.univaq.game.domain.Casella;
import org.springframework.web.bind.annotation.PostMapping;
import it.univaq.game.domain.Edificio;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author Valentina
 */
@Controller
@RequestMapping("")
public class HomeController {

   // @Autowired
  //  private AvversarioService avversarioservice;
    //private CasellaService casellaservice;
   // private EdificioService edificioservice;
   // private CasellaRepository casellarepository;
    

    @GetMapping("")
    public String homePage(Model model) throws BusinessException {
      //  model.addAttribute("mySessionAttribute", avversarioservice.findAvversarioByPosizione((Integer) 5));
        return "home";
    }
}
