package com.deshko.deshko.company.Repositories;

import com.deshko.deshko.company.Entity.Parcel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface ParcelRepository extends JpaRepository<Parcel, String> {

    @Query("SELECT p FROM Parcel p WHERE p.customer.id = :id OR p.dispatcher.id = :id")
    List<Parcel> findParcelsByCustomerOrDispatcherId(String id);
    Parcel findByNumber(String number);

}
