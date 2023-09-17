package kr.spring.memberService;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kr.spring.memberDAO.MemberMapper;
import kr.spring.memberVO.MemberVO;
import lombok.extern.slf4j.Slf4j;

@Service
@Transactional
@Slf4j
public class MemberServiceImpl implements MemberService{

	@Autowired
	private MemberMapper memberMapper;
	
	@Override
	public void insertMember(Map<String, Object> map) {
		map.put("mem_num", memberMapper.getMemseq());
		log.debug("map정보"+map);
		memberMapper.insertMember(map);
	}

	@Override
	public MemberVO chechid(String id) {
		return memberMapper.chechid(id);
	}
	

}
