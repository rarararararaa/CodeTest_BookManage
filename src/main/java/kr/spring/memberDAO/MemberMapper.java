package kr.spring.memberDAO;

import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import kr.spring.memberVO.MemberVO;

@Mapper
public interface MemberMapper {
	public void insertMember(Map<String, Object> map);
	
	@Select("SELECT member_seq.nextval FROM dual")
	public int getMemseq();
	
	@Select("SELECT * FROM member WHERE mem_id = #{id}")
	public MemberVO chechid(String id);
}
