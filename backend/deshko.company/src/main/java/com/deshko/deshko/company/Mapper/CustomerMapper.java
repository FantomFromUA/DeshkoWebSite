package com.deshko.deshko.company.Mapper;

import com.deshko.deshko.company.DTO.CustomerDTO;
import com.deshko.deshko.company.Entity.Customer;

public class CustomerMapper {
    public static CustomerDTO entityToDTO(Customer customer){
        CustomerDTO customerDTO = CustomerDTO
                .builder()
                .id(customer.getId())
                .name(customer.getName())
                .email(customer.getEmail())
                .login(customer.getLogin())
                .phoneNumber(customer.getPhone())
                .build();

        return customerDTO;
    }
}
