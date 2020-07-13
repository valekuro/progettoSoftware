/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.business.jpa;

import it.univaq.game.business.UtenteService;
import it.univaq.game.business.exceptions.BusinessException;
import it.univaq.game.business.repository.UtenteRepository;
import it.univaq.game.domain.Utente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Valentina
 */
@Service
public class JpaUtenteService implements UtenteService{
    @Autowired
    UtenteRepository utenteRepository;
    
    @Override
    public Utente findUtenteByUsername(String username) throws BusinessException {
       return utenteRepository.findUtenteByUsername(username);
    }
}
