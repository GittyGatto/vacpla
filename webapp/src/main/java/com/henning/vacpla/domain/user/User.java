package com.henning.vacpla.domain.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.henning.vacpla.business.role.Role;
import lombok.Data;

@Data
public class User {
    public final String userName;
    @JsonIgnore
    public final String password;
    public final Role role;

    public User(String userName, String password, Role role) {
        this.userName = userName;
        this.password = password;
        this.role = role;
    }

    public User(UserEntity userEntity) {
        this(userEntity.getUserName(), userEntity.getPassword(), userEntity.getRole());
    }
}
