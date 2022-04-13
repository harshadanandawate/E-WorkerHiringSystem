package com.eworker.project.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.eworker.project.entities.Client;
import com.eworker.project.entities.Employment_Details;
import com.eworker.project.entities.UserRegister;
import com.eworker.project.entities.Users;
import com.eworker.project.repositories.Employment_DetailsRepository;
import com.eworker.project.services.ClientServices;
import com.eworker.project.services.Employment_DetailsService;
import com.eworker.project.services.UsersServices;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/client")
public class ClientController {
	@Autowired
	ClientServices cservices;
	@Autowired
	UsersServices uservices;
	@Autowired
	Employment_DetailsService empservices;
	@Autowired
	Employment_DetailsRepository erepo;
	@Autowired
	private JavaMailSender sender;

	@PostMapping("/saveclient")
	public void saveclient(@RequestBody UserRegister ur) {
		Users u = new Users(ur.getFname(), ur.getLname(), ur.getEmail(), ur.getPassword(), ur.getContact_no(),
				ur.getGender(), ur.getUser_type(), ur.getAddress());
		uservices.save(u);
		System.out.println(u);
		Client c = new Client(ur.getClient_type(), u);
		cservices.saveclient(c);
		
		SimpleMailMessage msg=new SimpleMailMessage();
		msg.setFrom("eworkerhiring@gmail.com");
		msg.setTo(u.getEmail());
		msg.setSubject("Test mail from eworkerhiring system");
		msg.setText(u.getFname()+"  "+u.getLname()+"! You are registered succefully!!! "+"your password : "+u.getPassword());
		sender.send(msg);
		System.out.println("mail send successfully");
	}
	
	
	@GetMapping("/getbystatus")
	public List<Employment_Details> getbystatus(@RequestParam int client_id) {
		//int client_id=1;
		Client c = new Client(client_id);
		System.out.println(client_id);
		return empservices.getByStatus(c);
	}
	
	
	
	
	
	
	
	@GetMapping("/allclients")
	public List<Client> getAllc() {
		System.out.println("in getAllc method" + getClass().getName());
		return cservices.getAll();
	}

	@GetMapping("/getone")
	public Client getOne1(@RequestParam("client_id") int client_id) {
		System.out.println("in getOne1 method" + getClass().getName());
		return cservices.getOne(client_id);
	}

	@GetMapping("/getclient/{client_id}")
	public Client getClient(@PathVariable("client_id") int id) {
		System.out.println("in getClient method" + getClass().getName());
		return cservices.getOne(id);
	}

	@PostMapping("/updatedetails")
	private Employment_Details update(@RequestBody Employment_Details details) {
		System.out.println("in update method" + getClass().getName());
		empservices.saveOrUpdate(details);
		return details;
	}
}