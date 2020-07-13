/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.Entity;
import javax.persistence.ManyToMany;
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
@Table(name = "utenti")
public class Utente extends AbstractEntity<Long> {
		        
	@EqualsAndHashCode.Include
        private String username; 
        
        @JsonIgnore
	private String password;
              
        
        @JsonIgnore
        @ManyToMany()
	private Set<Ruolo> ruoli = new HashSet<>();

       
}