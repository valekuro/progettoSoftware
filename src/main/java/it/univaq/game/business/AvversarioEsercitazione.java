/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.business;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
/**
 *
 * @author Valentina
 */
public class AvversarioEsercitazione {
    private int edificiDistrutti;
    private int[] a = new int[10];
    public VillaggioBuilder costruisciVillaggioBase(){
    VillaggioBuilder f = VillaggioBuilder.builder()
            .livello(5)
            .caselle(a)
            .numeroCostruzioni(3)
            .numeroDifese(2)
            .build();
    return f;
    }
    
}
