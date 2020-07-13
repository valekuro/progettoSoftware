/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.business;

import lombok.Builder;
import lombok.Getter;
import java.util.Map;

/**
 *
 * @author Valentina
 */
@Getter
@Builder
public class VillaggioBuilder {

/**
 *
 * @author Valentina
 */
    private int numeroDifese;
    private int numeroCostruzioni;
    private int livello;
    private int[] caselle;
       

}
