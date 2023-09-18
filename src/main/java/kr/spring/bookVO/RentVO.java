package kr.spring.bookVO;

import lombok.Getter;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

@Getter
@Setter
@Slf4j
public class RentVO {
	private int rent_num;
	private String callNumber;
	private String mem_id;
	private int book_status;
	private String rent_reg_date;
	private String return_reg_date;
}
