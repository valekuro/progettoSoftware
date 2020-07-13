/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.business.repository;
import it.univaq.game.domain.Edificio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
/**
 *
 * @author Valentina
 */
@Repository
public interface EdificioRepository extends JpaRepository<Edificio, Long>{
    
}
