package kr.spring.memberController;

import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api")
@Slf4j
public class MemberController {
	
	@GetMapping("/hello")
	public String rest() {
		log.debug("Hellocontroller 연결확인");
		return "Hello, World!";
	}
	@GetMapping("/list")
	public String listTest() {
		log.debug("Listcontroller 연결확인");
		return "test";
	}
	@ResponseBody
	@RequestMapping("/login")
	//axios Post 통신할 시 requestBody
	public void login(@RequestBody Map<String, Object> map) {
		log.debug("id와 passwd = "+map);
		log.debug("id = "+map.get("id"));
	}
}
