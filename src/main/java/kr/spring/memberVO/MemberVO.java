package kr.spring.memberVO;

import lombok.Setter;
import lombok.ToString;

import java.util.Date;

import lombok.Getter;

@Getter
@Setter
@ToString
public class MemberVO {
	private String mem_name;
	private String mem_id;
	private String passwd;
	private Date mem_reg_date;
	private String mem_cell;
	private String mem_email;
}
