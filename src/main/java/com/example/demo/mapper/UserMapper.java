package com.example.demo.mapper;


import com.example.demo.entity.Person;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

@Repository
public interface UserMapper {

//    @Select("SELECT * FROM person WHERE id = #{id}")
    Person selectUser(int id);
}
