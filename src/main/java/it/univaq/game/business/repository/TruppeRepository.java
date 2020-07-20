/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.business.repository;

import it.univaq.game.business.RequestGrid;
import it.univaq.game.business.ResponseGrid;
import it.univaq.game.business.exceptions.BusinessException;
import it.univaq.game.domain.Truppe;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Valentina
 */
@Repository

public interface TruppeRepository extends JpaRepository<Truppe, Long>{
    public List<Truppe> findAll();
    public Page<Truppe> findBynomeTruppa(String nomeTruppa, Pageable pageable);

}
