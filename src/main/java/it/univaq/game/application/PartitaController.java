/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.application;

import java.util.TimerTask;
import java.util.Timer;
import it.univaq.game.application.VillaggioController;
import it.univaq.game.business.exceptions.BusinessException;
import it.univaq.game.business.Countdown;
import it.univaq.game.business.ScriviDurata;
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
import java.util.Date;
import java.util.Timer;
import java.util.TimerTask;

/**
 *
 * @author Valentina
 */
@Controller
@RequestMapping("/attacco_esercitazione/partitavillaggioesercitazione")
public class PartitaController {

    @Autowired
    private VillaggioController villaggiocontroller;
    private Countdown countdown = new Countdown();
    private ScriviDurata scrividurata = new ScriviDurata();

    @GetMapping("")
    public String inizioPartitaVillaggioEsercitazione(Model model) throws BusinessException {
        villaggiocontroller.VillaggioPage(model);
        System.out.println("INIZIA il conto alla rovescia:");
        countdown.CountDown();
        int temporimanente = scrividurata.resume;
        model.addAttribute("tr",temporimanente);
        return "partitavillaggioesercitazione";
    }
}
