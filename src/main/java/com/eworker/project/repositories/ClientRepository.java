package com.eworker.project.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.eworker.project.entities.Client;
@Repository
public interface ClientRepository extends JpaRepository<Client, Integer> 
{

}
