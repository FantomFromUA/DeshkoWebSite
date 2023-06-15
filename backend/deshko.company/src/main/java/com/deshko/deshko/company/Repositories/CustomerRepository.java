package com.deshko.deshko.company.Repositories;

import com.deshko.deshko.company.Entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, String> {

    Optional<Customer> findByLoginAndPassword(String login, String password);

}
