package com.example.demo.mapper;



import com.example.demo.entity.CoalSituation;
import org.springframework.stereotype.Repository;

/**
 * Created by Administrator on 2018/10/30.
 */
@Repository
public interface CoalMapper {
//    @Select("select * from coal_situation where id = #{id}")
    CoalSituation getCoalSituation(int id);
}
