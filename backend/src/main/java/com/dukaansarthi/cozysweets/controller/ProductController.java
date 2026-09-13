package com.dukaansarthi.cozysweets.controller;

import com.dukaansarthi.cozysweets.model.Product;
import com.dukaansarthi.cozysweets.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/cozysweets")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    // Public endpoint to get all products
    @GetMapping("/public/products")
    public List<Product> getAllProducts() {
        return productRepository.findAll(org.springframework.data.domain.Sort.by(org.springframework.data.domain.Sort.Direction.ASC, "id"));
    }

    // Public endpoint to get products by category
    @GetMapping("/public/products/category/{category}")
    public List<Product> getProductsByCategory(@PathVariable String category) {
        return productRepository.findByCategory(category);
    }

    // Admin endpoint to update product price
    @PutMapping("/admin/products/{id}/price")
    public ResponseEntity<Product> updatePrice(@PathVariable Long id, @RequestParam Double price) {
        Optional<Product> optionalProduct = productRepository.findById(id);
        if (optionalProduct.isPresent()) {
            Product product = optionalProduct.get();
            product.setPrice(price);
            return ResponseEntity.ok(productRepository.save(product));
        }
        return ResponseEntity.notFound().build();
    }
}
