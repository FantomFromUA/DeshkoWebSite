package com.deshko.deshko.company.Entity;

import com.deshko.deshko.company.Entity.Enums.ParcelStatus;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "parcels")
public class Parcel {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "parcel_id")
    private String id;

    @Column(name = "number")
    private String number;

    @ManyToOne
    @JoinColumn(name = "customer", referencedColumnName = "customer_id")
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "dispatcher", referencedColumnName = "customer_id")
    private Customer dispatcher;

    @ManyToOne
    @JoinColumn(name = "address", referencedColumnName = "department_id")
    private Department department;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false, columnDefinition = "ENUM('обробляється','в дорозі','отримано','відміна') DEFAULT 'обробляється'")
    private ParcelStatus status;

    @Column(name = "date_of_shipment")
    private LocalDateTime dateOfShipment;

    @Column(name = "date_of_receiving")
    private LocalDateTime dateOfReceiving;

}
