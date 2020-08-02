/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.Set;
import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
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
@Table(name = "truppe")
public class Truppe extends AbstractEntity<Long> {

    @EqualsAndHashCode.Include
    private String nomeTruppa;
    private String immagineTruppa;
    private int livelloDisponibilita;
    private int tassoAggiornamentoResistenza;
    private int tassoAggiornamentoColpi;
    private int resistenzaLivelloIniziale;
    private int colpiLivelloIniziale;
    private int tassoAggiornamentoGuarigione;
    private int guarigioneLivelloIniziale;
    private String tipologia;

   /*  @JsonIgnore
    @ManyToMany()
    
    private Set<Giocatore> giocatore;*/

}
