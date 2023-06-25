package com.deshko.deshko.company.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ContactEmailDTO {
    private String name;
    private String phone;
    private String email;
    private String description;
}
