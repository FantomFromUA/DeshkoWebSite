package com.deshko.deshko.company.Calculator;

import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Component;

import java.io.*;
import java.util.LinkedHashMap;
import java.util.Map;

@Component
public class ParcelPriceCalculator {
    Map<Double, Integer[]> weightPrices;
    Map<String, Double> typeIndex;

    @PostConstruct
    private void getPrices(){
        weightPrices = new LinkedHashMap<>();
        try(FileReader fileReader = new FileReader("weight-prices.txt");
            BufferedReader reader = new BufferedReader(fileReader)){
            while (reader.ready()){
                String[] values = reader.readLine().split(" ");
                Integer[] pr = {Integer.parseInt(values[1]), Integer.parseInt(values[2])} ;
                weightPrices.put(Double.parseDouble(values[0]), pr);
            }
        }  catch (IOException e) {
            throw new RuntimeException(e);
        }

        typeIndex = new LinkedHashMap<>();
        try(FileReader fileReader = new FileReader("type-prices-idex.txt");
            BufferedReader reader = new BufferedReader(fileReader)){
            while (reader.ready()){
                String[] values = reader.readLine().split(" ");
                typeIndex.put(values[0], Double.parseDouble(values[1]));
            }
        }  catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public Double calculateParcelPrice(Double distance, String type, Double weight, Double side, Double itemPrice){
        Double res = distance / 10;
        for(Double key : weightPrices.keySet()){
            if(weight <= key){
                res += weightPrices.get(key)[0];
                break;
            }
        }

        res += (itemPrice / 100);
        res *= typeIndex.get(type);
        return (double)Math.round(res * 100d) / 100d;
    }
}
