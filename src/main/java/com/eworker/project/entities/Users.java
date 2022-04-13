package com.eworker.project.entities;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.springframework.beans.factory.annotation.Autowired;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@Table(name = "users")
public class Users {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column
	private int user_id;
	@Column
	private String fname;
	@Column
	private String lname;
	@Column
	private String email;
	@Column
	private String password;
	@Column
	private String contact_no;
	@Column
	private String gender;
	@Column
	private String user_type;
	@Column
	private String address;

	@JsonManagedReference
	@OneToMany(mappedBy = "user_id", targetEntity = Worker.class, cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	List<Worker> workers = new ArrayList<Worker>();

	@JsonManagedReference
	@OneToMany(mappedBy = "user_id", targetEntity = Client.class, cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	Set<Client> clients = new HashSet<Client>();

	public Users() {
	}

	public Users(String fname, String lname, String email, String password, String contact_no, String gender,
			String user_type, String address) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.password = password;
		this.contact_no = contact_no;
		this.gender = gender;
		this.user_type = user_type;
		this.address = address;
	}

	public Users(String fname, String lname, String email, String password, String contact_no, String gender,
			String user_type, String address, List<Worker> workers) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.password = password;
		this.contact_no = contact_no;
		this.gender = gender;
		this.user_type = user_type;
		this.address = address;
		this.workers = workers;
	}

	public Users(String fname, String lname, String email, String password, String contact_no, String gender,
			String user_type, String address, Set<Client> clients) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.password = password;
		this.contact_no = contact_no;
		this.gender = gender;
		this.user_type = user_type;
		this.address = address;
		this.clients = clients;
	}

	public Users(int user_id, String fname, String lname, String email, String password, String contact_no,
			String gender, String user_type, String address, List<Worker> workers) {
		super();
		this.user_id = user_id;
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.password = password;
		this.contact_no = contact_no;
		this.gender = gender;
		this.user_type = user_type;
		this.address = address;
		this.workers = workers;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
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

	public List<Worker> getworkers() {
		return workers;
	}

	public void setworkers(List<Worker> workers) {
		this.workers = workers;
	}

	public Set<Client> getClients() {
		return clients;
	}

	public void setClients(Set<Client> clients) {
		this.clients = clients;
	}

	@Override
	public String toString() {
		return "Users [user_id=" + user_id + ", fname=" + fname + ", lname=" + lname + ", email=" + email
				+ ", password=" + password + ", contact_no=" + contact_no + ", gender=" + gender + ", user_type="
				+ user_type + ", workers=" + workers + ", clients=" + clients + " ]";
	}
}
