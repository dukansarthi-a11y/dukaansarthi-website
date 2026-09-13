package com.dukaansarthi.cozysweets.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import java.time.LocalDateTime;

@Entity(name = "CozyEnquiry")
@Table(name = "cozysweets_enquiry")
@Data
public class Enquiry {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String customerEmail;
    private String customerPhone;
    private Long productId;
    private String productName;
    private LocalDateTime createdAt = LocalDateTime.now();
}
