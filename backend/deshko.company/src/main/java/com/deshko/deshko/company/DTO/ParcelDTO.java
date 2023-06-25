package com.deshko.deshko.company.DTO;

import com.deshko.deshko.company.Entity.Department;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ParcelDTO {
    private CustomerDTO customer;

    private String number;
    private String dispatcher;
    private Department department;
    private  String status;
    private LocalDateTime dateOfShipment;
    private LocalDateTime dateOfReceiving;
}
