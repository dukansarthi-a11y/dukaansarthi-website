package com.dukaansarthi.controller;

import com.dukaansarthi.model.Enquiry;
import com.dukaansarthi.repository.EnquiryRepository;
import com.dukaansarthi.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class EnquiryController {

    @Autowired
    private EnquiryRepository enquiryRepository;

    @Autowired
    private EmailService emailService;

    @PostMapping("/enquiry")
    public ResponseEntity<Map<String, Object>> saveEnquiry(@RequestBody Enquiry enquiry) {
        Map<String, Object> response = new HashMap<>();

        // 1. Inputs validation check
        if (enquiry.getName() == null || enquiry.getName().trim().isEmpty() ||
            enquiry.getPhone() == null || enquiry.getPhone().trim().isEmpty()) {
            
            response.put("success", false);
            response.put("message", "Required fields missing. Please provide Name and Phone.");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }

        // Clean and validate Indian phone numbers
        String cleanPhone = enquiry.getPhone().replaceAll("\\D", "");
        if (cleanPhone.length() != 10) {
            response.put("success", false);
            response.put("message", "Invalid phone number. Please enter a valid 10-digit mobile number.");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }
        enquiry.setPhone(cleanPhone);

        try {
            // 2. Write details into PostgreSQL
            Enquiry saved = enquiryRepository.save(enquiry);
            
            System.out.println("✅ Spring Boot: Saved enquiry ID " + saved.getId() + " for customer " + saved.getName());

            // 3. Send email asynchronously
            emailService.sendEnquiryEmail(saved);

            // 4. Respond with JSON matching frontend
            response.put("success", true);
            response.put("message", "Enquiry submitted successfully and saved in database.");
            
            Map<String, Object> dataMap = new HashMap<>();
            dataMap.put("id", saved.getId());
            dataMap.put("name", saved.getName());
            dataMap.put("phone", saved.getPhone());
            response.put("data", dataMap);

            return ResponseEntity.status(HttpStatus.CREATED).body(response);

        } catch (Exception ex) {
            System.err.println("❌ Spring Boot Database Save Error: " + ex.getMessage());
            
            response.put("success", false);
            response.put("message", "Database insertion failed. Error: " + ex.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
}
