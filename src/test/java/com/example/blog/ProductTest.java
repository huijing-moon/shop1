package com.example.blog;

import com.example.blog.domain.product.Product;
import com.example.blog.repository.ProductRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.swing.text.html.Option;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@SpringBootTest
public class ProductTest {

    @Autowired
    ProductRepository productRepository;

    @Test
    public void InsertDummies(){

        IntStream.rangeClosed(11,20).forEach( i -> {
            Product product = Product.builder()
                    .productNm("Sample..." +i)
                    .price(1+i)
                    .build();

            productRepository.save(product);
        });
    }


    @Test
    public void productTest(){
        Optional<Product> product1 = productRepository.findById(1L);
        Product product = product1.get();
        System.out.println(product);
    }


}
