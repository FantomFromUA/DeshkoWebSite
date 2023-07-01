package com.deshko.deshko.company.Service;

import com.deshko.deshko.company.Calculator.ParcelPriceCalculator;
import com.deshko.deshko.company.Entity.Parcel;
import com.deshko.deshko.company.Repositories.ParcelRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ParcelService {

    private ParcelRepository parcelRepository;
    private ParcelPriceCalculator parcelPriceCalculator;

    @Autowired
    public ParcelService(ParcelRepository parcelRepository, ParcelPriceCalculator parcelPriceCalculator) {
        this.parcelRepository = parcelRepository;
        this.parcelPriceCalculator = parcelPriceCalculator;
    }

    public Parcel getParcelById(String id) {
        Optional<Parcel> parcel = parcelRepository.findById(id);

        return parcel.orElseGet(null);
    }

    public List<Parcel> getParcelByCustomerId(String id) {
        List<Parcel> parcels = parcelRepository.findParcelsByCustomerOrDispatcherId(id);
        return parcels;
    }

    public Parcel putParcel(Parcel parcel) {
        Parcel newParcel = parcelRepository.save(parcel);

        return newParcel;
    }

    public Parcel getParcelByNumber(String id) {
        Parcel parcel = parcelRepository.findByNumber(id);

        return parcel;
    }

    public Double calculatePrice(Double distance, String type, Double weight, Double side, Double itemPrice){
        return parcelPriceCalculator.calculateParcelPrice(distance, type, weight, side, itemPrice);
    }

}
