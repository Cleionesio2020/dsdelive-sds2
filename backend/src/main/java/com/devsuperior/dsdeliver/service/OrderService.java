package com.devsuperior.dsdeliver.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsdeliver.dto.OrderDTO;
import com.devsuperior.dsdeliver.entities.Order;
import com.devsuperior.dsdeliver.repositories.OrderRepository;



@Service
public class OrderService {
	
	@Autowired
	OrderRepository orderRepository;
	
	@Transactional(readOnly = true)
	public List<OrderDTO> findAll() {
		List <Order> lista = orderRepository.findAllOrderWithProduct();
		return lista.stream().map( x-> new OrderDTO(x)).collect(Collectors.toList());
	}

}
