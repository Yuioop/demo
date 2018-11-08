package com.example.demo.service;



import com.example.demo.entity.CoalSituation;
import com.example.demo.mapper.CoalMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by Administrator on 2018/10/30.
 */
@Service
public class CoalService {
    @Autowired
    private CoalMapper mapper;
    public CoalSituation getCoalSituation(int id){
        return mapper.getCoalSituation(id);
    }

}
