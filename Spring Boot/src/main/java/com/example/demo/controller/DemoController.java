package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.DmeoDto;
import com.example.demo.repo.DemoRepo;
import com.example.demo.service.DemoService;
@CrossOrigin
@RestController
@RequestMapping("/niq")
public class DemoController {
	@Autowired
	private DemoService demoService;
	
	@GetMapping(value = "getdata")
	public List<String> getDto(){
		return demoService.getDto();
	}
	@GetMapping(value = "logdata")
	public Boolean getLog(@RequestParam String username, String password){
		return demoService.getLog(username, password);
	}
	@PostMapping(value = "postdata")
	public void postDto(@RequestBody DmeoDto data) {
		demoService.postDto(data);
	}
}
