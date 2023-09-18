package kr.spring.bookController;

import java.util.List;
import java.util.Map;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import kr.spring.bookService.BookService;
import kr.spring.bookVO.BookVO;
import kr.spring.util.PagingUtil;

@RestController
@RequestMapping("/api")
public class BookController {
	
	@Autowired
	private BookService bookService;
	
	@GetMapping("/insert/intobook")
	public void insertAPIbook() {
		bookService.getData();
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
}
