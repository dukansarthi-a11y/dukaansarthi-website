package com.dukaansarthi.cozysweets.repository;

import com.dukaansarthi.cozysweets.model.BulkOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BulkOrderRepository extends JpaRepository<BulkOrder, Long> {
}
