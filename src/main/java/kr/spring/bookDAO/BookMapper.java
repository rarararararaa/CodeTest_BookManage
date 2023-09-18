package kr.spring.bookDAO;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import kr.spring.bookVO.BookVO;

@Mapper
public interface BookMapper {
	//도서 추가
	public void insertBook(BookVO book);
	public void insertBook(Map<String, Object> map);
	
	@Select("SELECT * FROM book")
	public List<BookVO> selectAll();
	
	@Select("SELECT COUNT(*) FROM book")
	public int allCount();
	
	@Select("SELECT * FROM book WHERE callNumber = #{callNumber}")
	public BookVO selectBook(String callNumber);
	//rent_num 생성
	@Select("SELECT rent_seq.nextval FROM dual")
	public int getRenseq();
	
	public void insertRent(Map<String, Object> map);
	//book table state 값 변경
	@Update("UPDATE book SET book_status = #{num} WHERE callNumber = #{callNumber}")
	public void updateBookTable(Map<String, Object> map);
	
	@Select("SELECT * FROM book WHERE callNumber = #{callNumber}")
	public BookVO bookcheck(String callNumber);
}
