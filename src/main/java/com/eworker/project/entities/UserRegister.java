package com.eworker.project.entities;

public class UserRegister {
	private String client_type;
	private String worker_type;
	private String fname;
	private String lname;
	private String email;
	private String password;
	private String contact_no;
	private String gender;
	private String user_type;
	private String address;

	public UserRegister() {
		super();
		// TODO Auto-generated constructor stub
	}

	public UserRegister(String worker_type, String client_type, String fname, String lname, String email,
			String password, String contact_no, String gender, String user_type, String address) {
		super();
		this.client_type = client_type;
		this.worker_type = worker_type;
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.password = password;
		this.contact_no = contact_no;
		this.gender = gender;
		this.user_type = user_type;
		this.address = address;
	}

	public String getworker_type() {
		return worker_type;
	}

	public void setworker_type(String worker_type) {
		this.worker_type = worker_type;
	}

	public String getClient_type() {
		return client_type;
	}

	public void setClient_type(String client_type) {
		this.client_type = client_type;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getContact_no() {
		return contact_no;
	}

	public void setContact_no(String contact_no) {
		this.contact_no = contact_no;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getUser_type() {
		return user_type;
	}

	public void setUser_type(String user_type) {
		this.user_type = user_type;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	@Override
	public String toString() {
		return "workerRegister [ worker_type=" + worker_type + ", fname=" + fname + ", lname=" + lname + ", email="
				+ email + ", password=" + password + ", contact_no=" + contact_no + ", gender=" + gender
				+ ", user_type=" + user_type + ", address=" + address + "]";
	}

}
