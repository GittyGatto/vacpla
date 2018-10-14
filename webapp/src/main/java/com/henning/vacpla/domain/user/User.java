package com.henning.vacpla.domain.user;

import com.fasterxml.jackson.annotation.JsonIgnore;


public class User
{
	public final String userName;
	@JsonIgnore
	public final String password;
	public final Role role;
	public final int totalVacation;

	public User(String userName, String password, Role role, int totalVacation)
	{
		this.userName = userName;
		this.password = password;
		this.role = role;
		this.totalVacation = totalVacation;
	}

	public User(UserEntity userEntity)
	{
		this(userEntity.getUserName(), userEntity.getPassword(), userEntity.getRole(), userEntity.getTotalVacation());
	}
}
