package com.example.blog.DTO.product;

import com.example.blog.domain.product.Product;
import lombok.Getter;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Getter
public class ProductCreateResponseDto {

    /**
     * 응답(Response)도 마찬가지로 Entity 클래스가 사용되어서는 안 되기 때문에 클래스를 분리해야 함.
     * 응답(Response) 객체 생성은 필수적으로 Entity 클래스를 필요로 함.
     */

        private Long productId;
        private String category;
        private String description;
        private Integer price;
        private String productNm;
        private LocalDateTime created;
        private LocalDateTime modified;


        public ProductCreateResponseDto(Product entity){
            this.productId = entity.getProductId();
            this.category = entity.getCategory();
            this.description = entity.getDescription();
            this.price = entity.getPrice();
            this.productNm = entity.getProductNm();
            this.created = entity.getCreated();
            this.modified = entity.getModified();
        }

}
