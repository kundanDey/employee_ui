package business;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import model.Employee;
import model.EmployeeRepository;

@CrossOrigin(origins = { "http://localhost:3000"})
@RestController
public class Action {
	
	@Autowired
	private EmployeeRepository repo;
	
	@RequestMapping("/addEmployee")
	public List<Employee> addEmployee(@RequestBody Employee e) {
		if(e.getChild()!=null) {
			String s[]=e.getChild().split(",");
			for(String child:s) {
				Employee rep=repo.findOne(Integer.parseInt(child));
				if(rep!=null) {
					e.getReportees().add(rep);
					repo.delete(rep);
				}
			}
			e.setChild(null);
		}
		repo.save(e);
		
		return repo.findAll();
	}
	
	@RequestMapping("/getEmployees")
	public List<Employee> getEmployees() {
		System.out.print(repo.findAll());
		return repo.findAll();
	}
	
	@RequestMapping("/deleteEmployee")
	public  void deleteEmployees(@RequestBody(required=true) String empid) {
		repo.delete(Integer.parseInt(empid));
	}
	

	public EmployeeRepository getRepo() {
		return repo;
	}

	public void setRepo(EmployeeRepository repo) {
		this.repo = repo;
	}
	
	
}
