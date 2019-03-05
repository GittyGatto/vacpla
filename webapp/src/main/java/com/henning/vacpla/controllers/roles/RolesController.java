package com.henning.vacpla.controllers.roles;

import com.henning.vacpla.domain.user.Role;
import com.henning.vacpla.domain.user.RoleService;
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

    @Autowired
    private RoleService roleService;

    @RequestMapping(value = "/api/roles", method = RequestMethod.POST, consumes = "application/json")
    public @ResponseBody
    ResponseEntity<List<Role>> getAllRoles() {
        return new ResponseEntity<>(roleService.getAllRoles(), HttpStatus.OK);
    }
}
