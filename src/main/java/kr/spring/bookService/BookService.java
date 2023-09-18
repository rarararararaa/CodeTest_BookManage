package kr.spring.bookService;

import java.util.List;

import kr.spring.bookVO.BookVO;

public interface BookService {
	public void getData();
	
	public List<BookVO> selectAll();
	public int allCount();
}
