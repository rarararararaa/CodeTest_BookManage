package kr.spring.memberService;

import java.util.Map;

import kr.spring.memberVO.MemberVO;

public interface MemberService {
	public void insertMember(Map<String, Object> map);
	
	public MemberVO chechid(String id);
}
