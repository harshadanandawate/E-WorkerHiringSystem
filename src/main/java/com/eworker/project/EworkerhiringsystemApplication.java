package com.eworker.project;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.eworker.project.*")
public class EworkerhiringsystemApplication 
{

	public static void main(String[] args) 
	{
		SpringApplication.run(EworkerhiringsystemApplication.class, args);
	}

}
