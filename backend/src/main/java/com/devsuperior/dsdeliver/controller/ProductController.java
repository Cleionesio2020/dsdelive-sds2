package com.devsuperior.dsdeliver.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsdeliver.dto.ProductDTO;
import com.devsuperior.dsdeliver.service.ProductService;

@RestController
@RequestMapping(value="/product")
public class ProductController {
	
	@Autowired
	ProductService prodService;
	
	@GetMapping
	public ResponseEntity<List <ProductDTO>> findAll(){
		List<ProductDTO> lista = prodService.findAll();
		return ResponseEntity.ok().body(lista);
	}

}
