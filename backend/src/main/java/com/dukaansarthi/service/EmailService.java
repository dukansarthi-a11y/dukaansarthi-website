package com.dukaansarthi.service;

import com.dukaansarthi.model.Enquiry;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired(required = false)
    private JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String smtpUser;

    @Value("${dukaansarthi.receiver-email}")
    private String receiverEmail;

    // Use asynchronous method call so API response is not blocked by email network latency
    @Async
    public void sendEnquiryEmail(Enquiry enquiry) {
        // Guard clause for unconfigured/placeholder emails
        if (mailSender == null || smtpUser == null || smtpUser.contains("your_email@") || smtpUser.trim().isEmpty()) {
            System.out.println("ℹ️ Spring Boot Mail Sender is not configured yet. Email dispatch skipped.");
            return;
        }

        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            String subject = "🔔 New Onboarding Booking: " + enquiry.getName() + 
                             " (" + (enquiry.getBusinessName() != null ? enquiry.getBusinessName() : "No shop name") + ")";
            
            String htmlContent = "<html><body>" +
                    "<div style=\"font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; padding: 24px;\">" +
                    "  <h2 style=\"color: #00B5A5; border-bottom: 2px solid #00B5A5; padding-bottom: 12px; margin-top: 0;\">New Demo Enquiry Received</h2>" +
                    "  <p>A merchant has requested a free onboarding demo call for DukaanSarthi.</p>" +
                    "  " +
                    "  <table style=\"width: 100%; border-collapse: collapse; margin: 20px 0;\">" +
                    "    <tr>" +
                    "      <td style=\"padding: 8px 0; font-weight: bold; border-bottom: 1px solid #edf2f7; width: 40%;\">Inquiry ID:</td>" +
                    "      <td style=\"padding: 8px 0; border-bottom: 1px solid #edf2f7;\">#" + enquiry.getId() + "</td>" +
                    "    </tr>" +
                    "    <tr>" +
                    "      <td style=\"padding: 8px 0; font-weight: bold; border-bottom: 1px solid #edf2f7;\">Customer Name:</td>" +
                    "      <td style=\"padding: 8px 0; border-bottom: 1px solid #edf2f7;\">" + enquiry.getName() + "</td>" +
                    "    </tr>" +
                    "    <tr>" +
                    "      <td style=\"padding: 8px 0; font-weight: bold; border-bottom: 1px solid #edf2f7;\">Phone Number:</td>" +
                    "      <td style=\"padding: 8px 0; border-bottom: 1px solid #edf2f7;\"><a href=\"tel:+91" + enquiry.getPhone() + "\">+91 " + enquiry.getPhone() + "</a></td>" +
                    "    </tr>" +
                    "    <tr>" +
                    "      <td style=\"padding: 8px 0; font-weight: bold; border-bottom: 1px solid #edf2f7;\">Shop Name:</td>" +
                    "      <td style=\"padding: 8px 0; border-bottom: 1px solid #edf2f7;\">" + (enquiry.getBusinessName() != null ? enquiry.getBusinessName() : "<em>Not provided</em>") + "</td>" +
                    "    </tr>" +
                    "    <tr>" +
                    "      <td style=\"padding: 8px 0; font-weight: bold; border-bottom: 1px solid #edf2f7;\">Business Category:</td>" +
                    "      <td style=\"padding: 8px 0; border-bottom: 1px solid #edf2f7; text-transform: capitalize;\">" + enquiry.getBusinessType() + "</td>" +
                    "    </tr>" +
                    "    <tr>" +
                    "      <td style=\"padding: 8px 0; font-weight: bold; border-bottom: 1px solid #edf2f7;\">Booking Time:</td>" +
                    "      <td style=\"padding: 8px 0; border-bottom: 1px solid #edf2f7;\">" + enquiry.getCreatedAt() + "</td>" +
                    "    </tr>" +
                    "  </table>" +
                    "  " +
                    "  <div style=\"margin-top: 24px; text-align: center;\">" +
                    "    <a href=\"https://wa.me/91" + enquiry.getPhone() + "\" style=\"background-color: #22c55e; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold; display: inline-block;\">" +
                    "      Contact via WhatsApp" +
                    "    </a>" +
                    "  </div>" +
                    "</div>" +
                    "</body></html>";

            helper.setFrom(smtpUser);
            helper.setTo(receiverEmail);
            helper.setSubject(subject);
            helper.setText(htmlContent, true);

            mailSender.send(message);
            System.out.println("✉️ Spring Boot Email alert sent successfully for customer: " + enquiry.getName());
        } catch (Exception ex) {
            System.err.println("⚠️ Spring Boot Email Warning: " + ex.getMessage());
        }
    }
}
