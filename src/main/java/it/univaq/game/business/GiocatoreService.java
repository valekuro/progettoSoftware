/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.business;

import it.univaq.game.business.exceptions.BusinessException;
import it.univaq.game.domain.Giocatore;
import it.univaq.game.domain.Truppe;
import java.util.List;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author Valentina
 */
public interface GiocatoreService {

    public List<Giocatore> findAll() throws BusinessException;

    Giocatore findById(Long id) throws BusinessException;

    Giocatore findByLivelloGiocatore(@Param("livelloGiocatore") int livelloGiocatore, @Param("id") long idGiocatore) throws BusinessException;

    void update(Giocatore giocatore) throws BusinessException;
    
    void create(Giocatore n) throws BusinessException;

}
