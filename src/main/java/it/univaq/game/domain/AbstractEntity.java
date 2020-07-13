/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.domain;

import java.io.Serializable;
import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Version;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

/**
 *
 * @author Valentina
 * @param <ID>
 */
@MappedSuperclass
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Data

public abstract class AbstractEntity<ID> implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false)
    @EqualsAndHashCode.Include
    protected ID id;

   /* @Version
    protected int version;
    
    
    @Column(updatable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    @CreationTimestamp
    @EqualsAndHashCode.Include
    protected LocalDateTime dataCreazione;
    */
    
    
    public boolean isNew() {
      return id == null;
    }

}
