package com.eworker.project.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
/*
@Entity
@Table(name="payment")
public class Payment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private int payment_id;
	@Column
	private String payment_mode;
	@Column
	private double payment_amount;
	@Column
	private String payment_date;
	
	@JsonBackReference
	@ManyToOne
	@JoinColumn(name="client_id")
	private Client client_id;
	@JsonBackReference
	@ManyToOne
	@JoinColumn(name="worker_id")
	private Worker worker_id;
	@JsonBackReference
	@ManyToOne
	@JoinColumn(name="empl_id")
	private Employment_Details empl_id;
}

*/