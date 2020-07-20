/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.business.jpa;

import it.univaq.game.business.RequestGrid;
import it.univaq.game.business.ResponseGrid;
import it.univaq.game.business.exceptions.BusinessException;
import it.univaq.game.domain.Truppe;
import it.univaq.game.business.TruppeService;
import it.univaq.game.business.repository.TruppeRepository;
import java.util.List;
import it.univaq.game.business.utility.ConvertionUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author Valentina
 */
@Service("truppe")
@Transactional
public class JpaTruppe implements TruppeService {

    @Autowired
    TruppeRepository truppeRepository;

    @Override
    @Transactional(readOnly = true)
    public List<Truppe> findAll() throws BusinessException {
        List<Truppe> truppe = truppeRepository.findAll();
        return truppe;
    }

    /* @Override
    @Transactional(readOnly = true)
    public List<Truppe> findBynomeTruppa(String nomeTruppa) throws BusinessException {
        List<Truppe> truppe = truppeRepository.findBynomeTruppa(nomeTruppa);
        return truppe;
    }*/
    @Override
    @Transactional(readOnly = true)
    public ResponseGrid<Truppe> findAllTruppePaginated(RequestGrid requestGrid) throws BusinessException {
        Pageable pageable = ConvertionUtility.requestGrid2Pageable(requestGrid);
        Page<Truppe> page = truppeRepository.findBynomeTruppa(requestGrid.getSearch().getValue3(), pageable);
        return new ResponseGrid<>(requestGrid.getDraw(), page.getTotalElements(), page.getTotalElements(), page.getContent());
    }

}
