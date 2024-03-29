/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.business;

import it.univaq.game.business.exceptions.BusinessException;
import it.univaq.game.domain.Casella;
import java.util.ArrayList;
import java.util.List;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author Valentina
 */
public interface CasellaService {
    public void create(Casella n) throws BusinessException;
    //public Casella findById(Long id) throws BusinessException;
    public List<Casella> findAll() throws BusinessException;
    public List<Casella> findCaselleByIdGiocatore(@Param("idgiocatore") long idgiocatore) throws BusinessException;
}
