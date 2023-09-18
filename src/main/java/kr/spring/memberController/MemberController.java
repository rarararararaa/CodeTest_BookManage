package kr.spring.memberController;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpSession;

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
	
	@RequestMapping("/login")
	//axios Post 통신할 시 requestBody
	public Map<String, Object> login(@RequestBody Map<String, String> map) {
		Map<String, Object> result_map = new HashMap<String, Object>();
		log.debug("id와 passwd = "+map);
		log.debug("id = "+map.get("id"));
		MemberVO mem = memberService.chechid(map.get("id"));
		result_map.put("result", false);
		if(mem != null && map.get("passwd").equals(mem.getMem_passwd())) {
			result_map.put("result", true);
			result_map.put("auth", mem.getMem_auth());
		}
		return result_map;
	}
	@PostMapping("/register")
	public String register(@RequestBody Map<String, Object> map) {
		memberService.insertMember(map);
		return "회원가입에 성공했습니다.";
	}
	
	//id check
	@RequestMapping("/check")
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
