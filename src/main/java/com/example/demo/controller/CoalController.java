package com.example.demo.controller;

import com.alibaba.fastjson.JSONObject;
import com.example.demo.entity.CoalSituation;
import com.example.demo.service.CoalService;
import com.example.demo.util.objToJsonObj;
import com.fasterxml.jackson.databind.util.JSONPObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Created by Administrator on 2018/10/30.
 */
@RestController
public class CoalController {
    @Autowired
    private CoalService service;
    objToJsonObj toObj = new objToJsonObj();

    @RequestMapping(value="/getSituation",method = RequestMethod.POST)
    public JSONObject getCoalSituation(@RequestParam(value = "id") int id) {
        CoalSituation coalSitua = service.getCoalSituation(id);
        JSONObject obj = new JSONObject();
        obj.put("id",coalSitua.getId());
        obj.put("city",coalSitua.getCity());
        obj.put("province",coalSitua.getProvince());
        obj.put("productport",coalSitua.getProductport());
        obj.put("productname",coalSitua.getProductname());
        obj.put("productarea",coalSitua.getProductarea());
        obj.put("ash",coalSitua.getAsh());
        obj.put("volatilization",coalSitua.getVolatilization());
        obj.put("sulphur",coalSitua.getSulphur());
        obj.put("moisture",coalSitua.getMoisture());
        obj.put("cohere_index",coalSitua.getCohere_index());
        obj.put("calorific_value",coalSitua.getCalorific_value());
        obj.put("price",coalSitua.getPrice());
        obj.put("price_type",coalSitua.getPrice_type());
        obj.put("time",coalSitua.getTime());
        return toObj.coverToJsonObj(obj);
    }


    @RequestMapping("/hello")
    public String index() {
        return "Hello Spring Boot";
    }


}
