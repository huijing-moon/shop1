package com.example.blog.domain.product;

import com.example.blog.domain.BaseTimeEntity;
import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="PRODUCT")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class Product extends BaseTimeEntity {

    //기본키 매핑
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="PRODUCT_ID")
    private Long productId;

    @NonNull
    @Column(name="productNm")
    private String productNm;

    @Column(name = "price")
    private Integer price;

    @Column(name="category")
    private String category;


    @Column(name="description")
    private String description;

    public void update(String productNm, int price,String category, String description){
        this.description = description;
        this.productNm = productNm;
        this.price = price;
        this.category = category;
    }

}
