package com.eworker.project.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
//@PrimaryKeyJoinColumn(name="user_id")
@Table(name = "client")
public class Client {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int client_id;
	@JsonBackReference
	@ManyToOne
	@JoinColumn(name = "user_id")
	private Users user_id;
	@Column
	private String client_type;
	/*
	@OneToMany(mappedBy = "client_id",cascade = CascadeType.ALL,targetEntity = Client.class)
	List<Payment> payments = new ArrayList<Payment>();
	 */
	public Client() {
		super();
	}

	/*
	 * public Client(Users user_id, String client_type, Employment_Details emp_id) {
	 * super(); this.user_id = user_id; this.client_type = client_type; this.emp_id
	 * = emp_id; }
	 */

	public Client(int client_id, Users user_id, String client_type) {
		super();
		this.client_id = client_id;
		this.user_id = user_id;
		this.client_type = client_type;
	}

	public Client(String client_type) {
		super();
		this.client_type = client_type;
	}

	public Client(String client_type, Users user_id) {
		this.client_type = client_type;
		this.user_id = user_id;
	}

	public Client(int client_id) {
		this.client_id = client_id;
	}

	public int getClient_id() {
		return client_id;
	}

	public void setClient_id(int client_id) {
		this.client_id = client_id;
	}

	public Users getUser_id() {
		return user_id;
	}

	public void setUser_id(Users user_id) {
		this.user_id = user_id;
	}

	public String getClient_type() {
		return client_type;
	}

	public void setClient_type(String client_type) {
		this.client_type = client_type;
	}

	/*
	 * public Employment_Details getEmp_id() { return emp_id; }
	 * 
	 * 
	 * 
	 * 
	 * public void setEmp_id(Employment_Details emp) { this.emp_id= emp_id; }
	 */

	@Override
	public String toString() {
		return "Client [client_id=" + client_id + ", user_id=" + user_id + ", client_type=" + client_type + ", userid="
				+ user_id + "]";
	}
}
