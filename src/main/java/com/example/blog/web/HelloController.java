package com.example.blog.web;

import com.example.blog.domain.product.Product;
import com.example.blog.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class HelloController {

    @Autowired
    ProductRepository productRepository;

    @GetMapping("/page/product/list")
    public String test(){
       Long id= 10L;

        List<Product> result = productRepository.findAll();

        System.out.println("==============================");

        if(result.size() > 0){
            System.out.println(result);
            return "8979879";
        }
        else{
            return "rhihi";
        }
    }

}
