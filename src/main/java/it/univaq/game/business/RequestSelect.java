/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.business;

import lombok.Data;

/**
 *
 * @author Valentina
 */
@Data
public class RequestSelect {

	private String q;
	private Long page;
	private Long pageSize;
    
	
}
