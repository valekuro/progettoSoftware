/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.business;

import it.univaq.game.business.exceptions.BusinessException;
import it.univaq.game.domain.giocatoretruppe;
import it.univaq.game.domain.Truppe;
import java.util.HashMap;
import java.util.List;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

/**
 *
 * @author Valentina
 */
@Service
public interface GiocatoretruppeService {

    public List<giocatoretruppe> findAll() throws BusinessException;

    public List<giocatoretruppe> findTruppeByIdgiocatore(@Param("idgiocatore") Long idgiocatore) throws BusinessException;

    public void deleteById(Long id) throws BusinessException;
    //public void deleteTruppaByIdgiocatore(@Param("idgiocatore") Long idgiocatore, @Param("idtruppa") Long idtruppa);
    //public void deleteTruppaByIdgiocatore(@Param("id") Long id) throws BusinessException;

}
