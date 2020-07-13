/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.application;
import it.univaq.game.business.RequestGrid;
import it.univaq.game.business.AvversarioService;
import it.univaq.game.domain.Avversario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import it.univaq.game.business.exceptions.BusinessException;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;


/**
 *
 * @author Valentina
 */
public class AvversarioController {
    
    @Autowired
    private AvversarioService avversarioservice;
    
    @PostMapping("/")
    public @ResponseBody
    Avversario findAvversario(@RequestBody RequestGrid requestGrid, Model model) throws BusinessException {
        model.addAttribute("avversario", avversarioservice.findAvversarioByPosizione(0));
        return avversarioservice.findAvversarioByPosizione(0);
    }
}
