import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useLocation, Link} from "react-router-dom"
import moment from 'moment';
import "moment/locale/ko";

const BookDetail =()=>{
	moment.locale();
	const location = useLocation();
	const data = location.state.callNumber;
		
	const [list, setList] = useState([]);
	const [bookInfo, setBookInfo] = useState();
	useEffect(()=>{
		axios({
			url:'/api/bookDetail',
			method:'post',
			data:{callNumber:data},
			baseURL:'http://localhost:8800'
		}).then((res)=>{
			setList(res.data.rentList);
			setBookInfo(res.data.bookInfo);
		})
	},[]);
	
	const onClick =(rent_num)=>{
		//console.log(rent_num);
		axios({
			url:'/api/returnBook',
			method:'post',
			data:{
				callNumber:data,
				rent_num:rent_num
				},
			baseURL:'http://localhost:8800'
		}).then((res)=>{
			alert(res.data);
			window.location.reload();
		})
	}
	
	return (
		<tabel>
			<thead>
				<tr>
					<Link to='/bookUpdate' state={{book_info:bookInfo}}>
					<button>도서 수정</button>
					</Link>
					<p>도서 대출 내역</p>
				</tr>
				<tr>
					<th>회원아이디</th>
					<th>대출 상태</th>
					<th>대출일</th>
					<th>반납일</th>
					<th>반납처리</th>
				</tr>
			</thead>
			<tbody>
				{list.map((rent)=>{
					return(
						<tr>
							<td>{rent.mem_id}</td>
							<td>
							{
								rent.book_status===1?'대출중':'반납'	
							}
							</td>
							<td>{moment(rent.rent_reg_date).format('LL')}</td>
							<td>{rent.return_reg_date === null?'-':moment(rent.return_reg_date).format('LL')}</td>
							<td>
								{rent.book_status===1?
								<button onClick={()=>onClick(rent.rent_num)}>반납처리</button>
								:'O'}
							</td>
						</tr>
					)
				})}
			</tbody>
		</tabel>
	)
}
export default BookDetail;