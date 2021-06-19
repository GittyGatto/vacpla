package com.henning.vacpla.controllers.roles;

import com.henning.vacpla.business.role.Role;
import com.henning.vacpla.business.role.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class RolesController {

    private RoleService roleService;

    @Autowired
    public RolesController(RoleService roleService) {
        this.roleService = roleService;
    }

    @RequestMapping(value = "/api/roles", method = RequestMethod.POST, consumes = "application/json")
    public @ResponseBody
    ResponseEntity<List<Role>> getAllRoles() {
        return new ResponseEntity<>(roleService.getAllRoles(), HttpStatus.OK);
    }
}
