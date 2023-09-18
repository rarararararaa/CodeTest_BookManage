import React, {useState, useEffect} from 'react';
import axios from 'axios';

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
				list.map(function(a,i){
					return(
						<tr>
							<td>{list[i].callNumber}</td>
							<td>{list[i].isbn}</td>
							<td><a href="#">{list[i].book_name}</a></td>
							<td>{list[i].authors}</td>
							<td>{list[i].publisher}</td>
							<td>
								{list[i].book_status === 0? '대출가능':'대출중'}
							</td>
						</tr>
					)
				})
			}
			</tbody>
		</tabel>
	)
}
export default BookList;