/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.business;
import it.univaq.game.business.exceptions.BusinessException;
import it.univaq.game.domain.Avversario;
import java.util.List;
import java.lang.Integer;
import org.springframework.data.domain.Sort;
/**
 *
 * @author Valentina
 */
public interface AvversarioService {
    public Avversario findAvversarioByPosizione(Integer pos) throws BusinessException;
    public List<Avversario> findAll() throws BusinessException;
}
