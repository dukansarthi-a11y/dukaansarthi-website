package com.dukaansarthi.cozysweets.repository;

import com.dukaansarthi.cozysweets.model.Enquiry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CozyEnquiryRepository extends JpaRepository<Enquiry, Long> {
}
