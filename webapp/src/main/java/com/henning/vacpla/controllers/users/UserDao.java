package com.henning.vacpla.controllers.users;

import com.henning.vacpla.business.role.Role;
import com.henning.vacpla.business.vacationRequest.AnnualLeaveDto;

import java.util.List;

public class UserDao {
    public String userName;
    public Role role;
    public List<AnnualLeaveDto> annualLeaves;
    public String entry;
    public String exit;

    public UserDao() {
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public String getEntry() {
        return entry;
    }

    public void setEntry(String entry) {
        this.entry = entry;
    }

    public String getExit() {
        return exit;
    }

    public void setExit(String exit) {
        this.exit = exit;
    }

    public List<AnnualLeaveDto> getAnnualLeaves() {
        return annualLeaves;
    }

    public void setAnnualLeaves(List<AnnualLeaveDto> annualLeaves) {
        this.annualLeaves = annualLeaves;
    }
}
