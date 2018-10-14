package com.henning.vacpla.domain.user;

import org.springframework.context.annotation.ComponentScan;

import javax.persistence.*;

@Entity
@Table(name = "uzer")
public class UserEntity
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private long id;

	@Column(name = "user_name")
	private String userName;

	@Column(name = "password")
	private String password;


	@Enumerated(EnumType.STRING)
	@Column(name = "role")
	private Role role;

	@Column(name = "total_vacation")
	private int totalVacation;

	public long getId() {
		return id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public int getTotalVacation() {
		return totalVacation;
	}

	public void setTotalVacation(int totalVacation) {
		this.totalVacation = totalVacation;
	}
}
