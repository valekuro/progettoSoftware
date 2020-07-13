/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.business.utility;

import it.univaq.game.business.RequestGrid;
import it.univaq.game.business.RequestSelect;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

/**
 *
 * @author Sonia Barbieri
 */
public class ConvertionUtility {

	public static Pageable requestGrid2Pageable(RequestGrid requestGrid) {
           
            return PageRequest.of((requestGrid.getStart().intValue() / requestGrid.getLength().intValue()), 
                    requestGrid.getLength().intValue() == -1 ? Integer.MAX_VALUE : requestGrid.getLength().intValue(),
                    "asc".equals(requestGrid.getSortDir()) ? Sort.Direction.ASC : Sort.Direction.DESC,
                    requestGrid.getSortCol());
        }
        
	public static Pageable requestSelect2Pageable(RequestSelect requestSelect, String sortDirection, String sortColumnName) {
            return PageRequest.of(requestSelect.getPage().intValue()-1, 
                    requestSelect.getPageSize().intValue(),
                    "desc".equals(sortDirection) ? Sort.Direction.DESC : Sort.Direction.ASC,
                    sortColumnName);
        }
}