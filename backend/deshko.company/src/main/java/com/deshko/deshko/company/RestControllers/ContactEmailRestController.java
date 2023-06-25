package com.deshko.deshko.company.RestControllers;

import com.deshko.deshko.company.DTO.ContactEmailDTO;
import com.deshko.deshko.company.Entity.Customer;
import com.deshko.deshko.company.Mapper.CustomerMapper;
import com.deshko.deshko.company.Service.ContactEmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/email/contact")
@CrossOrigin(origins = "http://localhost:3000/")
public class ContactEmailRestController {
    ContactEmailService contactEmailService;

    @Autowired
    public ContactEmailRestController(ContactEmailService contactEmailService) {
        this.contactEmailService = contactEmailService;
    }

    @PostMapping
    public void postCustomer(@RequestBody ContactEmailDTO contactEmailDTO){
        contactEmailService.sendContactEmail(contactEmailDTO);
    }
}
