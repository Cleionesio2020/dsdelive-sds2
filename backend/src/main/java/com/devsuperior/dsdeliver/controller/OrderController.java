package com.devsuperior.dsdeliver.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsdeliver.dto.OrderDTO;
import com.devsuperior.dsdeliver.dto.ProductDTO;
import com.devsuperior.dsdeliver.service.OrderService;
import com.devsuperior.dsdeliver.service.ProductService;

@RestController
@RequestMapping(value="/orders")
public class OrderController {
	
	@Autowired
	OrderService orderService;
	
	@GetMapping
	public ResponseEntity<List <OrderDTO>> findAll(){
		List<OrderDTO> lista = orderService.findAll();
		return ResponseEntity.ok().body(lista);
	}
	
	

}
