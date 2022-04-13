package com.eworker.project.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.eworker.project.entities.Users;
import com.eworker.project.services.UsersServices;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/user")
public class UsersController {

	@Autowired
	UsersServices uservices;

	@GetMapping("/checkLogin")
	public String checkLogin(@RequestParam String email, @RequestParam("password") String password) {
		return uservices.checkLogin(email, password);
	}

	@GetMapping("/getId")
	public int getUserId(@RequestParam String email) {
		return uservices.getUserId(email);
	}

	@GetMapping("/getone")
	public Users getOne(@RequestParam("user_id") int user_id) {
		return uservices.getOne(user_id);
	}

	@PostMapping("/update")
	private Users update(@RequestBody Users users) {
		uservices.saveOrUpdate(users);
		return users;
	}
	
	@GetMapping("/all")
	public List<Users> getAll() {
		return uservices.getAll();
	}
	
	@DeleteMapping("/delete/{user_id}")
	private void delete(@PathVariable("user_id") int user_id) {
		uservices.delete(user_id);
	}
	
	@GetMapping("/getbyusertype")
	public List<Users> getByusertype(@RequestParam("user_type") String user_type) {
		return uservices.getByusertype(user_type);
	}

	
	
	
	
	
	
	
	
	@PostMapping("/save")
	public Users save(@RequestBody Users u) {
		System.out.println("in save method" + getClass().getName());
		return uservices.save(u);
	}

	
	@DeleteMapping("/delete")
	private void deleteuser(@RequestParam("user_id") int user_id) {
		System.out.println("in deleteuser method" + getClass().getName());
		uservices.delete(user_id);
	}

	@GetMapping("/getuser/{user_id}")
	public Users getUser(@PathVariable("user_id") int id) {
		System.out.println("in getUser method" + getClass().getName());
		return uservices.getOne(id);
	}

	@GetMapping("/getuser/{user_id}/{fname}") // multi pathvariable in one request
	public Users getUser(@PathVariable("user_id") int id, @PathVariable("fname") String fname) {
		System.out.println("in getUser method" + getClass().getName());
		return uservices.getOne(id);
	}

}
