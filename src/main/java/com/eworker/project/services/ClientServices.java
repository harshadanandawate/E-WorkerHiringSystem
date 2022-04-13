package com.eworker.project.services;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eworker.project.entities.Client;
import com.eworker.project.entities.Worker;
import com.eworker.project.repositories.ClientRepository;

@Service
@Transactional
public class ClientServices 
{
	@Autowired
	ClientRepository crepos;

	public List<Client> getAll() {
		return crepos.findAll();
	}

	public Client saveclient(Client c) {
		return crepos.save(c);// repository provide save()function
	}

	public Client getOne(int client_id) {
		Optional<Client> client = crepos.findById(client_id);
		Client c = null;

		try {
			c = client.get();
		} catch (NoSuchElementException e) {
			c = null;
		}
		return c;
	}
}
