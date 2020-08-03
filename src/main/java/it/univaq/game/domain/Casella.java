/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 *
 * @author Valentina
 */
@Data
@EqualsAndHashCode(callSuper = false, onlyExplicitlyIncluded = true)
@Entity
@Table(name = "caselle")
public class Casella extends AbstractEntity<Long> {
    
    @EqualsAndHashCode.Include
    private int posizione;
     @ManyToOne
    @MapsId("idgiocatore")
    @JoinColumn(name = "idgiocatore")
    Giocatore giocatore;

    @ManyToOne
    @MapsId("idedificio")
    @JoinColumn(name = "idedificio")
    Edificio edificio;

    private Long idgiocatore;
    private Long idedificio;
}
