/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.business.jpa;
import it.univaq.game.business.exceptions.BusinessException;
import it.univaq.game.domain.Edificio;
import it.univaq.game.business.EdificioService;
import it.univaq.game.business.repository.EdificioRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
/**
 *
 * @author Valentina
 */
@Service("edificio")
@Transactional
public class JpaEdificio implements EdificioService {
    @Autowired
    EdificioRepository edificioRepository;

  @Override
    @Transactional(readOnly = true)
    public List<Edificio> findAll() throws BusinessException {
        List<Edificio> edificio = edificioRepository.findAll();
        return edificio;
    }
   
}
