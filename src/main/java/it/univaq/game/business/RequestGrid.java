/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.univaq.game.business;

import java.time.LocalDateTime;
import java.util.List;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

/**
 *
 * @author Valentina
 */

@Data
public class RequestGrid {

	private String draw;
	private Long start;
	private Long length;
        private SearchType search;
        private List<OrderType> order;
	private List<ColumnType> columns;
        @DateTimeFormat(pattern = "yyyy-mm-dd HH:mm:ss" , iso = DateTimeFormat.ISO.DATE_TIME) 
        //@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", timezone="GMT")
	private LocalDateTime startDate;
        @DateTimeFormat(pattern = "yyyy-mm-dd HH:mm:ss", iso = DateTimeFormat.ISO.DATE_TIME) 
        //@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", timezone="GMT")
	private LocalDateTime endDate;
        public String getSortCol() {
		OrderType orderType = this.order.get(0);
		return columns.get(orderType.getColumn()).getData();
	}
	
	public String getSortDir() {
		OrderType orderType = this.order.get(0);
		return orderType.getDir();
	}
        
}