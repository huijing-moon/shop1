package com.example.blog.web;

import com.example.blog.DTO.product.ProductCreateRequestDto;
import com.example.blog.DTO.product.ProductCreateResponseDto;
import com.example.blog.domain.product.Product;
import com.example.blog.repository.ProductRepository;
import com.example.blog.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class HelloController {

    private final ProductService productService;


    @GetMapping("/page/product/list")
    public List<ProductCreateResponseDto> test( ){

       return productService.findAll();
    }

    @GetMapping("/page/product/view")
    public String view(){
        return null;
    }

    @PostMapping("/page/product/save")
    public Long save(@RequestBody final ProductCreateRequestDto params){

        return productService.save(params);
    }

}
