package com.deshko.deshko.company.RestControllers;

import com.deshko.deshko.company.DTO.CustomerSingIn;
import com.deshko.deshko.company.Entity.Customer;
import com.deshko.deshko.company.Mapper.CustomerMapper;
import com.deshko.deshko.company.Service.CustomerService;
import com.deshko.deshko.company.Service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/api/customer")
@CrossOrigin(origins = "http://localhost:3000/")
public class CustomerRestController {

    private CustomerService customerService;
    private EmailService emailService;

    @Autowired
    public CustomerRestController(CustomerService customerService, EmailService emailService) {
        this.customerService = customerService;
        this.emailService = emailService;
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

        emailService.verificationEmail(newCustomer.getEmail(), newCustomer.getId());

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

    @GetMapping("/registration/ifExist")
    public ResponseEntity checkIfCustomerExist(@RequestHeader String email,
                                               @RequestHeader String phone,
                                               @RequestHeader String login){
        if(customerService.findByEmail(email).isPresent()){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body('1');
        }

        if(customerService.findByLogin(login).isPresent()){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body('1');
        }

        if (customerService.findByPhone(phone).isPresent()){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body('1');
        }

        return ResponseEntity.status(HttpStatus.ACCEPTED).body('1');
    }
}
