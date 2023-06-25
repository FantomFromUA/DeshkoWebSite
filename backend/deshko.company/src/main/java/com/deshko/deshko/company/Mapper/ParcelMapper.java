package com.deshko.deshko.company.Mapper;

import com.deshko.deshko.company.DTO.CustomerDTO;
import com.deshko.deshko.company.DTO.ParcelDTO;
import com.deshko.deshko.company.Entity.Parcel;

public class ParcelMapper {
    public static ParcelDTO entityToDTO(Parcel parcel){
        ParcelDTO parcelDTO = ParcelDTO.builder()
                .number(parcel.getNumber())
                .customer(CustomerMapper.entityToDTO(parcel.getCustomer()))
                .dispatcher(parcel.getDispatcher())
                .department(parcel.getDepartment())
                .status(parcel.getStatus().toString())
                .dateOfShipment(parcel.getDateOfShipment())
                .dateOfReceiving(parcel.getDateOfReceiving())
                .build();
        return parcelDTO;
    }
}
