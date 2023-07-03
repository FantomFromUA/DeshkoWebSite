package com.deshko.deshko.company.RestControllers;

import com.deshko.deshko.company.DTO.ContactEmailDTO;
import com.deshko.deshko.company.Service.CustomerService;
import com.deshko.deshko.company.Service.EmailService;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/email")
@CrossOrigin(origins = "http://localhost:3000/")
public class EmailRestController {
    EmailService contactEmailService;
    CustomerService customerService;

    @Autowired
    public EmailRestController(EmailService contactEmailService, CustomerService customerService) {
        this.contactEmailService = contactEmailService;
        this.customerService = customerService;
    }

    @PostMapping("/contact")
    public void postCustomer(@RequestBody ContactEmailDTO contactEmailDTO){
        contactEmailService.sendContactEmail(contactEmailDTO);
    }

    @GetMapping("/verification")
    public ResponseEntity verifyCustomer(@RequestParam("id") String id){
        customerService.verifyCustomer(id);

        return ResponseEntity.ok("Ви можете закрити цю сторінку");
    }
}
