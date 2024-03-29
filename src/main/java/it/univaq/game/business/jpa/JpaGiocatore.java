/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.business.jpa;

import it.univaq.game.business.exceptions.BusinessException;
import it.univaq.game.business.repository.GiocatoreRepository;
import it.univaq.game.domain.Giocatore;
import java.util.List;
import it.univaq.game.business.GiocatoreService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author Valentina
 */
@Service("giocatore")
@Transactional
public class JpaGiocatore implements GiocatoreService {

    @Autowired
    GiocatoreRepository giocatoreRepository;

    @Override
    @Transactional(readOnly = true)
    public List<Giocatore> findAll() throws BusinessException {
        List<Giocatore> listaGiocatori = giocatoreRepository.findAll();
        return listaGiocatori;
    }

    @Override
    @Transactional(readOnly = true)
    public Giocatore findById(Long id) throws BusinessException {
        Giocatore giocatore = giocatoreRepository.findById(id).orElseThrow(() -> {
            return new BusinessException("Giocatore non trovato");
        });
        return giocatore;
    }

    @Override
    @Transactional(readOnly = true)
    public Giocatore findByLivelloGiocatore(int livelloGiocatore, long idGiocatore) throws BusinessException {
        Giocatore giocatore = giocatoreRepository.findByLivelloGiocatore(livelloGiocatore, idGiocatore);
        return giocatore;
    }

    @Override
    @Transactional
    public void update(Giocatore giocatore) {
        giocatoreRepository.save(giocatore);
    }
    
       @Override
    public void create(Giocatore giocatore) throws BusinessException {
        giocatoreRepository.save(giocatore);
    }
}
