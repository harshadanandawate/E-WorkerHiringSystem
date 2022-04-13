package com.eworker.project.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.eworker.project.entities.Client;
import com.eworker.project.entities.Employment_Details;
import com.eworker.project.entities.Worker;
import com.eworker.project.repositories.Employment_DetailsRepository;
import com.eworker.project.services.Employment_DetailsService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/empdetails")
public class Employment_DetailsController {
	@Autowired
	Employment_DetailsService eservices;
	@Autowired
	Employment_DetailsRepository erepos;

	@GetMapping("/details")
	public void save(@RequestParam("req_date") String req_date, @RequestParam("no_of_workers") int no_of_workers,
			@RequestParam("work_days") int work_days, @RequestParam("address") String address,
			@RequestParam("req_status") String req_status, @RequestParam("client_id") int client_id) {
		System.out.println("in save method" + getClass().getName());
		Client c1 = new Client(client_id);
		Employment_Details empd = new Employment_Details(req_date, req_status, work_days, no_of_workers, address, c1);
		eservices.save(empd);
		System.out.println(empd);
	}

	/*
	// @RequestMapping(value = "/saveempdetails", method = RequestMethod.POST)
	@PostMapping(path = "/saveempdetails", consumes = "application/json", produces = "application/json")
	// @PostMapping("/saveempdetails")
	public Employment_Details savedetails(@RequestBody Employment_Details empdetails) {
		System.out.println("in save details method" + getClass().getName());
		return erepos.save(empdetails);
	}
	*/

	@GetMapping("/alldetails")
	public List<Employment_Details> getall() {
		return eservices.getall();
	}
}
