/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.application;


import it.univaq.game.business.TruppeService;
import it.univaq.game.domain.Truppe;
import it.univaq.game.business.exceptions.BusinessException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
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


    

    @GetMapping("")
    public String homePage(Model model) throws BusinessException {
      //  model.addAttribute("mySessionAttribute", avversarioservice.findAvversarioByPosizione((Integer) 5));
        return "home";
    }


     
   /* @PostMapping("/add")
    public String addNews(@Valid @ModelAttribute("news") News news, Errors errors) throws BusinessException {
        if (errors.hasErrors()) {
            return "admin/news/form";
        }
        newsService.create(news);
        return "redirect:/admin/news/list";
    }*/
    
}