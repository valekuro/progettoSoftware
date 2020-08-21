/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.domain;
import javax.persistence.Entity;
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
@Table(name = "edifici")
public class Edificio extends AbstractEntity<Long> {
    @EqualsAndHashCode.Include
    private String nome;
    private String immagine;
    private String tipologia;
    private int livelloDisponibilita;
    private int tassoAggiornamentoResistenza;
    private int tassoAggiornamentoColpi;
    private int resistenzaLivelloIniziale;
    private int colpiLivelloIniziale;
    private int percentualeDistruzionePunteggio;
}
