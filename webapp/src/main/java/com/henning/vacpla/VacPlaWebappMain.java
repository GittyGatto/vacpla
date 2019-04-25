
package com.henning.vacpla;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@SpringBootApplication(scanBasePackages = "com.henning")
@Configuration
@PropertySource(value = {"classpath:application.properties", "classpath:application.${env}.properties"})
@EnableScheduling
@EnableJpaRepositories
@EnableTransactionManagement
@EnableWebMvc
public class VacPlaWebappMain {
    public static void main(String[] args) {

        SpringApplication.run(VacPlaWebappMain.class, args);

        System.err.println("back again");
    }
}