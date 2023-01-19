package com.example.blog.DTO;

import com.example.blog.domain.product.Product;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ProductCreateRequestDto {

    private Product product;

    @Builder
    public ProductCreateRequestDto(Product product){
        this.product = product;
    }

    public Product toEntity(){
        return Product.builder().build();
    }
}
