package com.example.blog.DTO.product;

import com.example.blog.domain.BaseTimeEntity;
import com.example.blog.domain.product.Product;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ProductCreateRequestDto {
   private String category;

   private String description;

   private Integer price;

   private String productNm;


    public Product toEntity(){
        return Product.builder()
                .category(category)
                .description(description)
                .price(price)
                .productNm(productNm)
                .build();
    }
}
