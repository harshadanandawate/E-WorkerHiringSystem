package com.eworker.project.services;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eworker.project.entities.Users;
import com.eworker.project.repositories.UserRepository;

@Service
public class UsersServices {
	@Autowired
	UserRepository urepos;

	public int getUserId(String email) {
		return urepos.getUserId(email);
	}

	public String checkLogin(String email, String password) {
		return urepos.checkLogin(email, password);
	}

	public List<Users> getByusertype(String user_type) {
		return urepos.getByusertype(user_type);
	}

	public void update(Users users, int user_id) {
		urepos.save(users);
	}

	public void delete(int user_id) {
		urepos.deleteById(user_id);
	}

	public void saveOrUpdate(Users users) {
		urepos.save(users);
	}

	public List<Users> getAll() {
		return urepos.findAll();// repository provide findAll()function
	}

	public Users save(Users u) {
		return urepos.save(u); // repository provide save()function
	}

	public Users getOne(int user_id) {
		Optional<Users> user = urepos.findById(user_id);
		Users u = null;

		try {
			u = user.get();
		} catch (NoSuchElementException e) {
			u = null;
		}
		return u;
	}
}
