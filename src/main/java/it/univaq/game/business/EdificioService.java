/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.business;
import it.univaq.game.business.exceptions.BusinessException;
import it.univaq.game.domain.Edificio;
/**
 *
 * @author Valentina
 */
public interface EdificioService {
    public void create(Edificio n) throws BusinessException;
}
