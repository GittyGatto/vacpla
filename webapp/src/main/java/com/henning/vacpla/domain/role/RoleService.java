package com.henning.vacpla.domain.role;

import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class RoleService {
    public List<Role> getAllRoles() {
        return Arrays.asList(Role.values());
    }
}
