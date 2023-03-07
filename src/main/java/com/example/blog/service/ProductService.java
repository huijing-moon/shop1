package com.example.blog.service;

import com.example.blog.DTO.product.ProductCreateRequestDto;
import com.example.blog.DTO.product.ProductCreateResponseDto;
import com.example.blog.domain.product.Product;
import com.example.blog.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    @Transactional
    public Long save(final ProductCreateRequestDto params){

        Product entity = productRepository.save(params.toEntity());
        return entity.getProductId();
    }

    public List<ProductCreateResponseDto> findAll(){
        Sort sort = Sort.by(Sort.Direction.DESC,"productId", "created");
        List<Product> list = productRepository.findAll(sort);
        return list.stream().map(ProductCreateResponseDto::new).collect(Collectors.toList());
    }

    @Transactional
    public Long update(final Long productId, final ProductCreateRequestDto params){
        Product entity = productRepository.findById(productId).orElseThrow(() -> new RuntimeException());
        entity.update(params.getProductNm(), params.getPrice(), params.getCategory(), params.getDescription());
        return productId;
    }

    @Transactional
    public ProductCreateResponseDto findId(final Long productId){
        Optional<Product> entity = productRepository.findById(productId);
        Product product = entity.get();

        ProductCreateResponseDto PDto = new ProductCreateResponseDto(product);
        return PDto;
    }


}
