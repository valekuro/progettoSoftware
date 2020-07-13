/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.business;

import java.util.List;
import lombok.Data;
/**
 *
 * @author Valentina
 */
@Data
public class ResponseGrid<R> {
    private List<R> data;
    private R totals;
}
