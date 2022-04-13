package com.eworker.project.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.eworker.project.entities.Users;
@Repository
public interface UserRepository extends JpaRepository<Users, Integer> 
{
	/*
	@Query("select u.user_type from Users u where u.user_id=:user_id and u.password=:password")
	public String checkLogin(int user_id,String password);
	*/
	
	@Query("select u.user_type from Users u where u.email=:email and u.password=:password")
	public String checkLogin(String email,String password);
	
	@Query("select u from Users u where u.user_type=:user_type")
    public List<Users> getByusertype(String user_type);
	//@Query("update Users u set u.lname=:lname where u.user_id=:user_id")
	//public String updateUser(String lname,int user_id);
	
	@Query("select user_id from Users u where u.email=:email")
	public int getUserId(String email);
	
}
