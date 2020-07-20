/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.business;
import it.univaq.game.business.exceptions.BusinessException;
import it.univaq.game.domain.Truppe;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
/**
 *
 * @author Valentina
 */
public interface TruppeService {
    public List<Truppe> findAll() throws BusinessException;
    public ResponseGrid<Truppe> findAllTruppePaginated(RequestGrid requestGrid) throws BusinessException;
}
