import React from 'react';
import {useForm} from 'react-hook-form';
import {useParams, useLocation, Routes, Route, Link} from "react-router-dom"
import axios from 'axios';

const BookUpdate=()=>{
	
	const {register, handleSubmit, formState: { errors }} = useForm({mode:"onChange"});
	const location = useLocation();
	const bookInfo = location.state.book_info;
	
	const onSubmit =(data)=>{
		let {book_name, callNumber, isbn, authors, class_no,publisher, publication_year, bookImageUrl, book_detail} = data;
		axios({
			url:'/api/updateBook',
			method:'post',
			data:{
				book_name:book_name, 
				callNumber:callNumber, 
				isbn:isbn, 
				authors:authors, 
				class_no:class_no,
				publisher:publisher, 
				bookImageUrl:bookImageUrl, 
				publication_year:publication_year, 
				book_detail:book_detail
			},
			baseURL:'http://localhost:8800'
		}).then((res)=>{
			alert(res.data);
			document.location.href='/';
		})
	}
	
	return(
		<form onSubmit={handleSubmit(onSubmit)}>
			<ul>
				<li>
				<label>도서이름</label>
				<input type="text" placeholder="도서이름" defaultValue={bookInfo.book_name} {...register("book_name",{
					required:"필수 입력항목입니다."
				})}/>
				<p>{errors.book_name && errors.book_name.message}</p>
				</li>
				<li>
				<input type="hidden" placeholder="도서청구번호" maxLength="10" defaultValue={bookInfo.callNumber} {...register("callNumber",{
					required:"필수 입력항목입니다."
				})}/>
				<p>{errors.callNumber && errors.callNumber.message}</p>
				</li>
				<li>
				<label>ISBN</label>
				<input type="text" placeholder="isbn" maxLength="13" defaultValue={bookInfo.isbn} {...register("isbn",{
					required:"필수 입력항목입니다."
				})}/>
				<p>{errors.isbn && errors.isbn.message}</p>
				</li>
				<li>
				<label>저자명</label>
				<input type="text" placeholder="저자명" defaultValue={bookInfo.authors} {...register("authors",{
					required:"필수 입력항목입니다."
				})}/>
				<p>{errors.authors && errors.authors.message}</p>
				</li>
				<li>
				<label>분류</label>
				<input type="number" placeholder="0~9" max="9" min="0" defaultValue={bookInfo.class_no} {...register("class_no",{
					required:"필수 입력항목입니다."
				})}/>
				<p>{errors.class_no && errors.class_no.message}</p>
				</li>
				<li>
				<label>출판사</label>
				<input type="text" placeholder="출판사" defaultValue={bookInfo.publisher} {...register("publisher",{
					required:"필수 입력항목입니다."
				})}/>
				<p>{errors.publisher && errors.publisher.message}</p>
				</li>
				<li>
				<label>출판연도</label>
				<input type="text" placeholder="출판연도" defaultValue={bookInfo.publication_year} {...register("publication_year",{
					required:"필수 입력항목입니다."
				})}/>
				<p>{errors.publication_year && errors.publication_year.message}</p>
				</li>
				<li>
				<label>책 이미지</label>
				<input type="text" placeholder="책 이미지" defaultValue={bookInfo.bookImageUrl} {...register("bookImageUrl",{
					required:"필수 입력항목입니다."
				})}/>
				<p>{errors.bookImageUrl && errors.bookImageUrl.message}</p>
				</li>
				<li>
				<label>도서 정보</label>
				<input type="text" placeholder="도서 정보" defaultValue={bookInfo.book_detail} {...register("book_detail",{
					required:"필수 입력항목입니다."
				})}/>
				<p>{errors.book_detail && errors.book_detail.message}</p>
				</li>
			</ul>
			<input type="submit" value="도서등록"/>
		</form>
	)
}
export default BookUpdate;