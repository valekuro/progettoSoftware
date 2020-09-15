/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.business.repository;

import it.univaq.game.domain.giocatoretruppe;
import it.univaq.game.domain.Truppe;
import java.util.HashMap;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author Valentina
 */
@Repository
public interface GiocatoretruppeRepository extends JpaRepository<giocatoretruppe, Long>{
     public List<giocatoretruppe> findAll();
     
     @Query("SELECT t FROM giocatoretruppe t WHERE t.idgiocatore = :idgiocatore")
     public List<giocatoretruppe> findTruppeByIdgiocatore(@Param("idgiocatore") Long idgiocatore);
     
     public void deleteById(Long id);
    // @Query("DELETE g FROM giocatoretruppe g WHERE g.id = :id")
    // public void deleteTruppaByIdgiocatore(@Param("id") Long id);
     //@Query("delete from giocatoretruppe b where b.idgiocatore=:idgiocatore and b.truppa = :idtruppa")
     //@Query(value= "delete from giocatoretruppe where idgiocatore = :idgiocatore and idtruppa = :idtruppa", nativeQuery = true)
     //public void deleteTruppaByIdgiocatore(@Param("idgiocatore") Long idgiocatore, @Param("idtruppa") Long idtruppa);
}
