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
import it.univaq.game.business.repository.GiocatoreRepository;

import it.univaq.game.domain.Casella;
import it.univaq.game.domain.Giocatore;
import it.univaq.game.domain.giocatoretruppe;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.lang.Object;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
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

    @GetMapping("")
    public String homePage(Model model) throws BusinessException {
        return "entrainclash";
    }

}
