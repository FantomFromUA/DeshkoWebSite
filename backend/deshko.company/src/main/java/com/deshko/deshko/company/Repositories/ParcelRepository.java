package com.deshko.deshko.company.Repositories;

import com.deshko.deshko.company.Entity.Parcel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface ParcelRepository extends JpaRepository<Parcel, String> {

    List<Parcel> findByCustomerId(String customerId);

}
