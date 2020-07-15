/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.business;
import java.util.TimerTask;
/**
 *
 * @author Valentina
 */
public class ScriviDurata extends TimerTask{
    private int durata = 60;
    public int resume = durata;

    public void run() {
      if (durata > 0) {
        System.out.println("Restano " + durata + " secondi");
        resume=durata;
        durata--;
      }else{
        System.out.println("FINE!");
        System.exit(0);
      }
    }
}
