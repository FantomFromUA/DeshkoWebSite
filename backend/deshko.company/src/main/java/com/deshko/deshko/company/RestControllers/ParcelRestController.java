package com.deshko.deshko.company.RestControllers;

import com.deshko.deshko.company.Entity.Enums.ParcelStatus;
import com.deshko.deshko.company.Entity.Parcel;
import com.deshko.deshko.company.Repositories.ParcelRepository;
import com.deshko.deshko.company.Service.ParcelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/api/parcel")
@CrossOrigin(origins = "http://localhost:3000/")
public class ParcelRestController {

    private ParcelService parcelService;

    @Autowired
    public ParcelRestController(ParcelService parcelService) {
        this.parcelService = parcelService;
    }

    @GetMapping("/{id}")
    public ResponseEntity getParcelById(@PathVariable(name = "id") String id){
        Parcel parcel = parcelService.getParcelById(id);

        if(parcel == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No such parcel");
        }

        return ResponseEntity.status(HttpStatus.OK).body(parcel);
    }

    @GetMapping("/customer/{id}")
    public ResponseEntity getParcelsByCustomerId(@PathVariable(name = "id") String id){
        List<Parcel> parcels = parcelService.getParcelByCustomerId(id);
        return ResponseEntity.status(HttpStatus.OK).body(parcels);
    }

    @PutMapping
    public ResponseEntity putParcel(@RequestBody Parcel parcel){
        if(parcel.getId() == null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("You can`t update parcel without its id");
        }

        Parcel newParcel = parcelService.putParcel(parcel);

        return ResponseEntity.status(HttpStatus.OK).body(newParcel);
    }
}
