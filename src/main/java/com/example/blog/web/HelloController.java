package com.example.blog.web;

import com.example.blog.DTO.product.ProductCreateRequestDto;
import com.example.blog.DTO.product.ProductCreateResponseDto;
import com.example.blog.domain.product.Product;
import com.example.blog.repository.ProductRepository;
import com.example.blog.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@RestController
public class HelloController {

    private final ProductService productService;
    private final ProductRepository productRepository;


    @GetMapping("/page/product/list")
    public List<ProductCreateResponseDto> test( ){

       return productService.findAll();
    }

    @GetMapping("/page/product/view")
    public String view(){
        return null;
    }

    @GetMapping("/page/product/view/selectOne")
    public Product selectItem(@RequestParam Long productId){
        Optional<Product> product = productRepository.findById(productId);
        return product.get();
    }

    @PostMapping("/page/product/save")
    public Long save(@RequestBody final ProductCreateRequestDto params){

        return productService.save(params);
    }

}
