package com.deshko.deshko.company.Repositories;

import com.deshko.deshko.company.Entity.Parcel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ParcelRepository extends JpaRepository<Parcel, UUID> {
}
