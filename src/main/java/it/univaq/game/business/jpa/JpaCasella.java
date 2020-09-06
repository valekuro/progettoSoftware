/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.business.jpa;

import it.univaq.game.business.exceptions.BusinessException;
import it.univaq.game.domain.Casella;
import it.univaq.game.business.CasellaService;
import it.univaq.game.business.utility.ConvertionUtility;
import it.univaq.game.business.RequestGrid;
import it.univaq.game.business.ResponseGrid;
import it.univaq.game.business.repository.CasellaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


/**
 *
 * @author Valentina
 */
@Service("casella")
@Transactional
public class JpaCasella implements CasellaService {

    @Autowired
    CasellaRepository casellaRepository;

    @Override
    public void create(Casella n) throws BusinessException {
        casellaRepository.save(n);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Casella> findAll() throws BusinessException {
        List<Casella> casella = casellaRepository.findAll();
        return casella;
    }

 }
