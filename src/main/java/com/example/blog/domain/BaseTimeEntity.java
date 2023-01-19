package com.example.blog.domain;


import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

@Getter
@MappedSuperclass  //jpa entity 클래스들이 BaseTimeEntity를 상속할 경우 이 클래스의 필드들로 칼럼으로 인식하도록 설정
@EntityListeners(AuditingEntityListener.class)
public class BaseTimeEntity {


    //등록시간
    @CreatedDate
    private LocalDateTime created;

    //수정시간
    @LastModifiedDate
    private LocalDateTime modified;
}
