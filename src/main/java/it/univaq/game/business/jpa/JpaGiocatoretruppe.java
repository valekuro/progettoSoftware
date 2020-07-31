/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.business.jpa;

import it.univaq.game.business.GiocatoretruppeService;
import it.univaq.game.business.exceptions.BusinessException;
import it.univaq.game.business.repository.GiocatoretruppeRepository;
import it.univaq.game.domain.giocatoretruppe;
import it.univaq.game.domain.Truppe;
import java.util.HashMap;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author Valentina
 */
@Service("giocatoretruppe")
@Transactional
public class JpaGiocatoretruppe implements GiocatoretruppeService {

    @Autowired
    GiocatoretruppeRepository giocatoretruppeRepository;

    @Override
    @Transactional(readOnly = true)
    public List<giocatoretruppe> findAll() throws BusinessException {
        List<giocatoretruppe> truppeGiocatore = giocatoretruppeRepository.findAll();
        return truppeGiocatore;
    }

    @Override
    @Transactional(readOnly = true)
    public List<giocatoretruppe> findTruppeByIdgiocatore(Long idgiocatore) throws BusinessException {
        List<giocatoretruppe> truppeGiocatore = giocatoretruppeRepository.findTruppeByIdgiocatore(idgiocatore);
        return truppeGiocatore;
    }
}
