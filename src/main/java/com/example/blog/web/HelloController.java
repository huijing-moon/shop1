package com.example.blog.web;

import com.example.blog.domain.product.Product;
import com.example.blog.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
public class HelloController {

    @Autowired
    ProductRepository productRepository;

    @GetMapping("/page/product/list")
    public List<Product> test( ){

       return productRepository.findAll();
    }

}
