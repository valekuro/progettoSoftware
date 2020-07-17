/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.domain;
import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.Entity;
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
@Table(name = "villaggio")
public class Villaggio extends AbstractEntity<Long> {
    @EqualsAndHashCode.Include
    private int resistenzaTotaleEdificio;
    private int colpiAlSecondoEdificio;
    private int resistenzaTotaleTruppa;
    private int colpiAlSecondoTruppa;
    private int livelloMunicipio;
    @JsonIgnore
    @ManyToOne()
    private Edificio IDEdificio;
    private Truppe IDTruppe;
}
