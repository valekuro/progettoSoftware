/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.business.repository;

import it.univaq.game.domain.Casella;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


/**
 *
 * @author Valentina
 */
@Repository
public interface CasellaRepository extends JpaRepository<Casella, Long>{
    public List<Casella> findAll();
  @Query("FROM Casella c WHERE c.idgiocatore = :idgiocatore")
    List<Casella> findCaselleByIdGiocatore(@Param("idgiocatore") long idgiocatore);

}
