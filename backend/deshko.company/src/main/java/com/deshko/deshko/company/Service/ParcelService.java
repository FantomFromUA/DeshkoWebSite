package com.deshko.deshko.company.Service;

import com.deshko.deshko.company.Repositories.ParcelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ParcelService {

    private ParcelRepository parcelRepository;

    @Autowired
    public ParcelService(ParcelRepository parcelRepository) {
        this.parcelRepository = parcelRepository;
    }
}
