package kr.spring.bookController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import kr.spring.bookService.BookService;
import kr.spring.bookVO.BookVO;
import kr.spring.bookVO.RentVO;
import kr.spring.memberService.MemberService;
import kr.spring.util.PagingUtil;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api")
@Slf4j
public class BookController {
	
	@Autowired
	private BookService bookService;
	@Autowired
	private MemberService memberService;
	
	@GetMapping("/insert/intobook")
	//외부 api
	public void insertAPIbook() {
		bookService.getData();
	}
	//도서 추가
	@PostMapping("/insertBook")
	public String insertBook(@RequestBody Map<String, Object> map) {
		log.debug("도서 추가"+map.get("callNumber"));
		bookService.inertBook(map);
		return "도서가 등록되었습니다";
	}
	@GetMapping("/bookList")
	public Map<String, Object> showList(@RequestParam(value="pageNum",defaultValue="1") int currentPage) {
		Map<String, Object> map = new JSONObject();
		List<BookVO> book_list = bookService.selectAll();
		int count = bookService.allCount();
		PagingUtil page = new PagingUtil(null, null, currentPage, count, 10, 10, "api/bookList");
		map.put("book_list", book_list);
		map.put("page", page.getPage());
		return map;
	}
	//도서 상세
	@PostMapping("/bookDetail")
	public Map<String, Object> showDetail(@RequestBody Map<String, String> input){
		Map<String, Object> map = new HashMap<String, Object>();
		BookVO book = bookService.selectBook(input.get("callNumber"));
		List<RentVO> list = bookService.rentList(input.get("callNumber"));
		map.put("bookInfo", book);
		map.put("rentList", list);
		log.debug("<<도서 상세 정보>> : "+book);
		return map;
	}
	//도서 대출
	@PostMapping("/rentBook")
	public String rentBook(@RequestBody Map<String, Object> map) {
		log.debug("<<도서 대출>> : "+map);
		bookService.insertRent(map);
		return "대출되었습니다.";
	}
	//도서 등록 확인
	@PostMapping("/checkBook")
	public Map<String, Boolean> checkBook(@RequestBody Object callNumber){
		Map<String, Boolean> check = new HashMap<String, Boolean>();
		BookVO book = bookService.bookcheck(String.valueOf(callNumber));
		check.put("result", true);
		if(book == null) {
			check.put("result", false);
		}
		return check;
	}
	//도서 반납 처리
	@PostMapping("/returnBook")
	public String returnBook(@RequestBody Map<String, Object> map){
		bookService.returnBook(map);
		return "반납 처리가 되었습니다.";
	}
	
}
