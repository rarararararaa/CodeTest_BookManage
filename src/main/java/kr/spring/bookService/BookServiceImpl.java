package kr.spring.bookService;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kr.spring.bookDAO.BookMapper;
import kr.spring.bookVO.BookVO;
import lombok.extern.slf4j.Slf4j;

@Service
@Transactional
@Slf4j
public class BookServiceImpl implements BookService {
	
	@Autowired
	private BookMapper bookMapper;
	//인증키
	final String AUTH_KEY = "1bed712dd9366b514c817d63f1af130792bf81b15715ac096d87c2d524c7ac25";
	//도서관 번호
	final String LIBCODE = "111314";
	
	//도서관 번호
	@Override
	public void getData() {
		String result = "";
		BufferedReader br = null;
		HttpURLConnection conn = null;
		try {
			URL url = new URL("http://data4library.kr/api/itemSrch?authKey="+AUTH_KEY+"&libCode="+LIBCODE+"&pageSize=300&type=ALL&format=json");
			conn = (HttpURLConnection)url.openConnection();
			conn.setRequestMethod("GET");
			conn.setRequestProperty("Content-type", "application/json");
			br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
			
			result = br.readLine();
			JSONParser jsonParser = new JSONParser();
			JSONObject jsonObject = (JSONObject)jsonParser.parse(result);
			JSONObject response = (JSONObject)jsonObject.get("response");
			
			JSONArray docs = (JSONArray)response.get("docs");
			for(int i=0;i<docs.size();i++) {
				JSONObject getDoc = (JSONObject)docs.get(i);
				JSONObject doc = (JSONObject)getDoc.get("doc");
				
				String getCN = (String)doc.get("class_no");
				int classno = 0;
				//book_code가 없을시 고유 넘버 만들기
				int random = (int)(Math.random()*800);
				String bookCode = String.valueOf(random)+String.valueOf(i);
				//log.debug("<<번호>> : "+getCN);
				//작가가 null일 경우
				String author = (String)doc.get("authors");
				if(author.equals("")) {
					author = "작가미상";
				}
				//출판사가 null일 경우
				String publisher = (String)doc.get("publisher");
				if(publisher.equals("")) {
					 publisher = "출판정보없음";
				}
				//사진이 없는 경우
				String photo = (String)doc.get("bookImageURL");
				if(photo.equals("")) {
					photo = "/images/noImage.png";
				}
				//출판년도가 없는 경우
				String year = (String)doc.get("publication_year");
				if(year.equals("")) {
					year = "0000";
				}
				if(!getCN.equals("")) {
					//주제 분류
					classno = Integer.parseInt(getCN.substring(0, 1));
				}
				BookVO book = new BookVO((String)doc.get("isbn13"), bookCode, classno, (String)doc.get("bookname"), author, publisher, photo, 0, 0, year, "상세 정보");
				log.debug("<<API 등록 확인>> : "+book);
				bookMapper.insertBook(book);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			if(br != null)try {br.close();}catch(IOException e) {}
		}
	}

	@Override
	public List<BookVO> selectAll() {
		return bookMapper.selectAll();
	}

	@Override
	public int allCount() {
		return bookMapper.allCount();
	}

	
	
}
