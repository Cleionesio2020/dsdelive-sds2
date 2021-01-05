package com.devsuperior.dsdeliver.service;

import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsdeliver.dto.ProductDTO;
import com.devsuperior.dsdeliver.entities.Product;
import com.devsuperior.dsdeliver.repositories.ProductRepository;



@Service
public class ProductService {
	
	@Autowired
	ProductRepository prodRepository;
	
	@Transactional(readOnly = true)
	public List<ProductDTO> findAll() {
		List <Product> lista = prodRepository.findAllByOrderByNameAsc();
		return lista.stream().map( x-> new ProductDTO(x)).collect(Collectors.toList());
	}

}