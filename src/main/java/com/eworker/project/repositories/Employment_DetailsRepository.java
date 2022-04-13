package com.eworker.project.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.eworker.project.entities.Client;
import com.eworker.project.entities.Employment_Details;

@Repository
public interface Employment_DetailsRepository extends JpaRepository<Employment_Details, Integer> {

	@Transactional
	@Modifying
	@Query("update Employment_Details e set e.req_status='Accepted'where (e.emp_id=:emp_id)")
	public Integer reqStatusUpdate(int emp_id);

	@Query("select e from Employment_Details e where (e.req_status='Accepted' or e.req_status='Declined') and e.client_id=:client_id")
	public List<Employment_Details> getbystatus(Client client_id);

	@Query("select e from Employment_Details e where e.req_status='Declined'")
	public List<Employment_Details> viewrequests();

}
