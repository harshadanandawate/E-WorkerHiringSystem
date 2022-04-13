package com.eworker.project.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
//import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
//@PrimaryKeyJoinColumn(name="user_id")
@Table(name = "worker")
public class Worker {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int worker_id;
	@JsonBackReference
	@ManyToOne
	@JoinColumn(name = "user_id")
	private Users user_id;
	@Column
	private String worker_type;

	/*
	 * @JsonBackReference
	 * 
	 * @ManyToOne
	 * 
	 * @JoinColumn(name="emp_id") private Employment_Details emp_id;
	 */

	public Worker() {

	}

	public Worker(Users user_id, String worker_type) {
		super();
		this.user_id = user_id;
		this.worker_type = worker_type;
		// this.emp_id = emp_id;
	}

	public Worker(int worker_id, Users user_id, String worker_type) {
		super();
		this.worker_id = worker_id;
		this.user_id = user_id;
		this.worker_type = worker_type;
		// this.emp_details=emp_details;
	}

	public Worker(String worker_type) {
		super();
		this.worker_type = worker_type;
	}

	public Worker(String worker_type, Users user_id) {
		this.worker_type = worker_type;
		this.user_id = user_id;
	}

	public int getworker_id() {
		return worker_id;
	}

	public void setworker_id(int worker_id) {
		this.worker_id = worker_id;
	}

	public Users getUser_id() {
		return user_id;
	}

	public void setUser_id(Users user_id) {
		this.user_id = user_id;
	}

	public String getworker_type() {
		return worker_type;
	}

	public void setworker_type(String worker_type) {
		this.worker_type = worker_type;
	}

	/*
	 * public List<Employment_Details> getEmp_details() { return emp_details; }
	 * 
	 * 
	 * public void setEmp_details(List<Employment_Details> emp_details) {
	 * this.emp_details = emp_details; }
	 */

	@Override
	public String toString() {
		return "Worker [worker_id=" + worker_id + ", user_id=" + user_id + ", worker_type=" + worker_type + "]";
	}

}
