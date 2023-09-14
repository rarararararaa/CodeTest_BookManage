package kr.spring.memberController;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MemberController {
	@GetMapping("/api/hello")
	public String rest() {
		return "Hello, World!";
	}
}
