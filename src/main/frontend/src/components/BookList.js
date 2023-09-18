import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Routes, Route, Link} from "react-router-dom"

import BookDetail from "./BookDetail"
const BookList =()=>{
	
	const [list, setList] = useState([]);
	
	useEffect(()=>{
		axios.get('api/bookList').then((res)=>{
			setList(res.data.book_list);
			console.log(res.data);
		})
	},[]);
	return(
		<tabel className="bookListInfo">
			<p>책리스트</p>
			<thead>
				<tr>
					<th>도서청구번호</th>
					<th>isbn</th>
					<th>도서이름</th>
					<th>저자명</th>
					<th>출판사</th>
					<th>대출현황</th>
				</tr>
			</thead>
			<tbody>
			{
				list.map((i)=>{
					return(
						<tr>
							<td>{i.callNumber}</td>
							<td>{i.isbn}</td>
							<td>
								<Link to='/bookDetail' state={{callNumber: i.callNumber}}>{i.book_name}</Link>
							</td>
							<td>{i.authors}</td>
							<td>{i.publisher}</td>
							<td>
								{i.book_status === 0? '대출가능':'대출중'}
							</td>
							<Routes>
								<Route path="/bookDetail" element={<BookDetail />}/>
							</Routes>
						</tr>
						
					)
				})
			}
			</tbody>
		</tabel>
	)
}
export default BookList;