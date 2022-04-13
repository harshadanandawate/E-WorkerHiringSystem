package com.eworker.project.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import com.eworker.project.entities.Client;
import com.eworker.project.entities.Employment_Details;
import com.eworker.project.entities.Worker;
import com.eworker.project.repositories.Employment_DetailsRepository;

@Service
public class Employment_DetailsService 
{
	@Autowired
	Employment_DetailsRepository erepos;

	public Employment_Details save(Employment_Details empd) {
		return erepos.save(empd);
	}

	public List<Employment_Details> getall() {
		return erepos.findAll();
	}

	public void saveOrUpdate(Employment_Details details) {
		erepos.save(details);
	}
	
	public List<Employment_Details> getByStatus(Client client_id){
		return erepos.getbystatus(client_id);
	}
}
