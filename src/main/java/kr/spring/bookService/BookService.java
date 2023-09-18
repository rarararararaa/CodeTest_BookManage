package kr.spring.bookService;

import java.util.List;
import java.util.Map;

import kr.spring.bookVO.BookVO;
import kr.spring.bookVO.RentVO;

public interface BookService {
	//API
	public void getData();
	
	//도서 관리
	public void inertBook(Map<String, Object> map);
	public List<BookVO> selectAll();
	public int allCount();
	public BookVO selectBook(String callNumber);
	//도서 확인
	public BookVO bookcheck(String callNumber);
	//대출
	public void insertRent(Map<String, Object> map);
	public List<RentVO> rentList(String callNumber);
	public void returnBook(Map<String, Object> map);
}
