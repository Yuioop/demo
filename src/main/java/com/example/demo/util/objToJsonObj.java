package com.example.demo.util;


import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;

/**
 * Created by Administrator on 2018/11/2.
 */
public class objToJsonObj {
    public JSONObject coverToJsonObj(JSONObject object){
        JSONObject obj = new JSONObject(true);
        JSONArray arr = new JSONArray();
        if(object.isEmpty()){
            obj.put("code",400);
            obj.put("msg","失败");
            obj.put("data",arr);
        }else {
            arr.add(object);
            obj.put("code", 200);
            obj.put("msg", "成功");
            obj.put("data", arr);
        }
        return obj;
    }

}
