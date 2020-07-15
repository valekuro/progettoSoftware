/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.business;
import java.util.Timer;
import it.univaq.game.business.ScriviDurata;
import java.util.TimerTask;
/**
 *
 * @author Valentina
 */
public class Countdown {
   Timer timer;
   ScriviDurata scrividurata = new ScriviDurata();
  public void CountDown() {
    timer = new Timer();
    timer.schedule(scrividurata, 0, 1000);
   
  }
}
