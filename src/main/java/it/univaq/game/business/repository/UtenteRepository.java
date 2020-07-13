/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.business.repository;

import it.univaq.game.domain.Utente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Valentina
 */
@Repository
public interface UtenteRepository extends JpaRepository<Utente, Long>{
    
    @Query("FROM Utente u LEFT JOIN FETCH u.ruoli WHERE u.username = :username ")
    Utente findUtenteRuoliByUsername(@Param("username") String username);

    public Utente findUtenteByUsername(String username);

}
