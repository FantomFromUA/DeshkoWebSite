package com.deshko.deshko.company.RestControllers;

import com.deshko.deshko.company.DTO.CustomerDTO;
import com.deshko.deshko.company.DTO.CustomerSingIn;
import com.deshko.deshko.company.Entity.Customer;
import com.deshko.deshko.company.Mapper.CustomerMapper;
import com.deshko.deshko.company.Service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@Controller
@RequestMapping("/api/customer")
@CrossOrigin(origins = "http://localhost:3000/")
public class CustomerRestController {

    private CustomerService customerService;

    @Autowired
    public CustomerRestController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @GetMapping("/{id}")
    public ResponseEntity getCustomerById(@PathVariable(name = "id") String id){
        Customer customer = customerService.getCustomerById(id);

        if(customer == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No such customer");
        }

        return ResponseEntity.status(HttpStatus.OK).body(CustomerMapper.entityToDTO(customer));
    }

    @PostMapping
    public ResponseEntity postCustomer(@RequestBody Customer customer){
        Customer newCustomer = customerService.postCustomer(customer);

        return ResponseEntity.status(HttpStatus.OK).body(CustomerMapper.entityToDTO(customer));
    }

    @PutMapping
    public ResponseEntity putCustomer(@RequestBody Customer customer){
        if(customer.getId() == null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("You can`t update customer without its id");
        }

        Customer newCustomer = customerService.postCustomer(customer);

        return ResponseEntity.status(HttpStatus.OK).body(CustomerMapper.entityToDTO(customer));
    }

    @GetMapping("/singin")
    public ResponseEntity signIn(@RequestBody CustomerSingIn customerSingIn){
        Customer customer = customerService.singIn(customerSingIn);

        if(customer == null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Something went wrong");
        }

        return ResponseEntity.status(HttpStatus.OK).body(CustomerMapper.entityToDTO(customer));
    }
}
