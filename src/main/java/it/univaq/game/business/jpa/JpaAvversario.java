/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.business.jpa;
import it.univaq.game.business.repository.AvversarioEsercitazioneRepository;
import it.univaq.game.domain.Avversario;
import it.univaq.game.business.AvversarioService;
import it.univaq.game.business.exceptions.BusinessException;
import java.util.List;
import java.lang.Integer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author Valentina
 */
@Service("avversario")
@Transactional
public class JpaAvversario implements AvversarioService{
    @Autowired
    AvversarioEsercitazioneRepository avversarioEsercitazioneRepository;
    
    @Override
    public Avversario findAvversarioByPosizione(Integer pos) throws BusinessException {
       return avversarioEsercitazioneRepository.findAvversarioByPosizione(pos);
    }
    
    @Transactional(readOnly = true)
    public List<Avversario> findAll() throws BusinessException {
        return avversarioEsercitazioneRepository.findAll();
    }
}
