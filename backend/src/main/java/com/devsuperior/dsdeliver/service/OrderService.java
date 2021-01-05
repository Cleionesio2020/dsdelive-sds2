package com.devsuperior.dsdeliver.service;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsdeliver.dto.OrderDTO;
import com.devsuperior.dsdeliver.dto.ProductDTO;
import com.devsuperior.dsdeliver.entities.Order;
import com.devsuperior.dsdeliver.entities.OrderStatus;
import com.devsuperior.dsdeliver.entities.Product;
import com.devsuperior.dsdeliver.repositories.OrderRepository;
import com.devsuperior.dsdeliver.repositories.ProductRepository;

@Service
public class OrderService {

	@Autowired
	OrderRepository orderRepository;

	@Autowired
	ProductRepository prodRepository;

	@Transactional(readOnly = true)
	public List<OrderDTO> findAll() {
		List<Order> lista = orderRepository.findAllOrderWithProduct();
		return lista.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
	}

	@Transactional
	public OrderDTO insert(OrderDTO objDTO) {
		Order order = new Order(null, objDTO.getAddress(), objDTO.getLatitude(), objDTO.getLongitude(), Instant.now(),
				OrderStatus.PENDING);

		for (ProductDTO p : objDTO.getProducts()) {
			Product prod = prodRepository.getOne(p.getId());
			order.getProducts().add(prod);
		}
		order = orderRepository.save(order);
		return new OrderDTO(order);
	}

	@Transactional
	public OrderDTO setDelivery(Long id) {
	    Order order = 	orderRepository.getOne(id);
		order.setStatus(OrderStatus.DELIVERED);
		order = orderRepository.save(order);
		return new OrderDTO(order);
		

	}

}
