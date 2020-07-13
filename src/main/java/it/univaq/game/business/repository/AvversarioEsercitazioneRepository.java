/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.business.repository;
import org.springframework.stereotype.Repository;
import it.univaq.game.business.exceptions.BusinessException;
import it.univaq.game.domain.Avversario;
import java.util.List;
import java.lang.Integer;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Valentina
 */
@Repository
public interface AvversarioEsercitazioneRepository extends JpaRepository<Avversario, Long>{
    public Avversario findAvversarioByPosizione(Integer pos);
    public List<Avversario> findAll();
}
