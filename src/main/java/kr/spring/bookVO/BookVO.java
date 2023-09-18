package kr.spring.bookVO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class BookVO {
	private String isbn; 
	private String callNumber;//도서 청구 번호 primary key
	private int class_no;//주제 분류
	private String book_name;//도서 이름
	private String authors;//작가
	private String publisher;//출판사 LIB_PRODUCT_PUBLISHER
	private String publication_year;//출판년도
	private int loanCnt;
	private int book_status;//대출 상태
	private String bookImageUrl;//이미지	
	private String book_detail;
}
