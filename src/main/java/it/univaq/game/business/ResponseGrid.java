/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.business;

import java.util.List;
import lombok.Data;
/**
 *
 * @author Valentina
 */
@Data
public class ResponseGrid<R> {
   	private String draw;
	private long recordsTotal;
	private long recordsFiltered;
	private List<R> data;
	private R totals;

    public ResponseGrid() {
    }
    
    public ResponseGrid(String draw, long recordsTotal, long recordsFiltered, List<R> data) {
        this.draw = draw;
        this.recordsTotal = recordsTotal;
        this.recordsFiltered = recordsFiltered;
        this.data = data;
    }

    public ResponseGrid(String draw, long recordsTotal, long recordsFiltered, List<R> data, R totals) {
        this.draw = draw;
        this.recordsTotal = recordsTotal;
        this.recordsFiltered = recordsFiltered;
        this.data = data;
        this.totals = totals;
    }

}
