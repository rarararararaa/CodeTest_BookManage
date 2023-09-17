package kr.spring.memberController;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import kr.spring.memberService.MemberService;
import kr.spring.memberVO.MemberVO;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api")
@Slf4j
public class MemberController {
	
	@Autowired
	private MemberService memberService;

	@ModelAttribute
	public MemberVO initCommand() {
		return new MemberVO();
	}
	
	@ResponseBody
	@RequestMapping("/login")
	//axios Post 통신할 시 requestBody
	public void login(@RequestBody Map<String, Object> map) {
		log.debug("id와 passwd = "+map);
		log.debug("id = "+map.get("id"));
	}
	@PostMapping("/register")
	@ResponseBody
	public String register(@RequestBody Map<String, Object> map) {
		memberService.insertMember(map);
		return "회원가입에 성공했습니다.";
	}
	
	//id check
	@RequestMapping("/check")
	@ResponseBody
	public Map<String, String> idCheck(@RequestBody Object id) {
		Map<String, String> map = new HashMap<String, String>();
		log.debug("<<check확인>>"+id);
		MemberVO member = memberService.chechid(String.valueOf(id));
		map.put("result", "pass");
		if(member != null) {
			map.put("result", "non");
		}
		return map;
	}
}
