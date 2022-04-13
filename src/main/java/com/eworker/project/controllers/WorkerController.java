package com.eworker.project.controllers;

import java.util.List;

import org.apache.tomcat.jni.User;
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
import com.eworker.project.entities.Worker;
import com.eworker.project.repositories.Employment_DetailsRepository;
import com.eworker.project.services.ClientServices;
import com.eworker.project.services.UsersServices;
import com.eworker.project.services.WorkerServices;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/worker")
public class WorkerController {

	@Autowired
	WorkerServices wservices;
	@Autowired
	ClientServices cservices;
	@Autowired
	UsersServices uservices;
	@Autowired
	Employment_DetailsRepository erepos;
	@Autowired
	private JavaMailSender sender;

	@PostMapping("/saveworker")
	public void saveworker(@RequestBody UserRegister ur) {
		Users u = new Users(ur.getFname(), ur.getLname(), ur.getEmail(), ur.getPassword(), ur.getContact_no(),
				ur.getGender(), ur.getUser_type(), ur.getAddress());
		uservices.save(u);
		System.out.println(u);
		Worker w = new Worker(ur.getworker_type(), u);
		wservices.saveworker(w);
		
		SimpleMailMessage msg=new SimpleMailMessage();
		msg.setFrom("eworkerhiring@gmail.com");
		msg.setTo(u.getEmail());
		msg.setSubject("Test mail from eworkerhiring system");
		msg.setText(u.getFname()+"  "+u.getLname()+"! You are registered succefully!!! "+"your password : "+u.getPassword());
		sender.send(msg);
		System.out.println("mail send successfully");
	}
	
	@GetMapping("/empdetails")
	public List<Employment_Details> getalldetails() {
		return erepos.viewrequests();
	}
	
	@GetMapping("/updatestatus")
	public Integer reqStatusUpdate(@RequestParam("emp_id") int emp_id) {
		return erepos.reqStatusUpdate(emp_id);
	}
	
	
	
	
	
	
	
	
	
	@GetMapping("/allworkers")
	public List<Worker> getAll1() {
		System.out.println("in getAll1 method" + getClass().getName());
		return wservices.getAll();
	}

	

	@GetMapping("/getone")
	public Worker getOneworker(@RequestParam("worker_id") int worker_id) {
		System.out.println("in getOneworker method" + getClass().getName());
		return wservices.getOne(worker_id);
	}

	@GetMapping("/getworker/{worker_id}")
	public Worker getworker(@PathVariable("worker_id") int id) {
		System.out.println("in getworker method" + getClass().getName());
		return wservices.getOne(id);
	}

	@GetMapping("/getworker/{worker_id}/{worker_type}") // multi pathvariable in one request
	public Worker getUser(@PathVariable("worker_id") int id, @PathVariable("worker_type") String worker_type) {
		System.out.println("in getUser method" + getClass().getName());
		return wservices.getOne(id);
	}
}
