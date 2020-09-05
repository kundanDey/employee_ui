package business;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import model.EmployeeRepository;

@SpringBootApplication
@EnableMongoRepositories(basePackageClasses = EmployeeRepository.class)
public class Service {
	
	public static void main(String args[]) {
		SpringApplication.run(Service.class, args);
	}
}
