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
    Map<Double, Double[]> sidePrices;

    @PostConstruct
    private void getPrices(){
        setWeightPrices();
        setTypeIndexPrices();
        setSidePrices();
    }

    private void setWeightPrices(){
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
    }

    private void setTypeIndexPrices(){
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

    private void setSidePrices(){
        sidePrices = new LinkedHashMap<>();
        try(FileReader fileReader = new FileReader("side-prices.txt");
            BufferedReader reader = new BufferedReader(fileReader)){
            while (reader.ready()){
                String[] values = reader.readLine().split(" ");
                Double[] pr = {Double.parseDouble(values[1]), Double.parseDouble(values[2])} ;
                sidePrices.put(Double.parseDouble(values[0]), pr);
            }
        }  catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public Double calculateParcelPrice(Double distance, String type, Double weight, Double side, Double itemPrice, Boolean abroad){
        int abr = abroad? 1: 0;
        Double res = distance / 50;
        for(Double key : weightPrices.keySet()){
            if(weight <= key){
                res += weightPrices.get(key)[abr];
                break;
            }
        }

        if(weight > 30) res += weightPrices.get(30.0)[abr];

        for(Double key : sidePrices.keySet()){
            if(side <= key){
                res += sidePrices.get(key)[abr];
                break;
            }
        }

        if(weight > 100) res += sidePrices.get(100.0)[abr];

        res += (itemPrice / 100);
        res *= typeIndex.get(type);
        return (double)Math.round(res * 100d) / 100d;
    }
}
