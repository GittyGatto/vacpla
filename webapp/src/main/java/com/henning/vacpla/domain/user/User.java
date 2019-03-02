package com.henning.vacpla.domain.user;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.Date;


public class User {
    public String userName;
    @JsonIgnore
    public String password;
    public Role role;
    public int totalVacation;
    public String entry;
    public String exit;

    public User(String userName, String password, Role role, int totalVacation, String entry, String exit) {
        this.userName = userName;
        this.password = password;
        this.role = role;
        this.totalVacation = totalVacation;
        this.entry = entry;
        this.exit = exit;
    }

    public User(UserEntity userEntity) {
        this(userEntity.getUserName(), userEntity.getPassword(), userEntity.getRole(), userEntity.getTotalVacation(), userEntity.getEntry().toString(), userEntity.getExit().toString());
    }

    public User() {}
}
