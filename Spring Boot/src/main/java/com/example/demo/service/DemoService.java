package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.DmeoDto;
import com.example.demo.repo.DemoRepo;

@Service
public class DemoService {
	@Autowired
	private DemoRepo demoRepo;
	public List<String> getDto(){
		return demoRepo.getDtoRepo();
	}
	public Boolean getLog(String username, String password){
		return demoRepo.getLogRepo(username, password);
	}
	public void postDto(DmeoDto data) {
		demoRepo.save(data);
	}
}
