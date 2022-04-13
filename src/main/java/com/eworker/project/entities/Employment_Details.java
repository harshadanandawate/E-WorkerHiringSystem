package com.eworker.project.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "employment_details")
public class Employment_Details {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int emp_id;
	@Column
	private String req_date;
	@Column
	private String req_status;
	@Column
	private int work_days;
	@Column
	private int no_of_workers;
	@Column
	private String address;

	@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
	@JoinColumn(name = "client_id")
	private Client client_id;

	public Employment_Details() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Employment_Details(int emp_id, String req_date, String req_status, int work_days, int no_of_workers,
			String address, Client client_id) {
		super();
		this.emp_id = emp_id;
		this.req_date = req_date;
		this.req_status = req_status;
		this.work_days = work_days;
		this.no_of_workers = no_of_workers;
		this.address = address;
		this.client_id = client_id;
	}
	
	public Employment_Details(String req_date, String req_status, int work_days, int no_of_workers, String address,
			Client client_id) {
		super();
		this.req_date = req_date;
		this.req_status = req_status;
		this.work_days = work_days;
		this.no_of_workers = no_of_workers;
		this.address = address;
		this.client_id = client_id;
	}

	public Employment_Details(String req_date, String req_status, int work_days, int no_of_workers, String address) {
		super();
		this.req_date = req_date;
		this.req_status = req_status;
		this.work_days = work_days;
		this.no_of_workers = no_of_workers;
		this.address = address;
	}

	public int getEmp_id() {
		return emp_id;
	}

	public void setEmp_id(int emp_id) {
		this.emp_id = emp_id;
	}

	public String getReq_date() {
		return req_date;
	}

	public void setReq_date(String req_date) {
		this.req_date = req_date;
	}

	public String getReq_status() {
		return req_status;
	}

	public void setReq_status(String req_status) {
		this.req_status = req_status;
	}

	public int getWork_days() {
		return work_days;
	}

	public void setWork_days(int work_days) {
		this.work_days = work_days;
	}

	public int getNo_of_workers() {
		return no_of_workers;
	}

	public void setNo_of_workers(int no_of_workers) {
		this.no_of_workers = no_of_workers;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Client getClient_id() {
		return client_id;
	}

	public void setClient_id(Client client_id) {
		this.client_id = client_id;
	}

	@Override
	public String toString() {
		return "Employment_Details [emp_id=" + emp_id + ", req_date=" + req_date + ", req_status=" + req_status
				+ ", work_days=" + work_days + ", no_of_workers=" + no_of_workers + ", address=" + address
				+ ", client_id=" + client_id + "]";
	}
}
