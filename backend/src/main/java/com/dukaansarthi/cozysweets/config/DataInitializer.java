package com.dukaansarthi.cozysweets.config;

import com.dukaansarthi.cozysweets.repository.ProductRepository;
import com.dukaansarthi.cozysweets.repository.AdminUserRepository;
import com.dukaansarthi.cozysweets.model.AdminUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.io.ClassPathResource;
import org.springframework.jdbc.datasource.init.ScriptUtils;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.sql.Connection;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private DataSource dataSource;

    @Autowired
    private AdminUserRepository adminUserRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        if (adminUserRepository.findByUsername("admin").isEmpty()) {
            System.out.println("Creating default CozySweets admin user...");
            AdminUser defaultAdmin = new AdminUser();
            defaultAdmin.setUsername("admin");
            defaultAdmin.setPassword(passwordEncoder.encode("admin123"));
            adminUserRepository.save(defaultAdmin);
        }
        
        if (productRepository.count() == 0) {
            System.out.println("CozySweets Product table is empty. Initializing data from Excel SQL...");
            try (Connection connection = dataSource.getConnection()) {
                ScriptUtils.executeSqlScript(connection, new ClassPathResource("cozysweets_data.sql"));
            }
            System.out.println("CozySweets Data population complete.");
        } else {
            System.out.println("CozySweets Products already exist in the database. Skipping initialization.");
        }
    }
}
