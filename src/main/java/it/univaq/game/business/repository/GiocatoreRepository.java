/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.business.repository;

import it.univaq.game.domain.Giocatore;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Valentina
 */
@Repository
public interface GiocatoreRepository extends JpaRepository<Giocatore, Long> {

    public List<Giocatore> findAll();

    @Query(value = "SELECT * FROM giocatore n WHERE n.livello_giocatore = :livelloGiocatore and n.id != 1 and n.id != :id ORDER BY rand() LIMIT 1", nativeQuery = true)
    Giocatore findByLivelloGiocatore(@Param("livelloGiocatore") int livelloGiocatore, @Param("id") long idGiocatore);
}
