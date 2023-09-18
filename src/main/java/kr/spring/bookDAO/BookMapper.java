package kr.spring.bookDAO;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import kr.spring.bookVO.BookVO;

@Mapper
public interface BookMapper {
	//도서 추가
	public void insertBook(BookVO book);
	
	@Select("SELECT * FROM book")
	public List<BookVO> selectAll();
	
	@Select("SELECT COUNT(*) FROM book")
	public int allCount();
}
