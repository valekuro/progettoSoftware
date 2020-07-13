/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.business.repository;

import it.univaq.game.business.RequestGrid;
import it.univaq.game.business.ResponseGrid;
import it.univaq.game.domain.Casella;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.time.LocalDateTime;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;


/**
 *
 * @author Valentina
 */
@Repository
public interface CasellaRepository extends JpaRepository<Casella, Long>{
    public List<Casella> findAll();
    //public ResponseGrid<Casella> findAllFaqPaginated(RequestGrid requestGrid);
    //Page<Casella> findAllCasellaPaginated(Integer posizione, Long idedificio_id, Pageable pageable);


}
