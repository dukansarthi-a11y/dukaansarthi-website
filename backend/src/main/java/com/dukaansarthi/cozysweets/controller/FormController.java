package com.dukaansarthi.cozysweets.controller;

import com.dukaansarthi.cozysweets.model.BulkOrder;
import com.dukaansarthi.cozysweets.model.Enquiry;
import com.dukaansarthi.cozysweets.repository.BulkOrderRepository;
import com.dukaansarthi.cozysweets.repository.CozyEnquiryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cozysweets")
public class FormController {

    @Autowired
    private CozyEnquiryRepository CozyEnquiryRepository;

    @Autowired
    private BulkOrderRepository bulkOrderRepository;

    // Public endpoint to submit notify me enquiry
    @PostMapping("/public/enquiry")
    public ResponseEntity<Enquiry> submitEnquiry(@RequestBody Enquiry enquiry) {
        Enquiry saved = CozyEnquiryRepository.save(enquiry);
        // Note: Email integration can be wired up here using DukaanSarthi's EmailService
        return ResponseEntity.ok(saved);
    }

    // Public endpoint to submit bulk order request
    @PostMapping("/public/bulk-order")
    public ResponseEntity<BulkOrder> submitBulkOrder(@RequestBody BulkOrder bulkOrder) {
        BulkOrder saved = bulkOrderRepository.save(bulkOrder);
        // Note: Email integration can be wired up here using DukaanSarthi's EmailService
        return ResponseEntity.ok(saved);
    }

    // Admin endpoint to get all enquiries
    @GetMapping("/admin/enquiries")
    public List<Enquiry> getEnquiries() {
        return CozyEnquiryRepository.findAll();
    }

    // Admin endpoint to get all bulk orders
    @GetMapping("/admin/bulk-orders")
    public List<BulkOrder> getBulkOrders() {
        return bulkOrderRepository.findAll();
    }
}
