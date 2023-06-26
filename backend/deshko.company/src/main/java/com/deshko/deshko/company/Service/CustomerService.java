package com.deshko.deshko.company.Service;

import com.deshko.deshko.company.Entity.Customer;
import com.deshko.deshko.company.Repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CustomerService {

    private CustomerRepository customerRepository;

    @Autowired
    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }


    public Customer getCustomerById(String id) {
        Optional<Customer> customer = customerRepository.findById(id);

        if(customer.isPresent()){
            return customer.get();
        }

        return null;
    }

    public Customer postCustomer(Customer customer) {
        Customer newCustomer = customerRepository.save(customer);

        return customer;
    }

    public Customer singIn(String login, String password) {

        Optional<Customer> customer = customerRepository.findByLoginAndPassword(login, password);

        if(customer.isEmpty()){
            customer = customerRepository.findByEmailAndPassword(login, password);
        }

        return customer.orElse(null);

    }

    public Optional<Customer> findByEmail(String email){
        return customerRepository.findByEmail(email);
    }

    public Optional<Customer> findByPhone(String phone){
        return customerRepository.findByPhone(phone);
    }

    public  Optional<Customer> findByLogin(String login){
        return customerRepository.findByLogin(login);
    }

    public void verifyCustomer(String id){
        Customer customer = customerRepository.findById(id).get();
        customer.setEnabled(true);
        customerRepository.save(customer);
    }
}
