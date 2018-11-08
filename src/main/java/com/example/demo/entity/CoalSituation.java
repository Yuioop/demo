package com.example.demo.entity;

import java.io.Serializable;
import java.util.Date;

/**
 * Created by Administrator on 2018/10/30.
 */

public class CoalSituation implements Serializable{
    private int id;
    private String city;
    private String province;
    private String productport;
    private String productname;
    private String productarea;
    private Double ash;
    private Double volatilization;
    private Double sulphur;
    private Double moisture;
    private Double cohere_index;
    private Double calorific_value;
    private Double price;
    private String price_type;
    private Date time;

    public void setId(int id) {
        this.id = id;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public void setProductport(String productport) {
        this.productport = productport;
    }

    public void setProductname(String productname) {
        this.productname = productname;
    }

    public void setProductarea(String productarea) {
        this.productarea = productarea;
    }

    public void setAsh(Double ash) {
        this.ash = ash;
    }

    public void setVolatilization(Double volatilization) {
        this.volatilization = volatilization;
    }

    public void setSulphur(Double sulphur) {
        this.sulphur = sulphur;
    }

    public void setMoisture(Double moisture) {
        this.moisture = moisture;
    }

    public void setCohere_index(Double cohere_index) {
        this.cohere_index = cohere_index;
    }

    public void setCalorific_value(Double calorific_value) {
        this.calorific_value = calorific_value;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public void setPrice_type(String price_type) {
        this.price_type = price_type;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public int getId() {
        return id;
    }

    public String getCity() {
        return city;
    }

    public String getProvince() {
        return province;
    }

    public String getProductport() {
        return productport;
    }

    public String getProductname() {
        return productname;
    }

    public String getProductarea() {
        return productarea;
    }

    public Double getAsh() {
        return ash;
    }

    public Double getVolatilization() {
        return volatilization;
    }

    public Double getSulphur() {
        return sulphur;
    }

    public Double getMoisture() {
        return moisture;
    }

    public Double getCohere_index() {
        return cohere_index;
    }

    public Double getCalorific_value() {
        return calorific_value;
    }

    public Double getPrice() {
        return price;
    }

    public String getPrice_type() {
        return price_type;
    }

    public Date getTime() {
        return time;
    }
}
