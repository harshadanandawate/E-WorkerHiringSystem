package com.eworker.project.services;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eworker.project.entities.Worker;
import com.eworker.project.repositories.WorkerRepository;

@Service
public class WorkerServices 
{
	@Autowired
	WorkerRepository wrepos;

	public List<Worker> getAll() {
		return wrepos.findAll();
	}

	public Worker saveworker(Worker w) {
		return wrepos.save(w);// repository provide save()function
	}

	public Worker getOne(int worker_id) {
		Optional<Worker> worker = wrepos.findById(worker_id);
		Worker w = null;

		try {
			w = worker.get();
		} catch (NoSuchElementException e) {
			w = null;
		}
		return w;
	}
}
